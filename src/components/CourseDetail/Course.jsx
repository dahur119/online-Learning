import React from "react";
import CourseCard from "./components/CourseCard";
import businessImage from "../../assets/images/businessman-with-graph-laptop.jpg";
import healthImage from "../../assets/images/health.png";
import operationImage from "../../assets/images/operation.png";
import financeImage from "../../assets/images/financce.png";
import background from "../../assets/images/wave.png";

const Course = () => {
  return (
    <div className="w-full custom-description-background py-24">
      <div class="max-w-5xl mx-auto ">
        <p className="lg:text-4xl text-2xl font-bold px-4">
          Course You May Like
        </p>
        <div className="flex flex-col md:flex-row gap-3 mt-7">
          <div class="lg:w-1/4 w-full p-4">
            <CourseCard
              imageSrc={operationImage}
              title="Operation Data Analyst"
              duration="30 Hours"
              onViewCourse={() => {}}
            />
          </div>

          <div class="lg:w-1/4 w-full  p-4">
            <CourseCard
              imageSrc={healthImage}
              title="HealthCare Data Analyst"
              duration="30 Hours"
              onViewCourse={() => {}}
            />
          </div>

          <div class="lg:w-1/4 w-full p-4">
            <CourseCard
              imageSrc={financeImage}
              title="Financial Data Analyst"
              duration="30 Hours"
              onViewCourse={() => {}}
            />
          </div>

          <div class="lg:w-1/4 w-full p-4">
            <CourseCard
              imageSrc={businessImage}
              title="Business Data Analyst"
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
