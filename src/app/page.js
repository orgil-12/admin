import Image from "next/image";
import "./style.css";

export default function Home() {
  const users = [
    {
      id: 1,
      firstName: "Marian",
      lastName: "Dixsee",
      email: "mdixsee0@nba.com",
      companyName: "Blogtags",
      phoneNumber: "412-530-2249",
      address: "62 Meadow Ridge Plaza",
    },
    {
      id: 2,
      firstName: "Coleman",
      lastName: "Oxbie",
      email: "coxbie1@oaic.gov.au",
      companyName: "Fatz",
      phoneNumber: "592-295-2012",
      address: "18 Macpherson Place",
    },
    {
      id: 3,
      firstName: "Allx",
      lastName: "Tomasian",
      email: "atomasian2@cafepress.com",
      companyName: "Abata",
      phoneNumber: "741-828-1962",
      address: "42040 Ridgeway Trail",
    },
    {
      id: 4,
      firstName: "Jarrett",
      lastName: "Randales",
      email: "jrandales3@wiley.com",
      companyName: "Vidoo",
      phoneNumber: "401-321-9934",
      address: "595 Lakewood Street",
    },
    {
      id: 5,
      firstName: "Mora",
      lastName: "Tildesley",
      email: "mtildesley4@privacy.gov.au",
      companyName: "Shuffletag",
      phoneNumber: "254-913-7925",
      address: "7 Little Fleur Point",
    },
    {
      id: 6,
      firstName: "Livvyy",
      lastName: "Crankhorn",
      email: "lcrankhorn5@google.com.br",
      companyName: "Fivespan",
      phoneNumber: "589-951-2909",
      address: "23524 Thackeray Street",
    },
    {
      id: 7,
      firstName: "Erwin",
      lastName: "LLelweln",
      email: "ellelweln6@de.vu",
      companyName: "Cogibox",
      phoneNumber: "105-760-3548",
      address: "20 Cardinal Pass",
    },
    {
      id: 8,
      firstName: "Jourdain",
      lastName: "Leban",
      email: "jleban7@is.gd",
      companyName: "Layo",
      phoneNumber: "124-860-5889",
      address: "77 Fair Oaks Court",
    },
    {
      id: 9,
      firstName: "Christy",
      lastName: "Van Der Straaten",
      email: "cvanderstraaten8@dailymail.co.uk",
      companyName: "Linktype",
      phoneNumber: "460-169-0338",
      address: "94749 Mendota Circle",
    },
    {
      id: 10,
      firstName: "Jehanna",
      lastName: "Cleobury",
      email: "jcleobury9@huffingtonpost.com",
      companyName: "Flashpoint",
      phoneNumber: "396-811-4137",
      address: "3759 Oak Valley Park",
    },
  ];
  return (
    <div>
      <div className="card">
        <div>
          <div className="title">
            <div className="name">
              <h2 className="firstName">{users[0].firstName}</h2>
              <h2 className="lastName">{users[0].lastName}</h2>
            </div>
            <p style={{ fontSize: 8, fontWeight: 400 }}>Designer</p>
          </div>
          <div className="info-container">
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="phone photo"></div>
              <p style={{ fontSize: 8 }}>{users[0].phoneNumber}</p>
            </div>
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="mail photo"></div>
              <p style={{ fontSize: 8 }}>{users[0].email}</p>
            </div>
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="address photo"></div>
              <p style={{ fontSize: 8 }}>{users[0].address}</p>
            </div>
          </div>
        </div>
        <div className="rightPhoto">
          <div className="logoPhoto"></div>
          <div className="qrcode"></div>
        </div>
      </div>
      <div className="card">
        <div>
          <div className="title">
            <div className="name">
              <h2 className="firstName">{users[1].firstName}</h2>
              <h2 className="lastName">{users[1].lastName}</h2>
            </div>
            <p style={{ fontSize: 8, fontWeight: 400 }}>Designer</p>
          </div>
          <div className="info-container">
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="phone photo"></div>
              <p style={{ fontSize: 8 }}>{users[1].phoneNumber}</p>
            </div>
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="mail photo"></div>
              <p style={{ fontSize: 8 }}>{users[1].email}</p>
            </div>
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="address photo"></div>
              <p style={{ fontSize: 8 }}>{users[1].address}</p>
            </div>
          </div>
        </div>
        <div className="rightPhoto">
          <div className="logoPhoto"></div>
          <div className="qrcode"></div>
        </div>
      </div>
      <div className="card">
        <div>
          <div className="title">
            <div className="name">
              <h2 className="firstName">{users[2].firstName}</h2>
              <h2 className="lastName">{users[2].lastName}</h2>
            </div>
            <p style={{ fontSize: 8, fontWeight: 400 }}>Designer</p>
          </div>
          <div className="info-container">
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="phone photo"></div>
              <p style={{ fontSize: 8 }}>{users[2].phoneNumber}</p>
            </div>
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="mail photo"></div>
              <p style={{ fontSize: 8 }}>{users[2].email}</p>
            </div>
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="address photo"></div>
              <p style={{ fontSize: 8 }}>{users[2].address}</p>
            </div>
          </div>
        </div>
        <div className="rightPhoto">
          <div className="logoPhoto"></div>
          <div className="qrcode"></div>
        </div>
      </div>
      <div className="card">
        <div>
          <div className="title">
            <div className="name">
              <h2 className="firstName">{users[3].firstName}</h2>
              <h2 className="lastName">{users[3].lastName}</h2>
            </div>
            <p style={{ fontSize: 8, fontWeight: 400 }}>Designer</p>
          </div>
          <div className="info-container">
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="phone photo"></div>
              <p style={{ fontSize: 8 }}>{users[3].phoneNumber}</p>
            </div>
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="mail photo"></div>
              <p style={{ fontSize: 8 }}>{users[3].email}</p>
            </div>
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="address photo"></div>
              <p style={{ fontSize: 8 }}>{users[3].address}</p>
            </div>
          </div>
        </div>
        <div className="rightPhoto">
          <div className="logoPhoto"></div>
          <div className="qrcode"></div>
        </div>
      </div>
      <div className="card">
        <div>
          <div className="title">
            <div className="name">
              <h2 className="firstName">{users[4].firstName}</h2>
              <h2 className="lastName">{users[4].lastName}</h2>
            </div>
            <p style={{ fontSize: 8, fontWeight: 400 }}>Designer</p>
          </div>
          <div className="info-container">
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="phone photo"></div>
              <p style={{ fontSize: 8 }}>{users[4].phoneNumber}</p>
            </div>
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="mail photo"></div>
              <p style={{ fontSize: 8 }}>{users[4].email}</p>
            </div>
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="address photo"></div>
              <p style={{ fontSize: 8 }}>{users[4].address}</p>
            </div>
          </div>
        </div>
        <div className="rightPhoto">
          <div className="logoPhoto"></div>
          <div className="qrcode"></div>
        </div>
      </div>
      <div className="card">
        <div>
          <div className="title">
            <div className="name">
              <h2 className="firstName">{users[5].firstName}</h2>
              <h2 className="lastName">{users[5].lastName}</h2>
            </div>
            <p style={{ fontSize: 8, fontWeight: 400 }}>Designer</p>
          </div>
          <div className="info-container">
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="phone photo"></div>
              <p style={{ fontSize: 8 }}>{users[5].phoneNumber}</p>
            </div>
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="mail photo"></div>
              <p style={{ fontSize: 8 }}>{users[5].email}</p>
            </div>
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="address photo"></div>
              <p style={{ fontSize: 8 }}>{users[5].address}</p>
            </div>
          </div>
        </div>
        <div className="rightPhoto">
          <div className="logoPhoto"></div>
          <div className="qrcode"></div>
        </div>
      </div>
      <div className="card">
        <div>
          <div className="title">
            <div className="name">
              <h2 className="firstName">{users[6].firstName}</h2>
              <h2 className="lastName">{users[6].lastName}</h2>
            </div>
            <p style={{ fontSize: 8, fontWeight: 400 }}>Designer</p>
          </div>
          <div className="info-container">
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="phone photo"></div>
              <p style={{ fontSize: 8 }}>{users[6].phoneNumber}</p>
            </div>
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="mail photo"></div>
              <p style={{ fontSize: 8 }}>{users[6].email}</p>
            </div>
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="address photo"></div>
              <p style={{ fontSize: 8 }}>{users[6].address}</p>
            </div>
          </div>
        </div>
        <div className="rightPhoto">
          <div className="logoPhoto"></div>
          <div className="qrcode"></div>
        </div>
      </div>
      <div className="card">
        <div>
          <div className="title">
            <div className="name">
              <h2 className="firstName">{users[7].firstName}</h2>
              <h2 className="lastName">{users[7].lastName}</h2>
            </div>
            <p style={{ fontSize: 8, fontWeight: 400 }}>Designer</p>
          </div>
          <div className="info-container">
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="phone photo"></div>
              <p style={{ fontSize: 8 }}>{users[7].phoneNumber}</p>
            </div>
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="mail photo"></div>
              <p style={{ fontSize: 8 }}>{users[7].email}</p>
            </div>
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="address photo"></div>
              <p style={{ fontSize: 8 }}>{users[7].address}</p>
            </div>
          </div>
        </div>
        <div className="rightPhoto">
          <div className="logoPhoto"></div>
          <div className="qrcode"></div>
        </div>
      </div>
      <div className="card">
        <div>
          <div className="title">
            <div className="name">
              <h2 className="firstName">{users[8].firstName}</h2>
              <h2 className="lastName">{users[8].lastName}</h2>
            </div>
            <p style={{ fontSize: 8, fontWeight: 400 }}>Designer</p>
          </div>
          <div className="info-container">
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="phone photo"></div>
              <p style={{ fontSize: 8 }}>{users[8].phoneNumber}</p>
            </div>
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="mail photo"></div>
              <p style={{ fontSize: 8 }}>{users[8].email}</p>
            </div>
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="address photo"></div>
              <p style={{ fontSize: 8 }}>{users[8].address}</p>
            </div>
          </div>
        </div>
        <div className="rightPhoto">
          <div className="logoPhoto"></div>
          <div className="qrcode"></div>
        </div>
      </div>
      <div className="card">
        <div>
          <div className="title">
            <div className="name">
              <h2 className="firstName">{users[9].firstName}</h2>
              <h2 className="lastName">{users[9].lastName}</h2>
            </div>
            <p style={{ fontSize: 8, fontWeight: 400 }}>Designer</p>
          </div>
          <div className="info-container">
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="phone photo"></div>
              <p style={{ fontSize: 8 }}>{users[9].phoneNumber}</p>
            </div>
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="mail photo"></div>
              <p style={{ fontSize: 8 }}>{users[9].email}</p>
            </div>
            <div className="info">
              {/* <img src="Vector.png"></img> */}
              <div className="address photo"></div>
              <p style={{ fontSize: 8 }}>{users[9].address}</p>
            </div>
          </div>
        </div>
        <div className="rightPhoto">
          <div className="logoPhoto"></div>
          <div className="qrcode"></div>
        </div>
      </div>
    </div>
  );
}
