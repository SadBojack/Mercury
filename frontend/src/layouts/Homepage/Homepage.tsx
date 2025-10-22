export const Homepage = () => {
  return (
    <div className="mx-4">

    {/* Cover photo */}
      <div className="d-flex justify-content-center py-5">
        <img src="/public/line.jpg" className="img-fluid rounded-2 w-100" />
      </div>

      {/* 掘り出し物300円オークション */}
      <div className="d-flex flex-column mb-3">
        <div className="d-flex py-3">
          <h5>
            掘り出し物300円オークション
          </h5>
          <a className="ms-auto link-underline link-underline-opacity-0" href="#">
            すべて見る &gt;
          </a>
        </div>
      <div className="d-flex justify-content-center row">
        <div className="col">
          <div className="card bg-body-secondary">
            <img
              src="/public/vite.svg"
              width="200"
              height="200"
              className="card-img-top"
              alt="..."
            />
            <div className="card-img-overlay row">
              <h5 className="col align-self-end card-title bg-dark text-white">
                200yen
              </h5>
            </div>
          </div>
          <div className="card-body">
            <p className="card-text">Product Name</p>
          </div>
        </div>
        <div className="col">
          <div className="card bg-body-secondary">
            <img
              src="/public/vite.svg"
              width="200"
              height="200"
              className="card-img-top"
              alt="..."
            />
            <div className="card-img-overlay row">
              <h5 className="col align-self-end card-title bg-dark text-white">
                200yen
              </h5>
            </div>
          </div>
          <div className="card-body">
            <p className="card-text">Product Name</p>
          </div>
        </div>
        <div className="col">
          <div className="card bg-body-secondary">
            <img
              src="/public/vite.svg"
              width="200"
              height="200"
              className="card-img-top"
              alt="..."
            />
            <div className="card-img-overlay row">
              <h5 className="col align-self-end card-title bg-dark text-white">
                200yen
              </h5>
            </div>
          </div>
          <div className="card-body">
            <p className="card-text">Product Name</p>
          </div>
        </div>
        <div className="col">
          <div className="card bg-body-secondary">
            <img
              src="/public/vite.svg"
              width="200"
              height="200"
              className="card-img-top"
              alt="..."
            />
            <div className="card-img-overlay row">
              <h5 className="col align-self-end card-title bg-dark text-white">
                200yen
              </h5>
            </div>
          </div>
          <div className="card-body">
            <p className="card-text">Product Name</p>
          </div>
        </div>
        <div className="col">
          <div className="card bg-body-secondary">
            <img
              src="/public/vite.svg"
              width="200"
              height="200"
              className="card-img-top"
              alt="..."
            />
            <div className="card-img-overlay row">
              <h5 className="col align-self-end card-title bg-dark text-white">
                200yen
              </h5>
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
