import React, {Component} from 'react';

import {Header} from '../../components/Header/Header';
import {Main} from '../../components';
import './MoviesPage.css'
import SideDrawer from "../../components/DrawerToggleButton/SideDrawer";
import BackDrop from "../../components/DrawerToggleButton/BackDrop";


class MoviesPage extends Component {
    state = {
        sideDrawerOpen: false
    };

    DrawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        })

    };

    backDropClickHandler = () =>{
        this.setState({sideDrawerOpen: false})
    }

    renderLoading = () => {

        const {loading} = this.props;

        if (loading) {
            return (
                <div className={'loading'}>Loading . . .</div>
            )
        }
    };


    render() {
        const {getMovies, movies, getGenres, genres} = this.props;

        let backDrop;

        if(this.state.sideDrawerOpen){
            backDrop =   <BackDrop click={this.backDropClickHandler}/>
        }

            return (
                <div>
                    <Header drawerClickHandler={this.DrawerToggleClickHandler}/>
                    {this.renderLoading()}
                   <SideDrawer show={this.state.sideDrawerOpen}/>
                    {backDrop}

                    <Main
                        getMovies={getMovies}
                        movies={movies}
                        getGenres={getGenres}
                        genres={genres}
                    >


                    </Main>
                </div>
            );
    }
}

export default MoviesPage;