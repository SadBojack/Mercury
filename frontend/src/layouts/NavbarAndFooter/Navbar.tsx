export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-settings p-3">
      <div className="container-fluid mx-2">
        <a className="navbar-brand " href="#">
          Mercury
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse mt-lg-0 mt-3"
          id="navbarSupportedContent"
        >
          <form className="d-flex flex-grow-1" role="search">
            <input
              className="form-control me-2 text-secondary bg-secondary-subtle navbar-search-input"
              type="search"
              placeholder="なにをお探しですか"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item px-2">
              <a className="nav-link" aria-current="page" href="#">
                ログイン
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                登録
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-bell"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                </svg>
              </a>
            </li>
            <li className="nav-item ms-2">
              <button className="btn btn-danger" aria-disabled="true">
                Disabled
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
