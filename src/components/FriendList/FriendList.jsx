import PropTypes from 'prop-types';
import css from './FriendList.module.css';
export function FriendList({ friends }) {
  return (
    <div className={css.friends}>
      <ul className={css.friends__list}>
        {friends.map(friend => (
          <li className={css.friends__item} key={friend.id}>
            <span className={`${css.friends__status} ${css[friend.isOnline]}`}>
              {friend.isOnline}
            </span>
            <img
              className={css.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.friends__name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
