import React from 'react';

const Image = (props) => {
  const { alt, src, onClick, style } = props;
  return <img alt={alt} src={src} onClick={onClick} style={style}/>;
};

export default Image;
