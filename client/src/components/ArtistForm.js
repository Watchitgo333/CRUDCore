import { Grid, TextField, Typography } from '@mui/material';
import { Container, margin } from '@mui/system';
import {useState} from 'react';
import Button from '@mui/material/Button';

const ArtistForm = (props) => {

    const {
        onSubmitProp,
        errors,
        setErrors,
        initialName,
        initialGenre,
        initialDescription,
        initialInfluences,
        initialImage,
        formHeading
    } = props

    const [name, setName] = useState(initialName)
    const [genre, setGenre] = useState(initialGenre)
    const [description, setDescription] = useState(initialDescription)
    const [influences, setInfluences] = useState(initialInfluences)
    const [image, setImage] = useState(initialImage)

    const onSubmitHandler = (e) => {
        e.preventDefault()
        onSubmitProp({
            name,
            genre,
            description,
            influences,
            image
        })
    }

    return(
        <div className='container'>
            <Container maxWidth="sm">
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
                                label="Name"
                                value={name}
                                onChange={(e)=>{setName(e.target.value)}}
                            />
                            {errors.name ? <span style={{color:"#FF0000"}}>{errors.name.message}</span>:null}

                            <TextField 
                                sx={{marginTop:3}}
                                fullWidth
                                variant='outlined'
                                label='Genre'
                                value={genre}
                                onChange={(e)=>{setGenre(e.target.value)}}
                            />
                            {errors.genre ? <span style={{color:"#FF0000"}}>{errors.genre.message}</span>:null}

                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                sx={{marginTop:3}}
                                fullWidth
                                multiline
                                label='Description'
                                rows={4}
                                value={description}
                                onChange={(e)=>{setDescription(e.target.value)}}
                            />
                            {errors.description ? <span style={{color:"#FF0000"}}>{errors.description.message}</span>:null}

                            <TextField
                                sx={{marginTop:3}}
                                fullWidth
                                multiline
                                label='Influences (optional)'
                                rows={4}
                                value={influences}
                                onChange={(e)=>{setInfluences(e.target.value)}}
                            />
                            <TextField 
                                sx={{marginTop:3}}
                                fullWidth
                                variant='outlined'
                                label='Image (optional)'
                                value={image}
                                onChange={(e)=>{setImage(e.target.value)}}
                            />
                            <Button
                                sx={{marginTop:3, bgcolor:'#000000'}} 
                                variant="contained"
                                type='submit'
                                >Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </div>
    )
}

export default ArtistForm;