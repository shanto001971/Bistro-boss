
import SectionTitle from "../sectionTitle/SectionTitle";
import MenuItem from "../menuItem/MenuItem";
import { useMenu } from "../../hooks/useMenu";


const PopularManu = () => {
    const [ menu ] = useMenu();
    const popularItem = menu.filter(item => item.category == "popular")
    // const [menu, setMenu] = useState([])

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItem = data.filter(item => item.category == "popular")

    //             setMenu(popularItem)
    //         })
    // }, [])

    // console.log(menu)
    return (
        <section className="mb-16 text">
            <SectionTitle
                heading={'form Our Manu'}
                subHeading={"popular Items"}
            >
            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-4">
                {
                    popularItem.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <div className="text-center  my-8"><button className="btn btn-outline border-0 border-b-4">View Full Menu</button></div>
        </section>
    );
};

export default PopularManu;