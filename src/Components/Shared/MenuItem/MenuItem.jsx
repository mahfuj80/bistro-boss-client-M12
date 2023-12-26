// eslint-disable-next-line react/prop-types
const MenuItem = ({ item }) => {
  // eslint-disable-next-line react/prop-types
  const { name, image, price, recipe } = item;
  return (
    <div className="flex gap-2">
      <img
        style={{ borderRadius: '0 200px 200px 200px' }}
        className="w-[100px]"
        src={image}
        alt="Popular_Recipe_Image"
      />
      <div>
        <h3 className="uppercase">{name}-----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
