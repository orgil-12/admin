import Image from "next/image";
import "./style.css";
import { UserCard } from "./card";
import USERSDATA from "./usersData.json"


export default function Home() {
  return( <div className="grid grid-cols-3 gap-4">
    {USERSDATA.map((user) => <UserCard user = {user}/>)}
  </div>
  )
}
