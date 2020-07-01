import React, {useState, useCallback} from 'react';
import {NavLink, Link, useHistory, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import headerLogo from '../img/header-logo.png'
import {changeSearchCatalog, fetchCatalogRequest, fetchCategoriesRequest} from "../redux/catalogList/actions";
import {cartSelector} from "../redux/cart/selectors";

const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [visibleSearchForm, setVisibleSearchForm] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const {items} = useSelector(cartSelector);
    const location = useLocation();
    const isCatalogPage = location.pathname.substring(1) === 'catalog';

    const handleChangeSearch = (e) => {
        setSearchValue(e.target.value)
    };

    const inputRef = useCallback(inputEl => {
        if (inputEl) {
            inputEl.focus();
        }
    }, [visibleSearchForm]);

    const handleClickSearch = () => {
        if (!searchValue) {
            setVisibleSearchForm(!visibleSearchForm);
        } else {
            dispatch(changeSearchCatalog(searchValue));
            if(isCatalogPage) {
                dispatch(fetchCatalogRequest(0, 0, searchValue));
                dispatch(fetchCategoriesRequest())
            } else {
                history.push('/catalog')
            }
        }
    };

    const handleClickCart = () => {
        history.push('/cart')
    };

    return (
        <header className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                        <Link className="navbar-brand" to="/">
                            <img src={headerLogo} alt="Bosa Noga"/>
                        </Link>

                        <div className="collapase navbar-collapse" id="navbarMain">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/">Главная</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/catalog">Каталог</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/about">О магазине</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/contacts">Контакты</NavLink>
                                </li>
                            </ul>
                            <div>
                                <div className="header-controls-pics">
                                    <div onClick={handleClickSearch} data-id="search-expander"
                                         className="header-controls-pic header-controls-search"></div>
                                    <div className="header-controls-pic header-controls-cart"
                                         onClick={handleClickCart}
                                    >
                                        {items.length > 0 &&
                                        <div className="header-controls-cart-full">{items.length}</div>
                                        }
                                        <div className="header-controls-cart-menu"></div>
                                    </div>
                                </div>
                                <form data-id="search-form"
                                      onSubmit={(e) => {e.preventDefault(); handleClickSearch()}}
                                      className={`header-controls-search-form form-inline${visibleSearchForm ? ' invisible' : ''}`}>
                                    <input onChange={handleChangeSearch} value={searchValue} ref={inputRef} className="form-control" placeholder="Поиск"/>
                                </form>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        </header>
    );
};

export default Header;