import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const DocumentContext = createContext();
export const BASE_URL = "http://13.51.14.3:8080";
export const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzaGFua3MyOCIsImV4cCI6MTcyNDQzNTAyNX0.8aMHHg4gxkn4SqTOQ_9b_gSNWtdV0Y-alQJTPA71Zbo";
export const REFRESH_TOKEN =
  "yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzaGFua3MyOCIsImV4cCI6MTc1MzM3OTAyNX0.6vnso3HHUxM_Xfdyr8sHprNaNXVBM-YCMk__loS8zug";

const DocumentContextProvider = ({ children }) => {
  const [isAuth, setisAuth] = useState();
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [content, setContent] = useState("");

  return (
    <DocumentContext.Provider
      value={{
        text: "hello",
        setisAuth,
        title,
        setTitle,
        platform,
        setPlatform,
        setContent,
        content,
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
};

export default DocumentContextProvider;
