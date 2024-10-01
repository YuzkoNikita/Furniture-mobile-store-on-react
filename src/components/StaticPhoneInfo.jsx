import cellular_connection from "../assets/icons/cellular-connection.svg"
import wifi from "../assets/icons/wifi.svg"
import battery from "../assets/icons/battery.svg"


export default function StaticPhoneInfo() {
  return (
    <section className="phone_info">
        <div className="phone_info-container container grid">
            <p>9:41</p>

            <span></span>

            <div className="phone_info-iamges">
                <img src={cellular_connection} alt="cellular" />
                <img src={wifi} alt="wifi" />
                <img src={battery} alt="battery" />
            </div>
        </div>
    </section>
  )
}
