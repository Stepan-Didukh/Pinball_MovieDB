import React, {Component} from "react";
import './MovieInfo.css'

export default class MovieInfo extends Component{

    render() {
        const {original_title, movieDescription} = this.props;

        return (
            <div className={'movieInfo'}>
                <h3>{original_title}</h3>
                <p>{movieDescription}</p>


            </div>
        );
    }
}