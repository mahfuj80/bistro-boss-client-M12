// eslint-disable-next-line react/prop-types
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className=" w-[80%] md:w-4/12 mx-auto text-center my-8">
      <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
      <h1 className="text-3xl font-bold uppercase border-y-4 py-4">
        {heading}
      </h1>
    </div>
  );
};

export default SectionTitle;
