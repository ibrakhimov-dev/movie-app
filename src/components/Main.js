import React from "react";
import SearchBar from "./SearchBar";

class Main extends React.Component{
    state = {
        movies: [],

    }

    componentDidMount(){
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=87537031&s=movie")
        .then(response => response.json())
        .then(date => this.setState({movies: date.Search}))
    }

    searchMovie = (text) =>{
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=87537031&s=${text}`)
        .then(response => response.json())
        .then(date => this.setState({movies: date.Search}))
    }

    render() {
        return(
            <main id="main">
                <SearchBar searchMovie={this.searchMovie} />
                <section className="movie">
                    <div className="container">
                        <div className="movie-card">
                            {
                                this.state.movies.map((item, index) => {
                                    return(
                                        <div className="card-item" key={item.imdbID}>
                                            <a href="/movie">
                                                <div className="img-content">
                                                    <img src={item.Poster} alt={item.Title} />
                                                </div>
                                            </a>
                                            <p>{item.Type}</p>
                                            <a href="/movie"><h3>{item.Title}</h3></a>
                                            <p>{item.Year}</p>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default Main;