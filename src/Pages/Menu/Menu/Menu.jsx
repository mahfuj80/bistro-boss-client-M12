import { Helmet } from 'react-helmet-async';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import Cover from '../../../Components/Shared/Cover/Cover';

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu?.filter((item) => item.category === 'dessert');
  const soup = menu?.filter((item) => item.category === 'soup');
  const salad = menu?.filter((item) => item.category === 'salad');
  const pizza = menu?.filter((item) => item.category === 'pizza');
  const offered = menu?.filter((item) => item.category === 'offered');
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={'Our Menu'}></Cover>
      {/* Main Cover */}
      <SectionTitle
        heading={"Today's Offer"}
        subHeading={"Don't Miss"}
      ></SectionTitle>
      {/* Offered Menu Items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* Dessert Menu Items*/}
      <MenuCategory
        items={desserts}
        title={'dessert'}
        img={dessertImg}
      ></MenuCategory>
      {/* Dessert Menu Items*/}
      <MenuCategory items={pizza} title={'pizza'} img={pizzaImg}></MenuCategory>
      {/* Dessert Menu Items*/}
      <MenuCategory items={salad} title={'salad'} img={saladImg}></MenuCategory>
      {/* Dessert Menu Items*/}
      <MenuCategory items={soup} title={'soup'} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
