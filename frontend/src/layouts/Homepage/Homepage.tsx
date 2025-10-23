import Item from "../../models/Item";
import { ItemBlock } from "./components/ItemBlock";

export const Homepage = () => {
  const auctionItems = [
    new Item(1, "Product A", "/vite.svg", "200yen"),
    new Item(2, "Product B", "/ghost.jpg", "300yen"),
    new Item(3, "Product C", "/vite.svg", "150yen"),
    new Item(4, "Product D", "/vite.svg", "2000yen"),
    new Item(5, "Product E", "/vite.svg", "1500yen"),
  ];

  return (
    <div className="container">
      {/* Cover photo */}
      <div className="text-center py-5">
        <img
          src="/public/line.jpg"
          className="img-fluid rounded-2 w-100"
          alt="cover"
        />
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
          {auctionItems.map((item) => (
            <ItemBlock key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
