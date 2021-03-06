import axios from 'axios';


const axiosAPI = axios.create(
  {
          baseURL: "http://127.0.0.1:8000",
          withCredentials: false,
          
    });
const apiRequest = (method, url, request) => {
  
    const headers = {
    };
    return axiosAPI({
        method,
        url,
        data: request,
        headers:{
      }
      }).then(res => {
        return Promise.resolve(res.data);
      })
      .catch(err => {
        return Promise.reject(err);
      });
};

const get = (url, request) => apiRequest("get",url,request);

// function to execute the http delete request
const deleteRequest = (url, request) =>  apiRequest("delete", url, request);

// function to execute the http post request
const post = (url, request) => apiRequest("post", url, request);

// function to execute the http put request
const put = (url, request) => apiRequest("put", url, request);

// function to execute the http path request
const patch = (url, request) =>  apiRequest("patch", url, request);

// expose your method to other services or actions
const API ={
    get,
    delete: deleteRequest,
    post,
    put,
    patch
};
export default API;