import MainLayout from '../Components/MainLayout'
import React, { useState } from 'react';
import '../Assets/CSS/Pages/Global.css'
import Avatar from "../Assets/Images/Avatar/avatar.jpg"
import { Button, Modal } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import { Input } from 'antd';
import Like from "../Assets/SVG/crush.svg"
import Comment from "../Assets/SVG/messages.svg"
const { TextArea } = Input;

const fileList = [

  ];



function Global() {
    const [value, setValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handlePost = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  return (
    <MainLayout>
        <div className="Global">
            <div className='myPost'>
                <div className="Info">
                    <div className="Avatar">
                        <img src={Avatar} alt = "Avatar" />
                    </div>
                    <div className="Name">
                        <h3>Anh Ngoc</h3>
                        <button onClick={showModal}>What's on your mind, Anh Ngoc ?</button>
                        <Modal title="Create Post" open={isModalOpen} onOk={handlePost} onCancel={handleCancel}>
                            <div className="ShowModal">
                                <img src={Avatar} alt = "Avatar" className='Avatar'/>
                                <h3 className='Name'>Anh Ngoc</h3>
                            </div>
                            <TextArea
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                placeholder="What's on your mind ?"
                                autoSize={{
                                minRows: 5,
                                maxRows: 10,
                                }}
                            />
                            <br/>
                            <Upload
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture"
                                defaultFileList={[...fileList]}
                                className="upload-list-inline"
                                >
                            <Button className='ant' icon={<UploadOutlined />}>Upload</Button>
                            </Upload>
                        </Modal>
                    </div>
                </div>
            </div>
            {/* New Feed */}
            <div className="NewFeed">
                {/* Start Post */}
                <div className="Post">
                    <div className="Info">
                        <div className="Avatar">
                            <img src={Avatar} alt = "Avatar" />
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
                        <img src={Avatar} alt = "Avatar" />
                        </div>
                    <div className="Action">
                        <div className="Like">
                            <button ><img src={Like} />Like</button>
                            <button ><img src={Comment} />Comment</button>
                        </div>
                    </div>
                </div>

                {/* End Post */}

                {/* Start Post */}
                <div className="Post">
                    <div className="Info">
                        <div className="Avatar">
                            <img src={Avatar} alt = "Avatar" />
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
                        <img src={Avatar} alt = "Avatar" />
                        </div>
                    <div className="Action">
                        <div className="Like">
                            <button ><img src={Like} />Like</button>
                            <button ><img src={Comment} />Comment</button>
                        </div>
                    </div>
                </div>

                {/* End Post */}
            </div>
        </div>
    </MainLayout>
  )
}

export default Global