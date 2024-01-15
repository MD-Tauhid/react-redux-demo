import { ADD_POST, DELETE_POST, EDIT_POST, GET_POST_FAILED, GET_POST_REQUEST, GET_POST_SUCCESS } from "../constants/postConstants";

const initialState = {
    isLoading: false,
    posts: [],
    isError: null,
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POST_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case GET_POST_SUCCESS:
            return {
                isLoading: false,
                posts: action.payload,
                isError: null,
            }
        case GET_POST_FAILED:
            return {
                isLoading: false,
                posts: [],
                isError: action.payload,
            }
        case ADD_POST:
            return {
                isLoading: false,
                posts: [action.payload, ...state.posts],
                isError: null,
            }
        case EDIT_POST:
            return {
                isLoading: false,
                posts: [action.payload, ...state.posts],
                isError: null,
            }
        case DELETE_POST:
            return {
                isLoading: false,
                posts: state.posts.filter(post => post.id !== action.payload),
                isError: null,
            }
    
        default:
            return state;
    }
}

export default postsReducer;