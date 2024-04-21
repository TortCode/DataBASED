import { useState } from 'react';
import { Box, Button, Stack, TextField, Typography, Autocomplete } from '@mui/material'


export default function FindPublication() {

    const [userId, setUserId] = useState("");
    const [pincode, setPincode] = useState(0);
    const [libId, setLibId] = useState("");
    const [pubId, setPubId] = useState("");
    const [currentStatus, setCurrentStatus] = useState("No operation in progress.");
    const [currentReturnDate, setCurrentReturnDate] = useState("No operation in progress.");
    const columns = [
        { field: 'isbn', headerName: 'ISBN', width: 130 },
        { field: 'title', headerName: 'Title', width: 130 },
        { field: 'year', headerName: 'Year', type: 'number', width: 80 },
        { field: 'pubname', headerName: 'Publisher', width: 130 },
        { field: 'author', headerName: 'Author', width: 130 },
        { field: 'medium', headerName: 'Medium', width: 90}
    ];
    const rows = [
        {isbn: '978-0-306-40615-7', title: 'Introduction to Algorithms', year: 2009, pubname: ''}
    ];

    const mediums = ['Print', 'Ebook', 'Audio', 'Video']

    const handleFnameChange = (event) => {
        setUserId(event.target.value);
    }
    
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
        console.log(event);
    }

    return (
        <Box component="div" sx={{ m: 2 }} textAlign='center'>
            <Typography variant='h1' gutterBottom> Find Publication </Typography>
            <Box component="form" textAlign='center' sx={{ ml: "20", width: '100%'}} 
                noValidate autoComplete="off">
                <Stack direction="column">
                    <fieldset textAlign='center' sx={{m : 2}}>
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
                <Button variant="outlined" onClick={sendCheckout}>Search</Button>
            </Box>
            <Typography variant='p' gutterBottom> Status: {currentStatus} <br/> </Typography>
            <Typography variant='p' gutterBottom> Return Date: {currentReturnDate} </Typography>
        </Box>
    );
}