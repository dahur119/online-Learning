import React from "react";
import CourseCard from "./components/CourseCard";
import Framer from "../../assets/icons/Frame 36.png";
import Framers from "../../assets/icons/Frame 35.png";
import Framerer from "../../assets/icons/Frame 34.png";
import Frameres from "../../assets/icons/Frame 37.png";
import background from "../../assets/images/wave.png";

const Course = () => {
  return (
    <div className="w-full custom-description-background py-24">
      <div class="max-w-5xl mx-auto ">
        <p className="text-4xl font-bold">Course You May Like</p>
        <div className="flex flex-col md:flex-row gap-3 mt-7">
          <div class="lg:w-1/4 w-full p-4">
            <CourseCard
              imageSrc={Framerer}
              title="Operation Data Analyst"
              duration="30 Hours"
              onViewCourse={() => {}}
            />
          </div>

          <div class="lg:w-1/4 w-full  p-4">
            <CourseCard
              imageSrc={Frameres}
              title="Operation Data Analyst"
              duration="30 Hours"
              onViewCourse={() => {}}
            />
          </div>

          <div class="lg:w-1/4 w-full p-4">
            <CourseCard
              imageSrc={Framers}
              title="Operation Data Analyst"
              duration="30 Hours"
              onViewCourse={() => {}}
            />
          </div>

          <div class="lg:w-1/4 w-full p-4">
            <CourseCard
              imageSrc={Framer}
              title="Operation Data Analyst"
              duration="30 Hours"
              onViewCourse={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
