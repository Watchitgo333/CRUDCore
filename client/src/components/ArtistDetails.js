import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography, CardActionArea, CardAction, Fab } from '@mui/material';
import antimusic from "../image/antimusic.jpg"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ActionMenu from './ActionMenu';

const ArtistDetails = (props) => {

    const {id} = useParams()
    const navigate = useNavigate()
    const [artist, setArtist] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
      axios.get("http://localhost:8000/api/bands/"+id)
        .then((res)=>{
            setArtist(res.data)
            setLoaded(true)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    if(loaded){
        console.log(artist.discography)
    }

    return(
        <div>
            <Container  maxWidth="xl" className="container">
            <Grid sx={{display:'flex'}} >
                <Box sx={{width: 500, height:600}}>
                    <Card sx={{ padding:"10px" ,margin:"20px", maxWidth:500}}>
                        <Typography gutterBottom variant='h2' component="div">
                            {artist.name}
                        </Typography>
                        {artist.image ? 
                            <CardMedia
                                component="img"
                                image={artist.image}
                                alt="Artist cover"
                            />
                        :
                            <CardMedia
                            component="img"
                            image={antimusic}
                            alt="Artist cover"
                            />
                        }
                            <CardContent>
                                <Typography gutterBottom variant='h5' component="div">
                                Genre: {artist.genre}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Description: {artist.description}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Influences: {artist.influences}
                                </Typography> 
                                {
                                    loaded && <ActionMenu loaded={loaded} artistDiscog={artist.discography}/>
                                }
                            </CardContent>
                    </Card>
                </Box>
                <Box flexGrow={1} sx={{width: 1000, height:800, padding:1, marginLeft:1, display:"flex"}}>
                    <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            loaded && artist.discography.length > 0 ? artist.discography.map((album,index)=>{
                                return(
                                <Grid>  
                                    <Card key={index} sx={{ margin:1, padding:1, width:250}}>
                                        <Typography gutterBottom variant='h5' component="div">
                                            {album.title}
                                        </Typography>
                                            <CardActionArea>
                                            {album.image ? 
                                                <CardMedia
                                                    component="img"
                                                    height="150"
                                                    image={album.image}
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
                                                {
                                                    album.tracks.length > 0 ? album.tracks.map((track, index)=>{
                                                        return(
                                                            <Typography variant='body1' key={index}>
                                                                {track}
                                                            </Typography>
                                                        )
                                                    })
                                                    :
                                                    <Typography>No Tracks to display </Typography>
                                                }
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            )
                        })
                        // else
                        : 
                        <Typography variant='h4'>
                            This artist doesn't have any discography
                        </Typography>
                    }
                    </Grid>
                </Box>
                </Grid> 
            </Container>
        </div>
    )
}

export default ArtistDetails;