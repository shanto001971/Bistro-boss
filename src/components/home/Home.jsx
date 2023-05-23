import Fatured from "../FaturedItem/Fatured";
import PopularManu from "../PopularManu/PopularManu";
import Banner from "../banner/Banner";
import Category from "../cetagory/Category";
import Tastimonials from "../tastimonials/Tastimonials";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <PopularManu/>
            <Fatured/>
            <Tastimonials/>
        </div>
    );
};

export default Home;