import Container from "@/components/ui/Container";
import Banner from "./Banner";
import TopDonations from "./TopDonations";
import Gallery from "./Gallery";
import Footer from "@/components/layout/Footer";

const Home = () => {
  return (
    <Container>
      <Banner />
      <TopDonations />
      <Gallery />
      <Footer />
    </Container>
  );
};

export default Home;