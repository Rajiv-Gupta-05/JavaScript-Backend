/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // Added empty dependency array to avoid continuous API calls

  return (
    <>
      <h1>Javascript Frontend and Backend Connection with Some Good Jokes!</h1>
      <p>JOKES: {jokes.length}</p>
      <div className="container">
        {jokes.map((joke) => (
          <div key={joke.id} className="joke-container">
            <h3>{joke.title}</h3>
            <p className="joke-content">{joke.content}</p>
          </div>
        ))}
      </div>
      <div className="footer">Made with ❤️ by You</div>
    </>
  );
}

export default App;
