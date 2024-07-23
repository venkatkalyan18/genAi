import React, { createContext, useState } from 'react'
import axios from 'axios';
export const DocumentContext = createContext();
export const BASE_URL = "http://13.51.14.3:8080"

const DocumentContextProvider = ({children}) => {

    const[isAuth,setisAuth] = useState();


  
  return (
    <DocumentContext.Provider value={{text:"hello",setisAuth}}>
        {children}
    </DocumentContext.Provider>
  )
}

export default DocumentContextProvider;