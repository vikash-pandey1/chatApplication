import React from 'react'
import { HiSearch } from "react-icons/hi";
import OtherUsers from './OtherUsers';
function Sidebaar() {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <form action="" className='flex items-center gap-2'>
        <input type="text" className='input input-bordered rounded-md' placeholder='search..' />
        <button type='submit' className='btn btn-circle bg-zinc-500'>
        <HiSearch className='w-6 h-6 outline-none' />

        </button>
      </form>
      <div className='divider px-3'>
        <OtherUsers/>
      </div>
    </div>
  )
}

export default Sidebaar
