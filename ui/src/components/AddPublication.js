import { useState } from 'react';
import { Box, Button, Stack, TextField, Typography, Autocomplete } from '@mui/material'
import axios from 'axios';

export default function AddPublication() {

    const [authorID, setAuthorId] = useState(0);
    const [pubID, setPubId] = useState(0);
    const [title, setTitle] = useState("");
    const [year, setYear] = useState(0);
    const [medium, setMedium] = useState("");
    const [currentStatus, setCurrentStatus] = useState("No operation in progress.");

    const mediums = ['Print', 'Ebook', 'Audio', 'Video']

    const handleAuthIDChange = (event) => {
        setAuthorId(parseInt(event.target.value));
    }
    const handlePubIDChange = (event) => {
        setPubId(parseInt(event.target.value));
    }
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleYearChange = (event) => {
        setYear(parseInt(event.target.value));
    }
    const handleMediumChange = (event) => {
        setMedium(event.target.value);
    }

    const addPub = (event) => {
        const sendObject = {
            "authorid": authorID,
            "publisherid": pubID,
            "title": title,
            "year": year,
            "medium": medium,
        }
        axios.post("/api/publication", sendObject).then(
            (res) => {
                console.log(res);
                setCurrentStatus("New publication added!");
            }, (err) => {
                console.log(err);
                setCurrentStatus("Add failed with error: ");
            }
        )
    }

    return (
        <Box component="div" sx={{ m:2, textAlign: "center"}}>
            <Typography variant='h1' gutterBottom> Add/Remove Publication </Typography>
            <Box component="form" textAlign='center' sx={{ ml: "20", width: '100%'}} 
                noValidate autoComplete="off">
                <Stack direction="column" >
                    <TextField id="authid" label="Author ID" variant="outlined" required onChange={handleAuthIDChange}/>
                    <TextField id="pubid" label="Publisher ID" variant="outlined" required onChange={handlePubIDChange}/>
                    <fieldset>
                        <legend>Publication</legend>
                        <TextField id="title" label="Title" variant="outlined" required onChange={handleTitleChange}/>
                        <TextField id="year" label="Year" variant="outlined" required onChange={handleYearChange}/>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={mediums}
                            renderInput={(params) => <TextField {...params} id="medium" label="Medium" variant="outlined" sx={{ m: 3, width: '25ch' }} required onChange={handleMediumChange}/>}
                        />
                    </fieldset>
                </Stack>
                <Button variant="outlined" onClick={addPub} sx={{ m: 3, width: '25ch' }}>Add</Button>
            </Box>
            <Typography variant='p' gutterBottom> Status: {currentStatus} <br/> </Typography>
        </Box>
    );
}