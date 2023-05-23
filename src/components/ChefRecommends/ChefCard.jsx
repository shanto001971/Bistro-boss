

const ChefCard = ({ img }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl  pr-20 my-20">
            <figure><img src={img} alt="Shoes" className="w-full h-48"/></figure>
            <div className="card-body">
                <h2 className="card-title">Caeser Salad</h2>
                <p className="font-thin">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline border-0 border-b-4 uppercase">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;