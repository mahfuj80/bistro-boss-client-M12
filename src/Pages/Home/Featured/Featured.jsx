import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
  return (
    <div className="featured-item bg-fixed bg-center  text-white pt-8 my-20">
      <SectionTitle
        subHeading={'check it out'}
        heading={'Featured item'}
      ></SectionTitle>
      <div className="md:flex bg-slate-500 opacity-60 justify-center items-start pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="image" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            assumenda quam architecto maiores autem incidunt qui recusandae
            ullam adipisci fuga voluptatum, ut ea deserunt rerum quasi expedita
            accusantium sed quibusdam numquam. Excepturi id in dolorum fugiat
            necessitatibus, ut aliquam animi tempore corporis saepe molestias
            optio atque, ipsam explicabo accusamus perspiciatis!
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
