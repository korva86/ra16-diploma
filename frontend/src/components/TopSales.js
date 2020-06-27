import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import CatalogCard from "./CatalogCard";
import Preloader from "./Preloader";
import {alertShow} from "../redux/alert/actions";
import {topSalesRequest} from "../redux/topSales/actions";
import {topSalesSelector} from "../redux/topSales/selectors";

const TopSales = () => {
    const {sales, loading, error} = useSelector(topSalesSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(topSalesRequest())
    }, [dispatch]);

    useEffect(() => {
        if(error) {
            dispatch(alertShow(error))
        }
    }, [error]);

    if(!loading && !sales.length) {return null}

    if (loading) { return (
        <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            <Preloader/>
        </section>
    ) }

    return (
        <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>

            <div className="row">
                {loading && <Preloader/> }
                {!loading && sales.map((item) => <CatalogCard item={item} key={item.id} />)}
            </div>
        </section>
    );
};

export default TopSales;