import SearchBar from './components/SearchBar'
import { AppStyled } from './styles/App.styles'
import useGetPokemons from './hooks/useGetPokemons'
import { useEffect, useState } from 'react';
import BounceLoader from "react-spinners/BounceLoader";
import { Center } from './styles/Center.styles';
import { Divider, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addAll, selectAllMyPokemons } from './redux/MyPokemonsSlice';
import TabPanel from './components/TabPanel';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Brightness4, Brightness7 } from '@mui/icons-material';


function App() {
  const { allPokemons, status } = useGetPokemons()
  const dispatch = useDispatch()
  const myPokemons = useSelector(selectAllMyPokemons)
  const [mode, setMode] = useState<string>("light");

  useEffect(() => {
    const storedData = localStorage.getItem('pokemons');
    if (storedData !== null) {
      const parsedData = JSON.parse(storedData);
      dispatch(addAll(parsedData));
    }
  }, []);

  useEffect(() => {
    myPokemons.length > 0 && localStorage.setItem('pokemons', JSON.stringify(myPokemons));
    console.log(theme)  ;
    
  }, [myPokemons]);

  const theme = createTheme({
    palette: {
      mode: mode === 'light' ? 'light' : 'dark',
      background: {
        ...(mode === "dark" ? {
          default: '#414141',
          paper: '#232323',
        }
          : {
            default: '#fff',
            paper: '#fff',
          }),
      }
    },
  });

  const toggleColorMode = () => {
    setMode(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeProvider theme={theme}>
      <AppStyled theme={theme}>
        <h1>My Pokedox</h1>
        {status === "loading" ?
          <Center>
            <BounceLoader
              color="#5ad3ad"
              loading={true}
              size={50}
            />
          </Center>
          :
          <>
            <SearchBar pokemons={allPokemons} />
            <Divider />
            <TabPanel />
          </>
        }
        <div className="color-mode-btn">
          <IconButton sx={{ marginY: 1.5 }} onClick={toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </div>
      </AppStyled>
    </ThemeProvider>
  )
}

export default App
