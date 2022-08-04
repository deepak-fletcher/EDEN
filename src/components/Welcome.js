import { React, useState, useEffect } from "react";
import Form from "./Form.js";
import TopComponent from "./TopComponent";
import ProgressBar from "./ProgressBar";

const Welcome = (props) => {
  // sending the name  of the registered user to the parent component using function
  const valueOfName = (e) => {
    props.valueOfName(e);
    console.log("Welcome " + e);
  };

  return (
    <div class="mb-[5%] mt-[5%]">
      {/* Top most component containing the eden logo and text */}
      <TopComponent></TopComponent>

      {/* Div tagthat contains the progress bar component */}
      <div class="h-[48px] mt-[3%] mb-[3%] w-[350px] md:w-[450px] ml-auto mr-auto">
        {/*Progress bar component with value 1 being passed as a prop so that the first section of the progress abr can be highlighted*/}
        <ProgressBar step="1"></ProgressBar>
      </div>

      {/* This Div tag encloses the text parts of each page */}
      <div class="h-15  mt-[50px] md:mt-[80px]">
        <p class="text-2xl md:text-3xl font-inter m-auto font-extrabold">
          Welcome! First things first...
        </p>
        <p class="text-sm font-inter m-auto font-thin p-5 text-gray-500">
          You can always change them later.
        </p>
      </div>

      {/* This div tag encloses the form that accepts the username and displayname */}
      <div>
        {/* Form component is called with the values to be displayed in the inner components of form as props this helps with reusability of the form */}
        <Form
          label1="Full Name"
          label2="Display Name"
          placeHolder1="Steve Jobs"
          placeHolder2="Steve"
          buttonName="Create Workspace"
          valueOfName={valueOfName}
        ></Form>
      </div>
    </div>
  );
};

export default Welcome;
