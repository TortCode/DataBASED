import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios';

export default function Registration() {

    const [fname, setFname] = useState("");
    const [minit, setMinit] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pincode, setPincode] = useState("");
    const [phoneNo1, setPhoneNo1] = useState("");
    const [phoneNo2, setPhoneNo2] = useState("");
    const [phoneNo3, setPhoneNo3] = useState("");
    const [phoneNoCount, setPhoneCt] = useState(0);
    const [buttons, setButtons] = useState([]);
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

    const handlePhoneNo1Change = (event) => {
        setPhoneNo1(event.target.value);
    }
    const handlePhoneNo2Change = (event) => {
        setPhoneNo2(event.target.value);
    }
    const handlePhoneNo3Change = (event) => {
        setPhoneNo3(event.target.value);
    }

    const handlePincodeChange = (event) => {
        setPincode(event.target.value);
    }

    let fields = [<TextField id="phoneno1" label="Phone number 1" variant="outlined" sx={{ m: 3, width: '25ch' }} required onChange={handlePhoneNo1Change}/>,
        <TextField id="phoneno2" label="Phone number 2" variant="outlined" required sx={{ m: 3, width: '25ch' }} onChange={handlePhoneNo2Change}/>,
        <TextField id="phoneno3" label="Phone number 3" variant="outlined" required sx={{ m: 3, width: '25ch' }} onChange={handlePhoneNo3Change}/>]

    const addPhoneNo = (event) => {
        console.log(phoneNoCount);
        if (phoneNoCount < 3){
            let options = fields.slice(0, phoneNoCount + 1);
            setPhoneCt(phoneNoCount + 1);
            setButtons(options);
        }
    }

    const removePhoneNo = (event) => {
        console.log(phoneNoCount);
        if (phoneNoCount > 1){
            let options = fields.slice(0, phoneNoCount - 1);
            setPhoneCt(phoneNoCount - 1);
            setButtons(options);
        }
    }

    const sendRegister = (event) => {
        let phoneNos = [phoneNo1]
        if (phoneNoCount > 1)
            phoneNos.push(phoneNo2)
        if (phoneNoCount > 2)
            phoneNos.push(phoneNo3)

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
                setCurrentStatus("User could not be added.");
            }
        )
    }

    return (
        <Box component="div" sx={{ m: 2 }} textAlign='center'>
            <Typography variant='h1' gutterBottom> Registration </Typography>
            <Box component="form" textAlign='center' sx={{
                '& > :not(style)': { m: 1, mt: 2, mb: 2 },
                }} 
                noValidate autoComplete="off">
                <TextField id="fname" label="First Name" variant="outlined" required onChange={handleFnameChange}/>
                <TextField id="minit" label="Middle Initial" variant="outlined" required onChange={handleMinitChange}/>
                <TextField id="lname" label="Last Name" variant="outlined" required onChange={handleLnameChange}/>
                <TextField id="email" label="Email" variant="outlined" required onChange={handleEmailChange}/>
                <TextField id="pin" label="Pincode" variant="outlined" type="password" required onChange={handlePincodeChange}/>
                <fieldset sx={{ m: 2 }}>
                    <legend>Phone Numbers</legend>
                    <div>
                        {buttons}
                        <Button variant="outlined" onClick={addPhoneNo} sx={{ m: 3, width: '30ch' }}>Add Phone Number</Button>
                        <Button variant="outlined" onClick={removePhoneNo} sx={{ m: 3, width: '30ch' }}>Remove Phone Number</Button>
                    </div>
                </fieldset>
                <Button variant="outlined" onClick={sendRegister}>Register</Button>
            </Box>
            <Typography variant='p' gutterBottom> Status: {currentStatus} <br/> </Typography>
        </Box>
    );
}