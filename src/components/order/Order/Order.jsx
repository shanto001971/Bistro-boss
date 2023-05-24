import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useMenu } from "../../../hooks/useMenu";
import OrderTab from "../OrderTeb/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
    const categoris = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = categoris.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const drinks = menu.filter(item => item.category === "drinks");


    return (
        <div className="text-center">
            <Helmet>
                <title>BristoBoss | Orders</title>
            </Helmet>

            <Cover img={orderCover} title={'Oreder Food'} />
            <div className="my-10">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERT</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel><OrderTab item={salad} /></TabPanel>
                    <TabPanel><OrderTab item={pizza} /></TabPanel>
                    <TabPanel><OrderTab item={soup} /></TabPanel>
                    <TabPanel><OrderTab item={dessert} /></TabPanel>
                    <TabPanel><OrderTab item={drinks} /></TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default Order;