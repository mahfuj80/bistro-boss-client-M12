import { FaUtensils } from 'react-icons/fa';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data) => {
    try {
      // Create a FormData object to handle file uploads
      const formData = new FormData();
      formData.append('image', data.image[0]);
      console.log(formData);

      // Use axios to post the FormData to the image hosting API
      const res = await axiosPublic.post(image_hosting_api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Log the response data from the image hosting API
      console.log(res.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
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
                defaultValue={'default'}
                {...register('category', { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value={'default'}>
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
