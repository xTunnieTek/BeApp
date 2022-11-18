import MainLayout from "../Components/MainLayout"
import '../Assets/CSS/Pages/Payment.css'
import QRCode from "../Assets/Images/qrcode.png"
import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import axios from "axios";

function Payment() {
    const [active, setActive] = useState("");
    const auth = getAuth();
    console.log(auth);
    const [user, setUser] = React.useState([]);
    const userId = localStorage.getItem("UserId");
    const getUser = async () => {
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

    return(
        <MainLayout>
            <h1 className="bedating">BeDating</h1>
            <h2 className="options">Payment options</h2>
            <div className="payment">
                <div className="payment-1">
                    <div className="payment-info">
                        <h2 className="info-acc">Information account</h2>
                        <table className="table-info">
                            <tr>
                                <th>Name</th>
                                <td>{user ? user.name : ""}</td>
                            </tr>
                            <br></br>
                            <tr>
                                <th>Email</th>
                                <td>{user ? user.email : ""}</td>
                            </tr>
                            <br></br>
                            <tr>
                                <th>Phone Number</th>
                                <td>{user ? user.phone : ""}</td>
                            </tr>
                            <br></br>
                            <tr>
                                <th>Status Account</th>
                                <td>Member</td>
                            </tr>
                            <br></br>
                            <tr>
                                <th>Valid</th>
                                <td>Not yet available</td>
                            </tr>
                        </table>
                        <div className="coupons">
                            <table>
                                <tr>
                                    <th>Counpons:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th>
                                    <input className="text-input" type="text"></input>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="price-details">
                        <h1 className="title-price">PRICE DETAILS</h1>
                        <hr/>
                        <table className="table-price">
                            <tr>
                                <th>Premium 6 months</th>
                                <td>120.000 VNĐ</td>
                            </tr>
                            <br></br>
                            <tr>
                                <th>Discount</th>
                                <td>-50.000 VNĐ</td>
                            </tr>
                            <br></br>
                            <tr>
                                <th><hr></hr></th>
                                <td><hr></hr></td>
                            </tr>
                            <tr>
                                <th>Total charges</th>
                                <td>70.000 VNĐ</td>
                            </tr>
                            <br></br>
                            <tr>
                                <th><hr></hr></th>
                                <td><hr></hr></td>
                            </tr>
                            <img className="qrcode" src={QRCode} alt = "qrcode" />
                        </table>
                        <button className="complete">
                            COMPLETED
                        </button>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
export default Payment