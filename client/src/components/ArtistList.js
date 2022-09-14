import { Typography, CardActionArea, CardAction } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import antimusic from "../image/antimusic.jpg"
import { Container } from '@mui/system';
import {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const ArtistList = () => {

    const [artists, setArtists] = useState([])
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
      axios.get("http://localhost:8000/api/bands")
        .then((res)=>{
            console.log(res)
            setArtists(res.data)
            setLoaded(true)
        })
        .catch((err)=>{console.log(err)})
    }, [])
    
    const nav = (id) => {
        navigate("/artist/"+id)
    }

    return(
        <div className='container'>
            <Container>
                    {
                        loaded && (artists)>=0 ? 
                            <Typography variant='h4'>No artists to display, <span>
                                <NavLink className="nav-link active" aria-current="page" to="/artists/create">
                                    create one?
                                </NavLink>
                                </span> 
                            </Typography>
                            :
                            <Typography variant='h3'>Check these new artists!</Typography>
                    }
                <Box sx={{ flexGrow: 1 }}>
                    <Grid alignItems="center" container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        { 
                            artists.map((artist,index)=>{
                                return(
                                    <Grid key={index}>
                                        <Card sx={{ margin:"30px", maxWidth:350}} 
                                                onClick={(e)=>{nav(artist._id)}} >
                                            <CardActionArea>
                                                {artist.image ? 
                                                <CardMedia
                                                    component="img"
                                                    height="150"
                                                    image={artist.image}
                                                    alt="Artist cover"
                                                />
                                            :
                                                <CardMedia
                                                component="img"
                                                height="150"
                                                image={antimusic}
                                                alt="Artist cover"
                                                />
                                            }
                                                <CardContent>
                                                    <Typography gutterBottom variant='h5' component="div">
                                                        {artist.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {artist.genre}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}

export default ArtistList;