import axios from 'axios';
import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-types";
const ENDPOINT = 'https://rickandmortybackend-9jv6.onrender.com/rickandmorty/fav';

export const addFav = (character) => {
   //ASYNC AWAIT VERSION
   return async (dispatch) => {
      try {
         const { data } = await axios.post(ENDPOINT, character);
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      } catch(error) {
         return dispatch({
            type: "ERROR",
            payload: error.message
         });
      }
   }


   // PROMISE VERSION
   //  const endpoint = 'https://rickandmortybackend-9jv6.onrender.com//fav';
   //  return (dispatch) => {
   //     axios.post(endpoint, character).then(({ data }) => {
   //        return dispatch({
   //           type: 'ADD_FAV',
   //           payload: data,
   //        });
   //     });
   //  };
};

export const removeFav = (id) => {
    //ASYNC AWAIT VERSION
    return async (dispatch) => {
      try {
         const { data } = await axios.delete(`${ENDPOINT}/${id}`)
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
         });
      } catch(error) {
         return dispatch({
            type: "ERROR",
            payload: error.messagec
         })
      }
    } 
};

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender,
    }
};

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    }
};