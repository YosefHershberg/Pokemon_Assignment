import { useEffect, useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import PokemonList from './PokemonList';
import { useSelector } from 'react-redux';
import { selectAllMyPokemons } from '../redux/MyPokemonsSlice';
import { nanoid } from '@reduxjs/toolkit';
import FilteredPokemonList from './FilteredPokemonList';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>{children}</Box>
            )}
        </div>
    );
}

export default function BasicTabs() {
    const [value, setValue] = useState(0);
    const [typesArr, setTypesArr] = useState<any>()
    const myPokemons = useSelector(selectAllMyPokemons)

    useEffect(() => {
        const tempTypesArr: any = []
        myPokemons.forEach((pokemon: any) => {
            pokemon.types.forEach((type: any) => {
                if (!tempTypesArr.includes(type.type.name)) {
                    tempTypesArr.push(type.type.name)
                }
            })
        });
        if (tempTypesArr.length > 5) {
            tempTypesArr.splice(5, tempTypesArr.length - 5);
        }
        setTypesArr(tempTypesArr)
    }, [myPokemons]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="All" />
                    {typesArr?.map((type: string) => (
                        <Tab label={type} key={nanoid()}/>
                    ))}
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <PokemonList />
            </TabPanel>
            {typesArr?.map((type: string, index: string) => (
                <TabPanel value={value} index={parseInt(index) + 1} key={nanoid()}>
                    <FilteredPokemonList type={type} />
                </TabPanel>
            ))}
        </Box>
    );
}