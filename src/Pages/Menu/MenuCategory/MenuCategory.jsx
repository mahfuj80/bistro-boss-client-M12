import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

// eslint-disable-next-line react/prop-types
const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-4 my-16">
        {/* eslint-disable-next-line react/prop-types */}
        {items?.map((item) => (
          <MenuItem key={item?._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
