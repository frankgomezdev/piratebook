import { useContext } from "react";
import "./comments.scss";
import {AuthContext} from "../../context/authContext"

const Comments = () => {


    const {currentUser} = useContext(AuthContext)
    //Temporary
    const comments = [
        {
            id: 1,
            desc: "That looks amazing, Nami! Please take me next time!",
            name: "Sanji",
            userId: 1,
            profilePicture: "https://cdn.realsport101.com/images/ncavvykf/epicstream/e5da1b8d867ab8bf63b88e350d69d3dea49959a0-1280x720.jpg?rect=0,0,1279,720&w=700&h=394&dpr=2"
        },
        {
            id: 2,
            desc: "Yo Ho Ho! I wonder if theres treasure to be found?!",
            name: "Brook",
            userId: 2,
            profilePicture: "https://imgix.ranker.com/user_node_img/50088/1001742851/original/no-matter-how-deep-the-night-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375"
        },
    ];

  return (
    <div className="comments">
        <div className="write">
            <img src={currentUser.profilePic} />
            <input type="text" placehodler="write a comment" />
            <button>Send</button>
        </div>
        {comments.map((comment) =>(
            <div className="comment">
                <img src={comment.profilePicture} />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">1 hour ago</span>
            </div>
        ))}
    </div>
  );
};

export default Comments