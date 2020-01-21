import React from "react";
import './DrawerToggleButton.css'

const DrawerToggleButton = props =>(
    <div className={`Menu`} onClick={props.click}>
        <div className={`MenuLine`}/>
        <div className={`MenuLine`}/>
        <div className={`MenuLine`}/>
    </div>
);
export default DrawerToggleButton;