import { Span } from "../../../atoms/Typography"
import CommentIcon from "../../../atoms/vectors/CommentIcon"
import LikeReactionIcon from "../../../atoms/vectors/LikeReactionIcon"
import RateIcon from "../../../atoms/vectors/RateIcon"
import ShopIcon from "../../../atoms/vectors/ShopIcon"
import DashboardLayout from "../../../templates/DashboardLayout"
import { notifications } from "./NotificationList"
import './notificationStyles.scss'

const NotificationPage = () => {
    return(
        <DashboardLayout>
					<div className="main-notification ">
							<div className="flex items-center justify-between">
								<Span color='text-neutral07' twClasses="text-xl font-bold text-neutral07">Notification</Span>
									
							</div>
							<div className="mt-3 pr-[50%] h-full pb-8 overflow-auto">
								{notifications.map((note, noteIndex) => (
									<div key={`note-keys-${noteIndex}`} className="note-wrapper">
										<div className="rounded-full relative w-16 h-16">
											<img src={note.userImgUrl} alt="profilepics" />
											<div className="absolute bottom-0  right-[-0.3rem] rounded-full">
													{note.type === 'comment'
													? <CommentIcon />
													:note.type === 'like'
													? <LikeReactionIcon />
													:note.type === 'shop' 
													? <ShopIcon />
													: <RateIcon />
													}
											</div>
										</div>
											<div className=" ml-3 flex flex-col w-full">
												<div className="flex justify-between">
													<div>
														<span className="font-bold text-base text-neutral07">
															{note.userDisplayName}
														</span>
														<span className="font-semibold text-[#9A9FA5]"> 
															{note.userName}
														</span>
													</div>
													<div>
														<span className="font-bold text-[#9A9FA5]">
														{note.notificationTime} 
														</span>
														{note.seen && <span className="w-2 h-2 rounded-full bg-primary3 ml-2"></span>}
													</div>
												</div>
												<div>
														<span className="font-semibold text-base text-[#6F767E]">
															{note.type === 'comment'
																? 'Comment on'
																:note.type === 'like'
																? 'Likes'
																:note.type === 'shop'
																? 'Purchsed'
																: "Rate 5 star for"
															}
														</span>
														<span className="font-bold text-neutral07"> Smile-3D icons</span>
												</div>
											</div>
									</div>
								))}
							</div>
					</div>
        </DashboardLayout>
    )
}

export default NotificationPage