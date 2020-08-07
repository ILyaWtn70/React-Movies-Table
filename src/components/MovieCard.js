import React, { Component } from 'react';


class MovieCard extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.film.original_title}</td>
        <td>{this.props.film.release_date}</td>
        <td>{this.props.film.adult}</td>
        <td></td>
      </tr>
      )

  }

}

export default MovieCard;