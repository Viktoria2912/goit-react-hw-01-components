import PropTypes from 'prop-types';

import css from './Profile.module.css';

export function Profile(props) {
  const { username, tag, location, avatar, followers, views, likes } = props;
  return (
    <div>
      <div className={css.profile}>
        <div className={css.description}>
          <img src={avatar} alt="user avatar" className={css.avatar} />
          <p className={css.name}>{username}</p>
          <p className={css.tag}>{tag}</p>
          <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
          <li children={css.list}>
            <span className={css.label}>followers</span>
            <span className={css.quantity}>{followers}</span>
          </li>
          <li className={css.list}>
            <span className={css.label}>views</span>
            <span className={css.quantity}>{views}</span>
          </li>
          <li className={css.list}>
            <span className={css.label}>likes</span>
            <span className={css.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
