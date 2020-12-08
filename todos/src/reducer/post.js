const initialState = {
    posts: [],
    loading: false,
    error: null
};
const posts =  (state = initialState,action)=>{
    switch (action.type) {
   
        case 'FETCH_POSTS_STARTED':
          return {
            ...state,
            loading: true
          };
        case 'FETCH_POSTS_SUCCESS':
          return {
            ...state,
            loading: false,
            error: null,
            posts: action.post
          };
        case 'FETCH_POST_FAILED':
          return {
            ...state,
            loading: false,
            error: action.error
          };
          case 'ADD_POST_FAILED':
          return {
            ...state,
            loading: false,
            error: action.error
          };
          case 'ADD_POSTS_SUCCESS':
          return {
            ...state,
            loading: false,
            error: null,
            posts: [...state.posts, action.post]
          };
        case 'REMOVEPOST':
            return{
                ...state,
                posts :state.posts.filter(post => post.id !== action.id),
                loading:false,
                error: null
            
            }
        default:
          return state;
      }
}
export default posts