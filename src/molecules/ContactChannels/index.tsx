import React from 'react'
import BeLogoIcon from '../../atoms/vectors/BeLogoicon'
import GitHubLogoIcon from '../../atoms/vectors/GitHubLogoIcon'
import LinkedInIcon from '../../atoms/vectors/LinkedInIcon'
import MessageIconFilled from '../../atoms/vectors/MessageIconFilled'
import PhoneIconFilled from '../../atoms/vectors/PhoneIconFilled'
import './styles.scss'

const ContactChannels = () => {
  const icons = [
    <PhoneIconFilled />,
    <MessageIconFilled />,
    <LinkedInIcon />,
    <BeLogoIcon />,
    <GitHubLogoIcon />
  ]
  return (
    <div className='icons-cont'>
      {icons.map((icon, index) => (
        <div 
          key={`icon-${index}-key`}
          className='icon'
        >
          {icon}
        </div>
      ))}
    </div>
  )
}

export default ContactChannels