import Container from "@/components/ui/Container";
import Title from "@/components/ui/Title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaSlackHash } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      testimonial:
        "Donating to [Your Organization's Name] has been an incredibly rewarding experience. Knowing that my contribution directly impacts the lives of those in need gives me a sense of fulfillment like no other. The transparency and dedication of the organization ensure that every dollar is used effectively. I'm proud to be a part of such a meaningful cause.",
    },
    {
      name: "John D.",
      testimonial:
        "I've been supporting [Your Organization's Name] for years, and I continue to be impressed by the impact they make. From providing disaster relief to empowering communities through education, their commitment to positive change is inspiring. Being able to see the tangible results of my donations reaffirms my belief in their mission. I wholeheartedly recommend supporting this organization.",
    },
    {
      name: "Emily R.",
      testimonial:
        "As a monthly donor, I've seen firsthand the difference [Your Organization's Name] makes in the lives of vulnerable individuals and communities. Their dedication to transparency and accountability gives me confidence that my contributions are making a meaningful impact. I'm grateful to be a part of their journey towards creating a brighter future for all",
    },
    {
      name: "Michael P.",
      testimonial:
        "Supporting [Your Organization's Name] has been a truly rewarding experience. Their focus on sustainability and long-term solutions sets them apart. Whether it's providing clean water, healthcare, or educational opportunities, they address the root causes of poverty with compassion and efficiency. I'm proud to support their vital work.",
    },
    {
      name: "Jennifer S.",
      testimonial:
        "I became a donor to [Your Organization's Name] after witnessing the positive change they bring to communities around the world. Their commitment to transparency and impact reporting reassures me that my contributions are making a difference. Seeing the smiles on people's faces and hearing their stories of resilience motivates me to continue supporting this incredible organization.",
    },
  ];
  return (
    <Container>
      <div className="mb-32 md:px-32">
        <Title title="Donor Testimonials" left={true} />
        <Carousel className="w-full max-w-xs mx-auto md:max-w-full md:px-16">
          <CarouselContent>
            {testimonials.map((_, index) => (
              <CarouselItem key={index}>
                <div className="flex items-center justify-center gap-6 p-1 mb-10">
                  <p className="flex gap-1 md:text-4xl text-color-text">
                    <FaSlackHash />
                    <FaSlackHash />
                  </p>
                  <p className="font-bold text-center md:text-3xl">{_.name}</p>
                </div>
                <p className="text-justify ">{_.testimonial}</p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Container>
  );
};

export default Testimonials;
