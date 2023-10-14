import { Link, useLoaderData } from "react-router-dom";

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
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;
