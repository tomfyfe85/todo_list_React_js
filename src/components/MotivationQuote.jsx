import React, { useState, useEffect } from "react";
const MotivationQuote = () => {
  const [quote, setQuote] = useState(false);

  const newQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .catch((error) => console.error("Error fetching data:", error));
    console.log(quote);
  };

  useEffect(() => {
    newQuote();
    setQuote(false)
  }, []);


  return (
    <>
      {quote ? <h6>Motivational Quote:<br /> {quote.content}</h6> : "LOADING"}
    </>
  );
};

export default MotivationQuote;
