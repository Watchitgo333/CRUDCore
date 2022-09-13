import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ArtistDetails from './ArtistDetails';

const ActionMenu = (props) => {

    const {id} = useParams()
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const {artistDiscog, loaded} = props


    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        
    };

    const menuButton = (e) => {
        if(e===0){
            navigate(`/artist/${id}/create/discog`)
        }
        if(e===1){
            navigate("/artist/edit/"+id)
        }
        if(e===2){
            axios.delete("http://localhost:8000/api/bands/"+id)
                .then((res)=>{
                    console.log(res)
                })
                .catch((err)=>{
                    console.log(err)
                })
            if(artistDiscog[0]){
                axios.delete("http://localhost:8000/api/discog/"+artistDiscog[0])
                .then((res)=>{
                    console.log(res)
                })
                .catch((err)=>{
                    console.log(err)
                })
            }
            navigate("/artists")
        }

    }

    return(
        <div>
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
                    Add to Discography
                </MenuItem>
                <MenuItem value={1} onClick={(e)=>{menuButton(e.target.value)}}>
                    Edit
                </MenuItem>
                <MenuItem value={2} onClick={(e)=>{menuButton(e.target.value)}}>
                    Delete
                </MenuItem>
            </Menu>
        </div>
    )
}

export default ActionMenu;