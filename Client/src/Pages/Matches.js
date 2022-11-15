import React, { useState, useEffect } from "react";
import MainLayout from "../Components/MainLayout";
import "../Assets/CSS/Pages/Matches.css";
import Avatar from "../Assets/Images/Avatar/avatar.jpg";
import Like from "../Assets/SVG/like.svg";
import Deny from "../Assets/SVG/deny.svg";
import axios from "axios";
import { Tabs } from "antd";

function Matches() {
  const [user, setUser] = useState();
  const [matchesUser, setMatchesUser] = useState([]);
  const userId = localStorage.getItem("UserId");

  const getAllMatches = async (userId) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/users/get-matches",
        {
          params: { id: userId },
        }
      );
      setMatchesUser(response.data.users);
    } catch (err) {
      console.log(err);
    }
  };

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users/user", {
        params: { userId },
      });
      setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (userId) {
      getAllMatches(userId);
    }
  }, [matchesUser]);

  return (
    <MainLayout>
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
                  backgroundSize: "cover",
                  // opacity: "0.2",
                  // filter: "blur(10px)",
                  width: "180px",
                  height: "300px",
                  backgroundPosition: "center",
                }}
              >
                <div className="MatchInfo">
                  <h5>{character.name}</h5>
                </div>
                <div className="Match-Group">
                  <div className="MatchButtons">
                    <button>
                      <img src={Like} alt="Like" />
                    </button>
                    |
                    <button>
                      <img src={Deny} alt="Deny" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default Matches;
