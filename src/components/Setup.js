import React from 'react';
import logo from '../assets/logo.png';
import SetupForm from './SetupForm.js';
import TopComponent from './TopComponent';
import ProgressBar from './ProgressBar';

const Setup = () => {
  return (
    <div class="mb-[5%] mt-[5%]">
    <TopComponent></TopComponent>
    <div class="h-[48px] mt-[3%] mb-[3%] w-full md:w-[600px] ml-auto mr-auto">
              <ProgressBar step="2"></ProgressBar>
    </div>
    <div class="h-15  mt-[20%] md:mt-[5%]">
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