"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const LoginPage = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    const { value } = e.target;
    setLogin({ ...login, [e.target.name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(login);
  };

  return (
    <div className="w-full min-h-screen bg-[#F7F8F8] flex items-center justify-center">
      <form
        className="w-full max-w-md p-6 bg-white rounded-2xl border border-[#E4E4E4]"
        onSubmit={handleLoginSubmit}
      >
        <div className="flex items-center justify-center flex-col gap-4">
          <Image src="/logo.png" alt="logo" width={80} height={80} />
          <span>ورود</span>
        </div>
        <div className="flex flex-col gap-4 mt-7 mb-1">
          <input
            type="text"
            placeholder="نام کاربری"
            name="username"
            className="bg-[#F2F2F2] border-0 h-14 indent-3 rounded-xl outline-none placeholder:text-[#28282880]"
            onChange={handleLoginChange}
          />
          <input
            type="text"
            placeholder="رمز عبور"
            name="password"
            className="bg-[#F2F2F2] border-0 h-14 indent-3 rounded-xl outline-none placeholder:text-[#28282880]"
            onChange={handleLoginChange}
          />
          <button
            type="submit"
            className="w-full h-14 mt-2 bg-[#F21055] text-white text-lg font-bold rounded-xl"
          >
            ورود
          </button>
        </div>
        <Link href={"/register"} className="text-sm text-[#F21055]">
          ایجاد حساب کاربری!
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
