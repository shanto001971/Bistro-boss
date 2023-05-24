import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../menuItem/MenuItem";
import { Link } from "react-router-dom";


const MenuCategory = ({ items, title, img }) => {
    // console.log(title)
    
    return (
        <div className="pt-10">
            {title && <Cover img={img} title={title} />}
            <div className="grid md:grid-cols-2 gap-4 mt-16">
                {
                    items.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4  mt-8">Order Now</button></Link>
            </div>
    );
};

export default MenuCategory;