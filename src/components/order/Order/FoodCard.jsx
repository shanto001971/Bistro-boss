
const FoodCard = ({ items }) => {
    const { name, image, price, recipe } = items;
    console.log(items)
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Food" /></figure>
            <p className='bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4 rounded-md'>${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                <button className="btn btn-outline border-orange-400 bg-slate-100 border-0 border-b-4  mt-8">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;