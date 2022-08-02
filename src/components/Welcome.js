import React from 'react';
import logo from '../assets/logo.png';

const Welcome = () => {
  return (
    <div>
        
        <div class="flex flex-row mt-[5%]">
            <div class="flex-none grow h-14">
               
            </div>
            <div class="w-30 h-14 flex flex-row">
                <img src={logo} class="m-auto"></img>
                <p class="text-3xl font-inter m-auto font-extrabold">Eden</p>
            </div>
            <div class="flex-none grow h-14">
                
            </div>
            
        </div>
        
    </div>
  )
}

export default Welcome