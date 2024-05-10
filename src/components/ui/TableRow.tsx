type TDonationProps = {
  title: string;
  category: string;
  amount: string;
};

const TableRow = ({ title, category, amount }: TDonationProps) => {
  return (
    <div className="flex justify-between w-full px-10 py-6 text-xl bg-gray-200 ms-4 border-orange-500 border-b-[1px]">
      <h4 className="flex-1">{title}</h4>
      <h4 className="flex-1">{category}</h4>
      <h4 className="flex-1">{amount}</h4>
      <div className="flex flex-1 gap-6">
        <p>edit</p>
        <p>delete</p>
      </div>
    </div>
  );
};

export default TableRow;
