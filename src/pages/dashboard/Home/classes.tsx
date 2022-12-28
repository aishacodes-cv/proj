import React from 'react'
import CourseCards from '../../../atoms/CourseCards'
import ForwardArrowIcon from '../../../atoms/vectors/ForwardArrowIcon'
import ForwardIcon from '../../../atoms/vectors/forwardIcon'
import cardImg1 from '../../../atoms/vectors/images/cardimg1.png'
import cardImg2 from '../../../atoms/vectors/images/cardimg2.png'
import cardImg3 from '../../../atoms/vectors/images/cardimg3.png'

const Classes = () => {
  const cardItems = [
    {
      cardImage: cardImg1,
      title: 'Fundamental of HTML, CSS & Javascript',
      lastSeen: '45',
      doneProjects: 5,
    },
    {
      cardImage: cardImg2,
      title: 'JavaScript Algorithms and Data Structures Masterclass',
      lastSeen: '45',
      doneProjects: 5,
    },
    {
      cardImage: cardImg3,
      title: 'Fundamental of HTML, CSS & Javascript',
      lastSeen: '45',
      doneProjects: 5,
    },
  ]
  return (
    <div className='my-[3.18rem]'>
      <div className='recent-project-title-cont'>
        <h2>Jump right back into class</h2>
        <span className='flex items-center'>
          My Courses
          <ForwardArrowIcon  className='ml-2'/>
        </span>
      </div>
      <div className='class-card'>
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
  )
}

export default Classes