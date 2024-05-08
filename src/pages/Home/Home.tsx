import Container from "@/components/ui/Container";
import Banner from "./Banner";
import TopDonations from "./TopDonations";
import Gallery from "./Gallery";
import About from "./About";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <Container>
      <Banner />
      <TopDonations />
      <Gallery />
      <About />
      <Testimonials />
    </Container>
  );
};

export default Home;
