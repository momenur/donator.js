import Container from "@/components/ui/Container";
import DonationsBanner from "./DonationsBanner";
import { useGetDonationQuery } from "@/redux/api/api";

const DonationDetail = () => {
  const currentUrl = window.location.href;
  const urlObject = new URL(currentUrl);
  const pathname = urlObject.pathname;
  const parts = pathname.split("/");
  const lastId = parts[parts.length - 1];
  console.log(lastId);

  const { data: donation, isLoading } = useGetDonationQuery(lastId);

  console.log(donation);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <DonationsBanner image={donation.image} />

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold md:text-4xl text-color-text ">
          {donation.title}
        </h1>
        <div className="flex gap-32">
          <h1 className="text-xl md:text-2xl">
            <span className="text-color-text">Category:</span>
            {donation.category}
          </h1>
          <h1 className="text-xl md:text-2xl">
            <span className="text-color-text">Amount:</span> {donation.amount}
          </h1>
        </div>
        <h1 className="pt-6 pb-20 text-gray-600">{donation.description}</h1>
      </div>
    </Container>
  );
};

export default DonationDetail;
