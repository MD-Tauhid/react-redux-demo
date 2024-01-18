import { ADD_POST, ADD_TO_CART, DELETE_POST, EDIT_POST, GET_POST, LOADING_TRUE, REQUEST_FAILED } from "../constants/postConstants";

const initialState = {
    isLoading: false,
    posts: [],
    isError: null,
    cartItems: [],
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_TRUE:
            return {
                ...state,
                isLoading: true,
            }
        case REQUEST_FAILED:
            return {
                isLoading: false,
                posts: [],
                isError: action.payload,
            }
        case GET_POST:
            return {
                ...state,
                isLoading: false,
                posts: action.payload,
                isError: null,
            }
        case ADD_POST:
            return {
                isLoading: false,
                posts: [action.payload, ...state.posts],
                isError: null,
            }
        case EDIT_POST:
            return {
                ...state,
                isLoading: false,
                posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post)
            }
        case DELETE_POST:
            return {
                ...state,
                isLoading: false,
                posts: state.posts.filter(post => post.id !== action.payload),
            }
        case ADD_TO_CART:
            return {
                ...state,
                isLoading: false,
                cartItems: [...state.cartItems, state.posts.find(post => post.id === action.payload)],
            }

        default:
            return state;
    }
}

export default postsReducer;