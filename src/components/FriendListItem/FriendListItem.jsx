import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import { iconsSize } from '../Constans/iconSize';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={css.item}>
      <span
        className={isOnline ? css.statusIsOnline : css.statusIsOffline}
      ></span>
      <img
        className={css.avatar}
        src={avatar}
        alt="User avatar"
        width={iconsSize.md}
        height={iconsSize.md}
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.prototype = {
  id: PropTypes.number,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
