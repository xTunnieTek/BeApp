import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../Components/MainLayout";
import "../Assets/CSS/Pages/Messages.css";
import Search from "../Assets/SVG/search.svg";
import Images from "../Assets/SVG/image.svg";
import Send from "../Assets/SVG/send.svg";
import Avatar from "../Assets/Images/Avatar/avatar.jpg";
import Message from "../Components/Message";
import Conversation from "../Components/Conversation";
import { io } from "socket.io-client";
import axios from "axios";

const Messages = () => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [user, setUser] = useState([]);
  const [matchesUser, setMatchesUser] = useState([]);
  const socket = useRef();
  const scrollRef = useRef();

  const getUser = async () => {
    const userId = localStorage.getItem("UserId");
    try {
      const response = await axios.get("http://localhost:8000/users/user", {
        params: { userId },
      });
      setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllMatches = async () => {
    const userId = localStorage.getItem("UserId");
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

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getAllMatches();
  }, []);

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
  }, [user]);

  useEffect(() => {
    const userId = localStorage.getItem("UserId");
    const getConversations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/conversations/" + userId
        );
        setConversations(response.data.conversations);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/messages/" + currentChat?._id
        );
        setMessages(response.data.messages);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      console.log('do validate');
    }
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    try {
      const response = await axios.post(
        "http://localhost:8000/messages",
        message
      );
      setMessages([...messages, response.data.newMessage]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <MainLayout>
      <div className="Messages">
        <div class="Container">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <div class="headMess">
                  <img src={Search} />
                  <input type="text" placeholder="Search" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <div class="listMess">
                  {conversations?.map((c) => (
                    <div onClick={() => setCurrentChat(c)}>
                      <Conversation conversation={c} currentUser={user} />
                    </div>
                  ))}
                </div>
              </div>
              <div class="col-md-9">
                <div class="chatMess">
                  {currentChat ? (
                    <div>
                      {messages.map((m) => (
                        <div ref={scrollRef}>
                          <Message message={m} own={m.sender === user._id} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <span className="noConversationText">
                      Open a conversation to start a chat.
                    </span>
                  )}
                </div>
                {/* textMess */}
                <div class="textMess">
                  <div class="controlMess">
                    <label for="file" className="fileMess">
                      <img src={Images} alt="file" />
                    </label>
                    <input type="file" className="fileMess" id="file" />
                    <input
                      type="text"
                      placeholder="Messages"
                      className="inputMess"
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyDown={handleSubmit}
                      value={newMessage}
                    />
                    <button type="button" className="btnMess" onClick={handleSubmit}>
                      <img src={Send} alt="sent" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default Messages;
