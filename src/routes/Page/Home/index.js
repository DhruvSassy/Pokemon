import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { experimentalStyled as styled, Box, Paper, Grid } from '@mui/material';

import { displayPokemon } from '../../../Redux/action';
import flower from '../../../Des1.jpg';
import Image from '../../../Components/Image';
import Label from '../../../Components/Label';
import PagiNation from '../../../Components/PagiNation';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: '4px solid pink',
  borderRadius: 10,
}));

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const berryData = useSelector((state) => state?.pokemon?.pokemonData);
  console.log('berryData:', berryData);
  const count = useSelector((state)=> state?.pokemon.count)
  console.log("count:",count)
  const prev = useSelector((state)=> state?.pokemon?.prev);
  console.log("prev:",prev);
  const next = useSelector((state)=> state?.pokemon?.next);
  console.log("next:",next);



  useEffect(() => {
    dispatch(displayPokemon());
  }, [dispatch]);

  const handleDetail = (berryName) => {
    navigate(`/berry/${berryName}`);
  };



  return (
    <>
      <Box sx={{ flexGrow: 1, margin: 5 }}>
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
          {berryData.map((berry) => (
            <Grid item xs={2} sm={4} md={4} key={berry.name}>
              <Item onClick={() => handleDetail(berry.name)}>
                <Image
                  alt={berry.name}
                  src={flower}
                  style={{ width: 300, height: 300 }}
                />
                <Label
                  title={berry.name}
                  style={{ fontWeight: 'bold', color: 'black' }}
                />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      <PagiNation
      
      />
    </>
  );
};

export default Home;
