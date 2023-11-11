/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-4 my-16">
        {items?.map((item) => (
          <MenuItem key={item?._id} item={item}></MenuItem>
        ))}
      </div>

      <div className="text-center mt-4 pb-4">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
