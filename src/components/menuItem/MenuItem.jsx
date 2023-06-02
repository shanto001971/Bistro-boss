


const MenuItem = ({ item }) => {
    // console.log(item)
    const { name, image, price, recipe } = item;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: "0 200px 200px 250px"}} className="w-[100px]" src={image} alt="" />
            <div className="">
                <h1 className="uppercase text-2xl font-serif">{name}</h1>
                <p className="font-thin">{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;