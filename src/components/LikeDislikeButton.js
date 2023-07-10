import React, {useState} from "react";

function LikeDislikeButton({upvotes, downvotes}) {
const [likes, setLikes] = useState(upvotes);
const [dislikes, setDislikes] = useState(downvotes);
function handleLikes() {
    setLikes(likes + 1)
}
function handleDislikes() {
    setDislikes(dislikes + 1)
}
    return (
    <div>
        <br></br>
        <button onClick={handleLikes}>{likes}👍</button>
        <button onClick={handleDislikes}>{dislikes}👎</button>
    </div>
        )
}
export default LikeDislikeButton;