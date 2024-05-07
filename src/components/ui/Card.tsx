import donateImage from "../../assets/images/donate1.jpg";
import { Button } from "./button";
const Card = () => {
  return (
    <div className="w-full max-w-[380px] border-b-[4px] border-t-[4px] border-[#EF6524] flex flex-col justify-center items-center py-6 gap-6 mt-8 rounded-t-full rounded-b-full shadow-2xl">
      <div className="flex items-center justify-center rounded-full shadow-2xl bg-primary-gradient size-80">
        <img
          className="p-1 border-2 rounded-full size-80"
          src={donateImage}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-1 px-6">
        <h1 className="text-3xl font-semibold">Donation Title</h1>
        <p className="font-bold text-color-text">Donation Category</p>
        <p className="text-lg font-thin">Donation Amount</p>
        <p className="text-justify text-gray-500 truncate max-h-[100px] text-wrap">
          Donation Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugiat modi vero aspernatur quia obcaecati, quod repellat est eveniet
          nam quisquam incidunt provident minus doloremque in officiis corporis
          sint id, eum neque qui nobis assumenda commodi. Atque dolorum nisi
          dignissimos distinctio.
        </p>
        <Button className=" max-w-[200px] mt-8 text-xl rounded-full bg-secondary-gradient">
          View Detail
        </Button>
      </div>
    </div>
  );
};

export default Card;
