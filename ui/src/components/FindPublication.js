import { useState } from 'react';
import { Box, Button, Stack, TextField, Typography, Autocomplete } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios';


export default function FindPublication() {

    const [fname, setFname] = useState("");
    const [minit, setMinit] = useState("");
    const [lname, setLname] = useState("");
    const [title, setTitle] = useState("");
    const [rows, setRows] = useState("");
    const [year, setYear] = useState(0);
    const [publisher, setPublisher] = useState("");

    const [currentStatus, setCurrentStatus] = useState("No operation in progress.");
    const columns = [
        { field: 'title', headerName: 'Title', width: 250},
        { field: 'year', headerName: 'Year'},
        { field: 'pubname', headerName: 'Publisher', width: 250},
        { field: 'author', headerName: 'Author', width: 250},
        { field: 'action', headerName: 'Actions', width: 200,
            renderCell: (params) => {
                return <Button id={"id"+params.id} variant="outlined" onClick={deletePub} sx={{ m: 1, width: '10ch' }}>Delete</Button>
            }
        }
    ];

    const mediums = ['Print', 'Ebook', 'Audio', 'Video']

    const handleFnameChange = (event) => {
        setFname(event.target.value);
    }
    const handleMinitChange = (event) => {
        setMinit(event.target.value);
    }
    const handleLnameChange = (event) => {
        setLname(event.target.value);
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleYearChange = (event) => {
        setYear(parseInt(event.target.value))
    }
    const handlePublisherChange = (event) => {
        setPublisher(event.target.value)
    }

    const handleSearch = (event) => {
        let sendObject = {
            "fname": fname,
            "minit": minit,
            "lname": lname,
            "title": title,
            "publisher": publisher
        }
        if(year != 0){
            sendObject.year = year;
        }
        console.log(sendObject);
        axios.get("/api/publication", { headers: { "Content-Type": "application/json" }, params: sendObject }).then(
            (res) => {
                console.log(res);
                setCurrentStatus("Publications found!");
                setRows(res.data.map((elem) => ({ author: elem.fname + " " + elem.minit + " " + elem.lname, pubname: elem.publisher, year: elem.year, 
                action: <Button variant="outlined" onClick={deletePub} sx={{ m: 3, width: '25ch' }}>Delete</Button>, id: elem.id, title: elem.title })));
            }, (err) => {
                console.log(err);
                setCurrentStatus("No publications found.");
            }
        )
    }

    const deletePub = (event) => {
        console.log(parseInt(event.target.id.substring(2)))
        axios.delete(`/api/publication/${parseInt(event.target.id.substring(2))}`).then(
            (res) => {
                console.log(res);
                setCurrentStatus("Publication deleted!");
            }, (err) => {
                console.log(err);
                setCurrentStatus("Publication could not be deleted because it is checked out.");
            }
        )
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
                            <TextField id="minit" label="Middle Initial" variant="outlined" required onChange={handleMinitChange}/>
                            <TextField id="lname" label="Last Name" variant="outlined" required onChange={handleLnameChange}/>
                    </fieldset>
                    <fieldset>
                        <legend>Publication</legend>
                        <TextField id="title" label="Title" variant="outlined" required onChange={handleTitleChange}/>
                        <TextField id="year" label="Year" variant="outlined" required onChange={handleYearChange}/>
                        <TextField id="publisher" label="Publisher" variant="outlined" required onChange={handlePublisherChange}/>
                    </fieldset>
                </Stack>
                <Button variant="outlined" onClick={handleSearch} sx={{ m: 3, width: '25ch' }}>Search</Button>
            </Box>
            <Typography variant='p' gutterBottom> Status: {currentStatus} <br/> </Typography>
            <DataGrid rows={rows} columns={columns} pageSizeOptions={[5, 10, 25]} sx={{
                boxShadow: 2,
                border: 2,
                ml: 50,
                mr: 50,
                color: 'white',}}/>
        </Box>
    );
}