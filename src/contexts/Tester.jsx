import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "./DocumentContext";
import toast, { Toaster } from "react-hot-toast";

const Tester = () => {
  useEffect(() => {
    async function test() {
      const accessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzaGFua3MyOCIsImV4cCI6MTcyNDQzNTAyNX0.8aMHHg4gxkn4SqTOQ_9b_gSNWtdV0Y-alQJTPA71Zbo";
      const refreshToken =
        "yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzaGFua3MyOCIsImV4cCI6MTc1MzM3OTAyNX0.6vnso3HHUxM_Xfdyr8sHprNaNXVBM-YCMk__loS8zug";

      const payload = {
        url: "https://en.wikipedia.org/wiki/Joe_(1970_film)",
        platform: "string",
        type_content: "story",
        access_token: accessToken,
        refresh_token: refreshToken,
      };
      try {
        const response = await axios.post(BASE_URL + "/extract/", payload, {
          withCredentials: true, // This is crucial for sending cookies
          maxRedirects: 0, // Prevent axios from following redirects
        });
        console.log(response.data);
        toast.success(response.data || "Request was successful!");
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);

          // If it's a redirect, you might want to handle it here
          if (error.response.status === 302) {
            window.location = error.response.headers.location;
          } else {
            toast.error(error.response.data.Error || "An error occurred.");
          }
        } else if (error.request) {
          console.log(error.request);
          toast.error("No response received from the server.");
        } else {
          console.log("Error", error.message);
          toast.error("An error occurred while setting up the request.");
        }
        console.log(error.config);
      }
    }
    test();
  }, []);

  return (
    <div>
      <Toaster />
      Tester
    </div>
  );
};

export default Tester;
