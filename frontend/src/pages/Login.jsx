import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [state, setState] = useState('Sign Up')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center justify-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border shadow-lg text-zinc-600 rounded-xl'>

        <p className='text-xl font-semibold'>
          {state === 'Sign Up' ? "Create Account" : "Login"}
        </p>

        <p>
          Please {state === 'Sign Up' ? "sign up" : "log in"} to book appointment
        </p>

        {/* Full Name ONLY for Sign Up */}
        {
          state === 'Sign Up' && (
            <div className='w-full'>
              <p>Full Name</p>
              <input
                className='w-full border border-zinc-300 rounded-md p-2 mt-1'
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
          )
        }

        {/* Email */}
        <div className='w-full'>
          <p>Email</p>
          <input
            className='w-full border border-zinc-300 rounded-md p-2 mt-1'
            type="email"
            onChange={(e) => setEmail(e.target.email)}
            value={email}
            required
          />
        </div>

        {/* Password */}
        <div className='w-full'>
          <p>Password</p>
          <input
            className='w-full border border-zinc-300 rounded-md p-2 mt-1'
            type="password"
            onChange={(e) => setPassword(e.target.password)}
            value={password}
            required
          />
        </div>

        <button className='w-full bg-primary text-white py-2 text-base rounded-md mt-1'>
          {state === 'Sign Up' ? "Create Account" : "Login"}
        </button>

        {
          state === 'Sign Up'
            ? <p>Already have an account? <span className='text-primary cursor-pointer underline' onClick={() => setState('Login')}>Login here</span></p>
            : <p>Don’t have an account? <span className='text-primary cursor-pointer underline' onClick={() => setState('Sign Up')}>Click here</span></p>
        }

      </div>
    </form>
  )
}

export default Login
