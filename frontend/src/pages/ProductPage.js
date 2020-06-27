import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'

import Banner from "../components/Banner";
import Preloader from "../components/Preloader";
import Product from "../utils/Product";
import Alert from "../components/Alert";
import {alertShow} from "../redux/alert/actions";
import {addToCart} from "../redux/cart/actions";
import {catalogItemRequest} from "../redux/catalogItem/actions";
import {catalogItemSelector} from "../redux/catalogItem/selectors";
import noImg from "../img/no_photo.jpg";

const ProductPage = () => {
    const {id} = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const {item, loading, error} = useSelector(catalogItemSelector);

    useEffect(() => {
        dispatch(catalogItemRequest(id))
    }, [dispatch, id]);

    useEffect(() => {
        if(error) {
            dispatch(alertShow(error))
        }
    }, [error]);

    const {title, images, sku, manufacturer, color, material, reason, season, sizes, price} = item;

    const [selectedCount, setSelectedCount] = useState(1);
    const [selectedSize, setSelectedSize] = useState();
    const sizeList = sizes ? sizes.filter(i => i.avalible === true) : [];

    const increaseCount = () => {
        setSelectedCount(prevSelectedCount => {
            if(prevSelectedCount >= 10) {
                return prevSelectedCount
            }
            return prevSelectedCount + 1
        })
    };

    const decreaseCount = () => {
        setSelectedCount(prevSelectedCount => {
            if(prevSelectedCount <= 1) {
                return prevSelectedCount
            }
            return prevSelectedCount - 1
        })
    };

    const handleAddToCart = () => {
        const product = new Product(id, title, selectedSize.size, selectedCount, price);
        dispatch(addToCart(product));
        history.push('/cart')
    };

    if(loading) {return <Preloader/>}

    return (
        <main className="container">
            <div className="row">
                <div className="col">
                    <Banner/>
                    <Alert/>
                    <section className="catalog-item">
                        <h2 className="text-center">{title || 'Название отсутсвует'}</h2>
                        <div className="row">
                            <div className="col-5">
                                <img src={images ? images[0] : ''}
                                     className="img-fluid" alt={title || ''}
                                     onError={(e) => {
                                         e.target.onerror = null;
                                         e.target.src = `${noImg}`;
                                     }}
                                />
                            </div>
                            <div className="col-7">
                                <table className="table table-bordered">
                                    <tbody>
                                    <tr>
                                        <td>Артикул</td>
                                        <td>{sku || 'Отсутсвует'}</td>
                                    </tr>
                                    <tr>
                                        <td>Производитель</td>
                                        <td>{manufacturer || 'Отсутсвует'}</td>
                                    </tr>
                                    <tr>
                                        <td>Цвет</td>
                                        <td>{color || 'Отсутсвует'}</td>
                                    </tr>
                                    <tr>
                                        <td>Материалы</td>
                                        <td>{material || 'Отсутсвует'}</td>
                                    </tr>
                                    <tr>
                                        <td>Сезон</td>
                                        <td>{season || 'Отсутсвует'}</td>
                                    </tr>
                                    <tr>
                                        <td>Повод</td>
                                        <td>{reason || 'Отсутсвует'}</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div className="text-center">
                                    <p>Размеры в наличии:
                                        {sizeList.map(i =>
                                            <span
                                                className={i === selectedSize ? "catalog-item-size selected" : "catalog-item-size"}
                                                onClick={() => setSelectedSize(i)}
                                                key={i.size}
                                            >
                                                {i.size}
                                            </span>
                                        )}
                                    </p>
                                    <p>Количество: <span className="btn-group btn-group-sm pl-2">
                                        <button onClick={decreaseCount} className="btn btn-secondary">-</button>
                                        <span className="btn btn-outline-primary">{selectedCount}</span>
                                        <button onClick={increaseCount} className="btn btn-secondary">+</button>
                                    </span>
                                    </p>
                                </div>
                                {
                                    sizeList.length > 0 &&
                                    <button className="btn btn-danger btn-block btn-lg"
                                            onClick={handleAddToCart}
                                            disabled={!selectedSize}
                                    >В корзину
                                    </button>
                                }
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default ProductPage;