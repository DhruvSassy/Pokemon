import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Carousel from 'react-material-ui-carousel';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';

import { displayDetailsPokemon } from '../../../Redux/action';

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const pokemonDetailsData = useSelector(
    (state) => state?.pokemon.pokemonDetailsData
  );
  const [showAllMoves, setShowAllMoves] = useState(false);

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

  const toggleMoves = () => {
    setShowAllMoves(!showAllMoves);
  };

  const leftRows = [
    { name: <strong>Name:</strong>, value: name },
    { name: <strong>Weight:</strong>, value: `${weight} hectograms` },
    { name: <strong>Base Experience:</strong>, value: base_experience },
    {
      name: <strong>Abilities:</strong>,
      value:
        abilities && abilities.length > 0 ? (
          <div>
            {abilities.map((ability, index) => (
              <span key={index}>
                {ability.ability.name}
                {index !== abilities.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>
        ) : (
          'No abilities found.'
        ),
    },
  ];

  const rightRows = [
    { name: <strong>Height:</strong>, value: `${height} decimetres` },
    {
      name: <strong>Types:</strong>,
      value:
        types && types.length > 0 ? (
          <div>
            {types.map((type, index) => (
              <span key={index}>
                {type.type.name}
                {index !== types.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>
        ) : (
          'No types found.'
        ),
    },
    {
      name: <strong>Moves:</strong>,
      value: (
        <div>
          {showAllMoves
            ? moves.map((move, index) => (
                <span key={index}>{move.move.name}, </span>
              ))
            : moves
                ?.slice(0, 5)
                .map((move, index) => (
                  <span key={index}>{move.move.name}, </span>
                ))}
          {moves?.length > 10 && (
            <p
              onClick={toggleMoves}
              style={{ color: 'blue', cursor: 'pointer' }}
            >
              {showAllMoves
                ? '- Read Less'
                : `+ ${moves?.length - 5} Read More`}
            </p>
          )}
        </div>
      ),
    },
  ];

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
            marginLeft: 10,
            padding: 10,
            backgroundColor: 'gainsboro',
            borderRadius: '10px',
            height: 400,
            marginTop: 20,
          }}
        >
          <Carousel
            height={300}
            marginTop={55}
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
                  textTransform: 'capitalize',
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
          {/* Left side} */}
          <div style={{ flex: 1.5, marginRight: '10px', marginLeft: 10 }}>
            <TableContainer
              component={Paper}
              sx={{ marginTop: 5, backgroundColor: 'whitesmoke', border: 0 }}
            >
              <Table
                sx={{ minWidth: 500}}
                
                aria-label="custom pagination table"
              >
                <TableBody >
                  {leftRows.map((row) => (
                    <TableRow key={row.name} >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell style={{ width: 130,textTransform:'capitalize'}} align="left">
                        {row.value}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>

          {/* Right side */}
          <div style={{ flex: 1.5 }}>
            <TableContainer
              component={Paper}
              sx={{ marginTop: 5, backgroundColor: 'whitesmoke', border: 0 }}
            >
              <Table
                sx={{ minWidth: 300 }}
                aria-label="custom pagination table"
              >
                <TableBody>
                  {rightRows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell style={{ width: 130,textTransform:'capitalize' }} align="left">
                        {row.value}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
