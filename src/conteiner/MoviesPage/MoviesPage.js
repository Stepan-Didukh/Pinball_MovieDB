import React, {Component} from 'react'
import './MoviesPage.css'
import {Header} from "../../components/Header/Header";


class MoviesPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {},

        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/discover/movie?page=2/results', {
            headers: {
                Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzhmOTA1NTU0NzJhMWY2NDZjMTk5YThmZWU0ZT' +
                    'MzZCIsInN1YiI6IjVlMDIzY2Y3MjZkYWMxMDAxNzY3NmI2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjox' +
                    'fQ.9Om7QJqajjsGylHMc-3L_8RjxdG0g2U_s14gzf9LQh0'
            }

        }).then(res => res.json())
            .then(json => {

                this.setState({
                        data: json.results
                    }
                )
            });
    }

    onChange = () => {
      const {data} = this.state;
        console.log(data);
        for(let i=0; i<20; i++){
            console.log(data[i]);
        }
    }

    render() {
        // const {data} = this.state;
        //
        // console.log(data[0]);

        return (
            <div>
                <Header/>

                <div>
                    {this.onChange()}
                </div>

            </div>
        )

    }
}

export default MoviesPage;
