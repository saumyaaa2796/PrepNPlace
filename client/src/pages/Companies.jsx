import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";
import { applyCompany } from "../services/applicationService";

function Companies() {

  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchCompanies = async () => {
      try {

        const token = localStorage.getItem("token");

        const res = await API.get("/companies", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCompanies(res.data);

      } catch (error) {
        console.log(error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };


    fetchCompanies();

  }, []);


  const handleApply = async (companyId) => {

    try {

      const res = await applyCompany(companyId);

      console.log(res);

      alert("Applied Successfully");

    } catch (error) {

      console.log(error.response?.data);

      alert(
        error.response?.data?.message ||
        "Application Failed"
      );

    }

  };


  return (
    <>
      <Navbar />

      <h1>Companies</h1>


      {loading ? (
        <p>Loading...</p>
      ) : companies.length === 0 ? (

        <p>No companies available</p>

      ) : (

        companies.map((company) => (

          <div className="card" key={company._id}>

            <h2>{company.name}</h2>

            <p>
              Role: {company.role}
            </p>

            <p>
              Location: {company.location}
            </p>

            <button
              onClick={() => handleApply(company._id)}
            >
              Apply
            </button>

          </div>

        ))

      )}

    </>
  );
}

export default Companies;