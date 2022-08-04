import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const SetupForm = (props) => {
  //setting up useState variables to be used for different functionalities of the form
  const [name, setName] = useState("");
  const [url, setURL] = useState("");
  let [error, setError] = useState("0");
  let navigate = useNavigate();

  //saves the changes taking place in Name field into name variable
  const handleName = (e) => {
    setName(e.target.value);
    setError(0);
  };

  //saves the changes taking place in URL field into url variable
  const handleURL = (e) => {
    if (url !== "") setURL("www.eden.com/" + e.target.value);
  };

  //Handles the functionalities when the submit button of the form is clicked and performs a very basic check on the form fields and displays appropriate message
  const onSubmit = (event) => {
    if (name !== "" && url !== "") {
      setError(0);
      navigate("/usage");
    } else if (name !== "") {
      setError(0);
      setURL(`www.eden.com/${name}`);
      navigate("/usage");
    } else {
      setError(1);
      event.preventDefault();
    }
  };

  return (
    <div class="mt-[1%]">
      {/* The Setup Form component which ahs both the name and display name fields */}
      <form onSubmit={onSubmit} class="w-[350px] md:w-[400px] text-left m-auto">
        <p class="text-sm font-inter m-auto font-bold pl-2 pt-4 pb-3 ml-[1%]">
          {props.label1}
        </p>
        <input
          class="inputField"
          onChange={handleName}
          name="inputFieldOne"
          placeholder={props.placeHolder1}
        ></input>
        <div class="flex flex-row">
          <p class="text-sm font-inter m-auto mr-[5px] font-bold pl-2 pt-4 pb-3 ml-[1%]">
            {props.label2}
          </p>
          <p class="text-sm font-inter m-auto font-bold font-inter text-gray-400  pt-4 pb-3 ml-[1%]">
            (optional)
          </p>
        </div>
        <div class="flex flex-row">
          <p class="labelField align-middle  pt-2.5 pb-2 pl-1 pr-1 text-center text-xs md:text-sm font-inter text-gray-400">
            www.eden.com/
          </p>
          <input
            class="urlField"
            onChange={handleURL}
            name="inputFieldTwo"
            placeholder={props.placeHolder2}
          ></input>
        </div>

        <input
          type="submit"
          class="submitField hover:bg-[#7D7DFF] hover:cursor-pointer focus:bg-[#7D7DFF]"
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

export default SetupForm;
