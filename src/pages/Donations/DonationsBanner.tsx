import { Button } from "@/components/ui/button";
import React from "react";

type TBannerProps = {
  image?: string;
};

const DonationsBanner: React.FC<TBannerProps> = ({ image }) => {
  console.log(image);
  return (
    <div className="flex flex-col-reverse items-center justify-center gap-32 md:flex-row">
      <div className="">
        {image ? (
          ""
        ) : (
          <Button className="px-10 py-8 text-2xl rounded-full md:mt-20 bg-secondary-gradient">
            Donate Now
          </Button>
        )}
      </div>
      <img
        className="h-[500px] w-full rounded-s-full"
        src={image ? image : "https://i.ibb.co/gW4rxgW/Donate4.jpg"}
        alt=""
      />
    </div>
  );
};

export default DonationsBanner;
