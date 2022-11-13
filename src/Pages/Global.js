import MainLayout from '../Components/MainLayout'
import '../Assets/CSS/Pages/Global.css'
import Avatar from "../Assets/Images/Avatar/avatar.jpg"



function Global() {
  return (
    <MainLayout>
        <div className="Global">
        <div class="Container">
            <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                
                </div>
                <div class="col-md-6">
                    <div class="myPost">
                        <img src={Avatar} alt="avt1" />
                        <p>Tuan Cong</p>
                    </div>
                </div>
                <div class="col-md-3">
                
                </div>
            </div>
            </div>
        </div>
        </div>
    </MainLayout>
  )
}

export default Global