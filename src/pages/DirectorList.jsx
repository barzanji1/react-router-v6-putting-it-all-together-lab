import { Link } from "react-router-dom";

const directors = [
  {
    id: 1,
    name: "Christopher Nolan",
    bio: "Director of mind-bending films",
    movies: [
      {
        id: "m1",
        title: "Inception",
        duration: 148,
       genre: "Sci-Fi, Thriller",
      },
    ],
  },
];

const DirectorList = () => {
  const displayDirectors = directors.map((director) => (
    <li key={director.id}>
      <Link to={`/directors/${director.id}`}>{director.name}</Link>
    </li>
  ));

  return <ul>{displayDirectors}</ul>;
};

export default DirectorList;
export { directors };