import React from 'react';
import { useNavigate } from "react-router-dom";




const Form = (props) => {
    let navigate = useNavigate();
    const onSubmit = () =>{
        navigate("/setup")
    }
  return (
    <div class="mt-[1%]">
        <form onSubmit={onSubmit} class="w-[350px] md:w-[400px] text-left m-auto">
            <p class="text-sm font-inter m-auto font-bold pl-2 pt-4 pb-3 ml-[1%]">
                {props.label1}
            </p>
            <input class="inputField"  name="inputFieldOne" placeholder={props.placeHolder1}>
            </input>
            <p class="text-sm font-inter m-auto font-bold pl-2 pt-4 pb-3 ml-[1%]">
                {props.label2}
            </p>
            <input class="inputField"  name="inputFieldTwo" placeholder={props.placeHolder2}>
            </input>
            <input  type="submit" class="submitField hover:bg-[#7D7DFF] md:focus:bg-[#7D7DFF] hover:cursor-pointer"  value={props.buttonName}>
            </input>
        </form>
    </div>
  )
}

export default Form