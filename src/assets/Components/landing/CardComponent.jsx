import { Link } from "react-router-dom";

const CardComponent = ({ text, link, largeText, img="psyduck.jpg" }) => {
  const handleLinkClick = () => {
    // Navigate to the specified link
    history.push(link);

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };
  return (
    <div className="card w-60 bg-base-100 shadow-xl">
      <figure>
        <div className="max-h-44 mt-8">
        <img
          src={img}
          alt="psyduck"
          className=" object-cover h-32 w-32 rounded-full"
        />
        </div>

      </figure>
      <div className="card-body">
        <h2 className="card-title">{text} </h2>
        <p className="text-xs">{largeText}</p>
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
