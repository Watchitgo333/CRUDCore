import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import ArtistForm from './ArtistForm';

const ArtistUpdateForm = (props) => {

    const {id} = useParams()
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [artist, setArtist] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/bands/"+id)
            .then((res)=>{
                setArtist(res.data)
                // console.log(artist)
                setLoaded(true)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])

    console.log(artist.name)

    const onSubmitHandler = (artistParam) => {
        axios.put("http://localhost:8000/api/bands/"+id, artistParam)
            .then((res)=>{
                console.log(res)
                navigate("/artist/"+id)
            })
            .catch((err)=>{
                console.log(err)
                setErrors(err.response.data.error)
            })
    }

    return(
        <div>
            {
                loaded && <ArtistForm
                            onSubmitProp={onSubmitHandler}
                            errors={errors}
                            setErrors={setErrors}
                            initialName={artist.name}
                            initialGenre={artist.genre}
                            initialDescription={artist.description}
                            initialInfluences={artist.influences}
                            formHeading={"Edit "+artist.name}
                        />
            }
        </div>
    )
}

export default ArtistUpdateForm;