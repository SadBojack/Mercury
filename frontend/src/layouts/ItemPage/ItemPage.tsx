export const ItemPage = () => {
  return (
    <div className="p-4">
      <div className="my-2">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Library</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Data
            </li>
          </ol>
        </nav>
      </div>
      <div className="my-2 row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 g-3">
        <div>
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/ghost.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/ghost.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/ghost.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div>
          <div className="d-flex flex-column">
            <h1>ProductName</h1>
            <h3>Product Sub</h3>
            <h4>3000Yen</h4>
          </div>
          <div className="d-flex">
            <button>Like</button>
            <button>Comment</button>
            <button>Save</button>
            <button>通報</button>
          </div>
          <div className="">
            <button className="w-100">購入手続きへ</button>
          </div>
          <div className="d-flex flex-column">
            <h3>商品の説明</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sed dui commodo, efficitur ex ut, laoreet diam. Duis elit dolor,
              tempus sed augue eget, dapibus vehicula augue. Vestibulum euismod
              turpis leo, eu interdum eros vulputate a. Sed iaculis purus vitae
              suscipit sodales. Fusce facilisis, nibh et tempus tempor, ante
              arcu fermentum nunc, ut pellentesque magna nisi et mauris.
              Suspendisse aliquam orci sit amet fermentum egestas. Sed vulputate
              ex sit amet condimentum accumsan. Etiam et nisl tellus. Nulla
              porttitor justo sit amet imperdiet tempus. Suspendisse scelerisque
              varius eros, dignissim venenatis mauris laoreet eu.
            </p>
          </div>

          <div className="d-flex flex-column">
            <h3>商品の情報</h3>
            <div className="row row-cols-2">
              <div>
                spendisse aliquam orci sit amet fermentum egestas. Sed vulputate
                ex sit amet condimentum accumsan. Etiam et nisl tellus. Nulla
                porttitor justo sit amet imperdiet tempu
              </div>
              <div>
                spendisse aliquam orci sit amet fermentum egestas. Sed vulputate
                ex sit amet condimentum accumsan. Etiam et nisl tellus. Nulla
                porttitor justo sit amet imperdiet tempu
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
