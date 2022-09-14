import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import DiscogForm from '../components/DiscogForm';
import axios from "axios";

const Subsidary = (props) => {

    const [discog, setDiscog] = useState([])
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    const {id} = useParams()

    const createDiscog = (discogParam) => {
        axios.post('http://localhost:8000/api/discog', discogParam)
            .then((res)=>{
                navigate("/artist/"+id)
                setDiscog([...discog, res.data])
                addToBandDiscog(res.data)
            })
            .catch((err)=>{
                console.log(err)
                setErrors(err.response.data.error)
                console.log(errors)
            })
    }

    const addToBandDiscog = (discogId) => {
        axios.put("http://localhost:8000/api/bands/updatediscog/"+id, discogId)
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
            <DiscogForm
                onSubmitProp={createDiscog}
                errors={errors}
                setErrors={setErrors}
                initialArtist={id}
                initialTitle=""
                initialImage=""
                initialTrack=""
                formHeading="Add to Discography"
                />
        </div>
    )
}

export default Subsidary;