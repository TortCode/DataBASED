import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios';

export default function Return() {

    const [userId, setUserId] = useState(0);
    const [pincode, setPincode] = useState("");
    const [libId, setLibId] = useState(0);
    const [pubId, setPubId] = useState(0);
    const [currentStatus, setCurrentStatus] = useState("No operation in progress.");
    const [currentReturnDate, setCurrentReturnDate] = useState("No operation in progress.");

    const handleUIDChange = (event) => {
        setUserId(parseInt(event.target.value));
    }

    const handlePincodeChange = (event) => {
        setPincode(event.target.value);
    }

    const handleLIDChange = (event) => {
        setLibId(parseInt(event.target.value));
    }

    const handlePIDChange = (event) => {
        setPubId(parseInt(event.target.value));
    }

    const sendReturn = (event) => {
        const sendObject = {
            "userid": userId,
            "pincode": pincode,
            "libraryid": libId,
            "publicationid": pubId 
        }
        axios.post("/api/return", sendObject).then(
            (res) => {
                console.log(res);
                setCurrentStatus("Successfully returned book!");
            }, (err) => {
                console.log(err);
                setCurrentStatus("Checkout failed with error: ");
            }
        )
    }

    return (
        <Box component="div" sx={{ m: 2 }} textAlign='center'>
            <Typography variant='h1' gutterBottom> Return </Typography>
            <Box component="form" textAlign='center' sx={{
                '& > :not(style)': { m: 2, width: '25ch' },
                }} 
                noValidate autoComplete="off">
                <TextField id="uid" label="User ID" variant="outlined" required onChange={handleUIDChange}/>
                <TextField id="pin" label="Pincode" variant="outlined" type="password" required onChange={handlePincodeChange}/>
                <TextField id="libid" label="Library ID" variant="outlined" required onChange={handleLIDChange}/>
                <TextField id="pubid" label="Publication ID" variant="outlined" required onChange={handlePIDChange}/>
                <Button variant="outlined" onClick={sendReturn}>Return</Button>
            </Box>
            
            <Typography variant='p' gutterBottom> Status: {currentStatus} <br/> </Typography>
        </Box>
    );
}