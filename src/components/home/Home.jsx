import Fatured from "../FaturedItem/Fatured";
import PopularManu from "../PopularManu/PopularManu";
import Banner from "../banner/Banner";
import Category from "../cetagory/Category";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <PopularManu/>
            <Fatured/>
        </div>
    );
};

export default Home;