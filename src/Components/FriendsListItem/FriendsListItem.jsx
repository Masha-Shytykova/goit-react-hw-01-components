import s from "../FriendsListItem/FriendsListItem.module.css";
import PropTypes from "prop-types";

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      <span className={`${s.status} ${isOnline ? s.online : s.offline}`}></span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
};

export default FriendsListItem;
