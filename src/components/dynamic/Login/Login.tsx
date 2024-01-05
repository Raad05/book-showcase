import axios from "axios";
import { ChangeEvent, MouseEvent, useState } from "react";

// form data structure
interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const [data, setData] = useState<FormData>({ email: "", password: "" });

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
        localStorage.setItem("token", access);
      } else {
        console.log("Error occurred. Please try again later");
      }
      console.log(res.data);
      alert("Login successful");
    } catch (err) {
      console.log("Login failed", err);
      alert("Failed to login");
    }
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
