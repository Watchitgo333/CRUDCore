import { useState } from "react"
import { Grid, TextField, Typography } from '@mui/material';
import { Container, margin } from '@mui/system';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

const DiscogForm = (props) => {

    const {
        onSubmitProp,
        errors,
        setErrors,
        initialArtist,
        initialTitle,
        initialTracks,
        formHeading
    } = props

    const [artist, setArtist] = useState(initialArtist)
    const [title, setTitle] = useState(initialTitle)
    const [tracks, setTracks] = useState(initialTracks)

    console.log(artist)

    const onSubmitHandler = (e) => {
        e.preventDefault()
        onSubmitProp({
            artist,
            title,
            // tracks
        })
    }

    return(
        <div className='container'>
            <Container maxWidth="md">
                <form onSubmit={onSubmitHandler}>
                    <Grid>
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
                            <div sx={{display:'flex', width:100}}>
                                <TextField 
                                    sx={{marginTop:3}}
                                    variant='outlined'
                                    label='Tracks'
                                    value={tracks}
                                    fullWidth
                                    onChange={(e)=>{setTracks(e.target.value)}}
                                />
                                {/* <InputBase
                                    sx={{ border:1, borderRadius:1 }}
                                    placeholder="Add Track"
                                    inputProps={{ 'aria-label': 'Add Track' }}
                                    fullWidth
                                />
                                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                    <AddCircleIcon/>
                                </IconButton> */}
                            </div>
                        </Grid>
                        <Button
                            sx={{marginTop:3, bgcolor:'#000000'}} 
                            variant="contained"
                            type='submit'
                            >Submit
                        </Button>
                        </Grid>
                </form>
            </Container>
        </div>
)}

export default DiscogForm;