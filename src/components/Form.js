import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  //setting up useState variables to be used for different functionalities of the form
  let [name, setName] = useState("");
  let [displayName, setDisplayName] = useState("");
  let [error, setError] = useState("0");
  let navigate = useNavigate();


  //saves the changes taking place in Name field into name variable
  const handleName = (e) => {
    setName(e.target.value);
    setError(0);
  };

  //saves the changes taking place in Display field into name variable
  const handleDisplay = (e) => {
    setDisplayName(e.target.value);
    setError(0);
  };

  //Handles the functionalities when the submit button of the form is clicked and performs a very basic check on the form fields and displays appropriate message
  const onSubmit = (event) => {
    // console.log(name, displayName);
    if (name !== "" && displayName !== "" && /[a-zA-Z]/g.test(name) && /[a-zA-Z]/g.test(displayName)) {
      setError(0);
      navigate("/setup");
      props.valueOfName(name);
    } else {
      setError(1);
      event.preventDefault();
    }
  };
  return (
    <div class="mt-[1%]">
      {/* The form component which ahs both the name and display name fields */}
      <form onSubmit={onSubmit} class="w-[350px] md:w-[400px] text-left m-auto">
        <p class="text-sm font-inter m-auto font-bold pl-2 pt-4 pb-3 ml-[1%]">
          {props.label1}
        </p>
        <input
          class="inputField"
          name="inputFieldOne"
          onChange={handleName}
          placeholder={props.placeHolder1}
        ></input>
        <p class="text-sm font-inter m-auto font-bold pl-2 pt-4 pb-3 ml-[1%]">
          {props.label2}
        </p>
        <input
          class="inputField"
          name="inputFieldTwo"
          onChange={handleDisplay}
          placeholder={props.placeHolder2}
        ></input>
        <input
          type="submit"
          class="submitField hover:bg-[#7D7DFF] md:focus:bg-[#7D7DFF] hover:cursor-pointer"
          value={props.buttonName}
        ></input>
      </form>
      <div>
        {error === 1 && (
          <p class="margin-auto pt-1 text-[#475AFF]">Please enter the values</p>
        )}
      </div>
    </div>
  );
};

export default Form;
