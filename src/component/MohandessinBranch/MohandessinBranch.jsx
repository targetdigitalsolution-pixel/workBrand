import React from "react";
import view from "../../assets/images/view_gallery.webp";
import videowalker from "../../assets/images/video_walk.webp";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import ImageGallery from '../sharedComponents/ImageGallery';
import gallery_WhyChooseUS_img1 from "../../assets/images/gallery_WhyChooseUS_img1.webp";
import gallery_WhyChooseUS_img2 from "../../assets/images/gallery_WhyChooseUS_img2.webp";
import gallery_WhyChooseUS_img3 from "../../assets/images/gallery_WhyChooseUS_img3.webp";
const MohandessinBranch = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row items-center max-container   ">
        <div className="w-full lg:w-1/2">
            <ImageGallery
              gallery={[
                gallery_WhyChooseUS_img2,
                gallery_WhyChooseUS_img1,
                gallery_WhyChooseUS_img3,
              ]}
            />
  
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-center lg:text-left lg:text-5xl text-custom-primary">
            View Gallery
          </h2>

          <div className="text-center lg:text-left space-y-4">
            <p className="text-lg leading-relaxed text-gray-600 font-semibold">
              Visual Highlights, Tell Our Brand’s Full Story
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Step inside our world through curated visuals — from our vibrant
              workspaces and premium consulting sessions to dynamic training
              moments and sleek website launches. Every image captures a piece
              of what makes WorkBrand different.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center max-container lg:mt-[-35px] mb-12">
        <div className="w-full lg:w-1/2 block lg:hidden">
          <img
            src={videowalker}
            alt="فرع المهندسين فيديو"
            className="w-full h-[600px] object-cover "
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center md:justify-start md:items-start px-4 gap-5  ">
          <h2 className="mb-4 text-3xl font-bold justify-center text-center lg:text-start lg:text-5xl text-custom-primary w-full">
            Video Walkthrough
          </h2>

          <div className="text-center lg:text-left space-y-4">
            <p className="text-lg leading-relaxed text-gray-600 font-semibold">
              Explore our spaces, services, and client success stories
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Take a quick visual tour inside WorkBrand — see our inspiring
              workspaces, expert-led services, and how we help brands grow every
              day.
            </p>
          </div>
          <div className="flex justify-center items-center  mx-auto lg:mx-0 lg:justify-start lg:text-start md:w-[50%]  ">
            <CustomMainButton
              fullWidth
              text={"Explore Training Tracks"}
              TripleArrow={
                <TripleArrowIcon color={"text-white"} hoverColor={"white"} />
              }
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 hidden lg:block">
          <img
            src={videowalker}
            alt="فرع المهندسين فيديو"
            className="w-full h-[600px] object-cover "
          />
        </div>
      </section>
    </>
  );
};

export default MohandessinBranch;
