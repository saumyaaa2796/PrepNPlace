import Navbar from "../components/Navbar";


function Dashboard() {

  return (
    <>
      <Navbar />


      <h1 className="page-title">
        Dashboard
      </h1>


      <div className="dashboard-grid">


        <div className="stat-card">

          <h2>
            Companies
          </h2>

          <p>
            Explore placement opportunities
          </p>

        </div>



        <div className="stat-card">

          <h2>
            Applications
          </h2>

          <p>
            Track your applications
          </p>

        </div>



        <div className="stat-card">

          <h2>
            Interviews
          </h2>

          <p>
            Read interview experiences
          </p>

        </div>



        <div className="stat-card">

          <h2>
            Forum
          </h2>

          <p>
            Discuss with students
          </p>

        </div>


      </div>

    </>
  );
}


export default Dashboard;