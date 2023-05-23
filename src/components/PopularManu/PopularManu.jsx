import { useEffect, useState } from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import MenuItem from "../menuItem/MenuItem";


const PopularManu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category == "popular")
                
                setMenu(popularItem)
            })
    }, [])

    // console.log(menu)
    return (
        <section className="mb-16">
            <SectionTitle
                heading={'form Our Manu'}
                subHeading={"popular Items"}
            >
            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-4">
                {
                    menu.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
        </section>
    );
};

export default PopularManu;