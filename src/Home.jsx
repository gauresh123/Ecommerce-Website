import { Button, Card, CardActions, CardContent, CardMedia, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';



function Home() {
  
  const[info,setinfo] = useState([]);
  const[data,setdata] = useState(info);
  const[input,setInput]=useState("")
  const navi = useNavigate();
  
  
  async function see (){
    const res = await axios.get(`https://fakestoreapi.com/products`)
    setinfo(res.data);
    setdata(res.data);
  }


  
  useEffect(()=>{
see();

  },[]);

  const clickm =(cat)=>{
     const uplist = info.filter((itm)=> itm.category === cat)
     setdata(uplist);
  }
  const change = (e)=>{
    setInput(e.target.value);
  }
  
  const searchValue = info.map((item)=> item.title.substring(item.title.lastIndexOf(" "),item.title.length))
 
  console.log(searchValue);
  const search =()=>{    
    
  }
  return (
    <>
        <Card sx={{ maxWidth: "500",marginTop:"50px"}}>
      <CardMedia
        component="img"
        height="300"
        image="https://rukminim1.flixcart.com/flap/844/140/image/4d915fce54067ea6.jpg"
        alt="green iguana"
      />
</Card>
<TextField onChange={change} value={input}/>
<Button onClick={search}>Search</Button>
<Box sx={{display:"flex",margin:"auto",width:"500px",marginTop:"25px"}}>
 
<Button variant="outlined" onClick={()=> setdata(info)} sx={{color:"black",border:"2px solid black"}}>All</Button>&nbsp;&nbsp;&nbsp;
    <Button variant="outlined" onClick={()=> clickm("men's clothing")} sx={{color:"black",border:"2px solid black"}}>Men</Button>&nbsp;&nbsp;&nbsp;
  <Button variant="outlined" onClick={()=> clickm("women's clothing")} sx={{color:"black",border:"2px solid black"}}>Women</Button>&nbsp;&nbsp;&nbsp;
  <Button variant="outlined" onClick={()=> clickm("jewelery")} sx={{color:"black",border:"2px solid black"}}>Jwellary</Button>&nbsp;&nbsp;&nbsp;
  <Button variant="outlined" onClick={()=> clickm("electronics")}  sx={{color:"black",border:"2px solid black"}}>Electronics</Button>&nbsp;&nbsp;&nbsp;

  </Box><br />
  <Box sx={{display:"flex",flexDirection:"row", flexWrap:"wrap", width:"900px",margin:'auto'}}>
    {
      data.map((val)=>{
        return (
          <Box sx={{margin:"10px 10px 10px 10px"}}>
                   <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            component="img"
            height="250"
            image={val.image}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {val.title.substring(0,12)}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
             Rs. {val.price}
            </Typography>
            </CardContent>
            <CardActions> 
        <Button size="small" variant='contained'component={NavLink} to ={`/detail/${val.id}`} sx={{color:"white",background:'#e91e63',margin:"auto"}}>Product Detail</Button>
        </CardActions>
            </Card><br />
          </Box> 
        )
      })
    }
  </Box><br />
   
    </>
  )
}

export default Home