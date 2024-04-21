import { useState } from 'react';
import { Box, Button, Stack, TextField, Typography, Autocomplete } from '@mui/material'

export default function AddRemovePublication() {

    const [userId, setUserId] = useState("");
    const [pincode, setPincode] = useState(0);
    const [libId, setLibId] = useState("");
    const [pubId, setPubId] = useState("");
    const [currentStatus, setCurrentStatus] = useState("No operation in progress.");
    const [currentReturnDate, setCurrentReturnDate] = useState("No operation in progress.");

    const mediums = ['Print', 'Ebook', 'Audio', 'Video']

    const handleFnameChange = (event) => {
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
        console.log(event);
    }

    return (
        <Box component="div" sx={{ m: "auto", textAlign: "center"}}>
            <Typography variant='h1' gutterBottom> Add/Remove Publication </Typography>
            <Box component="form" textAlign='center' sx={{ ml: "20", width: '100%'}} 
                noValidate autoComplete="off">
                <Stack direction="column" >
                    <fieldset textAlign='center' sx={{ m: 2 }}>
                        <legend>Author</legend>
                            <TextField id="fname" label="First Name" variant="outlined" required onChange={handleFnameChange}/>
                            <TextField id="minit" label="Middle Initial" variant="outlined" required onChange={handleFnameChange}/>
                            <TextField id="lname" label="Last Name" variant="outlined" required onChange={handleFnameChange}/>
                    </fieldset>
                    <fieldset>
                        <legend>Publication</legend>
                        <TextField id="ibsn" label="IBSN" variant="outlined" required onChange={handleFnameChange}/>
                        <TextField id="title" label="Title" variant="outlined" required onChange={handleFnameChange}/>
                        <TextField id="year" label="Year" variant="outlined" required onChange={handleFnameChange}/>
                        <TextField id="publisher" label="Publisher" variant="outlined" required onChange={handleFnameChange}/>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={mediums}
                            renderInput={(params) => <TextField {...params} id="medium" label="Medium" variant="outlined" sx={{ m: 3, width: '25ch' }} required onChange={handleFnameChange}/>}
                        />
                    </fieldset>
                </Stack>
                <Button variant="outlined" onClick={sendCheckout} sx={{ m: 3, width: '25ch' }}>Add</Button>
                <Button variant="outlined" onClick={sendCheckout} sx={{ m: 3, width: '25ch' }}>Remove</Button>
            </Box>
            <Typography variant='p' gutterBottom> Status: {currentStatus} <br/> </Typography>
            <Typography variant='p' gutterBottom> Return Date: {currentReturnDate} </Typography>
        </Box>
    );
}