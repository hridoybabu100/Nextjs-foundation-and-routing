import { Roboto } from "next/font/google";
import React from "react";

 const roboto = Roboto({
    weight: "500",
    subsets: ["latin"],
  });

const contactpage = () => {
 
  return (
    <div className={roboto.className}>
      <h2 className="text-yellow-400 text-3xl">This is a Contact Page</h2>
    </div>
  );
};

export default contactpage;
