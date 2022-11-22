import React from "react";
import { format } from "timeago.js";
function Message({ message, own }) {
  return (
    <>
      {own ? (<div class="toMess">
        <div class="contentMess">
          <p>{message.text}</p>
        </div>
        <div class="timeMess">
          <p>{format(message.createdAt)}</p>
        </div>
      </div>) : (<div class="fromMess">

        <div class="contentMess">
          <p>{message.text}</p>
        </div>
        <div class="timeMess">
          <p>{format(message.createdAt)}</p>
        </div>
      </div>)}
      

      {/* Trả lời */}
      
    </>
  );
}

export default Message;
