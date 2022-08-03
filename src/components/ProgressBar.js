import React from 'react'

const ProgressBar = (props) => {
  let step = props.step
  console.log(props)
  return (
    <div class="p-4 flex justify-between items-center">
        <div class="relative flex flex-col items-center text-gray-600">
            <div class={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex  items-center justify-center ${step>0? "bg-[#475AFF] text-white font-bold":""}`}>1</div>
        </div>
        <div class={`flex-auto border-t-2 transition duration-500 ease-in-out ${step>0? "border-[#475AFF]":""}`}>

        </div>
        <div class="relative flex flex-col items-center text-gray-600">
            <div class={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex  items-center justify-center ${step>1? "bg-[#475AFF] text-white font-bold":""}`}>2</div>
        </div>
        <div class={`flex-auto border-t-2 transition duration-500 ease-in-out ${step>1? "border-[#475AFF]":""}`}>

        </div>
        <div class="relative flex flex-col items-center text-gray-600">
            <div class={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex  items-center justify-center ${step>2? "bg-[#475AFF] text-white font-bold":""}`}>3</div>
        </div>
        <div class={`flex-auto border-t-2 transition duration-500 ease-in-out ${step>2? "border-[#475AFF]":""}`}>

        </div>
        <div class="relative flex flex-col items-center text-gray-600">
            <div class={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex  items-center justify-center ${step>3? "bg-[#475AFF] text-white font-bold":""}`}>4</div>
        </div>
        
    </div>
  )
}

export default ProgressBar