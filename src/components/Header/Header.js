import './header.css'
import {Link} from "react-router-dom";
import Search from '../../assets/Shape 1.png'
import UserPhoto from '../../assets/Layer 2.png'
import React from "react";
import {Toggle} from "../Toggle";
import DrawerToggleButton from "../DrawerToggleButton/DrawerToggleButton";


const HR = 'header-components';

export const Header = props => {


    return (

        <header className={`${HR}`}>

            <DrawerToggleButton click={props.drawerClickHandler}/>

            <div className={`${HR}-logo_box`}>
                <div className={`${HR}-Rectangle`}>
                    <div className={`${HR}-Rectangle-one`}/>
                    <div className={`${HR}-Rectangle-two`}/>
                    <div className={`${HR}-Rectangle-three`}/>
                    <div className={`${HR}-Rectangle-four`}/>
                    <div className={`${HR}-Rectangle-five`}/>
                </div>

                <Link
                    className={`${HR}-logo`}
                    to={'/'}
                >
                    Pinball
                    <div className={`${HR}-button-logo`}>
                        The grid theme
                    </div>
                </Link>
            </div>



            <div className={`${HR}-search-mobile-box`}>
                <img src={Search} className={`Mobile-search`} alt='Search'/>
            </div>

            <div className={`${HR}-search-Box`}>
                <input className={`${HR}-search`}/>
                <img src={Search} className={`Search`} alt='Search'/>
            </div>
            <Toggle className={'ChoseTheme'}/>

            <div className={`${HR}-User-Box`}>
                <img src={UserPhoto} alt='User'/>
                <Link className={`${HR}-welcome-User`} to={'/user_info'}>Welcome John</Link>
            </div>



        </header>

    )

};



