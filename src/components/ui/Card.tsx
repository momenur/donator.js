import React from "react";
import { Button } from "./button";
import { Link } from "react-router-dom";
type TDonation = {
  _id: string;
  title: string;
  image: string;
  category: string;
  amount: string;
  description: string;
};
type TDonationProps = {
  donation: TDonation;
};

const Card: React.FC<TDonationProps> = ({ donation }) => {
  return (
    <div className="w-full max-w-[380px] border-b-[4px] border-t-[4px] border-[#EF6524] flex flex-col justify-center items-center py-6 gap-6 mt-8 rounded-t-full rounded-b-full shadow-2xl">
      <div className="flex items-center justify-center rounded-full shadow-2xl bg-primary-gradient size-80">
        <img
          className="p-1 border-2 rounded-full size-80"
          src={donation.image}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-1 px-6">
        <h1 className="text-3xl font-semibold">{donation.title}</h1>
        <p className="font-bold text-color-text">{donation.category}</p>
        <p className="text-lg font-thin">
          <span className="text-color-text">Donation Amount: </span>
          {donation.amount}
        </p>
        <p className="text-justify text-gray-500 truncate max-h-[100px] text-wrap">
          {donation.description}
        </p>
        <Link to={`/donations/${donation._id}`}>
          <Button className=" max-w-[200px] mt-8 text-xl rounded-full bg-secondary-gradient">
            View Detail
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
