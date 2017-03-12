import axios from 'axios';

const FETCH_POSTS = 'FETCH_POSTS';
const CREATE_POST = 'CREATE_POST';
const FETCH_POST = 'FETCH_POST';
const DELETE_POST = 'DELETE_POST';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=qqq111e'
function fetchPosts() {

  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request,
  };
}

function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request,
  }
}

function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request,
  }
}

function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: DELETE_POST,
    payload: request,
  }
}


export {
  fetchPosts as default,
  createPost,
  deletePost,
  fetchPost,
  fetchPosts,
  CREATE_POST,
  DELETE_POST,
  FETCH_POST,
  FETCH_POSTS,
}
