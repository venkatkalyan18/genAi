import React, { createContext, useState } from 'react'
import axios from 'axios';
export const DocumentContext = createContext();
export const BASE_URL = "https://0f23-122-171-19-173.ngrok-free.app"

const DocumentContextProvider = ({children}) => {

    const[isAuth,setisAuth] = useState();

  
  return (
    <DocumentContext.Provider value={{text:"hello",setisAuth}}>
        {children}
    </DocumentContext.Provider>
  )
}

export default DocumentContextProvider;