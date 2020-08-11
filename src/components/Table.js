import React, { Component } from 'react';
import MovieCard from "./MovieCard";
import {Pagination} from '@material-ui/lab';
import Experiment from './Experiment';

class Table extends Component {
  handleChangePage = (event, page) => {
     this.props.changePage(page)
  }

  matchingGenres = (ids) => {
    let genreOfFilm = [];
    ids.forEach((id) => {
      genreOfFilm.push(this.props.genres.find((genre) => genre.id === id));
    })
      return genreOfFilm
  }


   render() {
  const tabRow = this.props.films.map((film, index) => {
     return (
     <MovieCard index={index} film={film} genres={this.matchingGenres(film.genre_ids)}/>
     )
     })


    return (
      <div className="App">
        { tabRow }
        <Pagination count={this.props.totalPages}
                    page={this.props.currentPage}
                    variant="outlined"
                    shape="rounded"
                    onChange={this.handleChangePage}

        />
      </div>
    )
  }
}

export default Table;