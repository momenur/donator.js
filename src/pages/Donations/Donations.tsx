import Container from "@/components/ui/Container";
import DonationsBanner from "./DonationsBanner";
import Card from "@/components/ui/Card";
import Title from "@/components/ui/Title";

const Donations = () => {
  return (
    <Container>
      <DonationsBanner />
      <Title title="All Donations" />
      <div className="grid grid-cols-3 gap-4 justify-items-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Container>
  );
};

export default Donations;
