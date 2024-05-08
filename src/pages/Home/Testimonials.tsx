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
    <div className="px-32 mb-32">
      <Title title="Donor Testimonials" left={true} />
      <Carousel className="w-full max-w-full px-16">
        <CarouselContent>
          {testimonials.map((item, index) => (
            <CarouselItem key={index}>
              <div className="flex items-center justify-center gap-6 mb-10">
                <p className="flex gap-1 text-4xl text-color-text">
                  <FaSlackHash />
                  <FaSlackHash />
                </p>
                <p className="text-3xl font-bold text-center">{item.name}</p>
              </div>
              <p className="text-justify">{item.testimonial}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonials;
