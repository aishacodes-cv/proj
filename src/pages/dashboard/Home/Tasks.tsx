import React from 'react'
import TaskCard from '../../../atoms/TaskCard'
import img1 from '../../../atoms/vectors/images/image1.png'

const Tasks = () => {
  const colors = [
    "bg-[#F09330]",
    "bg-[#3772FF]",
    "bg-[#0D9E63]"
  ]

  let randomColor = () => colors[Math.floor(Math.random() * colors.length)]
  
  const tasks = [
    {
      title: 'Dashboard design',
      time: 'Ahround',
      userImg: img1,
      labeType: randomColor(),
    },
    {
      title: 'Homepage responsiveness',
      time: 'Ahround',
      userImg: img1,
      labeType: randomColor(),
    },
    {
      title: 'Dashboard bug fixes',
      time: 'Ahround',
      userImg: img1,
      labeType: randomColor(),
    },
    {
      title: 'Profile page redesign',
      time: 'Ahround',
      userImg: img1,
      labeType: randomColor(),
    },
  ]
  return (
    <div className=' flex flex-col'>
      <div className='flex items-center mb-7'>
        <h2 className='task-title'>Your Tasks</h2>
        <span className='task-number'>{tasks.length}</span>
      </div>
      {tasks.map((task, index) => (
        <TaskCard 
          key={`tsk-key-${index}`}
          title={task.title}
          taskDate={task.time}
          userImage={task.userImg}
          labelType={task.labeType}
        />
      ))}
    </div>
  )
}

export default Tasks