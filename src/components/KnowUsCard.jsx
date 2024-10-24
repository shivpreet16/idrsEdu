import React from "react";

const KnowUsCard = ({ img, text, right, image_type,name }) => {
    
  return (
    <div className={`h-1/2 flex ${right ? "flex-row" : "flex-row-reverse"}`}>
      <div className={`w-1/2 flex justify-center flex-col gap-2 items-center ${!right?'bg-secondary':'bg-primary'}`}>
        <img
          src={img}
          alt=""
          className={`${image_type === 'round' ? 'rounded-full h-[300px] w-[300px] object-cover' : 'h-full w-full object-cover'}`}
        />
        <span className={`${right?'text-secondary':'text-primary'} italic`}>{name}</span>
      </div>
      <div
        className={`${
          !right ? "bg-primary text-secondary" : "bg-secondary text-primary"
        } text-[21px] w-1/2 flex justify-center items-center p-24 text-justify tracking-[1px]`}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

export default KnowUsCard;
