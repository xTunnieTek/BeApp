import MainLayout from "../Components/MainLayout"
import '../Assets/CSS/Pages/Payment.css'
import QRCode from "../Assets/Images/QRCode/qrcode.png"

function Payment() {

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
                                <td>Nguyen Quoc Huy</td>
                            </tr>
                            <br></br>
                            <tr>
                                <th>Email</th>
                                <td>huyngu@gmail.com</td>
                            </tr>
                            <br></br>
                            <tr>
                                <th>Phone Number</th>
                                <td>0123456789</td>
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