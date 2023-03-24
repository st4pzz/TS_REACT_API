import {useQuery} from 'react-query';
import axios from "axios";
import TextField from '@mui/material/TextField';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material';

import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';


export default function Usuarios () {
  const {data,isLoading,error} = useQuery("usuarios", () => axios.get("http://localhost:8080/usuarios").then((res) => res.data));

  if (isLoading) {
    return <CircularProgress/>
  }
  if (error) {
    return <Alert severity="error">This is an error alert — check it out!</Alert>;
  }

  console.log(data)
  return (  
    <div className="App">
      <Paper sx={{maxWidth:750, marginLeft:35, marginTop:10, padding:5}} elevation={10} >
        <Typography variant='h4' >
          Usuarios no banco de dados
        </Typography>
      {data &&
          data.map((usuario) => (
            <div key={usuario.id}>
              <List>
              <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <PersonIcon/>
        </ListItemAvatar>
        <ListItemText
          primary= {usuario.nome}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {usuario.email}
              </Typography>
              
            </React.Fragment>
          }
          
        />
      </ListItem>
      </List>
            </div>
          ))}
      </Paper>
      
    </div>
  )
}