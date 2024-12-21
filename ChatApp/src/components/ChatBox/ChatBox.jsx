import React from 'react'
import './ChatBox.css'
import assets from '../../assets/assets'

const ChatBox = () => {
  return (
    <div className='chat-box'>
      <div className="chat-user">
        <img src={assets.profile_img} alt="" />
        <p>Richard sand <img src={assets.green_dot} className='dot' alt="" /></p>
        <img src={assets.help_icon} className='help' alt="" />
      </div>
      <div className="chat-message">
        <div className="sender-message">
          <p className="msg">Lorem ipsum dolor sit amet.</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30pm</p>
          </div>
        </div>
        <div className="sender-message">
          <img className='msg-img' src={assets.pic1} alt="" />
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30pm</p>
          </div>
        </div>
        <div className="recv-message">
          <p className="msg">Lorem ipsum dolor sit amet.</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30pm</p>
          </div>
        </div>
      </div>

      <div className="chat-input">
        <input type="text" placeholder='Type a message' />
        <input type="file" id='image' accept='image/png, image/jpeg' hidden />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="" />
        </label>
        <img src={assets.send_button} alt="" />
      </div>
    </div>
  )
}

export default ChatBox