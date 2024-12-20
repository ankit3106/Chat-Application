import React from 'react'
import './ChatBox.css'
import assets from '../../assets/assets'

const ChatBox = () => {
  return (
    <div className='chat-box'>
      <div className="chat-user">
        <img src={assets.profile_img} alt="" />
        <p>Richard sand <img src={assets.green_dot} alt="" /></p>
        <img src={assets.help_icon} className='help' alt="" />
        <div className='new-update'></div>
      </div>
    </div>
  )
}

export default ChatBox