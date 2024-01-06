import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home flex justify-center">
      <Link to="/books" className="text-2xl font-bold btn mt-60">
        View Books
      </Link>
    </div>
  );
};

export default Home;
