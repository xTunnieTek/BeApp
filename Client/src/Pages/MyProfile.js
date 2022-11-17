import MainLayout from "../Components/MainLayout"
import '../Assets/CSS/Pages/MyProfile.css'
import Avatar from "../Assets/Images/Avatar/avatar.jpg";
import { Select } from 'antd';
import { DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import React, { useState } from 'react';
import ImgCrop from 'antd-img-crop';


const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });


const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

const onChange = (date, dateString) => {
    console.log(date, dateString);
};

function MyProfile()
{

    const { Option } = Select;
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

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([

    ]);
    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      setPreviewImage(file.url || file.preview);
      setPreviewOpen(true);
      setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div
          style={{
            marginTop: 8,
          }}
        >
          Upload
        </div>
      </div>
    );


    return (
        <MainLayout>
            <div className="Profile">
                <div className="MyProfile">
                {/* Header */}
                <div className="MyProfile-Header">
                    {/* Left */}
                    <div className="MyProfile-Header-Left">
                        {/* <div className="MyProfile-Header-Left-Image">
                            <img src={Avatar} alt = "Avatar" />
                        </div> */}
                        <ImgCrop rotate>
                            <Upload
                                listType="picture-card"
                                className="avatar-uploader"
                                fileList={fileList}
                                onChange={onChange}
                                onPreview={onPreview}
                            >
                                {fileList.length < 1 && '+ Upload'}
                            </Upload>
                        </ImgCrop>
                    </div>
                    {/* Right */}
                    <div className="MyProfile-Header-Right">
                        <div className="inputbox">
                            <label>Name</label>
                            <input type="text" required="required"/>
                        </div>
                        <div className="inputbox">
                            <label>Address</label>
                            <input type="text" required="required"/>
                        </div>
                        <div className="inputbox">
                            <label>Phone Number</label>
                            <input type="number" required="required"/>
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className="MyProfile-Body">         
                    {/* Date of Birth */}
                    <DatePicker onChange={onChange} />

                     {/* Gender */}
                     <Select
                        defaultValue="Gender"
                        style={{ width: 100 }}
                        onChange={handleChange}
                        options={[
                            {
                            value: 'Male',
                            label: 'Male',
                            },
                            {
                            value: 'Female',
                            label: 'Female',
                            },
                            {
                            value: 'Both',
                            label: 'Both',
                            },
                        ]}
                    />
                </div>
                <div className="MyProfile-Footer">
                    <div className="MyProfile-Footer-Left">
                        <textarea placeholder="About Me"></textarea>
                    </div>
                    <div className="MyProfile-Footer-Right">
                    <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={handlePreview}
                        onChange={handleChange}
                    >
                        {fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                    <Modal
                        visible={previewOpen}
                        title={previewTitle}
                        footer={null}
                        onCancel={handleCancel}
                    >
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                    </div>
                </div>
            </div>
            {/* Social */}
            <div className="MyProfile-Social">
                <div className="Card">
                    <div className="Card-Name">
                        <p>MEMBERSHIP CARD</p>
                    </div>
                    <div className="Card-Number">
                        <p>0000 0001 6688 9901</p>
                    </div>
                    <div className="Card-Type">
                        <p>Tên Đầy Đủ</p>
                        <p>Valid: 06/10/2023</p>
                    </div>
                </div>
                <div className="inputbox">
                    <label>Facebook</label>
                    <input type="text" />
                </div>    
                <div className="inputbox">
                    <label>Instagram</label>
                    <input type="text" />
                </div>
                {/* Interest */}
                <div className="inputbox">
                    <label>Interest</label><br/>
                    <Select
                        mode="multiple"
                        style={{
                        width: '100%',
                        }}
                        placeholder="select one country"
                        defaultValue={['Thuốc Lào']}
                        onChange={handleChange}
                        optionLabelProp="label"
                    >
                        <Option value="weed" label="weed">
                        <div className="demo-option-label-item">
                            moking weed
                        </div>
                        </Option>
                        <Option value="football" label="football">
                        <div className="demo-option-label-item">
                            Football
                        </div>
                        </Option>
                    </Select>
                </div>
                
            </div>
            {/* MyPost */}
            <div className="MyProfile-Post">
            </div>
            </div>
        </MainLayout>
    )
}

export default MyProfile