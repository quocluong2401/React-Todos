import { combineReducers } from 'redux'
import todos from './todo'
import visibilityFilter from './visibilityFilter'
import posts from './post'
export default combineReducers({
  todos,
  visibilityFilter,
  posts
})
