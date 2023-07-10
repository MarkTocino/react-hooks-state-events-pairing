import React, {useState} from "react";
import Comment from "./Comments.js";
import video from "../data/video.js";
function CommentList ({comments}) {
    const commentList = comments.map((props) => {
        return <Comment key={props.id} {...props}/>
    })
    const [searchTerm, setSearchTerm] = useState("")
    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }
const searchResults = comments.filter((user) => 
        user.user.toLowerCase().includes(searchTerm.toLowerCase()))
        console.log(searchResults)
const [show, setShow] = useState(true)
        
function handleShow () {
    setShow(!show)
}
return (
<>
    <br></br>
        <button onClick={handleShow}>{show ? "Hide Comments" : "Show Comment"}</button>
    <hr></hr>
    <h1>{video.comments.length} Comments</h1>
    <input onChange={handleSearch} type="text" placeholder="SearchByUser"  />
    {show ? commentList : null}
</>
        )
}
export default CommentList