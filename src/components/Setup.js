import React from 'react';
import logo from '../assets/logo.png';
import SetupForm from './SetupForm.js';

const Setup = () => {
  return (
    <div class="mb-[5%] mt-[5%]">
    <div class="flex flex-row">
        <div class="flex-none grow h-14">
           
        </div>
        <div class="w-30 h-14 flex flex-row">
            <img src={logo} class="m-auto"></img>
            <p class="text-3xl font-inter m-auto font-extrabold">Eden</p>
        </div>
        <div class="flex-none grow h-14">
        </div>
                   
    </div>
    <div class="h-[48px] mt-[3%] mb-[3%]">
            Progress bar
    </div>
    <div class="h-15">
        <p class="text-2xl md:text-3xl font-inter m-auto font-extrabold">Lets set up a home for all your work</p>
        <p class="text-sm font-inter m-auto font-thin p-5 text-gray-500">You can always create another workspace later.</p>
    </div>
    <div>
        <SetupForm label1="Workspace Name" label2="Workspace URL" placeHolder1="Eden" placeHolder2="Example" buttonName="Create Workspace"></SetupForm>
    </div>
    
</div>
  )
}

export default Setup