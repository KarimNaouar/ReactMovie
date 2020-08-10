import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./MovieNavbar";
import MovieList from "./MovieList";
import MovieRating from "./MovieRating";

function App() {
  const [useMovie, setMovie] = useState([
    {
      id: uuidv4(),
      title: "Melancholia",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTk4NjM0MjI3MV5BMl5BanBnXkFtZTcwNjcxMDYzNg@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      director: "Lars von Trier",
      synopsis:
        "Two sisters find their already strained relationship challenged as a mysterious new planet threatens to collide with Earth.",
      year: 2001,
      rating: 4,
    },
    {
      id: uuidv4(),
      title: "The tree of life",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTMwNjQ0NjMzN15BMl5BanBnXkFtZTcwNjMxMTkyNA@@._V1_SY1000_CR0,0,680,1000_AL_.jpg",
      director: "Terrence Malick",
      rating: 3,
      year: 2011,
      synopsis:
        "The story of a family in Waco, Texas in 1956. The eldest son witnesses the loss of innocence and struggles with his parents' conflicting teachings. ",
    },
    {
      id: uuidv4(),
      title: "1917",
      image:
        "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SY1000_CR0,0,631,1000_AL_.jpg",
      director: "Sam Mendes",
      rating: 5,
      year: 2019,
      synopsis:
        "April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
    },
    {
      id: uuidv4(),
      title: "The Shining",
      image:
        "https://vignette.wikia.nocookie.net/stephenking/images/c/c9/The_Shiningmovie.jpg/revision/latest?cb=20100627203118",
      director: "Stanley Kubrick",
      rating: 2,
      year: 1980,
      synopsis:
        "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
    },
    {
      id: uuidv4(),
      title: "Cloud Atlas",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTczMTgxMjc4NF5BMl5BanBnXkFtZTcwNjM5MTA2OA@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      director: "Tom Tykwer & Lana Wachowski",
      rating: 4,
      year: 2012,
      synopsis:
        "An exploration of how the actions of individual lives impact one another in the past, present and future, as one soul is shaped from a killer into a hero, and an act of kindness ripples across centuries to inspire a revolution.",
    },
    {
      id: uuidv4(),
      title: "The Fountain",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTU5OTczMTcxMV5BMl5BanBnXkFtZTcwNDg3MTEzMw@@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
      director: "Darren Aronofsky",
      rating: 4,
      year: 2006,
      synopsis:
        "As a modern-day scientist, Tommy is struggling with mortality, desperately searching for the medical breakthrough that will save the life of his cancer-stricken wife, Izzi.",
    },
    {
      id: uuidv4(),
      title: "Contact",
      image:
        "https://m.media-amazon.com/images/M/MV5BYWNkYmFiZjUtYmI3Ni00NzIwLTkxZjktN2ZkMjdhMzlkMDc3XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_SX672_AL_.jpg",
      director: "Robert Zemeckis",
      rating: 4,
      year: 1997,
      synopsis:
        "Dr. Ellie Arroway, after years of searching, finds conclusive radio proof of extraterrestrial intelligence, sending plans for a mysterious machine.",
    },
    {
      id: uuidv4(),
      title: "The Shawshank Redemption",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      director: "Frank Darabont",
      rating: 4,
      year: 1994,
      synopsis:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    },
    {
      id: uuidv4(),
      title: "Constantine",
      image:
        "https://upload.wikimedia.org/wikipedia/en/2/2b/Constantine_poster.jpg",
      director: "Francis Lawrence",
      rating: 4,
      year: 2005,
      synopsis:
        "Supernatural exorcist and demonologist John Constantine helps a policewoman prove her sister's death was not a suicide, but something more.",
    },
    {
      id: uuidv4(),
      title: "The Devil's Advocate",
      image:
        "https://m.media-amazon.com/images/M/MV5BM2M2MDJhMDgtMmJkYy00MTgzLTkyZTktODM5NzE1MWUyNDA4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,703,1000_AL_.jpg",
      director: "Taylor Hackford",
      rating: 4,
      year: 1997,
      synopsis:
        "An exceptionally adept Florida lawyer is offered a job at a high-end New York City law firm with a high-end boss - the biggest opportunity of his career to date.",
    },
  ]);
  const add = (newMovie) => {
    setMovie([...useMovie, newMovie]);
  };
  const [useRating, setRating] = useState(1);
  const Rating = (Rate) => setRating(Rate);
  const [Search, setSearch] = useState("");
  const search = (mov) => {
    setSearch(mov);
  };
  return (
    <div className="App">
      <Navbar add={(m) => add(m)} search={(s) => search(s)} />
      <div className="ptitle"> My Movie List</div>
    <MovieRating Rating={(R) => Rating(R)} />
      <MovieList
        useMovie={useMovie.filter(
          (e) =>
          e.title.toLowerCase().indexOf(Search.toLowerCase().trim()) !== -1 &&
          // e.title.toLowerCase().includes(Search.toLowerCase().trim()) &&
            e.rating >= useRating
        )}
      />
    </div>
  );
}

export default App;
