import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-5">
      <div className="container-fluid">
        <a className="navbar-brand" id="nav-title" href="#">BELLUNOMEDIA</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto flex-nowrap">
            <li className="nav-item">
              <a className="nav-link" href="#">OUR WORK</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">WHO WE ARE</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">WHAT WE DO <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
</svg></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">NEWS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">INSIGHTS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}