import Container from "@/components/ui/Container";
import DonationsBanner from "./DonationsBanner";
import Title from "@/components/ui/Title";
import Card from "@/components/ui/Card";
import { useGetDonationsQuery } from "@/redux/api/api";

const Donations = () => {
  const { data: donations, isLoading } = useGetDonationsQuery(undefined);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <Container>
      <DonationsBanner />
      <Title title="All Donations" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 justify-items-center">
        {/* @ts-ignore */}
        {donations.map((item) => (
          <Card donation={item} />
        ))}
      </div>
    </Container>
  );
};

export default Donations;
