import React, { useState, useEffect, useRef } from "react";
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  BASE_URL,
} from "../contexts/DocumentContext";
import axios from "axios";

const ModelContainer = ({ setTitle }) => {
  const [data, setData] = useState([]);
  const model = useRef();

  const handleSelect = (_title) => {
    setTitle(_title);
    console.log(_title);
    model.current.click();
  };

  useEffect(() => {
    const getStoredContent = async () => {
      const payload = {
        access_token: ACCESS_TOKEN,
        refresh_token: REFRESH_TOKEN,
      };

      try {
        const response = await axios.post(
          BASE_URL + "/get_stored_content",
          payload,
          {
            withCredentials: true,
            maxRedirects: 0,
          }
        );
        const dataArray = Object.values(response.data);
        setData(dataArray);
      } catch (error) {
        console.log(error);
      }
    };

    getStoredContent();
  }, []);

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box w-[95%] ">
        <h3 className="font-bold text-4xl">Select a title!</h3>
        <div className="modal-action flex flex-col gap-4">
          <div className="flex flex-col">
            {data.map((item, index) =>
              item.length ? (
                <p
                  className="mb-4 hover:bg-black p-1 rounded-lg"
                  onClick={() => handleSelect(item)}
                  key={index}
                >
                  {item}
                </p>
              ) : (
                ""
              )
            )}
          </div>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn bg-black" ref={model}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ModelContainer;
