import userData from "../userData.json";
import Profile from "./Profile";
import friends from "../friends.json";
import FriendList from "./Frendlist";

const App = () => {
  return (
    <>
      <Profile
        key={userData.id}
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};

export default App;
