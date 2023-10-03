import React from 'react';
import { InputLabel } from '@mui/material';

const Label = (props) => {
  const { title,style } = props;
  return <InputLabel htmlFor="input-with-icon-adornment" style={style}>{title}</InputLabel>;
};

export default Label;
