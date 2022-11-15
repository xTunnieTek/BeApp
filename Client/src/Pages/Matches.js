import React from 'react'
import MainLayout from '../Components/MainLayout'
import '../Assets/CSS/Pages/Matches.css'
import Avatar from "../Assets/Images/Avatar/avatar.jpg"
import Like from "../Assets/SVG/like.svg"
import Deny from "../Assets/SVG/deny.svg"



function Matches() {
  return (
    <MainLayout>
        <div className="Matches">
            <div class="Title">
                <h1>Matches</h1>
                <p>This is a list of people who have liked you and your matches.</p>
            </div>
            <div className="MatchesList">
                {/* Match 1 */}
                <div className="Match-Single">
                  <div className="Match" 
                  style={{backgroundImage: `url(${Avatar})`, 
                  backgroundSize: "cover",
                  // opacity: "0.2",
                  // filter: "blur(10px)",
                  width: "180px",
                  height: "300px",
                  backgroundPosition: "center"}}>
                      <div className="MatchInfo">
                          <h5>Anh Ngoc , 19</h5>
                      </div>
                      <div className="Match-Group">
                        <div className="MatchButtons">
                          <button><img src={Like} alt="Like" /></button>
                            |
                          <button><img src={Deny} alt="Deny" /></button>
                        </div>
                    </div>
                  </div>
                </div>
                {/* End Match 1 */}

                {/* Match 1 */}
                <div className="Match-Single">
                  <div className="Match" 
                  style={{backgroundImage: `url(${Avatar})`, 
                  backgroundSize: "cover",
                  // opacity: "0.2",
                  // filter: "blur(10px)",
                  width: "180px",
                  height: "300px",
                  backgroundPosition: "center"}}>
                      <div className="MatchInfo">
                          <h5>Anh Ngoc , 19</h5>
                      </div>
                      <div className="Match-Group">
                        <div className="MatchButtons">
                          <button><img src={Like} alt="Like" /></button>
                            |
                          <button><img src={Deny} alt="Deny" /></button>
                        </div>
                    </div>
                  </div>
                </div>
                {/* End Match 1 */}

                


          
               
            </div>
        </div>
    </MainLayout>
  )
}

export default Matches