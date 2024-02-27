import css from "./Profile.module.css";

const Profile = ({
  name = "Anonymous",
  tag = "user",
  location = "Unknown",
  image = "default-image.jpg",
  stats = { followers: 0, views: 0, likes: 0 },
}) => {
  return (
    <div className={css.containerProfile}>
      <div className={css.card}>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.link}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
