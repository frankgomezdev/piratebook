import "./profileposts.scss"


const ProfilePosts = () => {

    const posts = [
        {
          id: 1,
          name: "Nami",
          userId: 1,
          profilePic: "https://qph.cf2.quoracdn.net/main-qimg-a1e8f69ca6140981338015c818fec130-pjlq",
          desc: "Just made it to Thriller Bark!",
          img: "",
        },
        {
          id: 2,
          name: "Brook",
          userId: 2,
          profilePic: "https://imgix.ranker.com/user_node_img/50088/1001742851/original/no-matter-how-deep-the-night-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375",
          desc: "Buccaneer gabion loaded to the gunwalls scallywag wench holystone plunder gally landlubber or just lubber belaying pin. Nipperkin fore pink clap of thunder carouser bilge bowsprit nipper heave to Nelsons folly. Gangplank gaff mizzenmast Blimey Arr scourge of the seven seas trysail Chain Shot carouser Privateer.",
        },
      ];
    
      
      return <div className="posts">
          {posts.map(post=>(
              <Post post={post} key={post.id} />
          ))}
        </div>;
    };

export default ProfilePosts