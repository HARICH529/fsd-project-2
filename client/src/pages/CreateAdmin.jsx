import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginImage from "../assets/images/login.png";

const CreateAdmin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(`/api/auth/admin/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data?.success) {
        toast.success(data?.message);
        navigate("/admin/login");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto h-screen flex justify-center items-center bg-[#FFF1DA]">
      <div className="w-full min-h-screen flex items-center justify-center bg-[#FFF1DA]">
        <div className="rounded-md w-[90%] bg-white md:w-[60%] mx-auto flex flex-col gap-6">
          <h1 className="text-center text-lg mt-6 font-medium md:text-3xl md:font-bold text-gray-800">
            Create Admin for <span className="text-[#6358DC]">Trevo</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-5 h-auto rounded-md items-center justify-center p-4">
            <div className="w-full md:w-1/2 flex justify-center">
              <img src={loginImage} alt="Create Admin" className="max-h-[300px]" />
            </div>

            <form onSubmit={handleSubmit} className="w-full md:w-1/2 px-4">
              <div>
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border rounded-md bg-gray-200 outline-none"
                  placeholder="Admin Username"
                  required
                />
              </div>
              <div className="mt-4">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border rounded-md bg-gray-200 outline-none"
                  placeholder="Admin Email"
                  required
                />
              </div>
              <div className="mt-4">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border rounded-md bg-gray-200 outline-none"
                  placeholder="Admin Password"
                  required
                />
              </div>
              <div className="mt-4">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border rounded-md bg-gray-200 outline-none"
                  placeholder="Admin Address"
                  required
                />
              </div>
              <div className="mt-4">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border rounded-md bg-gray-200 outline-none"
                  placeholder="Admin Phone"
                  required
                />
              </div>
              <button className="w-full bg-[#EB662B] text-white p-3 mt-4 rounded-md">
                {loading ? "Creating..." : "Create Admin"}
              </button>
              <p className="my-4 text-center">
                Already have admin account?{" "}
                <span className="text-[#EB662B]">
                  <Link to="/admin/login">Admin Login</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAdmin;