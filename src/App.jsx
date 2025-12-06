import ProfileCard from "./components/ProfileCard";

function App() {
  const users = [
    { name: "DEEPAK", role: "Frontend Developer", image: "https://i.pravatar.cc/150?img=3" },
    { name: "RIYA", role: "UI/UX Designer", image: "https://i.pravatar.cc/150?img=5" },
    { name: "SIMRAN", role: "React Developer", image: "https://i.pravatar.cc/150?img=10" }
  ];

  return (
    <div className="container">
      <h1>Profile Cards</h1>

      <div className="grid">
        {users.map((user, idx) => (
          <ProfileCard
            key={idx}
            name={user.name}
            role={user.role}
            image={user.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
