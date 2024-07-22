import React, { useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from './DocumentContext'

const Tester = () => {

    useEffect(()=>{
        async function test() {
            const payload = {
                "url": "https://en.wikipedia.org/wiki/Harshad_Mehta",
                "platform": "string",
                "type_content": "story"
              }
            try {
                const response = await axios.post(BASE_URL+"/extract/",payload);
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        }

        test()
},[]);
  return (
    <div>Tester</div>
  )
}

export default Tester