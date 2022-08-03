import React from 'react';
import { useNavigate } from "react-router-dom";
const ButtonEden = (props) => {
    let navigate = useNavigate()
    const handleClick = () =>{
        navigate(props.nav)
    }
  return (
    <div onClick={handleClick} class="flex flex-row">
        <div class="flex-none grow">
        </div>
        <p class="submitButton hover:bg-[#7D7DFF] w-350px md:w-[400px] p-2 hover:cursor-pointer focus:bg-[#7D7DFF]">{props.name}</p>
        <div class="flex-none grow">
        </div>
    </div>
  )
}

export default ButtonEden