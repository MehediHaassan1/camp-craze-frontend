import BestSellingProducts from "./BestSellingProducts";
import Brands from "./Brands";
import CampPlan from "./CampPlan";
import Categories from "./Categories";
import Collections from "./Collections";
import Discover from "./Discover";
import Faq from "./Faq";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <Slider />
            <BestSellingProducts />
            <Brands />
            <Categories />
            <Collections />
            <Discover />
            <CampPlan />
            <Faq />
        </div>
    );
};

export default Home;
