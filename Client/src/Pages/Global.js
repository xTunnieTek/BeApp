import MainLayout from "../Components/MainLayout";
import React, { useState, useEffect } from "react";
import "../Assets/CSS/Pages/Global.css";
import Avatar from "../Assets/Images/Avatar/avatar.jpg";
import { Form, Button, Modal } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import { Input } from "antd";
import DefaultImage from "../Assets/Images/Avatar/default-user-img.png";
import Like from "../Assets/SVG/crush.svg";
import Comment from "../Assets/SVG/messages.svg";
import axios from "axios";
import { format } from "timeago.js";
import ImgCrop from "antd-img-crop";
const { TextArea } = Input;

function Global() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState();
  const [userImg, setUserImg] = React.useState(DefaultImage);
  const [fileList, setFileList] = useState([]);
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/posts");
      console.log(response)
      setPosts(response.data.posts);
    } catch(err) {
      console.log(err);
    }
  }

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
  }, []);

  useEffect(() => {
    getAllPosts();
  },[]);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handlePost = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = async (values) => {
    try {
      let formData = new FormData();
      formData.append("image",fileList[0].originFileObj);
      formData.append("user", localStorage.getItem("UserId"));
      formData.append("content",values.content);
      const response = await axios.post("http://localhost:8000/posts", formData, {
        headers: {
          "Content-Type":"multipart/form-data"
        }
      })
      console.log(response);
    } catch(err) {
      console.log(err);
    }
  };

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <MainLayout>
      <div className="Global">
        <div className="myPost">
          <div className="Info">
            <div className="Avatar">
              <img
                src={
                  user?.photo
                    ? require(`../Assets/Images/${user.photo}`)
                    : userImg
                }
                alt="Avatar"
              />
            </div>
            <div className="Name">
              <h3>{user?.name}</h3>
              <button onClick={showModal}>
                What's on your mind, {user?.name} ?
              </button>
              <Modal
                title="Create Post"
                open={isModalOpen}
                onOk={handlePost}
                onCancel={handleCancel}
              >
                <div className="ShowModal">
                  <img
                    src={
                      user?.photo
                        ? require(`../Assets/Images/${user.photo}`)
                        : userImg
                    }
                    alt="Avatar"
                    className="Avatar"
                  />
                  <h3 className="Name">{user?.name}</h3>
                </div>
                <Form
                  labelCol={{
                    span: 4,
                  }}
                  wrapperCol={{
                    span: 14,
                  }}
                  onFinish={onFinish}
                  layout="horizontal"
                >
                  <Form.Item name="content">
                    <TextArea
                      name="content"
                      placeholder="What's on your mind ?"
                      autoSize={{
                        minRows: 5,
                        maxRows: 10,
                      }}
                    />
                  </Form.Item>
                  <br />
                  <Form.Item valuePropName="fileList" name="imageFile">
                    <ImgCrop rotate>
                      <Upload
                        listType="picture-card"
                        fileList={fileList}
                        onChange={onChange}
                        onPreview={onPreview}
                      >
                        {fileList.length < 1 && "+ Upload"}
                      </Upload>
                    </ImgCrop>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      Style="width:200px; height:50px; background-color: var(--red-e94057);border-radius:20px; float:right"
                      className="btnlogin-button"
                      type="primary"
                      htmlType="submit"
                      danger
                    >
                      <b className="btnSave">Save</b>
                    </Button>
                  </Form.Item>
                </Form>
              </Modal>
            </div>
          </div>
        </div>
        {/* New Feed */}
        <div className="NewFeed">
          {/* Start Post */}  
          {posts?.map((p,i) => (
            <div className="Post">
            <div className="Info">
              <div className="Avatar">
                <img src={require(`../Assets/Images/${p.user.photo}`)} alt="Avatar" />
              </div>
              <div className="Name">
                <h3>{p.user.name}</h3>
                <p>{format(p.created_at)}</p>
              </div>
            </div>
            <div className="Content">
              <p>{p.content}</p>
            </div>
            <div className="Image">
              <img src={require(`../Assets/Images/Post/${p.image}`)} alt="Avatar" />
            </div>
            <div className="Action">
              <div className="Like">
                <button>
                  <img src={Like} />
                  Like
                </button>
                <button>
                  <img src={Comment} />
                  Comment
                </button>
              </div>
            </div>
          </div>
          ))}
          {/* End Post */}

          {/* Start Post */}
          <div className="Post">
            <div className="Info">
              <div className="Avatar">
                <img src={Avatar} alt="Avatar" />
              </div>
              <div className="Name">
                <h3>Anh Ngoc</h3>
                <p>1 hour ago</p>
              </div>
            </div>
            <div className="Content">
              <p>What's on your mind ?</p>
            </div>
            <div className="Image">
              <img src={Avatar} alt="Avatar" />
            </div>
            <div className="Action">
              <div className="Like">
                <button>
                  <img src={Like} />
                  Like
                </button>
                <button>
                  <img src={Comment} />
                  Comment
                </button>
              </div>
            </div>
          </div>

          {/* End Post */}
        </div>
      </div>
    </MainLayout>
  );
}

export default Global;
