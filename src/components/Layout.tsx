import "./Layput.css";

function Layout() {
  return (
    <div className="container">
      <div className="header">Header</div>

      <div className="main">
        <div className="sidebar">
          <p>Sidebar Content</p>
          <button>Click</button>
        </div>

        <div className="content">
          <p>Main Content Area</p>
          <button>Save</button>
        </div>
      </div>

      <div className="footer">Footer</div>
    </div>
  );
}
export default Layout;
