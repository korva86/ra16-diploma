import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {useLocation, Link} from 'react-router-dom'
import {
    alertShow,
    catalogSearchRequest,
    changeSearchCatalog,
    fetchCatalogRequest,
    fetchCategoriesRequest, selectCatalogCategory,
} from "../redux/actions/actionCreators";
import Preloader from "./Preloader";
import CatalogCard from "./CatalogCard";
import FetchCatalogButton from "./FetchCatalogButton";

const Catalog = () => {
    const {items, categories, selectedCategory, loading, search, error} = useSelector(state => state.catalog);
    const dispatch = useDispatch();
    const newCategories = [{
        id: 0,
        title: 'Все',
    }, ...categories];
    const location = useLocation();
    const isCatalogPage = location.pathname.substring(1) === 'catalog';

    const handleCategory = (e, id) => {
        e.preventDefault();
        dispatch(selectCatalogCategory(id));
        dispatch(fetchCatalogRequest(id, 0, search));
    };

    const changeSearchField = evt => {
        const { value } = evt.target;
        dispatch(changeSearchCatalog(value));
    };

    const handleSearch = (e, id, search) => {
        e.preventDefault();
        dispatch(catalogSearchRequest(id, 0, search))
    };

    useEffect(() => {
        if(isCatalogPage) {
            dispatch(fetchCatalogRequest(0, 0, search));
        } else {
            dispatch(fetchCatalogRequest(0, 0, ''));
        }
        dispatch(fetchCategoriesRequest())
    }, [dispatch, isCatalogPage]);

    useEffect(() => {
        if(error) {
            dispatch(alertShow(error))
        }
    }, [error]);

    if (loading) { return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            <Preloader/>
        </section>
    ) }

    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            {isCatalogPage &&
                <form onSubmit={(e) => handleSearch(e, selectedCategory, search)} className="catalog-search-form form-inline">
                    <input type="search" value={search} onChange={changeSearchField} className="form-control" placeholder="Поиск" />
                </form>
            }
            <ul className="catalog-categories nav justify-content-center">
                { newCategories.map((item) => {
                    return (
                        <li className="nav-item" key={item.id} onClick={(e) => handleCategory(e, item.id)}>
                            <Link className={item.id === selectedCategory ? 'nav-link active' : 'nav-link'} to="#">{item.title}</Link>
                        </li>
                    )
                }) }
            </ul>

            <div className="row">
                {!items.length && <p>Ничего не найдено</p>}
                { items && items.map((item) =>  <CatalogCard item={item} key={item.id} /> ) }
            </div>

            <FetchCatalogButton/>
        </section>
    );
};

export default Catalog;