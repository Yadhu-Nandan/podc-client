import API from "/home/zoomrx/demo-projects/podcgallery/svelte-kit-app/src/api/api.js";
export const getArticles = async () => {
    try {
      const response = await API.get("/getarticles");
      return response;
    } catch (error) {
      console.error(error);
    }
};

export const deleteArticle = async (id) => {
  try {
    const response = await API.get("/deletearticle/"+id);
    console.log(response)
    return response;
  } catch (error) {
    console.error(error);
  }
};
export const getArticle = async (id) => {
  try {
    const response = await API.get("/getarticle/"+id);
    console.log(response)
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const addArticle = async (title,content) => {
  try {
    const response = await API.post("/addarticle",{'title':title});
    return response;
  } catch (error) {
    console.error(error);
  }
};
