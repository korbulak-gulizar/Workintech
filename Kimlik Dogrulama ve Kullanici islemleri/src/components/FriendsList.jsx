import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("https://nextgen-project.onrender.com/api/s11d2/friends", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => {
        console.log("FRIENDS LIST ERROR:", err);
      });
  }, [token]);

  return (
    <div className="friendListDiv">
      <h1>FRIENDS LIST</h1>

      {friends.map((friend) => (
        <div className="friendList" key={friend.id}>
          -{friend.name}-{friend.email}
        </div>
      ))}
    </div>
  );
}
