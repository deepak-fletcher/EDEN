import React from 'react';
import { useNavigate } from "react-router-dom";




const SetupForm = (props) => {
    let navigate = useNavigate();
    const onSubmit = () =>{
        navigate("/setup")
    }
  return (
    <div class="mt-[1%]">
        <form onSubmit={onSubmit} class="w-[400px] text-left m-auto">
            <p class="text-sm font-inter m-auto font-bold pl-2 pt-4 pb-3 ml-[1%]">
                {props.label1}
            </p>
            <input class="inputField"  name="inputFieldOne" placeholder={props.placeHolder1}>
            </input>
            <div class="flex flex-row">
                <p class="text-sm font-inter m-auto mr-[5px] font-bold pl-2 pt-4 pb-3 ml-[1%]">
                    {props.label2} 
                </p>
                <p class="text-sm font-inter m-auto font-bold font-inter text-gray-400  pt-4 pb-3 ml-[1%]">(optional)</p>
            </div>
            
            <label class="labelField font-inter text-gray-400">www.eden.com/</label>
            <input class="urlField"  name="inputFieldTwo" placeholder={props.placeHolder2}>
            </input>
            <input  type="submit" class="submitField"  value={props.buttonName}>
            </input>
        </form>
    </div>
  )
}

export default SetupForm