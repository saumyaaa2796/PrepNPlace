import API from "./api";


export const getExperiences = async () => {

  const token = localStorage.getItem("token");

  const res = await API.get(
    "/interviews",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};


export const addExperience = async (data) => {

  const token = localStorage.getItem("token");

  const res = await API.post(
    "/interviews",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};