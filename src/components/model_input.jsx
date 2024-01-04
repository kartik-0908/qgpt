import React from "react";

function ChatInput (params) {
    return(
        <div className="mi">
            <div className="mi__box">
                <div className="mi__box__tf">
                    <textarea className="mi__box__tf--if" type="text" placeholder="Type Your Query"/>
                </div>
                <div className="mi__box__sb">
                    <button className="mi__box__sb--btn">↑</button>
                </div>
            </div>
        </div>
    )
}

export default ChatInput;