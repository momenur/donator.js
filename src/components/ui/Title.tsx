import React from "react";

type TitleProps = {
  title: string;
  left?: boolean;
};

const Title: React.FC<TitleProps> = ({ title, left }) => {
  return (
    <div className={`flex ${left ? "" : "justify-end"}`}>
      <div className="flex flex-col gap-2 mt-32 mb-20">
        <h1 className="text-3xl font-medium uppercase">{title}</h1>
        <div className="flex items-center gap-1">
          <div className="w-[40px] h-[8px] bg-secondary-gradient rounded-full"></div>
          <div className="w-[30px] h-[6px] bg-secondary-gradient rounded-full"></div>
          <div className="w-[20px] h-[4px] bg-secondary-gradient rounded-full"></div>
          <div className="w-[10px] h-[2px] bg-secondary-gradient rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Title;
