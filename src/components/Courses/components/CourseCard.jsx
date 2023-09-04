import React from "react";
import { BiTimeFive, BiBookBookmark } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";

const CourseCard = ({
  courseImage,
  instructorImage,
  instructorName,
  rating,
  price,
  title,
  students,
}) => {
  return (
    <div className="w-1/2 shadow-md">
      <div className="relative flex justify-center">
        <img
          src={courseImage}
          alt="Course Image"
          className="w-[400px] h-[280px] object-cover lg:mt-0 md:mt-8"
        />
        <div className="absolute bottom-0 left-3 p-2 text-white flex items-center gap-6">
          <div className="flex items-center gap-1">
            <BiTimeFive className="font-bold" />
            <h2 className="font-bold">45 Hours</h2>
          </div>
          <div className="flex items-center gap-1">
            <BiBookBookmark className="font-bold" />
            <h2 className="font-bold">453</h2>
          </div>
        </div>
      </div>

      <div className="px-4 mt-6 pb-6 space-y-4">
        <div className="flex items-center gap-5 border-b-2 pb-4">
          <img
            src={instructorImage}
            alt="Instructor Image"
            className="lg:h-[40px] lg:w-[40px] md:w-full md:h-full object-cover rounded-full"
          />
          <p>{instructorName}</p>
        </div>
        <div className="flex justify-between">
          <p>Rating: {rating}</p>
          <h2>{price}</h2>
        </div>
        <h2>{title}</h2>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <p>{students}</p>
            <BsPersonFill />
          </div>
          <div className="flex items-center gap-2">
            <FaCartPlus />
            <p>Get Enrolled</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;