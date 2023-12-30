import React, { useState, useEffect } from "react";
const MotivationQuote = () => {
  const [quote, setQuote] = useState("");

  const newQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .catch((error) => console.error("Error fetching data:", error));
    console.log(quote);
  };

  useEffect(() => {
    newQuote();
  }, []);

  return (
    <>
      <p>Motivational Quote:<br/> {quote.content}</p>
      <p></p>
    </>
  );
};

export default MotivationQuote;
