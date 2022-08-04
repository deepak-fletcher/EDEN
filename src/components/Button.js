import {React, useState} from 'react';
import { useNavigate } from "react-router-dom";
const ButtonEden = (props) => {
    let navigate = useNavigate()
    let [error,setError]=useState(0)
    const handleClick = () =>{
        if(props.data=="")
        {
          setError(1)
        }
        else
        {
          setError(0)
          navigate(props.nav)
        }
        
    }
  return (
    <div>
    <div onClick={handleClick} class="flex flex-row">
        <div class="flex-none grow">
        </div>
        <p class="submitButton hover:bg-[#7D7DFF] w-350px md:w-[400px] p-2 hover:cursor-pointer focus:bg-[#7D7DFF]">{props.name}</p>
        <div class="flex-none grow">
        </div>
    </div>
    <div>
            {error===1 &&
                <p class="margin-auto pt-1 text-[#475AFF]">Please select an option</p>
            }   
        </div>
    </div>
  )
}

export default ButtonEden