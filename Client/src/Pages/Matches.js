import React from 'react'
import MainLayout from '../Components/MainLayout'
import '../Assets/CSS/Pages/Matches.css'
import Avatar from "../Assets/Images/Avatar/avatar.jpg"
import Like from "../Assets/SVG/like.svg"
import Deny from "../Assets/SVG/deny.svg"



function Matches() {
  return (
    <MainLayout>
<<<<<<< HEAD
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
=======
      <div className="Matches">
        <div class="Title">
          <h1>Matches</h1>
          <p>
            There are {user ? user.liked_by.length + " " : 0 + " "}
            people liked you! And {matchesUser ? matchesUser.length : 0} matches
          </p>
        </div>
        <div className="MatchesList">
          {matchesUser.map((character,index) => (
            <div className="Match-Single">
              <div
                className="Match"
                style={{
                  backgroundImage: `url('/img/${character.photo}')`,
>>>>>>> parent of 296e157c (Tuấn Update Profile)
                  backgroundSize: "cover",
                  // opacity: "0.2",
                  // filter: "blur(10px)",
                  width: "180px",
                  height: "300px",
<<<<<<< HEAD
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
=======
                  backgroundPosition: "center",
                }}
              >
                <div className="MatchInfo">
                  <h5>{character.name}</h5>
>>>>>>> parent of 296e157c (Tuấn Update Profile)
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
<<<<<<< HEAD
=======

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
>>>>>>> parent of fdcf6ab3 (huy hom nay)


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
<<<<<<< HEAD
=======
          ))}
>>>>>>> parent of 296e157c (Tuấn Update Profile)
        </div>
    </MainLayout>
  )
}

export default Matches