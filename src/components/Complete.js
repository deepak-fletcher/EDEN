import React from 'react'
import logo from '../assets/logo.png';
import TopComponent from './TopComponent';
import complete from '../assets/complete.png';
import solo from '../assets/solo.png';
import teams from '../assets/teams.png';
import ButtonEden from './Button';
import SetupForm from './SetupForm.js';
const Complete = () => {
  return (
    <div class="mb-[5%] mt-[5%]">
    <TopComponent></TopComponent>
    <div class="h-[48px] mt-[3%] mb-[3%]">
            Progress bar
    </div>
    <div class="mt-[1%]">
       <div class="flex flex-row w-[350px] md:w-[400px] space-x-[10px] md:space-x-[20px] h-[185px] m-auto">
       <img src={complete} class="m-auto"></img>
            
       </div>
    </div>
    <div class="h-15">
        <p class="text-2xl md:text-3xl font-inter m-auto font-extrabold">Congratulations, Eren!</p>
        <p class="text-sm font-inter m-auto font-thin p-5 text-gray-500">You have completed onboarding, you can start using Eden!</p>
    </div>
    <div >
       
       <ButtonEden nav="/" name="Launch Eden"></ButtonEden>
    </div>
    
    
</div>
  )
}

export default Complete