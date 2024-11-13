import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAdvice();
  }, []);

  const getAdvice = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      // Set advice from response data
      setAdvice(response.data.slip.advice);
    } catch (error) {
      setError("Failed to advice");
      console.error(error);
    }
  };

  return (
    <>
      <div className="container">
        <h2 className="heading"> Random Advice Generator </h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="advice"> Advice : {advice ? <p> {advice}</p> : <p> Loading...</p>}</div>
        <button className="genarate-btn" onClick={getAdvice}>
          GIVE ME ADVICE
        </button>
      </div>
    </>
  );
}

export default App;
