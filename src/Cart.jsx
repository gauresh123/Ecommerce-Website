import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { remove } from './store/firstSlice';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

function Cart() {
  const products = useSelector((state)=> state.first.val);
  const dispatch = useDispatch();

  

  const remo = (item)=>{
    dispatch(remove(item.id));
  }

  return (
    <> 
    {products.length == 0 ? <h2>Empty</h2>:
       <div style={{marginTop:"100px"}}>
       {
         products.map((item)=>{
           return (
             <div>
                   <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={item.image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography variant="body2" color="text.secondary">
                <h2>{item.title}</h2>
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer',color:"red" }} variant="body2" onClick={()=>remo(item)}>
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              Rs.{item.price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper><br />
             </div>
           )
         })
       }
       
    </div>}
    </>

  )
}


export default Cart; 
