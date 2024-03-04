const AboutUsFeature = ({ number, title, img, text }) => {
  return (
    <div className="flex flex-col mb-6 border-4 border-[#ffeeac] rounded-xl p-4 text-[#5d6a77]">
      <h4 className="text-xl font-bold mb-6 text-[#49535e]">
        0{number} - {title}{" "}
      </h4>
      <div className=" w-[8rem] relative self-center rounded-xl mb-6">
        <img
          src={img}
          alt={`${title} image`}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <p className="border-t-2 pt-4 border-[#ffeeac]">{text}</p>
    </div>
  );
};
export default AboutUsFeature;
