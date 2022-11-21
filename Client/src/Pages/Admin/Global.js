/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import {
    Row,
    Col,
    Card,
    Radio,
    Table,
    Upload,
    message,
    Progress,
    Button,
    Avatar,
    Typography,
    Modal,
  } from "antd";

  import React, { useState } from 'react';

  
  import { ToTopOutlined } from "@ant-design/icons";
  import { Link } from "react-router-dom";
  
  // Images
  import img1 from "../../Assets/Admin/images/team-1.jpg";
  import face from "../../Assets/Admin/images/face-1.jpg";
  import face2 from "../../Assets/Admin/images/face-2.jpg";
  import face3 from "../../Assets/Admin/images/face-3.jpg";

  
  const { Title } = Typography;
  
  const formProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  // table code start
  const columns = [
    {
      title: "#ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "AUTHOR",
      dataIndex: "name",
      key: "name",
      width: "20%",
    },
    {
      title: "CONTENT",
      dataIndex: "content",
      key: "content",
      width: "40%",
    },
  
    {
      title: "IMAGES",
      key: "images",
      dataIndex: "images",
    },
    {
      title: "DATETIME",
      key: "datetime",
      dataIndex: "datetime",
    },
  ];
  
  const data = [
    {
      key: "1",
      id: "#GB0001",
      name: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={40}
              src={face2}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>Chi Sô</Title>
              <p>chiso@mail.com</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      content: (
        <>
          <div className="author-info">
            <p className="ant-form">Yeah, yeah, yeah Blackpink in 천사 같은 "hi" 끝엔 악마 같은 "bye" 매번 미칠듯한 high 뒤엔 뱉어야 하는 price .. </p>
          </div>
        </>
      ),
  
      images: (
        <>
          <Button type="danger" className="tag-danger">
            Preview
          </Button>
        </>
      ),
      datetime: (
        <>
          <div className="ant-employed">
            <span>23/04/18</span>
            <a href="#pablo">Edit</a>
          </div>
        </>
      ),
    },
  
    {
      key: "2",
      id: "#GB0002",
      name: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={40}
              src={face2}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>Chi Sô</Title>
              <p>chiso@mail.com</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      content: (
        <>
          <div className="author-info">
            <p className="ant-form">Hôm qua bà Lisa ngủ cùng tôi mà ngáy to quá tôi đ ngủ được các ông ạ. </p>
          </div>
        </>
      ),
  
      images: (
        <>
          <Button type="danger" className="tag-danger">
            Preview
          </Button>
        </>
      ),
      datetime: (
        <>
          <div className="ant-employed">
            <span>23/04/18</span>
            <a href="#pablo">Edit</a>
          </div>
        </>
      ),
    },
    {
      key: "3",
      id: "#GB0003",
      name: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={40}
              src={face}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>Nguyen Quoc Huy</Title>
              <p>huynd@fpt.com</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      content: (
        <>
          <div className="author-info">
            <p className="ant-form">Đố thầy biết em đang code cái gì  .. </p>
          </div>
        </>
      ),
  
      images: (
        <>
          <Button type="danger" className="tag-danger">
            Preview
          </Button>
        </>
      ),
      datetime: (
        <>
          <div className="ant-employed">
            <span>23/04/18</span>
            <a href="#pablo">Edit</a>
          </div>
        </>
      ),
    },
  ];

  
  function Tables() {
    const onChange = (e) => console.log(`radio checked:${e.target.value}`);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return (
      <>
        <div className="tabled">
          <Row gutter={[24, 0]}>
            <Col xs="24" xl={24}>
              <Card
                bordered={false}
                className="criclebox tablespace mb-24"
                title="#Global Posts"
              >
                <div className="table-responsive">
                  <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    className="ant-border-space"
                  />
                </div>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
  
  export default Tables;
  