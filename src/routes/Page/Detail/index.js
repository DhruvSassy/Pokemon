import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayDetailsPokemon } from '../../../Redux/action';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import Carousel from 'react-material-ui-carousel';

const Horizontal = styled.hr`
  width: 95%;
  margin-left: 0;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-left: 85%;
  margin-top: -2%;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
`;

const Heading = styled.strong`
  margin-right: 75%;
`;

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const pokemonDetailsData = useSelector(
    (state) => state?.pokemon.pokemonDetailsData
  );

  useEffect(() => {
    dispatch(displayDetailsPokemon(id));
  }, [dispatch, id]);

  const spriteNames = [
    'front_default',
    'back_default',
    'back_shiny',
    'front_shiny',
  ];



  const {
    name,
    height,
    weight,
    abilities,
    base_experience,
    types,
    sprites,
    moves,
  } = pokemonDetailsData;

  return (
    <div style={{ backgroundColor: 'whitesmoke', padding: '20px' }}>
      <h1
        style={{
          textAlign: 'center',
          textDecoration: 'underline',
          textTransform: 'capitalize',
          marginBottom: 10,
        }}
      >
        Details for {name} Pokemon
      </h1>
      <div>
        <div
          style={{
            flex: 1,
            marginLeft: 30,
            padding: 10,
            backgroundColor: 'gainsboro',
            borderRadius: '10px',
            height: 400,
          }}
        >
          <strong>Sprites:</strong>
          <Carousel
            height={300}
            fullHeightHover={true}
            strictIndexing={false}
            navButtonsAlwaysVisible={true}
            autoPlay={false}
          >
            {spriteNames.map((spriteName, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <img
                  src={sprites?.[spriteName]}
                  style={{ height: 290 }}
                  alt={spriteName}
                />
                {spriteName.replace('_', ' ')}
              </div>
            ))}
          </Carousel>
        </div>
        <div style={{ display: 'flex' }}>
          {/* Left side */}
          <div style={{ flex: 1.5 }}>
            <p>
              <Heading>Name:</Heading>
          {name}</p>
            <Horizontal />
            <p>
              <Heading>Height:</Heading>
           {height} decimetres</p>
            <Horizontal />
            <p>
              <Heading>Weight:</Heading>
            {weight} hectograms</p>
            <Horizontal />
            <p>
              <Heading>Abilities:</Heading>
            {abilities && abilities.length > 0 ? (
              <List>
                {abilities.map((ability, index) => (
                  <ListItem key={index}>{ability.ability.name}</ListItem>
                ))}
              </List>
            ) : (
              <p>No abilities found.</p>
            )}
            </p>
          </div>

          {/* Right side */}
          <div style={{ flex: 1.5 }}>
            <p>
              <Heading>Base Experience:</Heading>
           {base_experience}</p>
            <Horizontal />
            <p>
              <Heading>Types:</Heading>
           
            {types && types.length > 0 ? (
              <List>
                {types.map((type, index) => (
                  <ListItem key={index}>{type.type.name}</ListItem>
                ))}
              </List>
            ) : (
              <p>No types found.</p>
            )}
             </p>
            <Horizontal />
            <p>
              <Heading>Moves:</Heading>
            
            {moves && moves.length > 0 ? (
              <List>
                {moves.map((move, index) => (
                  <ListItem key={index}>{move.move.name}</ListItem>
                ))}
              </List>
            ) : (
              <p>No moves found.</p>
            )}
            </p>
            <Horizontal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
