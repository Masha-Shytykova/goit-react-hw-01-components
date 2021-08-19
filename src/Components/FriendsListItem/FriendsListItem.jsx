import s from "../FriendsListItem/FriendsListItem.module.css";
import PropTypes from "prop-types";

const FriendsListItem = ({ friends }) => {
  return friends.map(({ id, avatar, name, isOnline }) => (
    <li className={s.item} key={id}>
      {isOnline ? (
        <span className={`${s.status} ${s.online}`}></span>
      ) : (
        <span className={`${s.status} ${s.offline}`}></span>
      )}

      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  ));
};

FriendsListItem.propTypes = {
  friends: PropTypes.array,
};

export default FriendsListItem;
