import React from 'react'
import ProjectCard from '../../../atoms/ProjectCard'
import img1 from "../../../atoms/vectors/images/image1.png"
import img2 from "../../../atoms/vectors/images/image2.png"
import img3 from "../../../atoms/vectors/images/image3.png"
 

const RecentProjects = () => {
  const cardDataList =[
    {
      bgGreen: true,
      title: "Overlay Design",
      description: "UI Design Kit",
      imageList: [
        img1,
        img2,
        img3,
      ]
    },
    {
      bgGreen: false,
      title: "Stockline Design",
      description: "UI Design Kit",
      imageList: [
        img1,
        img2,
        img3,
      ]
    }
  ]
  return (
    <div>
      <div className='recent-project-title-cont'>
        <h2>Recent Projects</h2>
        <span>See All</span>
      </div>
      <div className="cards-cont">
       {cardDataList.map((data, index) => (
         <ProjectCard 
          key={`cardData-key-${index}`}
          bgGreen={data.bgGreen}
          title={data.title}
          description={data.description}
          images={data.imageList}
          total={80}
          completed={50}
         />
       ))}
      </div>
    </div>
  )
}

export default RecentProjects