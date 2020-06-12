import React from 'react';
import Banner from "../components/Banner";
import Catalog from "../components/Catalog";
import TopSales from "../components/TopSales";
import Alert from "../components/Alert";

const Main = () => {
    return (
        <main className="container">
            <div className="row">
                <div className="col">
                    <Banner/>
                    <Alert/>
                    <TopSales/>
                    <Catalog/>
                </div>
            </div>
        </main>
    );
};

export default Main;