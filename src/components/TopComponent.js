import React from 'react';
import logo from '../assets/logo.png';

const TopComponent = () => {
  return (
    <div class="flex flex-row">
        <div class="flex-none grow h-14">
           
        </div>
        <div class="w-45 h-14 flex flex-row">
            <img src={logo} class="m-auto pr-1"></img>
            <p class="text-3xl font-inter m-auto pl-1 font-extrabold">Eden</p>
        </div>
        <div class="flex-none grow h-14">
        </div>
                   
    </div>
  )
}

export default TopComponent