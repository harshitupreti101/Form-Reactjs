import React from 'react'

function Form() {
    return (
        <div className='flex justify-around items-center h-screen bg-gray-100'>
            <form className='p-6 bg-white rounded-md flex flex-col gap-3 shadow-2xl'>
                <div className='font-semibold text-3xl'>Sign Up</div>
                <div className='text-gray-700'>Please fill in this form to create an account</div>
                <div> 
                    <label className='font-semibold'>First Name</label><br />
                    <input type="text" placeholder='Enter your name' className='w-full h-9 p-1 bg-gray-100 rounded-md outline-none'/>
                </div>
                <div>
                    <label className='font-semibold'>Last Name</label><br />
                    <input type="text" placeholder='Enter you last name'  className='w-full h-9 p-1 bg-gray-100 rounded-md outline-none'/>
                </div>
                <div>
                    <label className='font-semibold'>Email</label><br />
                    <input type="email" className='w-full h-9 p-1 bg-gray-100 rounded-md outline-none'/>
                </div>
                <div>
                    <label className='font-semibold'>Password</label><br />
                    <input type="password" className='w-full h-9 p-1 bg-gray-100 rounded-md outline-none' />
                </div>
                <div>
                    <label className='font-semibold'>Phone Number</label><br />
                    <input type="number" className='w-full h-9 p-1 bg-gray-100 rounded-md outline-none'/>
                </div>
                <div className='text-gray-700 mt-2'>
                    By creating an account you agree to our <span className='text-blue-400 cursor-pointer'>Terms & Privacy</span>
                </div>
                <button type='submit' className='bg-blue-400 cursor-pointer h-10 rounded-md text-white'>Sign Up</button>
            </form>
        </div>
    )
}

export default Form