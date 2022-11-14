import React from 'react'
import MainLayout from '../Components/MainLayout'
import '../Assets/CSS/Pages/Notification.css'
import User1 from '../Assets/Images/Match/User1.jpeg'
import User2 from '../Assets/Images/Match/User2.jpeg'



function Notification() {
  return (
    <MainLayout>
        <div className="noti">
            <div className="user1">
                <img src={User1} alt="user1" />
            </div>
            <div className="user2">
                <img src={User2} alt="user2" />
            </div>
        </div>
        <div className="text">
            <h5>It’s a match, Rosé!</h5>
            <p>Start a conversation now with each other</p>
            <button className='btn-Say'>Say hello</button>
        </div>
    </MainLayout>
  )
}

export default Notification