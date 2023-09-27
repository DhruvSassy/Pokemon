import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { displayPokemon } from '../../../Redux/action';

export default function Home() {
  const dispatch = useDispatch();
  const berryData = useSelector((state) => state.pokemon.pokemonData);
  console.log("berryData:",berryData)

  useEffect(() => {
    dispatch(displayPokemon('1')); 
  }, [dispatch]);

  return (
    <ImageList sx={{ width: 1000, height: 1300 }}>
      {berryData && (
        <ImageListItem key={berryData.id}>
          <img
            srcSet={`${berryData.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${berryData.image}?w=248&fit=crop&auto=format`}
            alt={berryData.name}
          />
          <ImageListItemBar
            title={berryData.name}
            subtitle={<span>Growth Time: {berryData.growth_time}</span>}
            position="below"
          />
        </ImageListItem>
      )}
    </ImageList>
  );
}
