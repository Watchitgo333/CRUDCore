import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ArtistForm from '../components/ArtistForm';
import axios from "axios";

const Main = () => {

    const [artists, setArtists] = useState([]);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const createArtist = (artistParam) => {
        axios.post('http://localhost:8000/api/bands', artistParam)
            .then((res)=>{
                console.log(res)
                navigate("/artists")
                setArtists([...artists, res.data])
            })
            .catch((err)=>{
                console.log(err)
                setErrors(err.response.data.error)
            })
    }

    return(
        <div>
            <ArtistForm
                onSubmitProp={createArtist}
                errors={errors}
                setErrors={setErrors}
                initialName=""
                initialGenre=""
                initialDescription=""
                initialInfluences=""
                formHeading="Create Artist"
                />
        </div>
    )
}

export default Main;