<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
        },3000)
    })
    const antIcon = (
        <LoadingOutlined
            style={{
            fontSize: 50,
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
>>>>>>> parent of 296e157c (Tuấn Update Profile)
=======
>>>>>>> parent of fdcf6ab3 (huy hom nay)
=======
>>>>>>> parent of fdcf6ab3 (huy hom nay)
=======
>>>>>>> parent of fdcf6ab3 (huy hom nay)
