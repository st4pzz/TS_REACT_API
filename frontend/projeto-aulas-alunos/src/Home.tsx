import Usuarios from './Usuarios';
import Box from '@mui/material/Box';
import Paper, { Alert } from '@mui/material';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';




export default function Home () {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [curso, setCurso] = useState('');

    
return (
    <div>
    
    <Box
      component="form"
      sx={{ display:'flex', justifyContent:'center', marginTop:30,
    
            '& .MuiTextField-root': { m: 1, width: '25ch' ,display:'flex',flexDirection:'column'},
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined"
          label="Nome"
          value={nome}
          onChange={(e)=> setNome(e.target.value)}
        />
       <TextField
          id="outlined"
          label="Email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />
        <TextField
          id="outlined"
          label="Curso"
          value={curso}
          onChange={(e)=> setCurso(e.target.value)}
        />
        <Button variant="contained" endIcon={<SendIcon />} onClick={() => {
            
            axios.post('http://localhost:8080/usuarios', {
                data: {
                nome,
                email,
                curso
                }
            })
            .then(function (response) {
                
            })
            .catch(function (error) {
                <Alert severity="error">This is an error alert — check it out!</Alert>
            });
            <Link to="/usuarios"></Link>
        }}>
        Submit
        </Button>
      </div>
      
        </Box>
      </div>
    
    
)

};