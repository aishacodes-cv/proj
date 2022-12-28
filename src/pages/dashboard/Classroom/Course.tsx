import BackBtnFilled from "../../../atoms/BackBtnFilled";
import ProgressBar from "../../../atoms/ProgressBar";
import DashboardLayout from "../../../templates/DashboardLayout/index";
import WideCourseCard from "../../../atoms/WideCourseCard";
import Button from "../../../atoms/forms/Button";

const courseMockData = {
  lessons: "15",
  projects: "3",
  time: "1 hr 30 mins",
};
const courses = [
  {
    title: "Section 1: Introduction",
    description:
      "Product design starts with understanding the needs of users, which is gathered through comprehensive research. Learn the core principles of human-centered design.",
    ...courseMockData,
  },
  {
    title: "Section 2: Defining Research Goals",
    description:
      "The best products have gone through rounds of iteration based on user research and feedback. Learn the process of a design sprint",
    ...courseMockData,
  },
  {
    title: "Section 3: Defining Research Goals",
    description:
      "Product design starts with understanding the needs of users, which is gathered through comprehensive research. Learn the core principles of human-centered design",
    ...courseMockData,
  },
];
function Course() {
  return (
    <DashboardLayout>
      <div className="dashboard-inner">
        <BackBtnFilled className="mb-5 mt-2 px-0" />
        <div className="flex flex-wrap gap-y-8 justify-between mb-12">
          <div className="flex-grow flex flex-col justify-between max-w-[640px] pr-4">
            <h1 className="text-3xl font-medium mb-4">
              UX Fundamentals & Design Research
            </h1>
            <div className="flex justify-between">
              <div className="flex-grow">
                <p className="text-xs uppercase text-cvCharcoal80">
                  first lesson
                </p>
                <p className="font-medium">Introduction into UX Fundamentals</p>
              </div>
              <Button otherClasses="max-w-fit min-w-[84px]"> Start </Button>
            </div>
          </div>
          <div className="flex-grow max-w-[450px] text-cvCharcoal80 px-8 border-l">
            <p className="text-lg my-3 font-medium text-black">
              Course Progress
            </p>
            <ProgressBar total={15} completed={1} showPercent />
            <div className="flex text-sm my-2 justify-between items-center">
              <p>Lesson Completed</p>
              <p className="text-right">1/15</p>
            </div>
            <div className="flex text-sm my-2 justify-between items-center">
              <p>Time left</p>
              <p className="text-right">1 hr 30 mins</p>
            </div>
          </div>
        </div>
        <div className="bg-cvCharcoal10 rounded-xl md:p-6 p-3 py-6">
          <div className="text-2xl font-medium mb-6">Sections (7)</div>
          {courses.map((item, i) => (
            <WideCourseCard
              key={item.title + i}
              course={{...item, link: "lesson"}}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Course;
