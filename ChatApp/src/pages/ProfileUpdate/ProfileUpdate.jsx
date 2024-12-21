import React from 'react'
import './ProfileUpdate.css'
import assets from '../../assets/assets' // This is the assets folder we created in the src folder

const ProfileUpdate = () => {

  const [image, setImage] = React.useState(false);

  return (
    <div className='profile'>
      <div className="profile-container">
        <form >
          <h3>Profile Details</h3>
          <label htmlFor="avatar">
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='avatar' accept='.png, .jpg, .jpeg' hidden />
            <img src={image?URL.createObjectURL(image):assets.avatar_icon} alt="" />
            upload profile picture
          </label>
          <input type="text" placeholder='Your Name' required />
          <textarea placeholder='Write profile bio' required></textarea>
          <button type='submit'>Save</button>
        </form>
        <img className='profile-pic' src={image?URL.createObjectURL(image):assets.logo_icon} alt="" />
      </div>
    </div>
  )
}

export default ProfileUpdate