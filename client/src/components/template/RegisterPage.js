"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";

const RegisterPage = () => {
  const [register, setRegister] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegisterChange = (e) => {
    const { value } = e.target;
    setRegister({ ...register, [e.target.name]: value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (register.password === register.confirmPassword) {
      const registerData = {
        username: register.username,
        password: register.password,
      };
      const res = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });
      const data = await res.json();
      console.log(data);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F7F8F8] flex items-center justify-center">
      <form
        className="w-full max-w-md p-6 bg-white rounded-2xl border border-[#E4E4E4]"
        onSubmit={handleRegisterSubmit}
      >
        <div className="flex items-center justify-center flex-col gap-4">
          <Image src="/logo.png" alt="logo" width={80} height={80} />
          <span>فرم ثبت نام</span>
        </div>
        <div className="flex flex-col gap-4 mt-7 mb-1">
          <input
            type="text"
            placeholder="نام کاربری"
            name="username"
            className="bg-[#F2F2F2] border-0 h-14 indent-3 rounded-xl outline-none placeholder:text-[#28282880]"
            onChange={handleRegisterChange}
          />
          <input
            type="text"
            placeholder="رمز عبور"
            name="password"
            className="bg-[#F2F2F2] border-0 h-14 indent-3 rounded-xl outline-none placeholder:text-[#28282880]"
            onChange={handleRegisterChange}
          />
          <input
            type="text"
            placeholder="تکرار رمز عبور"
            name="confirmPassword"
            className="bg-[#F2F2F2] border-0 h-14 indent-3 rounded-xl outline-none placeholder:text-[#28282880]"
            onChange={handleRegisterChange}
          />
          <button
            type="submit"
            className="w-full h-14 mt-2 bg-[#F21055] text-white text-lg font-bold rounded-xl"
          >
            ثبت نام
          </button>
        </div>
        <Link href={"/login"} className="text-sm text-[#F21055]">
          حساب کاربری دارید؟
        </Link>
      </form>
      <Toaster />
    </div>
  );
};

export default RegisterPage;
