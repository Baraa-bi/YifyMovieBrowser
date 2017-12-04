import {
    GET_MOVIES,
    FETCHING_MOVIES,
    NO_INTERNET_CONNECTION,
    FETCHING_MOVIES_FAILED,
    MOVIES_CURRENT_PAGE,
    MOVIES_TOTAL_PAGES,
    CLEAR_MOVIES
  } from './types';
import { GET_ALL_MOVIES  } from './yifyUrls';
import { movieModel } from '../models';
import axios from 'axios';
import _ from 'lodash';
import { invalidRequest , checkPagesEnd} from './commonActions';
  

  
  export const getAllMovies = () => {
      
    return (dispatch, getState) => {

      const {currentPage,totalPages} =getState().movies;
  
      if (checkPagesEnd(currentPage,totalPages)) return;
  
      dispatch({ type: FETCHING_MOVIES, payload: true });
    
      axios
        .get(GET_ALL_MOVIES(cupagerrentPage))
        .then(function(response) {

          dispatch({type: MOVIES_CURRENT_PAGE,payload: getState().movies.currentPage + 1});
          
          let movieList = _.map(response.data.data.movies, movie =>movieModel(movie));

          dispatch({ type: GET_MOVIES, payload: movieList });
  
          dispatch({type: MOVIES_TOTAL_PAGES,payload: response.data.data.movie_count/response.data.data.limit});
  
          dispatch({ type: FETCHING_MOVIES, payload: false });
  
        })
        .catch(function(error) {
          dispatch({ type: FETCHING_MOVIES, payload: false });
          invalidRequest(dispatch,error);
        });
    };
  };