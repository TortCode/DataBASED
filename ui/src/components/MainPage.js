import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material'

export default function MainPage() {

    return (
        <Box component="div" sx={{ m: 2 }} textAlign='center'>
            <Typography variant='h1' gutterBottom> Main Page </Typography>
            <Typography variant='p' gutterBottom> Please select a page to see the possible operations. <br/> </Typography>
        </Box>
    );
}