import cardImg2 from "./vectors/images/cardimg2.png";
import Button from "./forms/Button";
import ProgressBar from "./ProgressBar";
import PlayIcon from "./vectors/PlayIcon";
import IconButton from "./Button/IconButton";
import CaretRightIcon from "./vectors/CaretRightIcon";
import {Link} from "react-router-dom";

export type CourseType = {
  img?: string;
  title: string;
  description: string;
  time: string;
  lessons: string;
  projects: string;
  link: string;
};

function WideCourseCard({
  course: {img, title, description, time, lessons, projects, link},
}: {
  course: CourseType;
}) {
  return (
    <div className="rounded-xl mb-6 p-5 bg-white border-cvCharcoal10 flex-col md:flex-row flex gap-4">
      {img && (
        <div className="rounded-lg aspect-video min-w-[145px] flex items-center justify-center relative">
          <IconButton
            type="button"
            icon={<PlayIcon fill="white" />}
            rounded
            style={{padding: 20}}
            otherClasses="backdrop-blur relative z-10"
          />
          <img
            src={img || cardImg2}
            alt="Course"
            className="w-full h-full absolute inset-0 rounded-lg"
          />
        </div>
      )}
      <div className="flex-grow">
        <div className="flex justify-between gap-4 flex-col md:flex-row">
          <div className="md:max-w-[80%]">
            <p className="text-lg font-medium">{title}</p>
            <p className="text-cvCharcoal80 hidden md:block">
              {description}.... Read more
            </p>
          </div>
          <Link to={link}>
            <Button
              otherClasses="lg:max-w-fit w-full py-2 h-fit"
              outlined
              suffixIcon={<CaretRightIcon />}
            >
              Start
            </Button>
          </Link>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-y-2 gap-x-4 mt-5">
          <p className="text-cvCharcoal80">
            {time} | {lessons} lessons | {projects} projects
          </p>
          <div className="max-w-[300px] w-full">
            <ProgressBar total={10} completed={0} showPercent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WideCourseCard;
