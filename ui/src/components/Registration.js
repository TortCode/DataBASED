import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material'

export default function Registration() {

    const [userId, setUserId] = useState("");
    const [pincode, setPincode] = useState(0);
    const [libId, setLibId] = useState("");
    const [pubId, setPubId] = useState("");
    const [email, setEmail] = useState("");
    const [Phonum, setPhoneNumber] = useState("");
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

    const handleFnameChange = (event) => {
        setUserId(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    }

    return (
        <Box component="div" sx={{ m: 2 }} textAlign='center'>
            <Typography variant='h1' gutterBottom> Registration </Typography>
            <Box component="form" textAlign='center' sx={{
                '& > :not(style)': { m: 2 },
                }} 
                noValidate autoComplete="off">
                <TextField id="fname" label="First Name" variant="outlined" required onChange={handleFnameChange}/>
                <TextField id="minit" label="Middle Initial" variant="outlined" required onChange={handleFnameChange}/>
                <TextField id="lname" label="Last Name" variant="outlined" required onChange={handleFnameChange}/>
                <TextField id="email" label="Email" variant="outlined" required onChange={handleEmailChange}/>
                <TextField id="pin" label="Pincode" variant="outlined" type="password" required onChange={handlePincodeChange}/>
                <fieldset textAlign='center' sx={{ m: 2 }}>
                    <legend>Phone Numbers</legend>
                    <TextField id="phoneno" label="Phone number" variant="outlined" required onChange={handleEmailChange}/>
                    <Button variant="outlined" onClick={sendCheckout} sx={{ m: 3, width: '25ch' }}>Add Phone Number</Button>
                    <Button variant="outlined" onClick={sendCheckout}>Remove Phone Number</Button>
                </fieldset>
                <Button variant="outlined" onClick={sendCheckout}>Register</Button>
            </Box>
            <Typography variant='p' gutterBottom> Status: {currentStatus} <br/> </Typography>
            <Typography variant='p' gutterBottom> Return Date: {currentReturnDate} </Typography>
        </Box>
    );
}