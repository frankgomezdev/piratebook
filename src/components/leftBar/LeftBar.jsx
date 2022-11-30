import "./leftBar.scss"
import Friends from "../../assets/friends.png";
import Groups from "../../assets/groups.png";
import Market from "../../assets/marketplace.png";
import Watch from "../../assets/watch.png";
import Memories from "../../assets/memories.png";
import Event from "../../assets/events.png";
import Gaming from "../../assets/gaming.png";
import Gallery from "../../assets/friends.png";
import Videos from "../../assets/videos.png";
import Messaging from "../../assets/messages.png";
import Tutorials from "../../assets/tutorials.png";
import Courses from "../../assets/courses.png";
import Funds from "../../assets/fundraiser.png";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
              <img src="https://image.winudf.com/v2/image/Y29tLmJhbGVmb290Lk1vbmtleURMdWZmeVdhbGxwYXBlcl9zY3JlZW5fMF8xNTI0NTE5MTEwXzAyOA/screen-0.jpg?h=500&fakeurl=1&type=.jpg" />
              <span>Monkey D. Luffy</span>
          </div>
          <div className="item">
            <img src={Friends} />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} />
            <span>Memories</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Event} />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messaging} />
            <span>Messages</span>
          </div>
        </div>
          <hr/>
          <div className="menu">
            <span>Others</span>
            <div className="item">
            <img src={Funds} />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Tutorials} />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} />
            <span>Courses</span>
          </div>
          </div>
      </div>
    </div>
  )
}

export default LeftBar