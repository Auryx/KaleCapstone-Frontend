import Post from "../components/Post";
import { useLoaderData } from "react-router-dom";
import { Form } from "react-router-dom"

const Index = (props) => {
    const movies = useLoaderData()
    console.log(movies)
    return <>
    <div style={{textAlign: "center"}}/>
    <h2>Add a Movie</h2>
    <Form action="/create" method="post">
      <input type="text" name="title" defaultValue="write title here"/>
      <input type="text" name="pgRating" defaultValue="write the parental guidance rating here"/>
      <input type="text" name="synopsis" defaultValue="write a short synopsis here"/>
      <input type="text" name="release" defaultValue="write the release year here"/>
      <input type="text" name="leadActor" defaultValue="write the Lead Actor here"/>
      <button>Add New Movie</button>
    </Form>
    {movies.map((post) => <Post post={post} key={post.id} />)}
    </>
  };
  
  export default Index;