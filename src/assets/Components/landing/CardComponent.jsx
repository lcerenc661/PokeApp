import { Link } from "react-router-dom";

const CardComponent = ({ text, link }) => {
  const handleLinkClick = () => {
    // Navigate to the specified link
    history.push(link);

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };
  return (
    <div className="card w-60 bg-base-100 shadow-xl">
      <figure>
        <img
          src="/public/psyduck.jpg"
          alt="psyduck"
          className=" object-contain h-56"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{text} </h2>
        <p>If a dog chews shoes whose shoes does he c</p>
        <div className="card-actions justify-end">
          <Link
            to={link}
            className="btn btn-primary btn-block mt-8"
            onClick={handleLinkClick}>
            Show Me!
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CardComponent;
