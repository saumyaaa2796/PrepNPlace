import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getMyApplications } from "../services/applicationService";


function Applications() {

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchApplications = async () => {

      try {

        const data = await getMyApplications();

        setApplications(data);

      } catch(error) {

        console.log(
          error.response?.data || error.message
        );

      } finally {

        setLoading(false);

      }

    };


    fetchApplications();

  }, []);



  return (
    <>
      <Navbar />

      <h1>Application Tracker</h1>


      {loading ? (

        <p>Loading...</p>

      ) : applications.length === 0 ? (

        <p>No applications yet</p>

      ) : (

        applications.map((app)=>(

          <div className="card" key={app._id}>

            <h2>
              {app.company.name}
            </h2>

            <p>
              Role: {app.company.role}
            </p>

            <p>
              Status: {app.status}
            </p>

          </div>

        ))

      )}

    </>
  );
}


export default Applications;