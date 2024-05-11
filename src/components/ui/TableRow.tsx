import { FaEdit, FaTrash } from "react-icons/fa";
import { Button } from "./button";
import { useDeleteDonationsMutation } from "@/redux/api/api";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

type TDonationProps = {
  title: string;
  category: string;
  amount: string;
  id: string;
};

const TableRow = ({ title, category, amount, id }: TDonationProps) => {
  const [deletePost, { isLoading: isDeleting }] = useDeleteDonationsMutation();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deletePost(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  if (isDeleting) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex justify-between px-2 w-full md:px-10 py-2 md:py-6 md:text-xl bg-gray-200 md:ms-4 border-orange-500 border-b-[1px] text-xs">
      <h4 className="flex-1 truncate">{title}</h4>
      <h4 className="flex-1 truncate">{category}</h4>
      <h4 className="flex-1 truncate">{amount}</h4>
      <div className="flex flex-1 gap-6">
        <Link to={`edit-donation/${id}`}>
          <Button className="bg-green-500">
            <FaEdit />
          </Button>
        </Link>
        <Button
          variant="outline"
          onClick={handleDelete}
          className="text-white bg-secondary-gradient"
        >
          <FaTrash />
        </Button>
      </div>
    </div>
  );
};

export default TableRow;
