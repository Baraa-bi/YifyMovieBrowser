import { NO_INTERNET_CONNECTION } from "./types";





export const invalidRequest  = (dispatch,error) =>{

    // checks every error for any request 
    console.log(error.message);

    if(error.response)
        console.log(error.response);
    else
        dispatch({type:NO_INTERNET_CONNECTION,payload:true});
}


export const checkPagesEnd  = (currentPage,totalPages) =>{
    // checks whether the pagination ends
    return currentPage > totalPages ;
}