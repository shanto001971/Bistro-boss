
import FoodCard from '../Order/FoodCard';

const OrderTab = ({item}) => {
    return (
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">{item.map(items=><FoodCard key={items._id} items={items}/>)}</div>
    );
};

export default OrderTab;