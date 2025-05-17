import { useState } from "react";

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "dhaka") {
        resolve();
      } else {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      }
    }, 3000);
  });
}

export default function Form() {
  // visual states: empty, typing, submitting, success, error

  //   mandatory Data state
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (error) {
      setStatus("typing");
      setError(error.message);
    }
  };

  if (status === "success") return <h1>Your answer is right!</h1>;

  return (
    <>
      <h2>City quiz</h2>
      <p>What city is located on two continents?</p>
      <form onSubmit={handleFormSubmit}>
        <textarea
          disabled={status === "submitting"}
          className="border-1 border-red-500"
          value={answer}
          onChange={(e) => {
            setError(null);
            return setAnswer(e.target.value);
          }}
        ></textarea>
        <br />
        <button
          className="border-2"
          disabled={answer.length === 0 || status === "submitting"}
        >
          Submit
        </button>
        {status === "submitting" && <p>Loading...</p>}
        {error && <p className="Error">{error}</p>}
      </form>
    </>
  );
}
