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
];

const Gallery = () => {
  return (
    <section className="px-10">
      <Title title="Donations Gallery" />
      <Carousel className="w-full max-w-full">
        <CarouselContent>
          {images.map((_, index) => (
            <CarouselItem key={index}>
              <div className="grid grid-cols-3 p-1 justify-items-center">
                <img
                  className="rounded-md size-80 border-orange-500 border-[2px]"
                  src={images[index++]}
                  alt=""
                />
                <img
                  className="rounded-md size-80 border-orange-500 border-[3px]"
                  src={images[index++]}
                  alt=""
                />
                <img
                  className="rounded-md size-80 border-orange-500 border-[3px]"
                  src={images[index++]}
                  alt=""
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-white bg-secondary-gradient size-12" />
        <CarouselNext className="text-white bg-secondary-gradient size-12" />
      </Carousel>
    </section>
  );
};

export default Gallery;
