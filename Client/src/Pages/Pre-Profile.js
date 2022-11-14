import { useCallback } from "react";
import "../Assets/CSS/Pages/Pre-Profile.css";
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

import { useNavigate } from "react-router-dom";

const PreProfile = () => {
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
      let navigate = useNavigate(); 
        const routeChange = () =>{ 
            let path = '/pre-profile'; 
            navigate(path);
        }

        const onFinish = (values) => {
            console.log('Success:', values);
          };
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
                            <Form.Item name="image" valuePropName="fileList" >
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
                                <Form.Item name="firstname"> 
                                    <Input  placeholder="Enter First Name" Style="width: 400px;height:50px; border-radius:10px"/>
                                </Form.Item>
                            </div>
                            <div className="lastname">
                                <Form.Item name="lastname">
                                    <Input  placeholder="Enter Last Name" Style="width: 400px;height:50px; border-radius:10px"/>
                                </Form.Item>
                            </div>
                            <div className="gender">
                                <Form.Item  name="gender">
                                    <Radio.Group defaultValue="male">
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
                            <div className="date">
                                <Form.Item  name="date">
                                    <DatePicker />
                                </Form.Item>
                                <Form.Item  name="interest">
                                    <Select>
                                        <Select.Option value="soccer">Soccer</Select.Option>
                                        <Select.Option value="music">Music</Select.Option>
                                        <Select.Option value="watchsex">Watch TV</Select.Option>
                                        <Select.Option value="other">Other</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                    <div className="content-2">
                        <Form.Item name="about me">
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

export default PreProfile;
