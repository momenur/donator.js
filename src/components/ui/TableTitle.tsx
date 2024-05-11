const TableTitle = () => {
  return (
    <div className="flex justify-between w-full px-2 md:px-10 py-2 md:py-6 font-bold  border-orange-500 border-b-[1px] bg-gray-300 text-color-text text-xs md:text-lg rounded-t-md md:ms-4">
      <h4 className="flex-1 truncate">Title</h4>
      <h4 className="flex-1 truncate">Category</h4>
      <h4 className="flex-1 truncate">Amount</h4>
      <h4 className="flex-1 truncate">Actions</h4>
    </div>
  );
};

export default TableTitle;
