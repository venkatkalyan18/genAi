import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { DocumentContext } from "../contexts/DocumentContext";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const { content } = useContext(DocumentContext);
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-[86vh] flex justify-center items-center p-5">
      <div className="w-[80%] h-[80%]  border-2 border-black p-5 rounded-lg text-black">
        {content}
      </div>
    </div>
  );
};

export default Content;
