import React from "react";
import "./courseCardsStyles.scss";
type CardProps = {
  img: string;
  title: string;
  time: string;
  doneProjects: number;
};

const CourseCards = ({img, title, time, doneProjects}: CardProps) => {
  return (
    <div className="card">
      <div className="img-cont">
        <img
          src={img}
          alt="course-img"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="title">
        <h2>{title}</h2>
        <span>
          {time} mins | {doneProjects} projects
        </span>
      </div>
    </div>
  );
};

export default CourseCards;
