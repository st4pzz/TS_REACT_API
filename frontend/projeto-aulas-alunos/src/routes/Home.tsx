import Usuarios from './Usuarios';
import Box from '@mui/material/Box';
import Paper, { Alert, CircularProgress } from '@mui/material';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from 'react-query';

const api = "http://localhost:8080/usuarios";

const postData = async (data) => {
  const response = await fetch(api, {
    method: "POST",
    body: JSON.stringify({
      nome: data.nome,
      email: data.email,
      curso: data.curso,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return response.json();
};
export default function Home () {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [curso, setCurso] = useState('');

    const { mutate, isLoading, isError } = useMutation(postData, {
        onSuccess: (sucessData) => {
          console.log(sucessData);
        },
      });

      if (isLoading) {
        return <CircularProgress/>
      }
      if (isError) {
        return <Alert severity="error">This is an error alert — check it out!</Alert>;
      }
    
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
        <Link to="/usuarios">
        <Button variant="contained" endIcon={<SendIcon />} onClick={() => mutate({ nome, email, curso })
        }>
        Submit
        </Button>
        </Link>
      </div>
      
        </Box>
      </div>
    )
}

