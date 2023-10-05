import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { experimentalStyled as styled, Box, Paper, Grid } from '@mui/material';

import { displayPokemon } from '../../../Redux/action';
import Image from '../../../Components/Image';
import Label from '../../../Components/Label';
import PagiNation from '../../../Components/PagiNation';
import logo from '../../../pokemon.png';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: '6px solid pink',
  borderRadius: 10,
}));

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state?.pokemon?.pokemonData);
  const previous = useSelector((state) => state.pokemon.prev);
  const next = useSelector((state) => state?.pokemon?.next);
  const count = useSelector((state) => state?.pokemon?.count);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, newPage) => {
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
      console.log('newPage:', newPage);

      const newOffset = (newPage - 1) * 1 + 1;
      console.log('newOffset:', newOffset);

      if (newPage > currentPage && next) {
        dispatch(displayPokemon(10, newOffset));
      } else if (newPage < currentPage) {
        if (previous) {
          const prevOffset = Math.max((newPage - 1) * 1 + 1, 1);
          console.log('prevOffset:', prevOffset);
          dispatch(displayPokemon(10, prevOffset));
        } else {
          console.log('No previous page available.');
        }
      }
    }
  };

  useEffect(() => {
    dispatch(displayPokemon(10));
  }, [dispatch]);

  const handleDetail = (pokemonUrl) => {
    navigate(`/pokemon/${pokemonUrl.split('/').slice(-2)[0]}`);
  };
  

  return (
    <div
      style={{
        backgroundColor: 'lightgray',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <img src={logo} alt="Logo" style={{ height: '150px', width: '700px',marginTop:10 }} />
      <Box sx={{ flexGrow: 1, margin: 5 }}>
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
          {pokemonData.map((pokemon) => (
            <Grid item xs={2} sm={4} md={4} key={pokemon.name}>
              <Item
                onClick={() => handleDetail(pokemon.url)}
                sx={{
                  backgroundColor: 'lightgreen',
                }}
              >
                <Image
                  alt={pokemon.name}
                  src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
                  style={{
                    width: 300,
                    height: 300,
                    borderRadius: 10,
                    border: '4px solid lightpink',
                  }}
                />
                <Label
                  title={pokemon.name}
                  style={{ fontWeight: 'bold', color: 'black', marginTop: 10 }}
                />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      <PagiNation
        count={count}
        currentPage={currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
