import React, { ComponentType, ReactElement, ReactNode } from 'react'
import { Span } from '../../../atoms/Typography'
import './TabContentStyle.scss'

type TabContentProps = {
  children?: ReactNode;
  list?: Array<{
          name: string, 
          img: string | ReactElement, 
          description: string, 
        } | string
         >
}

const TabContent = ({
  children,
  list,
}: TabContentProps) => {
  return (
    <div className='list-wrapper'> 
      {list 
      ? list.map((item, itemIndex) => (
        <div 
          key={`item-key-${itemIndex}`} 
          className={`list-item ${typeof list === 'string' ? 'list-item-2' : 'list-item-1'}`}
        >
          {typeof item === 'string' 
          ? <span>{item}</span>
          : (
            <div className='flex items-center'> 
              {typeof item.img === 'string' 
              ? <img src={item.img} alt={`user-image`} /> 
              : item.img
              }
              <div className="ml-[0.835rem] flex flex-col">
                <Span twClasses="font-medium">
                    {item.name}
                </Span>
                <Span size="text-xs" color="text-cvCharcoal40">
                  {item.description}
                </Span>
              </div>            
            </div>
          )
          }
        </div>
      ))
      : children
      }
    </div>
  )
}

export default TabContent