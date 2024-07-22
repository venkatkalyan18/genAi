import React, { useContext } from 'react'
import GitHubButton from './GitHubButton'
import { DocumentContext } from '../contexts/DocumentContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../contexts/DocumentContext'


const LoginForm = () => {
    const {setisAuth} = useContext(DocumentContext);
    const navigate = useNavigate();

    const login = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/login/github`);
            console.log(response.request.responseURL);
            window.location.href = response.request.responseURL;
  

        } catch (error) {
            console.error('Error during login redirect:', error);
        }
    };

  return (
    <section className='flex justify-center items-center min-h-[80vh] text-black font-serif gap-10'>
        <div className=' flex flex-col border-2 border-black p-8 gap-y-7'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-3xl font-bold'>Welcome,</h1>
                <h1 className='text-2xl'>Sign in to continue</h1>
            </div>
            <div>
            <GitHubButton login = {login}/>
            </div>
        </div>
    </section>
  )
}

export default LoginForm