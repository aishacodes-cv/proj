import React from "react";
import FEPath from "../../../atoms/vectors/FEPath";
import DashboardLayout from "../../../templates/DashboardLayout";
import ProductDesignIcon from "../../../atoms/vectors/ProductDesignIcon";
import cardImg1 from "../../../atoms/vectors/images/cardimg1.png";
import cardImg2 from "../../../atoms/vectors/images/cardimg2.png";
import cardImg3 from "../../../atoms/vectors/images/cardimg3.png";
import CourseCards from "../../../atoms/CourseCards/index";
import {Link} from "react-router-dom";

const paths = [
  {
    icon: <ProductDesignIcon />,
    name: "Product Design",
  },
  {
    icon: <FEPath />,
    name: "Front-end Development",
  },
  {
    icon: <FEPath />,
    name: "Back-end Development",
  },
  {
    icon: <FEPath />,
    name: "Mobile Development",
  },
];
const cardItems = [
  {
    cardImage: cardImg1,
    title: "Fundamental of HTML, CSS & Javascript",
    lastSeen: "45",
    doneProjects: 5,
  },
  {
    cardImage: cardImg2,
    title: "JavaScript Algorithms and Data Structures Masterclass",
    lastSeen: "45",
    doneProjects: 5,
  },
  {
    cardImage: cardImg3,
    title: "Fundamental of HTML, CSS & Javascript",
    lastSeen: "45",
    doneProjects: 5,
  },
  {
    cardImage: cardImg3,
    title: "Fundamental of HTML, CSS & Javascript",
    lastSeen: "45",
    doneProjects: 5,
  },
];
const Classroom = () => {
  return (
    <DashboardLayout>
      <div className="dashboard-inner">
        <div className="w-full lg:bg-illustration bg-no-repeat bg-right-top bg-[#1FE091]  bg-none mb-10 min-h-[255px] p-10 flex items-center justify-between rounded-2xl">
          <div className="w-full max-w-[444px]">
            <h1 className="text-4xl mb-3">
              Welcome to Class, <br />{" "}
              <span className="font-semibold">Jalasem!</span>
            </h1>
            <p>
              Get started by choosing a path or one of the recommended courses.
            </p>
          </div>
        </div>
        <h3 className="text-2xl font-semibold text-cvCharcoal60 ">
          Start your learning,{" "}
          <span className="text-cvCharcoal80">Choose a path!</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-6">
          {paths.map(el => (
            <Link
              to={`/classroom/path/${el.name}`}
              className="flex items-center bg-cvCharcoal05 space-x-4 min-h-[88px] px-6 rounded-lg border border-cvCharcoal10"
            >
              {el.icon}
              <p className="text-xl font-medium">{el.name}</p>
            </Link>
          ))}
        </div>
        <h3 className="text-2xl pt-6 font-semibold text-cvCharcoal80">
          Recommended courses for you
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-6">
          {cardItems.map((item, index) => (
            <CourseCards
              key={`card-key-${index}`}
              img={item.cardImage}
              title={item.title}
              time={item.lastSeen}
              doneProjects={item.doneProjects}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Classroom;
