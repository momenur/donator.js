import image1 from "../../assets/images/donate1.jpg";
import image2 from "../../assets/images/donate2.jpg";
import image3 from "../../assets/images/donate3.jpg";
import image4 from "../../assets/images/donate4.jpg";
import image5 from "../../assets/images/donate5.jpg";
import image6 from "../../assets/images/donate6.jpg";
import Title from "@/components/ui/Title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image2,
  image3,
];

const Gallery = () => {
  return (
    <section className="px-16">
      <Title title="Donations Gallery" />
      <Carousel className="w-full max-w-full">
        <CarouselContent>
          {images.map((_, index) => (
            <CarouselItem key={index}>
              <div className="grid p-1 grid-col-1 md:grid-cols-3 justify-items-center">
                <div>
                  <img
                    className="md:rounded-e-full size-80 border-orange-500 hover:border-[2px] transition-all"
                    src={images[index++]}
                    alt=""
                  />
                  <p>Food Donation</p>
                </div>

                <div>
                  <img
                    className="rounded-md size-80 border-orange-500 hover:border-[2px] transition-all"
                    src={images[index++]}
                    alt=""
                  />
                  <p>Medicine Donation</p>
                </div>

                <div>
                  <img
                    className="md:rounded-s-full size-80 border-orange-500 hover:border-[2px] transition-all hidden md:block"
                    src={images[index++]}
                    alt=""
                  />
                  <p className="hidden md:block">Cloth Donation</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-white bg-secondary-gradient size-8 md:size-12" />
        <CarouselNext className="text-white bg-secondary-gradient size-8 md:size-12" />
      </Carousel>
    </section>
  );
};

export default Gallery;
