const TableTitle = () => {
  return (
    <div className="flex justify-between w-full px-10 py-6 font-bold  border-orange-500 border-b-[1px] bg-gray-300 text-color-text rounded-t-md ms-4">
      <h4 className="flex-1">Title</h4>
      <h4 className="flex-1">Category</h4>
      <h4 className="flex-1">Amount</h4>
      <h4 className="flex-1">Actions</h4>
    </div>
  );
};

export default TableTitle;
