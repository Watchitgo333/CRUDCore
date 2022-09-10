import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import { Container } from '@mui/system';

const ArtistDetails = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const [artist, setArtist] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
      axios.get("http://localhost:8000/api/bands/"+id)
        .then((res)=>{
            console.log(res)
            setArtist(res.data)
            setLoaded(true)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    // console.log((artist.discography).length)
    

    return(
        <div>
            <Container className="container">
                <h2>Name: {artist.name}</h2>
                <h2>Genre: {artist.genre}</h2>
                <h2>Description: {artist.description}</h2>
                <h2>Influences: {artist.influences}</h2>
                <h2>Discography: 
                    {
                        loaded && (artist.discography).length ===0 ? 'None to display' : artist.discography
                    }
                </h2>
            </Container>
        </div>
    )
}

export default ArtistDetails;