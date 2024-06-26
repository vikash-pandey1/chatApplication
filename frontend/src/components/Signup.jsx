import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
function Signup() {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const navigate = useNavigate();
  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8081/api/v1/user/register`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(user)
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message)

      console.log(error);
    }
    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };
  return (
    <>
      <div className="min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100  ">
          <h1 className="text-3xl font-bold text-center ">Signup</h1>
          <form onSubmit={onSubmitHandler} action="">
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Full Name</span>
              </label>
              <input
                value={user.fullName}
                onChange={(e) => setUser({ ...user, fullName: e.target.value })}
                type="text"
                placeholder="FullName"
                className="w-full input input-bordered h-10"
              />
            </div>

            <div>
              <label className="label p-2">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                value={user.username}
                type="text"
                placeholder="username"
                className="w-full input input-bordered h-10"
              />
            </div>

            <div>
              <label className="label p-2">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                value={user.password}
                type="text"
                placeholder="password"
                className="w-full input input-bordered h-10"
              />
            </div>

            <div>
              <label className="label p-2">
                <span className="text-base label-text">Confirm Password</span>
              </label>
              <input
                onChange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
                value={user.confirmPassword}
                type="text"
                placeholder="confirmpassword"
                className="w-full input input-bordered h-10"
              />
            </div>

            <div className="flex items-center my-4">
              <div className="flex items-center">
                <p>male</p>
                <input
                  type="checkbox"
                  checked={user.gender === "male"}
                  onChange={() => handleCheckbox("male")}
                  className="checkbox mx-2"
                />
              </div>

              <div className="flex items-center">
                <p>female</p>
                <input
                  type="checkbox"
                  checked={user.gender === "female"}
                  onChange={() => handleCheckbox("female")}
                  className="checkbox mx-2"
                />
              </div>
            </div>
            <p className="text-center my-2">
              {" "}
              Already have an account?
              <Link to="/login">login</Link>
            </p>
            <div>
              <button
                type="submit"
                className="btn btn-block btn-sm mt-2 border border-state-700"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
