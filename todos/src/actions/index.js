import axios from "axios";
let id = 0;
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: id++,
    text
})

export const setVisiblityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const removePost = (id) => ({
    type: 'REMOVEPOST',
    id
})

export const removePostAPI = (id) =>{
    return dispatch => {
        axios
        .delete("http://localhost:5000/posts/"+id)
        .then(res => {
           if(res.statusText === "OK"){
                dispatch(removePost(id))
           }
        })
    }    
}
export const fetchPosts = () => {
    return dispatch => {
        dispatch(fetchPostStarted());
        axios
            .get("http://localhost:5000/posts")
            .then(res => {
                dispatch(fetchPostSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchPostFailed(err.message));
            });
    };
};
export const addPost = ({
    data
}) => {
    return dispatch => {
        console.log('data', data)
        axios.post("http://localhost:5000/posts", {
                id: data.id,
                title: data.title
            }
        ).then(res => {
            console.log('receive ress', res.data)
            dispatch(addPostSucccess(res.data))
        }).catch(error => {
            dispatch(addPostFailed(error))
        });
    }
}

export const fetchPostStarted = () => ({
    type: 'FETCH_POSTS_STARTED',
    isLoading: true
})
export const fetchPostSuccess = post => ({
    type: 'FETCH_POSTS_SUCCESS',
    post
})
export const fetchPostFailed = error => ({
    type: 'FETCH_POST_FAILED',
    error
})
////add Post ///
export const addPostSucccess = post => ({
    type: 'ADD_POSTS_SUCCESS',
    post
})

export const addPostFailed = error => ({
    type: 'ADD_POST_FAILED',
    error
})