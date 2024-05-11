import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUpdateDonationsMutation } from "@/redux/api/api";
import { SubmitHandler, useForm } from "react-hook-form";

type TFormInput = {
  image: string;
  description: string;
  title: string;
  amount: string;
  category: string;
};

const EditDonation = () => {
  const currentUrl = window.location.href;

  // Create a URL object
  const urlObject = new URL(currentUrl);

  // Get the pathname which contains the id
  const pathname = urlObject.pathname;

  // Split the pathname by '/'
  const parts = pathname.split("/");

  // Get the last part which is the id
  const lastId = parts[parts.length - 1];

  console.log(lastId);

  const [updateDonation, { data, isLoading: isUpdating }] =
    useUpdateDonationsMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormInput>();

  const onSubmit: SubmitHandler<TFormInput> = (data) => {
    const updateData = {
      id: lastId,
      data,
    };
    console.log(updateData);
    updateDonation(updateData);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
        <div className="">
          <Label htmlFor="image" className="text-right">
            Image
          </Label>
          <Input
            id="image"
            defaultValue="Image URl"
            className=""
            {...register("image", { required: true })}
          />
          {errors.image && errors.image.type === "required" && (
            <span className="w-full text-xs text-color-text">
              This Filed is Required
            </span>
          )}
        </div>

        <div className="">
          <Label htmlFor="title" className="text-right">
            Title
          </Label>
          <Input
            id="title"
            defaultValue="Title"
            className="col-span-3"
            {...register("title", { required: true })}
          />
        </div>

        <div className="">
          <Label htmlFor="amount" className="text-right">
            Amount
          </Label>
          <Input
            id="amount"
            type="number"
            defaultValue=""
            className=""
            {...register("amount", { required: true })}
          />
        </div>

        <div className="">
          <Label htmlFor="category" className="text-right">
            Category
          </Label>
          <Input
            id="category"
            defaultValue="Category"
            className="col-span-3"
            {...register("category", { required: true })}
          />
        </div>
        <div className="">
          <Label htmlFor="description" className="text-right">
            Description
          </Label>
          <Input
            id="description"
            defaultValue="Description"
            className="col-span-3"
            {...register("description", { required: true })}
          />
        </div>
        <Button type="submit">Save changes</Button>
      </form>
    </Container>
  );
};

export default EditDonation;