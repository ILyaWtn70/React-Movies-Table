import React, { Component } from 'react';
import MovieCard from "./MovieCard";
import {Pagination} from '@material-ui/lab';

class Table extends Component {
  handleChangePage = (event, page) => {
     this.props.changePage(page)
  }

  render() {
    const tabRow = this.props.films.map((film, index) => {
      return (
        <MovieCard index={index} film={film}/>
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