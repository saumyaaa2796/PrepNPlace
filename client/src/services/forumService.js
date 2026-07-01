import API from "./api";


export const getPosts = async () => {

  const token = localStorage.getItem("token");

  const res = await API.get(
    "/posts",
    {
      headers:{
        Authorization:`Bearer ${token}`,
      },
    }
  );

  return res.data;
};



export const createPost = async (data) => {

  const token = localStorage.getItem("token");

  const res = await API.post(
    "/posts",
    data,
    {
      headers:{
        Authorization:`Bearer ${token}`,
      },
    }
  );

  return res.data;
};