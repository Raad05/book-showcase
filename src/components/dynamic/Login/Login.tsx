import axios from "axios";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

// form data structure
interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const [data, setData] = useState<FormData>({ email: "", password: "" });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const login = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/rest-auth/login/",
        data
      );
      if (res.status === 200) {
        const { access } = res.data;
        const { user } = res.data;
        localStorage.setItem("token", access);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/books");
      }
      setError("");
    } catch (err) {
      console.log("Login failed", err);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content">
        <div className="w-full shadow-2xl bg-gray-900 rounded-lg">
          <h4 className="text-2xl text-center mt-10 font-bold">
            Book Showcase
          </h4>
          <hr className="mx-14 my-2" />
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onChange={handleInput}
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                onChange={handleInput}
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <p className="text-red-400">{error}</p>
            <div className="form-control mt-6">
              <button onClick={login} type="submit" className="btn btn-accent">
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
