import React, { useState } from 'react'
import { H2 } from '../../atoms/Typography'
import CircledTickIcon from '../../atoms/vectors/CircledTickIcon'
import './tasksStyles.scss'

type listProps ={
  taskData: Array<{
    title: string,
    time: string,
    done?: boolean,
  }>,
  listTitle: string
}

const TaskListContainer = ({taskData, listTitle}:listProps) => {
  const [tasks, setTasks] = useState(taskData)

  const handleSelected = (indx: number) => {
    setTasks(taskData.map((task, taskIndex) => {
      if(taskIndex === indx){
        task.done = !task.done
      } 
      return task
    }))
  }

  return (
    <div className='font-medium'>
      <div className='title-cont'>
        <span>
          {listTitle}
          <span className='active-task-size'> 
            ({taskData.length}) 
          </span>
        </span>
      </div>

      <ol className='list-cont'>
        {taskData.map((item, index) => (
          <li 
            className='list-item'
            key={`task-key-${index}`}
          >
            <div className={`${item.done 
              ? 'line-through text-darkBlue-300'
              : ''} 
              text-darkBlue-400`}
            >
              <span>{item.title}</span>
            </div>
            <div className='flex items-center'>
              <span className={`mr-4 bg-green-100
               ${item.done 
                ? 'text-green-400' 
                : 'text-green-800'
              } rounded-md px-3`}
              >
                {item.time}
              </span>

              <CircledTickIcon 
                stroke={item.done 
                  ? 'white' 
                  : '#4D5C68'
                }
                fill={item.done 
                  ? '#1B734F' 
                  : 'none'
                }
                onClick={() => handleSelected(index)}
              />
            </div>
          </li>
        ))}
    </ol>
    </div>
  )
}

export default TaskListContainer