import React from 'react'
import StatCard, { StatcardProps } from '../../atoms/StatCard'
import './stats.scss'


const Stats = ({statsList}: {statsList: Array<StatcardProps>}) => {
  return (
    <div className='stats-wrapper'>
      {statsList.map((stat, index) => (
        <StatCard 
          key={`stat-key-${index}`}
          icon={stat.icon}
          title={stat.title}
          value={stat.value}
          description={stat.description}
          statCardType={stat.statCardType}
        />
      ))}
    </div>
  )
}

export default Stats