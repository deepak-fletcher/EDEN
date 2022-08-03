import React from 'react';
import logo from '../assets/logo.png';
import Form from './Form.js'

const Welcome = () => {
  return (
    <div class="mb-[5%] mt-[5%]">
        <div class="flex flex-row">
            <div class="flex-none grow h-14">
               
            </div>
            <div class="w-45 h-14 flex flex-row">
                <img src={logo} class="m-auto pr-1"></img>
                <p class="text-3xl font-inter pl-1 m-auto font-extrabold">Eden</p>
            </div>
            <div class="flex-none grow h-14">
            </div>
                       
        </div>
        <div class="h-[48px] mt-[3%] mb-[3%]">
                Progress bar
        </div>
        <div class="h-15">
            <p class="text-2xl md:text-3xl font-inter m-auto font-extrabold">Welcome! First things first...</p>
            <p class="text-sm font-inter m-auto font-thin p-5 text-gray-500">You can always change them later.</p>
        </div>
        <div>
            <Form label1="Full Name" label2="Display Name" placeHolder1="Steve Jobs" placeHolder2="Steve" buttonName="Create Workspace"></Form>
        </div>
        
    </div>
  )
}

export default Welcome