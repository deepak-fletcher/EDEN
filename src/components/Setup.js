import React from "react";
import SetupForm from "./SetupForm.js";
import TopComponent from "./TopComponent";
import ProgressBar from "./ProgressBar";

const Setup = () => {
  return (
    <div class="mb-[5%] mt-[5%]">
      {/* Top most component containing the eden logo and text */}
      <TopComponent></TopComponent>

       {/* Div tagthat contains the progress bar component */}
      <div class="h-[48px] mt-[3%] mb-[3%] w-[350px] md:w-[450px] ml-auto mr-auto">
         {/*Progress bar component with value 1 being passed as a prop so that the first section of the progress abr can be highlighted*/}
        <ProgressBar step="2"></ProgressBar>
      </div>

       {/* This Div tag encloses the text parts of each page */}
      <div class="h-15  mt-[50px] md:mt-[80px]">
        <p class="text-2xl md:text-3xl font-inter m-auto font-extrabold">
          Lets set up a home for all your work
        </p>
        <p class="text-sm font-inter m-auto font-thin p-5 text-gray-500">
          You can always create another workspace later.
        </p>
      </div>

      {/* This div tag encloses the form that accepts the username and displayname */}
      <div>
        {/* Setup Form component is called with the values to be displayed in the inner components of form as props this helps with reusability of the form */}
        <SetupForm
          label1="Workspace Name"
          label2="Workspace URL"
          placeHolder1="Eden"
          placeHolder2="Example"
          buttonName="Create Workspace"
        ></SetupForm>
      </div>
    </div>
  );
};

export default Setup;
