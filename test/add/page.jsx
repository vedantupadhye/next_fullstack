import { addOwner } from '@/app/lib/actions'
import React from 'react'

const Page = () => {
    // const handleform =async(formData)=>{
    //     "use server"
    //     // const username = formData.get("username")
    //     // console.log(username)
        
    // }
  return (
    <div>
        <form action={addOwner}>
            <input type='text' name='title' placeholder='title' required/>
            <input type='text' name='name' placeholder='name' required/>
            <input type='number' name='price' placeholder='price' required/>
            <button>send</button>
        </form>
    </div>
  )
}

export default Page