import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

const BasicAlerts = ({ alert }) => (
  <Stack sx={{ flexDirection: 'row', justifyContent: 'center' }}>
    <Alert variant="outlined" severity={alert.style}>
      {alert.message}
    </Alert>
  </Stack>
);

BasicAlerts.propTypes = {
  alert: PropTypes.shape({
    style: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
};

export default BasicAlerts;
