import React from "react";
import './SideDrawer.css'

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (

        <div className={drawerClasses}>
            <div className='Menu'> Menu</div>
            <ul>
                <li><a href="/">User Info</a></li>
                <li><a href="/">User Info</a></li>
            </ul>

        </div>


    )
};


export default SideDrawer