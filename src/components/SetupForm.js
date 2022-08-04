import {React,useState} from 'react';
import { useNavigate } from "react-router-dom";




    const SetupForm = (props) => {
    let navigate = useNavigate();
    const [name,setName] = useState('')
    const [url,setURL] = useState('')
    const handleName=(e)=>{
        setName(e.target.value)
    }
    const handleURL=(e)=>{
        if(url!=='')
            setURL("www.eden.com/"+e.target.value)            
    }
    const onSubmit = () =>{
        if(name!==''&&url!=='')
        {
            navigate("/usage")
        }
        else if(name!=='')
        {
            setURL(`www.eden.com/${name}`)
            navigate("/usage")
        }
        else
        {
            alert("please enter a workspace name")
        }
        
        
    }
  return (
    <div class="mt-[1%]">
        <form onSubmit={onSubmit} class="w-[350px] md:w-[400px] text-left m-auto">
            <p class="text-sm font-inter m-auto font-bold pl-2 pt-4 pb-3 ml-[1%]">
                {props.label1}
            </p>
            <input class="inputField" onChange={handleName}  name="inputFieldOne" placeholder={props.placeHolder1}>
            </input>
            <div class="flex flex-row">
                <p class="text-sm font-inter m-auto mr-[5px] font-bold pl-2 pt-4 pb-3 ml-[1%]">
                    {props.label2} 
                </p>
                <p class="text-sm font-inter m-auto font-bold font-inter text-gray-400  pt-4 pb-3 ml-[1%]">(optional)</p>
            </div>
            <div class="flex flex-row">
                <p class="labelField align-middle  pt-2.5 pb-2 pl-1 pr-1 text-center text-xs md:text-sm font-inter text-gray-400">www.eden.com/</p>
                <input class="urlField" onChange={handleURL} name="inputFieldTwo" placeholder={props.placeHolder2}></input>
            </div>
            
            <input  type="submit" class="submitField hover:bg-[#7D7DFF] hover:cursor-pointer focus:bg-[#7D7DFF]"  value={props.buttonName}>
            </input>
        </form>
    </div>
  )
}

export default SetupForm