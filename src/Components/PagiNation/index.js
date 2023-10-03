import React from 'react';

import { Pagination, Stack } from '@mui/material';

const PagiNation = (props) => {
  const { count, currentPage, onChange } = props;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack spacing={2}>
        <Pagination
          count={count}
          color="secondary"
          page={currentPage}
          onChange={onChange}
        />
      </Stack>
    </div>
  );
};

export default PagiNation;
