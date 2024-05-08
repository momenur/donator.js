import { Button } from "@/components/ui/button";
import donationHeroImage from "../../assets/images/donate4.jpg";

const DonationsBanner = () => {
  return (
    <div className="flex items-center justify-center gap-32">
      <div className="">
        <Button className="px-10 py-8 mt-20 text-2xl rounded-full bg-secondary-gradient">
          Donate Now
        </Button>
      </div>
      <img
        className="h-[500px] w-full rounded-s-full"
        src={donationHeroImage}
        alt=""
      />
    </div>
  );
};

export default DonationsBanner;
