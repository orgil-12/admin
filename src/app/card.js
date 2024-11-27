const UserCard = ({props}) => {
    return (
        <div key={props.index}>
      <div className="card" >
        <div>
          <div className="title">
            <div className="name">
              <h2 className="firstName">{props.firstName}</h2>
              <h2 className="lastName">{props.lastName}</h2>
            </div>
            <p>Designer</p>
          </div>
          <div className="info-container">
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="phone photo"></div>
              <p>{props.phoneNumber}</p>
            </div>
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="mail photo"></div>
              <p>{props.email}</p>
            </div>
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="address photo"></div>
              <p>{props.address}</p>
            </div>
          </div>
        </div>
        <div className="rightPhoto">
          <div className="logoPhoto"></div>
          <div className="qrcode"></div>
        </div>
      </div>
    </div>
    )
}

export {UserCard}