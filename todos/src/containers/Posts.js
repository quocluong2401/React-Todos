import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchPosts,removePostAPI} from '../actions'

const Posts= ({posts,loading,error,fetchPosts,removePostAPI}) =>{

    useEffect(fetchPosts,[])

    return (
        <div>
        {loading && <div>LOADING...</div>}
        {error && <div>{error}</div>}
        <ul>
          {posts.map(post => (
            <li key={post.id} onClick= {() =>removePostAPI(post.id)}>{post.title}</li>
          ))}
        </ul>
      </div>
    )
 }
       

const mapStateToProps = state => {
    const { posts, loading, error } = state.posts;
    return {
      posts,
      loading,
      error
    };
  };
  
  export default connect(
    mapStateToProps,
    {fetchPosts,removePostAPI}
    )(Posts);