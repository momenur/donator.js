import Container from "@/components/ui/Container";
import Banner from "./Banner";
import TopDonations from "./TopDonations";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <Container>
      <Banner />
      <TopDonations />
      <Gallery />
    </Container>
  );
};

export default Home;
