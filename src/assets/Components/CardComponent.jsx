import { Link } from "react-router-dom";

const CardComponent = ({ text, link }) => {
  return (
    <div className="card w-60 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{text} </h2>
        <p>If a dog chews shoes whose shoes does he c</p>
        <div className="card-actions justify-end">
          <Link to={link} className="btn btn-primary btn-block mt-8">
            Show Me!
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CardComponent;
