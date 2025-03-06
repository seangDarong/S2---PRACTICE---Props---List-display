import { ALL_USER } from "./data.js";

function App() {
  return (
      <div id="app">
        <h1>SPC TEAM</h1>
      {ALL_USER.map((user,index) => (
        <User key={index} user = {user}/> 
      )
    )}
      
      </div>
    );
}
export function User({ user }) {
  return (
    <div id="card" data-testid="user">
      <img src={user.src} alt="" />
      <h2>
        {user.name}{" "}
      </h2>
      <p> {user.color}</p>
    </div>
  );
}
export default App; 
