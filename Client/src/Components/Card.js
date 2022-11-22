import React, { useState, useMemo, useRef, useEffect } from "react";
import TinderCard from "react-tinder-card";
import axios from "axios";
import "../Assets/CSS/Pages/Card.css";

function Card() {
  const [user, setUser] = useState(null);
  const [genderedUsers, setGenderedUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(genderedUsers.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);

  const userId = localStorage.getItem("UserId");

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users/user", {
        params: { userId },
      });
      setUser(response.data.user);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const getGenderedUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/users/gendered-users",
        {
          params: { gender: user?.gender_interest },
        }
      );
      setGenderedUsers(response.data.users);
      console.log("gendered users", genderedUsers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (user) {
        getGenderedUsers();
      }
    }, 2000);
  }, [user]);

  const childRefs = useMemo(
    () =>
      Array(genderedUsers.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < genderedUsers.length - 1;

  const canSwipe = currentIndex >= 0;

  const updateMatches = async (swipedUserId) => {
    try {
      const response = await axios.put("http://localhost:8000/swipe/like", {
        userId,
        swipedUserId,
      });
      getUser();
    } catch (err) {
      console.log(err);
    }
  };

  const swiped = (direction, swipedUserId, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
    if (direction === "right") {
      updateMatches(swipedUserId);
      // console.log(swipedUserId);
    }
  };

  const outOfFrame = (name, idx) => {
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < genderedUsers.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };
  const matchedUserIds = user?.matches
    .map(({ user_id }) => user_id)
    .concat(userId);
  const filteredGenderedUsers = genderedUsers?.filter(
    (genderedUser) => !matchedUserIds.includes(genderedUser._id)
  );

  return (
    <>
      <div className="swipe-container">
        <div className="card-container">
          {filteredGenderedUsers?.map((character, index) => (
            <TinderCard
              className="swipe"
              ref={childRefs[index]}
              key={character._id}
              onSwipe={(dir) => swiped(dir, character._id, index)}
              onCardLeftScreen={() => outOfFrame(character.name, index)}
            >
              <div
                style={{ backgroundImage: `url('/img/${character.photo}')`,
                width: "400px",
                height: "650px",
                borderRadius: "30px",
                backgroundSize: "cover",
                backgroundPosition: "center", }}
              >
                <h2 className="character-name">{character.name}</h2>
              </div>
            </TinderCard> 
          ))}
        </div>
      </div>
    </>
  );
}

export default Card;
