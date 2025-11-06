// App.jsx
export default function App() {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <h2>MyApp</h2>
        <a href="#">🏠 Dashboard</a>
        <a href="#">📊 Reports</a>
        <a href="#">⚙️ Settings</a>
      </aside>

      <div className="main-content">
        <header className="navbar">
          <h3>Dashboard</h3>
          <div className="row">
            <button className="btn btn-ghost">Export</button>
            <button className="btn btn-primary">Add</button>
          </div>
        </header>

        <main className="container">
          <div className="row wrap">
            <div className="card flex-1">
              <div className="card-header">
                <span className="card-title">Users</span>
                <span className="card-sub">+12%</span>
              </div>
              <p>Active Users: 132</p>
            </div>

            <div className="card flex-1">
              <div className="card-header">
                <span className="card-title">Orders</span>
                <span className="card-sub">Today</span>
              </div>
              <p>Completed: 52</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
