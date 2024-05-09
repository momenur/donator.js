import Title from "@/components/ui/Title";

const CreateDonation = () => {
  return (
    <form className="w-full">
      <div className="flex items-center justify-center -mt-20">
        <Title title="Add Donations" />
      </div>

      <div className="flex w-full gap-10 px-8 py-10 bg-gray-100 rounded-md">
        <div className="flex flex-col w-full gap-2">
          <label className="font-thin" htmlFor="">
            Donation Image URL
          </label>
          <input
            className="px-4 h-[40px] text-sm font-semibold border-2 rounded-md focus:bg-gray-200 focus:border-2 focus:outline-none focus:border-e-0"
            type="text"
            name=""
            id=""
            placeholder="Enter Donation Image URL"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label className="font-thin" htmlFor="">
            Donation Image URL
          </label>
          <input
            className="px-4 h-[40px] text-sm font-semibold border-2 rounded-md focus:bg-gray-200 focus:border-2 focus:outline-none focus:border-e-0"
            type="text"
            name=""
            id=""
            placeholder="Enter Donation Image URL"
          />
        </div>
      </div>
    </form>
  );
};

export default CreateDonation;
