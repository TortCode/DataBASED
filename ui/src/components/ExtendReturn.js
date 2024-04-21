import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material'

export default function ExtendReturn() {

    const [userId, setUserId] = useState("");
    const [pincode, setPincode] = useState(0);
    const [libId, setLibId] = useState("");
    const [pubId, setPubId] = useState("");
    const [currentStatus, setCurrentStatus] = useState("No operation in progress.");
    const [currentReturnDate, setCurrentReturnDate] = useState("No operation in progress.");

    const handleUIDChange = (event) => {
        setUserId(event.target.value);
    }

    const handlePincodeChange = (event) => {
        setPincode(parseInt(event.target.value));
    }

    const handleLIDChange = (event) => {
        setLibId(event.target.value);
    }

    const handlePIDChange = (event) => {
        setPubId(event.target.value);
    }

    const sendCheckout = (event) => {
        console.log([userId, pincode, libId, pubId]);
    }

    return (
        <Box component="div" sx={{ m: 2 }} textAlign='center'>
            <Typography variant='h1' gutterBottom> Extend/Return Checkouts </Typography>
            <Box component="form" textAlign='center' sx={{
                '& > :not(style)': { m: 2, width: '25ch' },
                }} 
                noValidate autoComplete="off">
                <TextField id="uid" label="User ID" variant="outlined" required onChange={handleUIDChange}/>
                <TextField id="pin" label="Pincode" variant="outlined" type="password" required onChange={handlePincodeChange}/>
                
            </Box>
            <Button variant="outlined" onClick={sendCheckout} sx={{ m: 3, width: '25ch' }}>Retrieve Data</Button>
        </Box>
    );
}