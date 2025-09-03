import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function Form() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    return (
        <div className='flex justify-around h-screen bg-gray-100'>
            <div className='flex flex-col items-center'>
                <div className='mt-8 mb-8 font-semibold text-gray-500'>My name is <span className='text-blue-500 text-lg'>{name} {surname}</span>. My email is <span className='text-blue-500 text-lg'>{email}</span> and my phone number is <span className='text-blue-500 text-lg'>{phoneNo}</span>  </div>
                <form className='p-6 bg-white rounded-md flex flex-col gap-3 shadow-2xl w-115'>
                    <div className='font-semibold text-3xl'>Sign Up</div>
                    <div className='text-gray-700'>Please fill in this form to create an account</div>
                    <div>
                        <label className='font-semibold'>First Name</label><br />
                        <input onChange={(e)=>{setName(e.target.value)}}  type="text" placeholder='Enter your name' className='w-full h-9 p-1 bg-gray-100 rounded-md outline-none' />
                    </div>
                    <div>
                        <label className='font-semibold'>Last Name</label><br />
                        <input onChange={(e)=>{setSurname(e.target.value)}}  type="text" placeholder='Enter you last name' className='w-full h-9 p-1 bg-gray-100 rounded-md outline-none' />
                    </div>
                    <div>
                        <label className='font-semibold'>Email</label><br />
                        <input onChange={(e)=>{setEmail(e.target.value.trim())}}  type="email" className='w-full h-9 p-1 bg-gray-100 rounded-md outline-none' />
                    </div>
                    <div>
                        <label className='font-semibold'>Password</label><br />
                        <input onChange={(e)=>{setPassword(e.target.value)}}  type="password" className='w-full h-9 p-1 bg-gray-100 rounded-md outline-none' />
                    </div>
                    <div>
                        <label className='font-semibold'>Phone Number</label><br />
                        <input onChange={(e)=>{setPhoneNo(e.target.value)}}  type="number" className='w-full h-9 p-1 bg-gray-100 rounded-md outline-none' />
                    </div>
                    <div className='text-gray-700 mt-2'>
                        By creating an account you agree to our <span className='text-blue-400 cursor-pointer'>Terms & Privacy</span>
                    </div>
                    <Link to="/profile" className='flex justify-center items-center w-full bg-blue-400 cursor-pointer h-10 rounded-md text-white hover:bg-blue-500'>Sign Up</Link>
                </form>
            </div>
        </div>
    )
}

export default Form