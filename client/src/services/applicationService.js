import API from "./api";


export const applyCompany = async (companyId) => {

  const token = localStorage.getItem("token");

  const res = await API.post(
    "/applications",
    {
      company: companyId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};



export const getMyApplications = async () => {

  const token = localStorage.getItem("token");

  const res = await API.get(
    "/applications/my",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};