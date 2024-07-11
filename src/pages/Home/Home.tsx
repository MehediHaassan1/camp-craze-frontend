import BestSellingProducts from "./BestSellingProducts";
import Brands from "./Brands";
import Categories from "./Categories";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <Slider />
            <BestSellingProducts />
            <Brands />
            <Categories />
        </div>
    );
};

export default Home;
