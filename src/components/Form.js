import React from 'react'


const onSubmit = () =>{
    console.log("Submitted")
}

const Form = () => {
  return (
    <div class="mt-[1%]">
        <form onSubmit={onSubmit} class="w-[400px] text-left m-auto">
            <p class="text-sm font-inter m-auto font-bold pl-2 pt-4 pb-3 ml-[1%]">
                Full Name
            </p>
            <input class="inputField"  name="inputFieldOne" placeholder='Steve Jobs'>
            </input>
            <p class="text-sm font-inter m-auto font-bold pl-2 pt-4 pb-3 ml-[1%]">
                Display Name
            </p>
            <input class="inputField"  name="inputFieldTwo" placeholder='Steve Jobs'>
            </input>
            <input  type="submit" class="submitField"  value="Create Workspace">
            </input>
        </form>
    </div>
  )
}

export default Form