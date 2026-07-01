import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  getExperiences,
  addExperience,
} from "../services/experienceService";

function Experiences() {

  const [experiences, setExperiences] = useState([]);

  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    company: "",
    role: "",
    rounds: "",
    experience: "",
  });


  useEffect(() => {
    fetchExperiences();
  }, []);


  const fetchExperiences = async () => {
    try {

      const data = await getExperiences();

      setExperiences(data);

    } catch(error) {

      console.log(error.response?.data);

    } finally {

      setLoading(false);

    }
  };


  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await addExperience(form);

      alert("Experience Added");


      setForm({
        company: "",
        role: "",
        rounds: "",
        experience: "",
      });


      fetchExperiences();


    } catch(error) {

      alert(
        error.response?.data?.message ||
        "Failed"
      );

    }

  };


  return (
    <>
      <Navbar />

      <h1>Interview Experiences</h1>


      <form onSubmit={handleSubmit}>

        <input
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
        />

        <br />


        <input
          name="role"
          placeholder="Role"
          value={form.role}
          onChange={handleChange}
        />

        <br />


        <input
          name="rounds"
          placeholder="Number of rounds"
          value={form.rounds}
          onChange={handleChange}
        />

        <br />


        <textarea
          name="experience"
          placeholder="Your experience"
          value={form.experience}
          onChange={handleChange}
        />

        <br />


        <button>
          Add Experience
        </button>

      </form>



      {loading ? (
        <p>Loading...</p>
      ) : (

        experiences.map((item) => (

          <div className="card" key={item._id}>

            <h2>{item.company}</h2>

            <p>
              Role: {item.role}
            </p>

            <p>
              Rounds: {item.rounds}
            </p>

            <p>
              {item.experience}
            </p>

            <p>
              By: {item.author?.name}
            </p>

          </div>

        ))

      )}

    </>
  );
}

export default Experiences;