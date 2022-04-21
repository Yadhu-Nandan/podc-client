import API from "/home/zoomrx/demo-projects/podcgallery/svelte-kit-app/src/api/api.js";

export const getMembers = async () => {
    try {
      const response = await API.get("/getmembers");
      console.log(response)
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  export const getMember = async (id) => {
    try {
      const response = await API.get("/getmember/"+id);
      console.log(response)
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  export const addMember = async (name,role,id,joiningDate) => {
    try {
      const response = await API.post("/addmember",{name:name,role:role,id:id,joiningDate:joiningDate});
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  export const deleteMember = async (id) => {
    try {
      const response = await API.get("/deletemember/"+id);
      console.log(response)
      return response;
    } catch (error) {
      console.error(error);
    }
  };