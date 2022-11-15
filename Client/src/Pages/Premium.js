import MainLayout from "../Components/MainLayout"
import '../Assets/CSS/Pages/Premium.css'

function Premium() {

  return (
    <MainLayout>
        <div className="Premium">
            <h1 className="title-1">BeDating</h1>
            <h2 className="title-2">Pick your Premium</h2>
            <div className="Service">
                <div className="Service-1">
                    <h1 className="Title-S1">TITAN</h1>
                    <h2 className="Price-S1">35.000đ/month</h2>
                    <button className="Btn-buy">BUY</button>
                    <hr></hr>
                    <p>Unlock the feature to see who has liked</p>
                    <p>Unlock the "Second Look" viewing feature</p>
                    <p>Unlock the love counseling feature</p>
                </div>
                <div className="Service-1">
                    <h1 className="Title-S2">GOLD</h1>
                    <h2 className="Price-S2">120.000đ/6 months</h2>
                    <button className="Btn-buy">BUY</button>
                    <hr></hr>
                    <p>Unlock the feature to see who has liked</p>
                    <p>Unlock the "Second Look" viewing feature</p>
                    <p>Unlock the love counseling feature</p>
                    <p>Give partners discount vouchers on their birthdays.</p>
                    <p>50% off the next Premium subscription</p>
                </div>
                <div className="Service-1">
                    <h1 className="Title-S3">PLATINUM</h1>
                    <h2 className="Price-S3">180.000đ/12 months</h2>
                    <button className="Btn-buy">BUY</button>
                    <hr></hr>
                    <p>Unlock the feature to see who has liked</p>
                    <p>Unlock the "Second Look" viewing feature</p>
                    <p>Unlock the love counseling feature</p>
                    <p>Give partners discount vouchers on their birthdays</p>
                    <p>Birthday gift from BeDating and the development team</p>
                    <p>70% off the next Premium subscription</p>
                </div>
            </div>
        </div>
    </MainLayout>
  )
}

export default Premium