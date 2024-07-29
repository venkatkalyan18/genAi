import React from "react";
import textImg from "../assets/assignment_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import visualsImg from "../assets/photo_library_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import decImg from "../assets/description_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import videoImg from "../assets/movie_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { ACCESS_TOKEN } from "../contexts/DocumentContext";
import { REFRESH_TOKEN } from "../contexts/DocumentContext";
import axios from "axios";
import { BASE_URL } from "../contexts/DocumentContext";
import ModelContainer from "./ModelContainer";
import { useContext } from "react";
import { DocumentContext } from "../contexts/DocumentContext";
import Loader from "./Loader";
import { Navigate, useNavigate } from "react-router-dom";

const TextInput = () => {
  const [extractContentData, setExtractContentData] = useState({
    url: "",
    type_content: "story",
  });

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const { title, setTitle, platform, setPlatform, setContent } =
    useContext(DocumentContext);

  const extractContent = async () => {
    const { url, platform, type_content } = extractContentData;
    const payload = {
      url: url,
      type_content: type_content,
      access_token: ACCESS_TOKEN,
      refresh_token: REFRESH_TOKEN,
    };
    setIsLoading(true);
    try {
      const response = await axios.post(BASE_URL + "/extract/", payload, {
        withCredentials: true,
        maxRedirects: 0,
      });
      if (response) {
        toast.success(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    if (!title) {
      toast("Please Select a title");
      return;
    }

    if (!platform) {
      toast("Please Select a Platform");
      return;
    }

    getRepurposeStoredContent();
  };

  const getRepurposeStoredContent = async () => {
    const payload = {
      platform: platform,
      access_token: ACCESS_TOKEN,
      refresh_token: REFRESH_TOKEN,
      title: title,
    };

    try {
      setIsLoading(true);
      const response = await axios.post(
        BASE_URL + "/repurpose_stored_content",
        payload,
        {
          withCredentials: true,
          maxRedirects: 0,
        }
      );

      if (response) {
        setContent(response.data);
        setIsLoading(false);
        navigate("/content");
      }
      console.log("hello");

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnsubmit = () => {
    const { url, type_content } = extractContentData;
    if (!url) {
      toast("Please enter URL");
      return;
    }

    if (!type_content) {
      toast("Please Select Content Type");
      return;
    }

    extractContent();
  };

  const handleOnChange = (e) => {
    setExtractContentData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePlatformTypeChange = (e) => {
    setPlatform(e.target.value);
  };

  return (
    <section className="pt-10 min-h-[87vh] bg-slate-100 flex justify-center items-center flex-col text-white">
      <div className="w-[85%]">
        <div className="w-full bg-white py-20 rounded-3xl">
          <div className="w-full flex items-center justify-center mb-10">
            {isLoading && <Loader />}
          </div>

          <div className="flex justify-center items-center">
            <div className="flex gap-10 max-xl:flex-col ">
              {/* <div className='w-[250px] bg-rose-300 h-[250px] rounded-3xl p-5 flex flex-col justify-between items-center'>
                    <div className='flex justify-between items-center w-full blur'>
                    <h1 className=' font-bold'>Text <br/>to Text</h1>
                    <img src={textImg} className='w-10 filter grayscale brightness-0 ' />
                    </div>
                    <p className='text-center'>Start typing or <br/>Copy paste your script</p>
                    <div>
                        <button className='gb-bl bg-violet-600 px-7 py-2 rounded-lg text-white'>Proceed</button>
                    </div>
                </div> */}

              <div className="w-[250px] bg-yellow-400 test  h-[300px] rounded-md p-5 flex flex-col justify-between items-center">
                <ToastContainer />
                <div className="flex justify-between items-center w-full">
                  <h1 className=" text-start font-bold">
                    Extract content <br /> from Article{" "}
                  </h1>
                  <img src={decImg} className="w-10 brightness-0" />
                </div>
                <div className="text-center">
                  <input
                    placeholder="Copy Paste the URL"
                    className="text-center px-3 py-2 rounded-md w-full bg-white text-black"
                    onChange={handleOnChange}
                    name="url"
                  />
                </div>
                <div className="relative group rounded-lg w-52 bg-gray-50 overflow-hidden before:absolute before:w-12 before:h-12 before:content-[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#F9B0B9]">
                  <svg
                    y="0"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    width="100"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid meet"
                    height="100"
                    className="w-8 h-8 absolute right-0 -rotate-45 stroke-pink-300 top-1.5 group-hover:rotate-0 duration-300"
                  >
                    <path
                      strokeWidth="4"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      fill="none"
                      d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
                      className="svg-stroke-primary"
                    ></path>
                  </svg>
                  <select
                    className="appearance-none hover:placeholder-shown:bg-emerald-500 relative z-0 text-pink-400 bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm font-bold rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
                    onChange={handleOnChange}
                    name=" type_content"
                  >
                    <option>story</option>
                    <option>tweet</option>
                    <option>blog</option>
                    <option>social_media</option>
                  </select>
                </div>

                <div>
                  <button
                    className="gb-bl bg-violet-600 px-7 py-2 rounded-lg text-white"
                    onClick={handleOnsubmit}
                  >
                    Proceed
                  </button>
                </div>
              </div>

              <div className="w-[250px] bg-violet-400 test h-[300px] rounded-lg p-5 flex flex-col justify-between items-center">
                <div className="flex justify-between items-center w-full">
                  <h1 className=" font-bold text-center">
                    Select the stored content To Repurpose
                    <br />
                  </h1>
                </div>
                <input
                  placeholder="Enter platform"
                  className="text-center px-3 py-2 rounded-md w-full text-black bg-white"
                  onChange={handlePlatformTypeChange}
                />
                <div className="flex gap-4">
                  <button
                    className="gb-bl bg-violet-600 px-7 py-2 rounded-lg text-white"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    Select
                  </button>
                  <button
                    className="gb-bl bg-violet-600 px-7 py-2 rounded-lg text-white"
                    onClick={handleSubmit}
                  >
                    Generate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModelContainer setTitle={setTitle} />
    </section>
  );
};

export default TextInput;
