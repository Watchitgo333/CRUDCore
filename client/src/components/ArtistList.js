import { Typography, CardActionArea, CardAction } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import antimusic from "../image/antimusic.jpg"
import { Container } from '@mui/system';

const ArtistList = () => {

    return(
        <div className='container'>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid alignItems="center" container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {Array.from(Array(10)).map((_, index) => (
                        <Grid  xs={2} sm={4} md={4} key={index}>
                            <Card sx={{ marginBottom:"20px", maxWidth:250}}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={antimusic}
                                        alt="Artist cover"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant='h5' component="div">
                                            Band Name
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Album Name
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}

export default ArtistList;