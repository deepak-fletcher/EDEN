import React from 'react';
import logo from '../assets/logo.png';
import Form from './Form.js'
import TopComponent from './TopComponent';
import ProgressBar from './ProgressBar';

const Welcome = () => {
  return (
    <div class="mb-[5%] mt-[5%]">
        <TopComponent></TopComponent>
        <div class="h-[48px] mt-[3%] mb-[3%] w-full md:w-[600px] ml-auto mr-auto">
                <ProgressBar step="1"></ProgressBar>
        </div>
        <div class="h-15  mt-[50px] md:mt-[100px]">
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