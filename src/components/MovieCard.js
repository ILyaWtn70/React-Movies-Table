import React, { Component } from 'react';
import './App.css';


class MovieCard extends Component {
    render() {
      const genresRow = this.props.genres.map((genre, index) => {
        return <td key={index}>{genre.name}</td>
      })
    return (
      <tr>
        <td>{this.props.film.original_title}</td>
        <td>{this.props.film.release_date}</td>
        <td>{this.props.film.adult}</td>
        { genresRow }
      </tr>
      )

  }

}

export default MovieCard;