import antimusic from "../image/antimusic.jpg"
import {AppBar, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import {useState} from 'react';
import { useNavigate } from "react-router-dom";


const Navbar = () => {

    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const nav = (e) => {
        console.log("Clicked!!!", e)
        navigate(e)

    }

    return (
        <div className="nav">
            <AppBar sx={{bgcolor:'#000000'}}>
                <Toolbar>
                    <Typography>
                        CRUDCORE
                    </Typography>
                    <img className="icon" alt="Antimusic icon" src={antimusic}/>
                    <Tabs sx={{marginLeft:'auto'}} textColor="inherit" value={value} onChange={(e, value)=> setValue(value)} indicatorColor="secondary">
                        <Tab name="/artists" onClick={(e)=>{nav(e.target.name)}} label="Home"/>
                        <Tab name='/artists/create' onClick={(e)=>{nav(e.target.name)}} label="Add Artist"/>
                        <Tab onClick={(e)=>{nav(e.target.value)}} label="My Account"/>
                        <Tab onClick={(e)=>{nav(e.target.value)}} label="Logout"/>
                    </Tabs>
                </Toolbar> 
            </AppBar>
        </div>
    )
}

export default Navbar;