import BestSellingProducts from "./BestSellingProducts";
import Brands from "./Brands";
import Categories from "./Categories";
import Collections from "./Collections";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <Slider />
            <BestSellingProducts />
            <Brands />
            <Categories />
            <Collections />
        </div>
    );
};

export default Home;
