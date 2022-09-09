import antimusic from "../image/antimusic.jpg"
import {AppBar, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import {useState} from 'react';


const Navbar = () => {

    const [value, setValue] = useState('');

    return (
        <div className="nav">
            <AppBar sx={{bgcolor:'#000000'}}>
                <Toolbar>
                    <Typography>
                        CRUDCORE
                    </Typography>
                    <img className="icon" alt="Antimusic icon" src={antimusic}/>
                    <Tabs sx={{marginLeft:'auto'}} textColor="inherit" value={value} onChange={(e, value)=> setValue(value)} indicatorColor="secondary">
                        <Tab label="Add Artist"/>
                        <Tab label="My Account"/>
                    </Tabs>
                    <Tab sx={{marginLeft:"auto"}} label="Logout"/>
                </Toolbar> 
            </AppBar>
        </div>
    )
}

export default Navbar;