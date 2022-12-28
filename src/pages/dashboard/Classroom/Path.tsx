import {useParams} from "react-router-dom";
import DashboardLayout from "../../../templates/DashboardLayout";
import CaretRightIcon from "../../../atoms/vectors/CaretRightIcon";
import BookIconFilled from "../../../atoms/vectors/BookIconFilled";
import UsersIcon from "../../../atoms/vectors/UsersIcon";
import cardImg2 from "../../../atoms/vectors/images/cardimg2.png";
import type {CourseType} from "../../../atoms/WideCourseCard";
import WideCourseCard from "../../../atoms/WideCourseCard";
import BackBtnFilled from "../../../atoms/BackBtnFilled";

const courseMockData = {
  img: cardImg2,
  lessons: "15",
  projects: "3",
  time: "1 hr 30 mins",
};
const courses: Omit<CourseType, "link">[] = [
  {
    title: "UX Fundamentals & Design Research",
    description:
      "Product design starts with understanding the needs of users, which is gathered through comprehensive research. Learn the core principles of human-centered design.",
    ...courseMockData,
  },
  {
    title: "Concept to Low-Fidelity Prototyping",
    description:
      "The best products have gone through rounds of iteration based on user research and feedback. Learn the process of a design sprint",
    ...courseMockData,
  },
  {
    title: "High-Fidelity Prototyping to Post-Launch Analysis",
    description:
      "Product design starts with understanding the needs of users, which is gathered through comprehensive research. Learn the core principles of human-centered design",
    ...courseMockData,
  },
];

function Path() {
  const {name} = useParams();
  return (
    <DashboardLayout>
      <div className="dashboard-inner">
        <div className="w-full bg-cvYellow mb-10 min-h-[255px] py-14 p-10 flex items-center justify-center rounded-2xl relative">
          <BackBtnFilled className="absolute top-4 left-4" />
          <div className="w-full max-w-[750px] text-center">
            <h1 className="text-4xl mb-3 font-medium">{name}</h1>
            <p>
              Design impactful user experiences for products in today’s digital
              world. Build a portfolio that showcases your ability to transform
              user research to high-fidelity interactive designs
            </p>
            <div className="flex space-x-6 items-center mx-auto justify-center mt-5">
              <div className="flex space-x-3">
                <BookIconFilled />
                <span className="text-sm font-medium">5 Courses</span>
              </div>
              <div className="flex space-x-3">
                <UsersIcon />
                <span className="text-sm font-medium">10 Students</span>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-2xl mb-6 font-semibold text-black">
          Courses in this path (5)
        </h3>
        <div className="bg-cvCharcoal10 rounded-xl md:p-6 p-3">
          {courses.map((item, i) => (
            <WideCourseCard
              key={item.title + i}
              course={{...item, link: "/classroom/course"}}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Path;
