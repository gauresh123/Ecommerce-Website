import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { add } from './store/firstSlice';




const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


function Detail() {
  const[product,setproduct] = useState({});
  const dispatch = useDispatch();
  const{id} = useParams();

  async function foo(){
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setproduct(res.data);
    console.log(res.data);
  }

  useEffect(()=>{
    foo();
  },[]);

const addcart = (product)=>{
  dispatch(add(product));
}

 

  return (
    <div style={{marginTop:"100px"}}>   <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 800,
        maxHeight: 600,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 400, height: 400 }}>
            <Img alt="complex" src={product.image}/>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                <h2>{product.title}</h2>
              </Typography>
              <Typography variant="body2" color="text.secondary">
               <h5>  {product.description} </h5>
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                <Button variant='contained' sx={{background:"green"}} onClick={()=> addcart(product)}>Add To Cart</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' sx={{background:"green"}}>Pay Now</Button>
              </Typography>
              
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">
             <h2>Rs. {product.price}</h2>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
          </div>
  )
}

export default Detail;