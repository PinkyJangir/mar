import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  javascript: [
    {
      name: "Eloquent JavaScript",
      rating: "4/5",
      description:
        "This is a famous book,This is a book about JavaScript, programming, and the wonders of the digital."
    },
    {
      name: "JavaScript and JQuery:",
      rating: "3.5/5",
      description:
        "It is a major scripting programming language that is used to make websites more responsive and interactive."
    },
    {
      name: " Secrets of the javascript ninja",
      rating: "4/5",
      description:
        "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance"
    }
  ],

  fiction: [
    {
      name: "Shiva Trilogy",
      rating: "5/5",
      description:
        "It is not very often that I enjoy reading books that ‘twists’ tales related to Indian mythology."
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5",
      description:
        " this bookabout, Harry lives with his aunt and uncle. Harry's parents were killed by the evil wizard Voldemort when he was an infant."
    },
    {
      name: "Flying angles",
      rating: "4.5/5",
      description:
        "Flying Angels is a compelling and inspirational story of women of courage in the Second World War, by the world's number one bestselling. "
    }
  ],
  business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5",
      description:
        "The book that not only teaches how to make profits in business but also it teaches how to built strong bond with the customers and building the trust."
    },
    {
      name: "Loonshots",
      rating: "5/5",
      description:
        "This book about A wonderful book that explores the beauty, quirkiness and complexity of ideas, Loonshots will both educate and entertain you"
    },
    {
      name: "Rich Dad and Poor Dad",
      rating: "4.5/5",
      description:
        "This story about rich and poor's,his real father (poor dad) and the father of his best friend (rich dad)—and the ways in which both men shaped his thoughts about money and investing"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>goodbooks </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
              <div style={{ fontSize: "smaller" }}> {book.description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
