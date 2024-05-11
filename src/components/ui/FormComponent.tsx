import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./button";
import { useAddDonationsMutation } from "@/redux/api/api";

type TFormInput = {
  image: string;
  description: string;
  title: string;
  amount: string;
  category: string;
};

const FormComponent = () => {
  const [addDonation, { data, isLoading }] = useAddDonationsMutation();
  console.log(data, isLoading);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormInput>();

  const onSubmit: SubmitHandler<TFormInput> = (data) => {
    console.log(data);
    addDonation(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-10 py-16 rounded-lg bg-gray-50"
    >
      <h1 className="mb-16 text-2xl text-center">
        Please full fill all requirement.
      </h1>
      <div className="flex flex-col gap-6">
        <div className="flex w-full gap-10">
          <div className="w-full">
            <label className="block" htmlFor="image">
              Image URL
            </label>
            <input
              className="w-full border-orange-300 bg-gray-50 focus:ring-1 focus:ring-orange-500"
              type="text"
              id="image"
              {...register("image", { required: true })}
              placeholder="Enter Image URL"
            />
            {errors.image && errors.image.type === "required" && (
              <span className="text-xs text-color-text">
                This Filed is Required
              </span>
            )}
          </div>

          <div className="w-full">
            <label className="block" htmlFor="category">
              Category
            </label>
            <input
              className="w-full border-orange-300 bg-gray-50 focus:ring-1 focus:ring-orange-500"
              type="text"
              id="category"
              {...register("category", { required: true })}
              placeholder="Enter Donation Category"
            />
            {errors.category && errors.category.type === "required" && (
              <span className="text-xs text-color-text">
                This Filed is Required
              </span>
            )}
          </div>
        </div>
        <div className="flex w-full gap-10">
          <div className="w-full">
            <label className="block" htmlFor="title">
              Donation Title
            </label>
            <input
              className="w-full border-orange-300 bg-gray-50 focus:ring-1 focus:ring-orange-500"
              type="text"
              id="title"
              {...register("title", { required: true })}
              placeholder="Enter Donation Title"
            />
            {errors.title && errors.title.type === "required" && (
              <span className="text-xs text-color-text">
                This Filed is Required
              </span>
            )}
          </div>

          <div className="w-full">
            <label className="block" htmlFor="amount">
              Enter Amount
            </label>
            <input
              className="w-full border-orange-300 bg-gray-50 focus:ring-1 focus:ring-orange-500"
              type="Number"
              id="amount"
              {...register("amount", { required: true })}
              placeholder="Enter Donation Amount"
            />
            {errors.amount && errors.amount.type === "required" && (
              <span className="text-xs text-color-text">
                This Filed is Required
              </span>
            )}
          </div>
        </div>
        <div className="flex items-end justify-end w-full gap-10">
          <div className="w-full">
            <label className="block" htmlFor="description">
              Description
            </label>
            <textarea
              className="w-full border-orange-300 bg-gray-50 focus:ring-1 focus:ring-orange-500"
              id="description"
              {...register("description", { required: true, minLength: 100 })}
              placeholder="Enter Donation Title"
            />
            {errors.description && errors.description.type === "required" && (
              <span className="text-xs text-color-text">
                This Filed is Required
              </span>
            )}
            {errors.description && errors.description.type === "minLength" && (
              <span className="text-xs text-color-text">
                Description Must me minimum 100 Characters
              </span>
            )}
          </div>

          <Button
            type="submit"
            className="w-1/2 px-6 py-3 rounded-full bg-secondary-gradient"
          >
            Donate Now
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FormComponent;
