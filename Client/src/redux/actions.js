import axios from 'axios';
import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-types";
const ENDPOINT = 'http://localhost:3001/rickandmorty/fav';

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
   //  const endpoint = 'http://localhost:3001/rickandmorty/fav';
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
   
   
   
   //PROMISE VERSION
   // const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   //  return (dispatch) => {
   //     axios.delete(endpoint).then(({ data }) => {
   //        return dispatch({
   //           type: 'REMOVE_FAV',
   //           payload: data,
   //     });
   //     });
   //  };
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