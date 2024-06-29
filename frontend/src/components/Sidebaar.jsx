import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAuthUser, setOtherUsers } from "../redux/userSlice";

function Sidebaar() {
  const [search, setSearch] = useState("");
  const { otherUsers } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`http://localhost:8081/api/v1/user/logout`);
      navigate("/login");
      toast.success(res.data.message);
      dispatch(setAuthUser(null));
    } catch (error) {
      console.log(error);
    }
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    const conversationUser = otherUsers?.find((user) =>
      user.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversationUser) {
      dispatch(setOtherUsers([conversationUser]));
    } else {
      toast.error("user not found");
    }
  };
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <form onSubmit={searchSubmit} className="flex items-center gap-2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="input input-bordered rounded-md"
          placeholder="search.."
        />
        <button type="submit" className="btn btn-circle bg-zinc-500">
          <HiSearch className="w-6 h-6 outline-none" />
        </button>
      </form>
      <div className="divider px-3"></div>
      <OtherUsers />
      <div className="mt-2">
        <button onClick={logoutHandler} className="btn btn-sm">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebaar;
