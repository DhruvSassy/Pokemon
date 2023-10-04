import React from 'react';

import { Pagination, Stack } from '@mui/material';

const PagiNation = (props) => {
  const { style, count, page, currentPage, onChange } = props;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      }}
    >
      <Stack spacing={2}>
        <Pagination
          style={style}
          count={count}
          color="secondary"
          currentPage={currentPage}
          page={page}
          onChange={onChange}
        />
      </Stack>
    </div>
  );
};

export default PagiNation;
