import { Link, useLoaderData, Form } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const Show = () => {
  const movie = useLoaderData();

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{movie.title}</h1>
      <h2>{movie.synopsis}</h2>
      <h2>{movie.pgRating}</h2>
      <h2>{movie.leadActor}</h2>
      <h2>{movie.release}</h2>
      <div style={{ textAlign: "center" }}>
        <h2>Update the Movie</h2>
        <Form action={`/update/${movie.id}/`} method="post">
          <input type="text" name="title" defaultValue={`${movie.title}`}/>
          <input type="text" name="pgRating" defaultValue={`${movie.pgRating}`}/>
          <input type="text" name="synopsis" defaultValue={`${movie.synopsis}`}/>
          <input type="text" name="release" defaultValue={`${movie.release}`}/>
          <input type="text" name="leadActor" defaultValue={`${movie.leadActor}`}/>
          <button>Update Movie</button>
        </Form>
        <Form action={`/delete/${movie.id}`} method="post">
          <button>Delete Movie</button>
        </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;