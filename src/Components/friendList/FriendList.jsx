import s from "./FriendList.module.css";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friend_list}>
      {friends.map((el) => (
        <li className={s.item} key={el.id}>
          {el.isOnline ? (
            <span className={`${s.status} ${s.online}`}></span>
          ) : (
            <span className={`${s.status} ${s.offline}`}></span>
          )}

          <img className="avatar" src={el.avatar} alt="" width="48" />
          <p className="name">{el.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
