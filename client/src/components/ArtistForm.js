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
        formHeading
    } = props

    const [name, setName] = useState(initialName)
    const [genre, setGenre] = useState(initialGenre)
    const [description, setDescription] = useState(initialDescription)
    const [influences, setInfluences] = useState(initialInfluences)

    const onSubmitHandler = (e) => {
        e.preventDefault()
        onSubmitProp({
            name,
            genre,
            description,
            influences,
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
                            <TextField 
                                sx={{marginTop:3}}
                                fullWidth
                                variant='outlined'
                                label='Genre'
                                value={genre}
                                onChange={(e)=>{setGenre(e.target.value)}}
                            />
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
                            <TextField
                                sx={{marginTop:3}}
                                fullWidth
                                multiline
                                label='Influences'
                                rows={4}
                                value={influences}
                                onChange={(e)=>{setInfluences(e.target.value)}}
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