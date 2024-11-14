"use client";

import BookShopApiUrl from "@/config/config";
import { useEffect } from "react";

export default function Home() {
  const getbook = async () => {
    await BookShopApiUrl.get("/book");
  };

  useEffect(() => {
    getbook();
  }, []);

  return <div>Hello World</div>;
}
