function ProfileCard({ name, role, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="avatar" />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

export default ProfileCard;
