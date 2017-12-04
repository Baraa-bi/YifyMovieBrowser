import {
  GET_MOVIES,
  CLEAR_MOVIES,
  FETCHING_MOVIES,
  FETCHING_MOVIES_FAILED,
  MOVIES_CURRENT_PAGE,
  MOVIES_TOTAL_PAGES
} from '../actions/types';


const INIT_STATE = {
  moviesList: [],
  isLoading: false,
  currentPage: 1,
  totalPages: 1
};

export default (state = INIT_STATE, action) => {

  console.log(action);
  switch (action.type) {

    case GET_MOVIES:
      return { ...state, moviesList: [...state.moviesList, ...action.payload] }

    case FETCHING_MOVIES:
      return { ...state, isLoading: action.payload };

    case FETCHING_MOVIES_FAILED:
      return { ...state, isLoadingFail: action.payload };

    case MOVIES_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };

    case MOVIES_TOTAL_PAGES:
      return { ...state, totalPages: action.payload };

    case CLEAR_MOVIES:
      return { ...state, ...INIT_STATE };

    default:
      return state;
  }
};
