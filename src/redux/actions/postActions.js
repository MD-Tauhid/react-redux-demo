import axios from "axios";
import { ADD_POST, ADD_TO_CART, DELETE_POST, EDIT_POST, GET_POST, LOADING_TRUE, REQUEST_FAILED } from "../constants/postConstants"
import { baseURL } from "../../config/baseURL";


export const getAllPosts = () => async (dispatch) => {
    dispatch({ type: LOADING_TRUE });
    try {
        const res = await axios.get(`${baseURL}/posts`);
        dispatch({ type: GET_POST, payload: res?.data });
    }
    catch (error) {
        dispatch({ type: REQUEST_FAILED, payload: error.message });
    }
}

export const addPost = (data) => async (dispatch) => {
    dispatch({ type: LOADING_TRUE });
    try {
        const res = await axios.post(`${baseURL}/posts`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        dispatch({ type: ADD_POST, payload: res.data });
    }
    catch (error) {
        dispatch({ type: REQUEST_FAILED, payload: error.message });
    }
}
export const editPost = (id, data) => async (dispatch) => {
    dispatch({ type: LOADING_TRUE });
    try {
        const res = await axios.put(`${baseURL}/posts/${id}`, data);
        dispatch({ type: EDIT_POST, payload: res.data });
    }
    catch (error) {
        dispatch({ type: REQUEST_FAILED, payload: error.message });
    }
}
export const deletePost = (id) => async (dispatch) => {
    dispatch({ type: LOADING_TRUE });
    try {
        const res = await axios.delete(`${baseURL}/posts/${id}`);
        dispatch({ type: DELETE_POST, payload: id });
    }
    catch (error) {
        dispatch({ type: REQUEST_FAILED, payload: error.message });
    }
}

export const addToCart = (id) =>async (dispatch) =>{
    dispatch({type: LOADING_TRUE});
    dispatch({ type: ADD_TO_CART, payload: id });
}