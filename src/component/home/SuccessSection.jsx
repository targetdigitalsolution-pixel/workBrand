import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainTittle from "../sharedComponents/MainTittle";
import SuccessCard from "../home/SucessCard";
import Sara_Khaled from "../../assets/images/Sara_Khaled.webp";
import Ahmed_Nabil from "../../assets/images/Ahmed_Nabil.webp";
import Layla_Mostafa from "../../assets/images/Layla _Mostafa.webp";
import { motion } from "framer-motion";
import { fadeInUp, fadeInPlace } from "../../utils/motionVariants";

const SuccessSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="mb-12 max-container xl:px-0">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInPlace}
      >
        <MainTittle
          title="Success Stories"
          description="Real success from businesses we’ve empowered"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Slider {...settings} className="pb-4">
          <div className="col-span-12 md:col-span-4 p-4">
            <SuccessCard
              image={Sara_Khaled}
              name="Sara Khaled"
              shortDesc="Founder of BrightMinds"
              stars={5}
              description="This place helped me launch faster than I imagined. From the team to the tools everything just works."
            />
          </div>
          <div className="col-span-12 p-4 md:col-span-4">
            <SuccessCard
              image={Ahmed_Nabil}
              name="Ahmed Nabil"
              shortDesc="Tech Entrepreneur"
              stars={5}
              description="Professional, inspiring, and efficient. My private office here feels like my second home."
            />
          </div>
          <div className="col-span-12 p-4 md:col-span-4">
            <SuccessCard
              image={Layla_Mostafa}
              name="Layla Mostafa"
              shortDesc="Designer & Freelancer"
              stars={5}
              description="I built my website in minutes. It felt like magic."
            />
          </div>
        </Slider>
      </motion.div>
    </section>
  );
};

export default SuccessSection;
