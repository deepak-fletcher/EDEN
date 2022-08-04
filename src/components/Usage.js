import {React,useState} from 'react'
import logo from '../assets/logo.png';
import solo from '../assets/solo.png';
import solooff from '../assets/solooff.png';
import teams from '../assets/teams.png';
import teamson from '../assets/teamson.png';
import ButtonEden from './Button';
import SetupForm from './SetupForm.js';
import TopComponent from './TopComponent';
import ProgressBar from './ProgressBar';

const Usage = () => {
  let [counter,setCounter]=useState(0)
  let [data, setData]=useState("")



  const counterToOne=()=>{
    setCounter(1)
    setData("Solo")
  }
  const counterToTwo=()=>{
    setCounter(2)
    setData("Team")
  }



  return (
    <div class="mb-[5%] mt-[5%]">
    <TopComponent></TopComponent>
    <div class="h-[48px] mt-[3%] mb-[3%] w-full md:w-[600px] ml-auto mr-auto">
                <ProgressBar step="3"></ProgressBar>
    </div>
    <div class="h-15   mt-[50px] md:mt-[80px]">
        <p class="text-2xl md:text-3xl font-inter m-auto font-extrabold">How are you planning to use Eden?</p>
        <p class="text-sm font-inter m-auto font-thin p-5 text-gray-500">We'll streamline your setup experience accordingly.</p>
    </div>
    <div class="mt-[1%]">
       <div class="flex flex-row w-[350px] md:w-[400px] space-x-[10px] md:space-x-[20px] h-[185px] m-auto" >
            <div class={`w-[170px] md:w-[190px] h-[180px] hover:bg-gray-200 boxes ${counter==1? "border-[#475AFF]":"border-[#000000]"}`} onClick={counterToOne}>
            <img src={counter==1?solo:solooff} class="mt-[8%] ml-[5%]"></img>
            <p class="text-left font-bold pl-5 pt-2">For Myself</p>
            <p class="text-left text-gray-400 pl-5 pt-2">
                Write better. Think<br></br>
                more clearly. Stay<br></br> organized.
            </p>
            </div>
            <div class={`w-[170px] md:w-[190px] h-[180px] hover:bg-gray-200 boxes ${counter==2? "border-[#475AFF]":"border-[#000000]"}`} onClick={counterToTwo}>
            <img src={counter==2?teamson:teams} class="mt-[8%] ml-[5%]"></img>
            <p class="text-left font-bold pl-5 pt-2">With my team</p>
            <p class="text-left text-gray-400 pl-5 pt-2">
                Wikis, docs, tasks &<br></br>
                projects, all in one<br></br> place.
            </p>
            </div>
            
       </div>
       <ButtonEden nav="/complete" name="Create Workspace" data={data}></ButtonEden>
    </div>
    
    
</div>
  )
}

export default Usage