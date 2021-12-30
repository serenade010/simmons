import React from 'react';
import './inventoryEntry.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function InventoryEntry(props) {
  return (
    <div className="inv-entry">
      <div className="inv-name"> {props.name}</div>
      <div>
        {' '}
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1.5, width: '35ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="name-basic"
            label="前置時間"
            variant="outlined"
            value={30}
          />
          <TextField
            id="sex-basic"
            label="缺貨風險"
            variant="outlined"
            value={40}
          />
        </Box>
      </div>
      <div className="rop">180</div>
    </div>
  );
}

export default InventoryEntry;
