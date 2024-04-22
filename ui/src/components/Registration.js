import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios';

export default function Registration() {

    const [fname, setFname] = useState("");
    const [minit, setMinit] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pincode, setPincode] = useState("");
    const [phoneNos, setPhoneNos] = useState([]);
    const [currentStatus, setCurrentStatus] = useState("No operation in progress.");

    const handleFnameChange = (event) => {
        setFname(event.target.value);
    }
    const handleMinitChange = (event) => {
        setMinit(event.target.value);
    }
    const handleLnameChange = (event) => {
        setLname(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePhoneNumberChange = (event) => {
        setPhoneNos(event.target.value);
    }

    const handlePincodeChange = (event) => {
        setPincode(event.target.value);
    }


    const addPhoneNo = (event) => {

    }

    const removePhoneNo = (event) => {

    }

    const sendRegister = (event) => {
        const sendObject = {
            "fname": fname,
            "minit": minit,
            "lname": lname,
            "email": email,
            "pincode": pincode,
            "phoneNos": phoneNos
        }
        axios.post("/api/register", sendObject).then(
            (res) => {
                console.log(res);
                setCurrentStatus("New user added!");
            }, (err) => {
                console.log(err);
                setCurrentStatus("Add failed with error: ");
            }
        )
    }

    return (
        <Box component="div" sx={{ m: 2 }} textAlign='center'>
            <Typography variant='h1' gutterBottom> Registration </Typography>
            <Box component="form" textAlign='center' sx={{
                '& > :not(style)': { m: 2 },
                }} 
                noValidate autoComplete="off">
                <TextField id="fname" label="First Name" variant="outlined" required onChange={handleFnameChange}/>
                <TextField id="minit" label="Middle Initial" variant="outlined" required onChange={handleMinitChange}/>
                <TextField id="lname" label="Last Name" variant="outlined" required onChange={handleLnameChange}/>
                <TextField id="email" label="Email" variant="outlined" required onChange={handleEmailChange}/>
                <TextField id="pin" label="Pincode" variant="outlined" type="password" required onChange={handlePincodeChange}/>
                <fieldset textAlign='center' sx={{ m: 2 }}>
                    <legend>Phone Numbers</legend>
                    <TextField id="phoneno" label="Phone number" variant="outlined" required onChange={handleEmailChange}/>
                    <Button variant="outlined" onClick={addPhoneNo} sx={{ m: 3, width: '25ch' }}>Add Phone Number</Button>
                    <Button variant="outlined" onClick={removePhoneNo}>Remove Phone Number</Button>
                </fieldset>
                <Button variant="outlined" onClick={sendRegister}>Register</Button>
            </Box>
            <Typography variant='p' gutterBottom> Status: {currentStatus} <br/> </Typography>
        </Box>
    );
}