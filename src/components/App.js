import video from "../data/video.js";
import Video from "./Video.js";
import LikeDislikeButton from "./LikeDislikeButton.js";
import CommentList from "./CommentList.js";
function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video />
      <LikeDislikeButton upvotes={video.upvotes} downvotes={video.downvotes}/>
      <CommentList comments={video.comments}/>
    </div>
  );
}

export default App;
