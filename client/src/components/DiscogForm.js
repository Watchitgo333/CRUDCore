import { useState } from "react"
import { Grid, TextField, Typography, Box } from '@mui/material';
import { Container, margin } from '@mui/system';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';




const DiscogForm = (props) => {

    const {
        onSubmitProp,
        errors,
        setErrors,
        initialArtist,
        initialTitle,
        initialImage,
        initialTrack,
        formHeading
    } = props

    const [artist, setArtist] = useState(initialArtist)
    const [title, setTitle] = useState(initialTitle)
    const [image, setImage] = useState(initialImage)
    const [track, setTrack] = useState(initialTrack)
    const [tracks, setTracks] = useState([])

    console.log(artist)

    const addTrackToList = (track) =>{
        setTracks([...tracks, track])
        console.log("Current Tracks: ", tracks)
        setTrack("")
    }
    
    const onSubmitHandler = (e) => {
        e.preventDefault()
        onSubmitProp({
            artist,
            title,
            image,
            tracks
        })
    }
    

    return(
        <div className='container'>
            <Container maxWidth="md">
                <form onSubmit={onSubmitHandler} >
                    <Grid sx={{marginBottom:1}}>
                        <Grid item xs={3}>
                            <Typography variant='h2'>
                                {formHeading}
                            </Typography>
                            <TextField 
                                sx={{marginTop:3}}
                                fullWidth
                                variant="outlined"
                                label="Title"
                                value={title}
                                onChange={(e)=>{setTitle(e.target.value)}}
                            />
                            {errors.title ? <span style={{color:"#FF0000"}}>{errors.title.message}</span>:null}
                            <TextField 
                                sx={{marginTop:3}}
                                fullWidth
                                variant="outlined"
                                label="Image URL"
                                value={image}
                                onChange={(e)=>{setImage(e.target.value)}}
                            />
                            <Box sx={{ display: 'flex', alignItems: 'center', marginTop:3 }}>
                                <TextField label="Add Track" value={track} onChange={(e)=>{setTrack(e.target.value)}} fullWidth variant="outlined" />
                                <Fab onClick={()=>{addTrackToList(track)}} size="small" >
                                    <AddIcon />
                                </Fab>
                            </Box>
                            <Box sx={{margin:"auto"}}>
                                <Card sx={{marginTop:3}}>
                                    <Typography variant="h4">Track List</Typography>
                                    <List>
                                    {
                                        tracks.map((track, index)=>{
                                            return(
                                            <ListItem key={index}>
                                                <ListItemText
                                                    primary={track}
                                                />
                                                <IconButton edge="end" aria-label="delete">
                                                <DeleteIcon />
                                            </IconButton>
                                            </ListItem>
                                            )
                                        })
                                    }
                                    </List>
                                </Card>
                                <Button
                                    sx={{marginTop:3, bgcolor:'#000000'}} 
                                    variant="contained"
                                    type='submit'
                                    >Submit
                                </Button>
                            </Box>
                        </Grid>
                        </Grid>
                </form>
            </Container>
        </div>
)}

export default DiscogForm;