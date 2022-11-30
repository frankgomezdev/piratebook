import "./rightBar.scss"

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="data:image/jpeg;base64,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" />
              <span>Monkey D. Dragon</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOPuKzy-1bunHjKHsRKgR6J7UPKTVdQYDAoQ&usqp=CAU" />
              <span>Monkey D. Garp</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activites</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://img1.ak.crunchyroll.com/i/spire2/cbfbcca44c023cb02a1c6f98a14aa0a11644116719_full.png" />
              <p>
             <span>Nico Robin </span> changed their cover picture.   
              </p>
            </div>
            <span>3 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://cdn.realsport101.com/images/ncavvykf/epicstream/e5da1b8d867ab8bf63b88e350d69d3dea49959a0-1280x720.jpg?rect=0,0,1279,720&w=700&h=394&dpr=2" />
              <p>
             <span>Sanji </span> changed their relationship status.   
              </p>
            </div>
            <span>2 hours ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="http://pm1.narvii.com/7201/205ad085bbe90c9fa168d79f5a2fbdea4a7ecf29r1-720-720v2_00.jpg" />
              <p>
             <span>Franky </span> changed their profile picture.   
              </p>
            </div>
            <span>1 day ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://img1.ak.crunchyroll.com/i/spire2/cbfbcca44c023cb02a1c6f98a14aa0a11644116719_full.png" />
              <div className="online" />
             <span>Nico Robin</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://qph.cf2.quoracdn.net/main-qimg-a1e8f69ca6140981338015c818fec130-pjlq" />
              <div className="online" />
             <span>Nami</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://cdn.realsport101.com/images/ncavvykf/epicstream/e5da1b8d867ab8bf63b88e350d69d3dea49959a0-1280x720.jpg?rect=0,0,1279,720&w=700&h=394&dpr=2" />
              <div className="online" />
             <span>Sanji</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://sportshub.cbsistatic.com/i/2021/03/17/4b078733-6084-41b5-8b91-d5debfd2c103/koby-one-piece-1201265.jpg" />
              <div className="online" />
             <span>Coby</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src ="https://static.planetminecraft.com/files/resource_media/screenshot/1913/one-piece-laboon-1-1553966442.jpg" />
              <div className="online" />
             <span>Laboon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar