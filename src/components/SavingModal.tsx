import { Box, Backdrop, Modal, Fade, Divider, Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { StyledButtons } from '../styles/SearchOptions.styles';
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPokemons } from '../redux/AllPokemonSlice';
import usehttp from '../hooks/useHttp';
import { addPokemon } from '../redux/MyPokemonsSlice';
import BounceLoader from 'react-spinners/BounceLoader';
import { Center } from '../styles/Center.styles';
import { useTheme } from '@mui/material/styles'
import ChildCloseModal from './ChildCloseModal';

function SavingModal({ open, setOpen, pickedOptionName, setQuery }: any) {
    const [value, setValue] = useState('');
    const [name, setName] = useState<string>('')
    const [nickname, setNickname] = useState<string>('')
    const [openChildCloseModal, setOpenChildCloseModal] = useState(false)
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch()
    const allPokemons: any = useSelector(selectAllPokemons)
    const endpointRef = useRef('')
    const { palette } = useTheme()

    const { data, isLoading, setTriger } = usehttp({
        endpoint: endpointRef.current,
        method: 'GET'
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    const handleCancel = () => {
        if (name !== '' || nickname !== '') {
            setOpenChildCloseModal(true)
        } else {
            closeModal()
        }
    }

    const closeModal = () => {
        setName('')
        setNickname('')
        setOpen(false)
    }

    const handleFetchAndSavePokemon = () => {
        const thePoekmon = allPokemons.filter((pokemon: any) => pokemon.name === pickedOptionName)[0]
        endpointRef.current = thePoekmon.url
        setQuery('')
        setTriger(true)
    }

    useEffect(() => {
        if (data) {
            let editedData = data
            if (name !== '') {
                editedData = { ...data, name: name }
            }
            if (nickname !== '') {
                editedData = { ...data, nickname: nickname }
            }
            dispatch(addPokemon(editedData))
            setName('')
            setNickname('')
            setOpen(false)
        }
    }, [data]);

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        {isLoading ?
                            <Center>
                                <BounceLoader
                                    color="#5ad3ad"
                                    loading={true}
                                    size={50}
                                />
                            </Center>
                            :
                            <>
                                <FormControl sx={{ marginBottom: '0.5em' }}>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        name="radio-buttons-group"
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel
                                            sx={{ color: palette.text.primary }}
                                            value="name"
                                            control={<Radio />}
                                            label="Name"
                                        />
                                        <FormControlLabel
                                            sx={{ color: palette.text.primary }}
                                            value="nickname"
                                            control={<Radio />}
                                            label="Nickname"
                                        />
                                    </RadioGroup>
                                    {value === 'name' &&
                                        <TextField
                                            id="standard-basic"
                                            label="Name"
                                            variant="standard"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />}
                                    {value === 'nickname' &&
                                        <TextField
                                            id="standard-basic"
                                            label="Nickname"
                                            variant="standard"
                                            value={nickname}
                                            onChange={(e) => setNickname(e.target.value)}
                                        />}
                                </FormControl>
                                <Divider />
                                <StyledButtons>
                                    <Button
                                        variant="contained"
                                        onClick={handleFetchAndSavePokemon}
                                    >Save</Button>
                                    <Button variant="contained" onClick={handleCancel}>Cancel</Button>
                                </StyledButtons>
                            </>
                        }
                        <ChildCloseModal
                            open={openChildCloseModal}
                            setOpen={setOpenChildCloseModal}
                            closeParent={closeModal}
                        />
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default SavingModal

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    bgcolor: 'background.paper',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
};