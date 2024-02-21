/* eslint-disable no-unused-vars */
import friends from "../friends.json";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem {...friend} />
          </li>
        );
      })}
    </ul>
  );
};
export default FriendList;
