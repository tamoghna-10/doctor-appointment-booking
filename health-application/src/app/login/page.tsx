import React from 'react'
import AuthForm from '../components/AuthForm'

const page = () => {
  return (
    <AuthForm isSignUp={false} role="doctor" />
  )
}

export default page