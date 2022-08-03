import React from 'react'
import logo from '../assets/logo.png';
import solo from '../assets/solo.png';
import teams from '../assets/teams.png';
import SetupForm from './SetupForm.js';
const Usage = () => {
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
        <p class="text-2xl md:text-3xl font-inter m-auto font-extrabold">How are you planning to use Eden?</p>
        <p class="text-sm font-inter m-auto font-thin p-5 text-gray-500">We'll streamline your setup experience accordingly.</p>
    </div>
    <div class="mt-[1%]">
       <div class="flex flex-row w-[350px] md:w-[400px] space-x-[10px] md:space-x-[20px] h-[185px] m-auto">
            <div class="w-[170px] md:w-[190px] h-[180px] border-[#475AFF] boxes ">
            <img src={solo} class="mt-[8%] ml-[5%]"></img>
            <p class="text-left font-bold pl-5 pt-2">For Myself</p>
            <p class="text-left text-gray-400 pl-5 pt-2">
                Write better. Think<br></br>
                more clearly. Stay<br></br> organized.
            </p>
            </div>
            <div class="w-[170px] md:w-[190px] h-[180px] border-[#000000] boxes">
            <img src={teams} class="mt-[8%] ml-[5%]"></img>
            <p class="text-left font-bold pl-5 pt-2">With my team</p>
            <p class="text-left text-gray-400 pl-5 pt-2">
                Wikis, docs, tasks &<br></br>
                projects, all in one<br></br> place.
            </p>
            </div>
            
       </div>
       <div class="flex flex-row">
        <div class="flex-none grow">
           
        </div>
        <p class="submitField hover:bg-[#7D7DFF] w-[350px] md:w-[400px] p-2 hover:cursor-pointer focus:bg-[#7D7DFF]">Create Workspace</p>
        <div class="flex-none grow">
        </div>
                   
    </div>
       
    </div>
    
    
</div>
  )
}

export default Usage