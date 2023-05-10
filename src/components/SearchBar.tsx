import { InputAdornment, ListItemText, MenuItem, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import SavingModal from './SavingModal';
import { StyledMenuList, StyledSerach } from '../styles/SearchOptions.styles';
import { useTheme } from '@mui/material/styles'

function SearchBar({ pokemons }: { pokemons: any }) {
    const [query, setQuery] = useState<string>('')
    const [options, setOptions] = useState<any>()
    const [openModal, setOpenModal] = useState(false);
    const [pickedOptionName, setPickedOptionName] = useState<any>('')
    const theme = useTheme()

    const handleChange = (e: any) => {
        setQuery(e.target.value)
        setOptions(pokemons.filter((pokemon: any) => pokemon.name.includes(e.target.value)))
    };

    const handleClick = (e: any) => {
        setPickedOptionName(e.target.innerHTML)
        setOpenModal(true)
    }

    return (
        <>
            <StyledSerach theme={theme}>
                <div className='parent'>
                    <TextField
                        sx={{ width: '100%' }}
                        id="search-input"
                        placeholder='Search'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        value={query}
                        onChange={handleChange}
                    />
                    {options?.length > 0 && query.length >= 2 &&
                        <div className='options-list'>
                            <StyledMenuList>
                                {options?.map((option: any) => (
                                    <MenuItem key={option.name}>
                                        <ListItemText onClick={handleClick}>{option.name}</ListItemText>
                                    </MenuItem>
                                ))}
                            </StyledMenuList>
                        </div>
                    }
                    <SavingModal
                        open={openModal}
                        setOpen={setOpenModal}
                        pickedOptionName={pickedOptionName}
                        setQuery={setQuery}
                    />
                </div>
            </StyledSerach>
        </>
    )
}

export default SearchBar