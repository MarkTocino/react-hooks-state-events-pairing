import React, { useState } from "react";

function Comment ({user, comment}) {
const [likes, setLikes] = useState(0)
const [dislikes, setDislikes] = useState(0)

function handleLikes () {
    setLikes(likes + 1)
}
function handleDislikes () {
    setDislikes(dislikes + 1)
}

    return (
<>
        <h2>{user}</h2>
        <span>{comment}</span>
        <br />
        <button onClick={handleLikes}>{likes} 😀</button>
        <button onClick={handleDislikes}>{dislikes} 😐</button>
</>
    )
}
export default Comment
