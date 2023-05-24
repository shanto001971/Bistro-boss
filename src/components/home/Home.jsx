import { Helmet } from "react-helmet-async";
import BristoBanner from "../BristoBanner/BristoBanner";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Fatured from "../FaturedItem/Fatured";
import PopularManu from "../PopularManu/PopularManu";
import Banner from "../banner/Banner";
import Category from "../cetagory/Category";
import Tastimonials from "../tastimonials/Tastimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>BristoBoss | Home</title>
            </Helmet>
            <Banner/>
            <Category/>
            <PopularManu/>
            <ChefRecommends/>
            <BristoBanner/>
            <Fatured/>
            <Tastimonials/>
        </div>
    );
};

export default Home;