import React from "react";
import logo from "../assets/logo.png";
import TopComponent from "./TopComponent";
import complete from "../assets/complete.png";
import solo from "../assets/solo.png";
import teams from "../assets/teams.png";
import ButtonEden from "./Button";
import SetupForm from "./SetupForm.js";
import ProgressBar from "./ProgressBar";

const Complete = (props) => {
  return (
    <div class="mb-[5%] mt-[5%]">
      {/* Top most component containing the eden logo and text */}
      <TopComponent></TopComponent>

      {/* Div tagthat contains the progress bar component */}
      <div class="h-[48px] mt-[3%] mb-[3%] w-[350px]] md:w-[450px] ml-auto mr-auto">
        {/*Progress bar component with value 1 being passed as a prop so that the first section of the progress abr can be highlighted*/}
        <ProgressBar step="4"></ProgressBar>
      </div>
      <div class=" mt-[50px] md:mt-[80px]">
        <div class="flex flex-row w-[350px] md:w-[400px] space-x-[10px] md:space-x-[20px] h-[185px] m-auto">
          <img src={complete} class="m-auto"></img>
        </div>
      </div>
      <div class="h-15">
        <p class="text-2xl md:text-3xl font-inter m-auto font-extrabold">
          Congratulations, {props.name}!
        </p>
        <p class="text-sm font-inter m-auto font-thin p-5 text-gray-500">
          You have completed onboarding, you can start using Eden!
        </p>
      </div>
      <div>
        {/* The button custom component which accept props values to do functionalities based on the values passed thus making it modular */}
        <ButtonEden nav="/" name="Launch Eden"></ButtonEden>
      </div>
    </div>
  );
};

export default Complete;
