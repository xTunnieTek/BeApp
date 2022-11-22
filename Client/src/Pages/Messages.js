import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../Components/MainLayout";
import "../Assets/CSS/Pages/Messages.css";
import Search from "../Assets/SVG/search.svg";
import Images from "../Assets/SVG/image.svg";
import Send from "../Assets/SVG/send.svg";
import Avatar from "../Assets/Images/Avatar/avatar.jpg";
import { io } from "socket.io-client";
import axios from "axios";

const Messages = () => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [user, setUser] = useState([]);
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

  useEffect(() => {
    getUser();
    console.log(user);
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
    const getConversations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/conversations/" + user._id
        );
        setConversations(response.data);
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
        setMessages(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      setMessages([...messages, response.data]);
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
                  <div class="userMess">
                    <div class="imgMess">
                      <img src={Avatar} alt="avt1" />
                    </div>
                    <div class="infoMess">
                      <h5>Anh Ngoc</h5>
                      <p>Sao anh hãm thế nhỉ, đm anh nữa </p>
                    </div>
                    <div class="timeMess">
                      <p>10:00</p>
                    </div>
                  </div>

                  {/* 2 */}
                  <div class="userMess">
                    <div class="imgMess">
                      <img src={Avatar} alt="avt1" />
                    </div>
                    <div class="infoMess">
                      <h5>Anh Ngoc</h5>
                      <p>Đã gửi cho bạn một tin nhắn</p>
                    </div>
                    <div class="timeMess">
                      <p>10:00</p>
                    </div>
                  </div>

                  {/* 3 */}
                  <div class="userMess">
                    <div class="imgMess">
                      <img src={Avatar} alt="avt1" />
                    </div>
                    <div class="infoMess">
                      <h5>Anh Ngoc</h5>
                      <p>Đã gửi cho bạn một tin nhắn</p>
                    </div>
                    <div class="timeMess">
                      <p>10:00</p>
                    </div>
                  </div>

                  {/* 4 */}
                  <div class="userMess">
                    <div class="imgMess">
                      <img src={Avatar} alt="avt1" />
                    </div>
                    <div class="infoMess">
                      <h5>Anh Ngoc</h5>
                      <p>Đã gửi cho bạn một tin nhắn</p>
                    </div>
                    <div class="timeMess">
                      <p>10:00</p>
                    </div>
                  </div>

                  {/* 5 */}
                  <div class="userMess">
                    <div class="imgMess">
                      <img src={Avatar} alt="avt1" />
                    </div>
                    <div class="infoMess">
                      <h5>Anh Ngoc</h5>
                      <p>Đã gửi cho bạn một tin nhắn</p>
                    </div>
                    <div class="timeMess">
                      <p>10:00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-9">
                <div class="chatMess">
                  {/* NHẮN */}
                  <div class="fromMess">
                    <div class="imgMess">
                      <img src={Avatar} alt="avt1" />
                    </div>

                    <div class="contentMess">
                      <p>Helo anh dep trai, toi nay di choi voi em khong ne`</p>
                    </div>
                    <div class="timeMess">
                      <p>10:00</p>
                    </div>
                  </div>

                  {/* Trả lời */}
                  <div class="toMess">
                    <div class="contentMess">
                      <p>Xin lỗi em nhé, anh có người yêu rồi</p>
                    </div>
                    <div class="timeMess">
                      <p>10:00</p>
                    </div>
                  </div>

                  {/* Nhắn */}
                  <div class="fromMess">
                    <div class="imgMess">
                      <img src={Avatar} alt="avt1" />
                    </div>
                    <div class="contentMess">
                      <p>Thế cho em làm quen anh được không ạ?</p>
                    </div>
                    <div class="timeMess">
                      <p>10:06</p>
                    </div>
                  </div>

                  {/* Trả Lời */}
                  <div class="toMess">
                    <div class="contentMess">
                      <p>Không em nhé!</p>
                    </div>
                    <div class="timeMess">
                      <p>11:30</p>
                    </div>
                  </div>

                  {/* Nhắn */}
                  <div class="fromMess">
                    <div class="imgMess">
                      <img src={Avatar} alt="avt1" />
                    </div>

                    <div class="contentMess">
                      <p>
                        Sao anh hãm thế nhỉ chắc người yêu anh khổ lắmSao anh
                        hãm thế nhỉ chắc người yêu anh khổ lắmSao anh hãm thế
                        nhỉ chắc người yêu anh khổ lắmSao anh hãm thế nhỉ chắc
                        người yêu anh khổ lắm
                      </p>
                    </div>
                    <div class="timeMess">
                      <p>12:34</p>
                    </div>
                  </div>

                  {/* Trả Lời */}
                  <div class="toMess">
                    <div class="contentMess">
                      <p>Ừ em</p>
                    </div>
                    <div class="timeMess">
                      <p>11:30</p>
                    </div>
                  </div>

                  {/* Nhắn */}
                  <div class="fromMess">
                    <div class="imgMess">
                      <img src={Avatar} alt="avt1" />
                    </div>
                    <div class="contentMess">
                      <p>Ừ cái đmm</p>
                    </div>
                    <div class="timeMess">
                      <p>12:34</p>
                    </div>
                  </div>

                  {/* Trả Lời */}
                  <div class="toMess">
                    <div class="contentMess">
                      <p>
                        Anh xin lỗi nhé! Sao anh hãm thế nhỉ chắc người yêu anh
                        khổ lắmSao anh hãm thế nhỉ chắc người yêu anh khổ lắmSao
                        anh hãm thế nhỉ chắc người yêu anh khổ lắmSao anh hãm
                        thế nhỉ chắc người yêu anh khổ lắm Sao anh hãm thế nhỉ
                        chắc người yêu anh khổ lắmSao anh hãm thế nhỉ chắc người
                        yêu anh khổ lắmSao anh hãm thế nhỉ chắc người yêu anh
                        khổ lắmSao anh hãm thế nhỉ chắc người yêu anh khổ lắm
                        Sao anh hãm thế nhỉ chắc người yêu anh khổ lắmSao anh
                        hãm thế nhỉ chắc người yêu anh khổ lắmSao anh hãm thế
                        nhỉ chắc người yêu anh khổ lắmSao anh hãm thế nhỉ chắc
                        người yêu anh khổ lắm
                      </p>
                    </div>
                    <div class="timeMess">
                      <p>11:30</p>
                    </div>
                  </div>
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
                    />
                    <button type="button" className="btnMess">
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
