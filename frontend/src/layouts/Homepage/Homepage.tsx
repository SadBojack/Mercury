export const Homepage = () => {
  return (
    <div className="container">
      {/* Cover photo */}
      <div className="text-center py-5">
        <img src="/public/line.jpg" className="img-fluid rounded-2 w-100" alt="cover" />
      </div>

      {/* 掘り出し物300円オークション */}
      <div className="mb-3">
        <div className="d-flex align-items-center py-3">
          <h5 className="mb-0">掘り出し物300円オークション</h5>
          <a
            className="ms-auto link-underline link-underline-opacity-0"
            href="#"
          >
            すべて見る &gt;
          </a>
        </div>
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-3">
          <div className="col">
            <div className="card bg-body-tertiary border border-0">
              <img
                src="/public/vite.svg"
                width="200"
                height="200"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay d-flex align-items-end px-0 py-4">
                <div className="bg-dark text-white px-2 py-1 rounded-pill">
                  <h5 className="fs-6 m-0 ">200yen</h5>
                </div>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text">Product Name</p>
            </div>
          </div>
          <div className="col">
            <div className="card bg-body-tertiary border border-0">
              <img
                src="/public/vite.svg"
                width="200"
                height="200"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay d-flex align-items-end px-0 py-4">
                <div className="bg-dark text-white px-2 py-1 rounded-pill">
                  <h5 className="fs-6 m-0 ">200yen</h5>
                </div>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text">Product Name</p>
            </div>
          </div>
          <div className="col">
            <div className="card bg-body-tertiary border border-0">
              <img
                src="/public/vite.svg"
                width="200"
                height="200"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay d-flex align-items-end px-0 py-4">
                <div className="bg-dark text-white px-2 py-1 rounded-pill">
                  <h5 className="fs-6 m-0 ">200yen</h5>
                </div>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text">Product Name</p>
            </div>
          </div>
          <div className="col">
            <div className="card bg-body-tertiary border border-0">
              <img
                src="/public/vite.svg"
                width="200"
                height="200"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay d-flex align-items-end px-0 py-4">
                <div className="bg-dark text-white px-2 py-1 rounded-pill">
                  <h5 className="fs-6 m-0 ">200yen</h5>
                </div>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text">Product Name</p>
            </div>
          </div>
          <div className="col">
            <div className="card bg-body-tertiary border border-0">
              <img
                src="/public/vite.svg"
                width="200"
                height="200"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay d-flex align-items-end px-0 py-4">
                <div className="bg-dark text-white px-2 py-1 rounded-pill">
                  <h5 className="fs-6 m-0 ">200yen</h5>
                </div>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text">Product Name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
