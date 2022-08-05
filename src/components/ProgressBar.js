import React from "react";

const ProgressBar = (props) => {
  let step = props.step;
  // console.log(props);
  return (
    <div class="p-4 flex justify-between items-center">
      <div class="relative flex flex-col items-center text-gray-600">
        <div
          class={`rounded-full transition duration-500 ease-in-out  border-gray-300 h-12 w-12 flex  items-center justify-center ${
            step > 0 ? "bg-[#475AFF] border-1 text-white font-bold" : "border-2"
          }`}
        >
          1
        </div>
      </div>
      <div class={`flex-auto transition duration-500 ease-in-out`}>
        {step > 0 && (
          <span class="flex flex-row">
            <div
              class={`flex-auto transition border-t-2 w-1/2 duration-500 ease-in-out ${
                step > 0 ? "border-[#475AFF]" : ""
              }`}
            ></div>
            <div
              class={`flex-auto transition border-t-2 w-1/2 duration-500 ease-in-out ${
                step > 1 ? "border-[#475AFF]" : ""
              }`}
            ></div>
          </span>
        )}
      </div>
      <div class="relative flex flex-col items-center text-gray-600">
        <div
          class={`rounded-full transition duration-500 ease-in-out border-gray-300 h-12 w-12 flex  items-center justify-center ${
            step > 1 ? "bg-[#475AFF] border-1 text-white font-bold" : "border-2"
          }`}
        >
          2
        </div>
      </div>
      <div class={`flex-auto transition duration-500 ease-in-out`}>
        {step > 1 ? (
          <span class="flex flex-row">
            <div
              class={`flex-auto transition border-t-2 w-1/2 duration-500 ease-in-out ${
                step > 1 ? "border-[#475AFF]" : ""
              }`}
            ></div>
            <div
              class={`flex-auto transition border-t-2 w-1/2 duration-500 ease-in-out ${
                step > 2 ? "border-[#475AFF]" : ""
              }`}
            ></div>
          </span>
        ) : (
          <span class="flex flex-row">
            <div
              class={`flex-auto transition border-t-2 duration-500 ease-in-out`}
            ></div>
          </span>
        )}
      </div>
      <div class="relative flex flex-col items-center text-gray-600">
        <div
          class={`rounded-full transition duration-500 ease-in-out  border-gray-300 h-12 w-12 flex  items-center justify-center ${
            step > 2 ? "bg-[#475AFF] border-1 text-white font-bold" : "border-2"
          }`}
        >
          3
        </div>
      </div>
      <div class={`flex-auto transition duration-500 ease-in-out`}>
        {step > 2 ? (
          <span class="flex flex-row">
            <div
              class={`flex-auto transition border-t-2 w-1/2 duration-500 ease-in-out ${
                step > 2 ? "border-[#475AFF]" : ""
              }`}
            ></div>
            <div
              class={`flex-auto transition border-t-2 w-1/2 duration-500 ease-in-out ${
                step > 3 ? "border-[#475AFF]" : ""
              }`}
            ></div>
          </span>
        ) : (
          <span class="flex flex-row">
            <div
              class={`flex-auto transition border-t-2 duration-500 ease-in-out`}
            ></div>
          </span>
        )}
      </div>
      <div class="relative flex flex-col items-center text-gray-600">
        <div
          class={`rounded-full transition duration-500 ease-in-out  border-gray-300 h-12 w-12 flex  items-center justify-center ${
            step > 3 ? "bg-[#475AFF] border-1 text-white font-bold" : "border-2"
          }`}
        >
          4
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
