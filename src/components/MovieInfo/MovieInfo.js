import React, {Component} from "react";
import Facebook from '../../assets/Shape 2.png'
import './MovieInfo.css'
import StarRatingComponent from 'react-star-rating-component';
import {GenreBadge} from "../index";


export default class MovieInfo extends Component{

    render() {
        const {original_title, movieDescription, genres, genre_ids, movieRating} = this.props;

        return (
            <div className={'movieInfo'}>
                <h3>{original_title}</h3>
                <div className={'Genres'}>
                    <GenreBadge className={'GenreBadge'} genres={genres} genre_ids={genre_ids}/>
                </div>

                <p>{movieDescription}</p>
                <hr/>
                <div className={'display_flex'}>
                    <StarRatingComponent
                        className={'rating'}
                        value={movieRating/2}
                        starRatedColor="#b9cb41"
                        numberOfStars={5}
                        name='rating'
                    />
                    <div className='Facebook'>
                        <a  href="https://uk-ua.facebook.com/login/"><img src={Facebook} alt="Facebook"/></a>
                    </div>
                </div>


            </div>
        );
    }
}