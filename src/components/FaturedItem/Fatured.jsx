import SectionTitle from "../sectionTitle/SectionTitle";
import featured from '../../assets/home/featured.jpg';
import './Fatured.css'

const Fatured = () => {
    return (
        <div className="featured-Item pt-8 my-20">
            <SectionTitle
                heading={'fatured item'}
                subHeading={'check it Out'}
            />

            <div className="md:flex justify-center items-center py-20 pt-12 lg:px-36 gap-10">
                <div className="">
                    <img src={featured} alt="" className="rounded-md w-full"/>
                </div>
                <div className="text-white p-10">
                    <p>March 20, 2023</p>
                    <h1>WHERE CAN I GET SOME?</h1>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</small>
                    <button className="btn btn-outline mt-8">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Fatured;