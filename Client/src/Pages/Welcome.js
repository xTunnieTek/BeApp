import welcome from '../Assets/Images/Welcome.png'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';


const Welcome = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
        navigate('/login')
        },5000)
    })
    const antIcon = (
        <LoadingOutlined
            style={{
            fontSize: 100,
            color: '#E94057',
            fontWeight: 'bold',
            }}
            spin
        />
      );

  return (
    <div className="welcome" >
      <img src={welcome} Style="width:100%"/>
      <Spin 
        indicator={antIcon} 
        Style="
            z-index:1;
            margin-top:-50%;
            margin-left:50%;
        "
      />
    </div>
  );
};

export default Welcome;