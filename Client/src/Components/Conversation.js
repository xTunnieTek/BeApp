import axios from "axios";
import { useEffect, useState } from "react";

function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);
    const getUser = async () => {
      try {
        const response = await axios.get("http://localhost:8000/users/user/", {
            params: { userId: friendId },
          })
        setUser(response.data.user);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return <div>
    {user?.name}
  </div>;
}

export default Conversation;
