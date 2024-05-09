import { Button } from "@/components/ui/button";
import donationHeroImage from "../../assets/images/donate4.jpg";

const DonationsBanner = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center gap-32 md:flex-row">
      <div className="">
        <Button className="px-10 py-8 text-2xl rounded-full md:mt-20 bg-secondary-gradient">
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
