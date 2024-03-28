import React from "react";
import Image from "next/image";
import fbIcon from "../../../public/images/fb.png";
function FaceBook() {
  return (
    <button className="w-full mt-2 px-4 py-2 text-white bg-blue-900 rounded-md flex items-center justify-center">
      <Image src={fbIcon} alt="Facebook icon" className="" />
      <span className="ml-2">Continue with Facebook</span>
    </button>
  );
}

export default FaceBook;
