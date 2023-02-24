"use client"


import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Search() {
  const [inputval, setInputVal] = useState("")

  const router = useRouter()

  const handleSubmit =(e)=>{
  e.preventDefault()
  if(!inputval)return
    router.push(`/search/${inputval}`)
  }

  return (
    <form 
    onSubmit={handleSubmit}
    className='flex max-w-6xl mx-auto justify-between items-center px-5'>
      <input type="text" 
      value={inputval}
      onChange={((e)=>setInputVal(e.target.value))}
      placeholder='Search Keywords...' 
      className='flex-1 w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent'/>
      <button disabled={!inputval} type='submit' className='text-amber-600  disabled:text-gray-400'>Search</button>
    </form>
  )
}
