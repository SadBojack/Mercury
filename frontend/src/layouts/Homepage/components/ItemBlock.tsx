import { Link } from "react-router";
import type Item from "../../../models/Item";

export const ItemBlock: React.FC<{
  item: Item;
}> = (props) => {
  return (
    <div className="col">
      <Link to={`/item/{props.item.id}`} className="link-underline link-underline-opacity-0">
        <div className="card border border-0">
          <div className="aspect-ratio-1-1 bg-body-tertiary">
            <img src={props.item.src} className="card-img" alt="..." />
            <div className="card-img-overlay d-flex align-items-end px-0 py-4">
              <div className="bg-dark text-white px-2 py-1 rounded-pill">
                <h5 className="fs-6 m-0 ">{props.item.price}</h5>
              </div>
            </div>
          </div>
          <div className="card-body p-0">
            <p className="card-text">{props.item.name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
