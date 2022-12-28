import { ReactElement, useState } from "react"
import ProfileImgSm from "../../atoms/ProfileImgSm"
import { H2, Span } from "../../atoms/Typography"
import AddIcon from "../../atoms/vectors/AddIcon"
import GroupIcon from "../../atoms/vectors/GroupIcon"
import MaleAvatar from "../../atoms/vectors/MaleAvatar"
import PlusIcon from "../../atoms/vectors/PlusIcon"
import './userListStyles.scss'

type Props ={
    renderedListItems: Array<any>
    subtitle?: string,
    isSelected?: string | number;
    handleClick: Function;
    onClickPlusIcon?: Function;
}

const UserList = ({
    renderedListItems,
    subtitle,
    isSelected,
    handleClick,
    onClickPlusIcon = () => {},
}: Props) => {
    
    return (
        <>
          <div className="subtitle-cont">
              <Span color="text-cvCharcoal40">{subtitle && subtitle}</Span>
              <div className="cursor-pointer mr-6">
                  <AddIcon onClick={() => onClickPlusIcon(true)}/>
              </div>
          </div>
          <div className="h-[55%] overflow-auto pb-12">
              {renderedListItems.map((item, itemIndex) => (
                  <div 
                    key={`dm-key-${itemIndex}`}
                    className={`${isSelected === item.id ? 'bg-cvCharcoal05' : '' } list-item-cont `}
                    onClick={() => handleClick(item.id)}
                  >
                      <div className="flex items-center">
                          <ProfileImgSm 
                            img={item.userImgLink ? item.userImgLink : item.groupImgLink}
                            icon={!item.groupImgLink ? <GroupIcon /> : <MaleAvatar />}
                          />
                          <div className="ml-[0.835rem] flex flex-col">
                              <Span twClasses="font-medium">
                                  {item.name}
                              </Span>
                              <Span size="text-xs" color="text-cvCharcoal40">{item.dmSnippet}</Span>
                          </div>
                      </div>
                      <div className="flex items-center">
                          <span  className="font-medium text-neutral200 text-sm">
                              {item.time}
                          </span>
                          {!item.read && <span className="w-2 h-2 rounded-full bg-primary3 ml-2"></span>}
                      </div>
                  </div>
              ))}
          </div>
        </>
    )
}

export default UserList
