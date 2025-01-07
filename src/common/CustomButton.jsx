import React from "react";

const CustomButton = ({ text, classStyle }) => {
    return (
        <button
            className={`bg-gradient-to-r from-[#3A3EF5] to-[#32C8F1] shadow-inner shadow-[#BF97FF3D] text-white font-semibold rounded-[57px] hover:scale-105 transition-all duration-700 ease-in-out text-base sm:text-xl sm:leading-custom-lg ${classStyle}
`}> {text}</button>
    );
};
export default CustomButton;