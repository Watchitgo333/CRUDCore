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
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const ArtistDetails = (props) => {

    const {id} = useParams()
    const navigate = useNavigate()
    const [artist, setArtist] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [discography, setDiscography] = useState([])

    const {gotoPage, setGotoPage} = props
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);


    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        
    };

    const menuButton = (e) => {
        if(e===0){
            navigate("/artist/edit/"+id)
        }
        if(e===1){
            navigate("/artist/delete/"+id)
        }

    }

    useEffect(() => {
      axios.get("http://localhost:8000/api/bands/"+id)
        .then((res)=>{
            console.log(res)
            setArtist(res.data)
            setLoaded(true)
            setDiscography(artist.discography)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

        // setDiscography(artist.discography)
        // useEffect(() => {
        //     axios.get("http://localhost:8000/api/disc")
        //       .then((res)=>{
        //           console.log(res)
        //           setArtist(res.data)
        //           setLoaded(true)
        //       })
        //       .catch((err)=>{
        //           console.log(err)
        //       })
        //   }, [])

    

    return(
        <div>
            <Container maxWidth="xl" className="container">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid alignItems="center" container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid xs={2} sm={4} md={4}>
                            <Card sx={{ marginBottom:"20px", maxWidth:450}}>
                                <Typography gutterBottom variant='h2' component="div">
                                    {artist.name}
                                    </Typography>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="240"
                                            image={antimusic}
                                            alt="Artist cover"
                                        />
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
                                            <Typography>
                                                {
                                                    loaded && (artist.discography).length ===0 ? 'None to display' : artist.discography
                                                }                               
                                            </Typography>
                                            <div>
                                                <Button
                                                    aria-controls={open ? 'basic-menu' : undefined}
                                                    aria-haspopup="true"
                                                    aria-expanded={open ? 'true' : undefined}
                                                    onClick={handleClick}
                                                >
                                                    Actions
                                                </Button>
                                            </div>
                                            <Menu
                                                id="basic-menu"
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                                }}
                                            >
                                                <MenuItem value={0} onClick={(e)=>{menuButton(e.target.value)}}>
                                                    Edit
                                                </MenuItem>
                                                <MenuItem value={1} onClick={(e)=>{menuButton(e.target.value)}}>
                                                    Delete
                                                </MenuItem>
                                            </Menu>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            {/* <Grid xs={2} sm={4} md={4}>
                                <Card sx={{ marginBottom:"20px", maxWidth:450}}>
                                    <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="340"
                                        image={antimusic}
                                        alt="Artist cover"
                                    />
                                    <CardContent>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid> */}
                </Grid>
                </Box>
            </Container>
        </div>
    )
}

export default ArtistDetails;