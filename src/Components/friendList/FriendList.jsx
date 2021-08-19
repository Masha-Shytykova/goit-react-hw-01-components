import FriendsListItem from "../FriendsListItem/FriendsListItem";
import s from "./FriendList.module.css";

import friends from "../../data/friends.json";

const FriendList = () => {
  return (
    <ul className={s.friend_list}>
      <FriendsListItem friends={friends} />
    </ul>
  );
};

export default FriendList;
