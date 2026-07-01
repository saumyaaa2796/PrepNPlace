import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  getPosts,
  createPost,
} from "../services/forumService";


function Forum() {

  const [posts, setPosts] = useState([]);

  const [form, setForm] = useState({
    title: "",
    content: "",
  });


  useEffect(() => {

    fetchPosts();

  }, []);



  const fetchPosts = async () => {

    try {

      const data = await getPosts();

      setPosts(data);

    } catch(error) {

      console.log(
        error.response?.data || error.message
      );

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

      await createPost(form);

      alert("Post Created");


      setForm({
        title: "",
        content: "",
      });


      fetchPosts();


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

      <h1>Forum</h1>


      <form onSubmit={handleSubmit}>

        <input
          name="title"
          placeholder="Post title"
          value={form.title}
          onChange={handleChange}
        />

        <br /><br />


        <textarea
          name="content"
          placeholder="Write something..."
          value={form.content}
          onChange={handleChange}
        />

        <br /><br />


        <button>
          Create Post
        </button>

      </form>



      <hr />


      {posts.map((post)=>(

        <div className="card" key={post._id}>

          <h2>
            {post.title}
          </h2>

          <p>
            {post.content}
          </p>

          <p>
            By: {post.author?.name}
          </p>

        </div>

      ))}


    </>
  );
}


export default Forum;