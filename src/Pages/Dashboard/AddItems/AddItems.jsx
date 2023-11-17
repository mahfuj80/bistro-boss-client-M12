import { FaUtensils } from 'react-icons/fa';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <SectionTitle
        heading={'add an item'}
        subHeading={"What's new?"}
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              {...register('name', { required: true })}
              type="text"
              placeholder="Recipe Name.."
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                {...register('category', { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled selected>
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            {/* Price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                {...register('price', { required: true })}
                type="number"
                placeholder="Price.."
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              {...register('recipe')}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details Here.."
            ></textarea>
          </div>
          <div className="form-control w-full my-6">
            <input
              {...register('image', { required: true })}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <button className="btn">
            Add Item <FaUtensils className="ml-4"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
