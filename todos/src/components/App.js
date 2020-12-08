import React from 'react'
import AddTodo from '../containers/AddTodo'
import FilterList from '../containers/VisibleTodoList'
import Footer from './Footer'
import Posts from '../containers/Posts'
const App = () => (
  <div>
    <AddTodo />
    <FilterList />
    <Footer />
    <Posts/>
  </div>
)
export default App
