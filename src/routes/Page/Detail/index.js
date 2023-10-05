import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayDetailsPokemon } from '../../../Redux/action';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';

const Horizontal = styled.hr`
  width: 50%;
  margin-left: 0
`;

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const pokemonDetailsData = useSelector((state) => state?.pokemon.pokemonDetailsData);

  const { name, height, weight, abilities, base_experience, types, sprites, moves } = pokemonDetailsData;

  useEffect(() => {
    dispatch(displayDetailsPokemon(id));
  }, [dispatch, id]);

  return (
    <div style={{ backgroundColor: "lightblue", padding: "20px" }}>
      <h1 style={{textAlign: "center", textDecoration: 'underline', textTransform: "capitalize" ,marginBottom:10}}>Details for {name} Pokemon</h1>
      <p><strong>Name: </strong>{name}</p>
      <Horizontal />
      <p><strong>Height: </strong>{height} decimetres</p>
      <Horizontal />
      <p><strong>Weight: </strong>{weight} hectograms</p>
      <Horizontal />
      <h3>Abilities:</h3>
      <ul>
        {abilities?.map((ability, index) => (
          <p key={index}>{ability.ability.name}</p>
        ))}
      </ul>
      <Horizontal />
      <p>Base Experience: {base_experience}</p>
      <Horizontal />
      <h3>Types:</h3>
      <ul>
        {types?.map((type, index) => (
          <p key={index}>{type.type.name}</p>
        ))}
      </ul>
      <Horizontal />
      <h3>Sprites:</h3>
      <ul>
        <li>Front Default: <img src={sprites?.front_default} style={{ height: 300, width: 300 }} alt="Front Default" /></li>
        <li>Back Default: <img src={sprites?.back_default} alt="Back Default" /></li>
        <li>Back Shiny: <img src={sprites?.back_shiny} alt="Back Shiny" /></li>
        <li>Front Shiny: <img src={sprites?.front_shiny} alt="Front Shiny" /></li>
      </ul>
      <Horizontal />
      <h3>Moves:</h3>
    </div>
  );
};

export default Details;
