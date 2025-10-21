export const Homepage = () => {
  return (
    <>
    <div className="d-flex justify-content-center p-4">
      <img src="/public/line.jpg"  className="img-fluid rounded-2 w-100" />
    </div>
    <div className="row">
      <div className="col">
        <div className="card bg-secondary-subtle">
          <img src="/public/vite.svg"  width="200" height="200" className="card-img-top" alt="..." />
          <div className="card-img-overlay row">
            <h5 className="col align-self-end card-title bg-dark text-white" >200yen</h5>
          </div>
        </div>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
      </div>
      <div className="col">
        <img src="/public/vite.svg" width="100" height="100" />
        <h3>Hello World</h3>
      </div>
      <div className="col">
        <img src="/public/vite.svg" width="100" height="100" />
      </div>
      <div className="col">
        <img src="/public/vite.svg" width="100" height="100" />
      </div>
      <div className="col">
        <img src="/public/vite.svg" width="100" height="100" />
      </div>
    </div>
    </>
  );
};
