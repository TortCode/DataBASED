import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios';

export default function CheckoutPage() {

    const [userId, setUserId] = useState(0);
    const [pincode, setPincode] = useState("");
    const [libId, setLibId] = useState(0);
    const [pubId, setPubId] = useState(0);
    const [currentStatus, setCurrentStatus] = useState("No operation in progress.");

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

    const sendCheckout = (event) => {
        const sendObject = {
            "userid": userId,
            "pincode": pincode,
            "libraryid": libId,
            "publicationid": pubId 
        }
        axios.post("/api/checkout", sendObject).then(
            (res) => {
                console.log(res);
                setCurrentStatus("Successfully checked out book!");
            }, (err) => {
                console.log(err);
                setCurrentStatus("Checkout failed, book is already checked out.");
            }
        )
    }

    return (
        <Box component="div" sx={{ m: 2 }} textAlign='center'>
            <Typography variant='h1' gutterBottom> Checkout </Typography>
            <Box component="form" textAlign='center' sx={{
                '& > :not(style)': { m: 2, width: '25ch' },
                }} 
                noValidate autoComplete="off">
                <TextField id="uid" label="User ID" variant="outlined" required onChange={handleUIDChange}/>
                <TextField id="pin" label="Pincode" variant="outlined" type="password" required onChange={handlePincodeChange}/>
                <TextField id="libid" label="Library ID" variant="outlined" required onChange={handleLIDChange}/>
                <TextField id="pubid" label="Publication ID" variant="outlined" required onChange={handlePIDChange}/>
                <Button variant="outlined" onClick={sendCheckout}>Checkout</Button>
            </Box>
            <Typography variant='p' gutterBottom> Status: {currentStatus} <br/> </Typography>
        </Box>
    );
}