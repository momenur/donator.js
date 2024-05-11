import FormComponent from "@/components/ui/FormComponent";
import Title from "@/components/ui/Title";

const CreateDonation = () => {
  return (
    <div className="w-full ps-10">
      <div className="flex items-center justify-center -mt-20">
        <Title title="Add Donations" />
      </div>
      <div>
        <FormComponent />
      </div>
    </div>
  );
};

export default CreateDonation;
