import React from 'react';
import Banner from "../components/Banner";
import Catalog from "../components/Catalog";
import Alert from "../components/Alert";

const NotFound = () => {
    return (
        <main className="container">
            <div className="row">
                <div className="col">
                    <Banner/>
                    <Alert/>
                    <Catalog />
                </div>
            </div>
        </main>
    );
};

export default NotFound;