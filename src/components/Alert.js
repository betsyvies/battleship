import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const BasicAlerts = ({alert}) => {
  return (
    <Stack sx={{flexDirection: 'row', justifyContent: 'center' }}>
      <Alert variant="outlined" severity={alert.style}>
        {alert.message}
      </Alert>
    </Stack>
  );
};

export default BasicAlerts;
