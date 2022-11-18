<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useCallback } from "react";
import "../Assets/CSS/Pages/Profile.css";
import Header from "../Components/Header";
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Upload,
} from 'antd';
import ImgCrop from 'antd-img-crop';
import { getAuth } from "firebase/auth";
import axios from 'axios';

import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { RangePicker } = DatePicker;
    const { TextArea } = Input;
      const [componentDisabled, setComponentDisabled] = useState(true);
      const onFormLayoutChange = ({ disabled }) => {
        setComponentDisabled(disabled);
      };

      const [fileList, setFileList] = useState([
        {
          uid: '-1',
          name: 'image',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ]);
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

        const onFinish = async (values) => {
                try {
                  const response = await axios.put('http://localhost:8000/users/update',{...values,email});
                  if(response.status === 200) {
                    console.log('Update successfully');
                  }
                } catch(err) {
                  console.log(err);
                } 
            console.log('Success:', values);
          };

          const auth = getAuth();
          const user = auth.currentUser;
          const [name,setName] = useState(user !== null ? user.displayName : '');
          const [images,setImg] = useState([]);
          const [gender,setGender] = useState('');
          const [dob, setDob] = useState('');
          const [gender_interest, setGenderInterest] = useState('');
          const [about,setAbout] = useState('');
          const [address,setAddress] = useState('');
          const email = user.email;
        
               




          

  return (
    <div className="profile-detail-div">
        <Header />
        
        <div className="content-profile">
        <Form
            labelCol={{
            span: 4,
            }}
            wrapperCol={{
            span: 14,
            }}
            onFinish={onFinish}
            layout="horizontal"
            onValuesChange={onFormLayoutChange}
        >
                <div className="content">
                    <b className="lets-complete-the-profile" Style="margin:40px 0; color: var(--red-e94057)">Let's complete the profile</b>
                    <div className="content-1">
                        <div className="img">
                            <Form.Item name="images" valuePropName="fileList" >
                                <ImgCrop rotate>
                                    <Upload
                                        listType="picture-card"
                                        fileList={fileList}
                                        onChange={onChange}
                                        onPreview={onPreview}
                                    >
                                        {fileList.length < 1 && '+ Upload'}
                                    </Upload>
                                </ImgCrop>
                            </Form.Item>
                        </div>
                        <div className="content-1-2">
                            <div className="firstname">
                                <Form.Item name="name"> 
                                    <Input  placeholder="Enter First Name" Style="width: 400px;height:50px; border-radius:10px"/>
                                </Form.Item>
                            </div>
                            <div className="gender">
                                <Form.Item  name="gender">
                                    <Radio.Group >
                                        <Radio.Button value="male"  Style="width: 400px;height:50px; border-radius:10px"><h1 >Male</h1></Radio.Button>
                                        <Radio.Button value="female"  Style="width: 400px;height:50px; border-radius:10px"><h1 >Female</h1></Radio.Button>
                                        <Radio.Button value="other"  Style="width: 400px;height:50px; border-radius:10px"><h1 >Other</h1></Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                            </div>
                            <div className="address">
                                <Form.Item name="address"> 
                                    <Input  placeholder="Enter Address" Style="width: 400px;height:50px; border-radius:10px"/>
                                </Form.Item>
                            </div>
                            <div className="dob">
                                <Form.Item  name="dob">
                                    <DatePicker />
                                </Form.Item>
                                <Form.Item  name="gender_interest">
                                    <Select>
                                        <Select.Option value="male">Male</Select.Option>
                                        <Select.Option value="female">Female</Select.Option>
                                        <Select.Option value="other">Other</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="content-2">
                        <Form.Item name="about">
                            <TextArea rows={4} placeholder="Enter about me" Style=" border-radius:10px; width:800px"/>
                        </Form.Item>
                    </div>
                    <div className="content-3">
                        <Form.Item>
                            <Button Style="width:200px; height:50px; background-color: var(--red-e94057);border-radius:20px; float:right"
                                className="btnlogin-button" type="primary" htmlType="submit"  danger>
                                <b className="btnSave">Save</b>
                            </Button>
                        </Form.Item>
                    </div>
                </div>
        </Form>
        </div>
    </div>
  );
};

export default Profile;
>>>>>>> parent of 296e157c (Tuấn Update Profile)
=======
>>>>>>> parent of fdcf6ab3 (huy hom nay)
