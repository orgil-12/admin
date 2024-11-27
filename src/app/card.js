const UserCard = ({user}) => {
    return (
        <div key={user.index}>
      <div className="card" >
        <div>
          <div className="title"> 
            <div className="name">
              <h2 className="firstName">{user.firstName}</h2>
              <h2 className="lastName">{user.lastName}</h2>
            </div>
            <p>Designer</p>
          </div>
          <div className="info-container">
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="phone photo"></div>
              <p>{user.phoneNumber}</p>
            </div>
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="mail photo"></div>
              <p>{user.email}</p>
            </div>
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="address photo"></div>
              <p>{user.address}</p>
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
// const UserCard = (props) => {
//   return (
//       <div key={props.user.index}>
//     <div className="card" >
//       <div>
//         <div className="title"> 
//           <div className="name">
//             <h2 className="firstName">{props.user.firstName}</h2>
//             <h2 className="lastName">{props.user.lastName}</h2>
//           </div>
//           <p>Designer</p>
//         </div>
//         <div className="info-container">
//           <div className="info">
//             {/* <img src="Vector.png"></img> */}
//             <div className="phone photo"></div>
//             <p>{props.user.phoneNumber}</p>
//           </div>
//           <div className="info">
//             {/* <img src="Vector.png"></img> */}
//             <div className="mail photo"></div>
//             <p>{props.user.email}</p>
//           </div>
//           <div className="info">
//             {/* <img src="Vector.png"></img> */}
//             <div className="address photo"></div>
//             <p>{props.user.address}</p>
//           </div>
//         </div>
//       </div>
//       <div className="rightPhoto">
//         <div className="logoPhoto"></div>
//         <div className="qrcode"></div>
//       </div>
//     </div>
//   </div>
//   )
// }

export {UserCard}