import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import Banner from "../components/Banner";
import Preloader from "../components/Preloader";
import Alert from "../components/Alert";
import {localStorageUpdateItems} from "../utils/Product";
import {alertShow} from "../redux/alert/actions";
import {cartOrderRequest, deleteFromCart, handleChangeCartOwner} from "../redux/cart/actions";
import {cartSelector} from "../redux/cart/selectors";

const CartPage = () => {
    const dispatch = useDispatch();
    const {items, loading, owner, success, error} = useSelector(cartSelector);
    const totalPrice = items.reduce((sum, item) => {
        return sum + item.price * item.count
    }, 0);
    const [agreement, setAgreement] = useState(false);
    const [orderBtnDisabled, setOrderBtnDisabled] = useState(true);

    const handleClickDelete = (i) => {
        dispatch(deleteFromCart(i))
    };

    const handleChangeInput = (evt) => {
        const { id, value } = evt.target;
        dispatch(handleChangeCartOwner(id, value));
    };

    useEffect(() => {
        localStorageUpdateItems(items, dispatch)
    }, [items]);

    useEffect(() => {
        if (items.length && agreement && owner.phone && owner.address) {
            setOrderBtnDisabled(false);
        } else {
            setOrderBtnDisabled(true);
        }
    }, [items, agreement, owner]);

    useEffect(() => {
        if(success) {
            dispatch(alertShow('Поздравляем! Ваш заказ успешно оформлен.', 'success'))
        }
    }, [success]);

    useEffect(() => {
        if(error) {
            dispatch(alertShow(error))
        }
    }, [error]);

    const handleSendOrder = (e) => {
        e.preventDefault();
        dispatch(
            cartOrderRequest({
                owner,
                items: items.map((item) => ({
                    id: +item.id,
                    price: item.price,
                    count: item.count,
                })),
            }),
        );
    };

    if(loading) {return <Preloader/>}

    return (
        <main className="container">
            <div className="row">
                <div className="col">
                    <Banner/>
                    <Alert/>
                    { items.length ?
                        <section className="cart">
                            <h2 className="text-center">Корзина</h2>
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Название</th>
                                    <th scope="col">Размер</th>
                                    <th scope="col">Кол-во</th>
                                    <th scope="col">Стоимость</th>
                                    <th scope="col">Итого</th>
                                    <th scope="col">Действия</th>
                                </tr>
                                </thead>
                                <tbody>
                                {items && items.map((item, i) =>
                                    <tr key={item.id + item.size}>
                                        <th scope="row">{i + 1}</th>
                                        <td><Link to={`/catalog/${item.id}`}>{item.title}</Link></td>
                                        <td>{item.size}</td>
                                        <td>{item.count}</td>
                                        <td>{item.price} руб.</td>
                                        <td>{item.count * item.price} руб.</td>
                                        <td>
                                            <button
                                                className="btn btn-outline-danger btn-sm"
                                                onClick={() => handleClickDelete(item)}
                                            >
                                                Удалить
                                            </button>
                                        </td>
                                    </tr>
                                )}

                                <tr>
                                    <td colSpan="5" className="text-right">Общая стоимость</td>
                                    <td>{totalPrice} руб.</td>
                                </tr>
                                </tbody>
                            </table>
                        </section>
                        : <h3 className="text-center font-weight-bold text-info m-3">Корзина пуста!</h3>
                    }
                    {items.length > 0 &&
                    <section className="order">
                        <h2 className="text-center">Оформить заказ</h2>
                        <div className="card" style={{maxWidth: '30rem', margin: '0 auto'}}>
                            <form className="card-body" onSubmit={(e) => handleSendOrder(e)}>
                                <div className="form-group">
                                    <label htmlFor="phone">Телефон</label>
                                    <input
                                        className="form-control"
                                        onChange={handleChangeInput}
                                        value={owner.phone || ''}
                                        id="phone"
                                        placeholder="Ваш телефон"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Адрес доставки</label>
                                    <input
                                        className="form-control"
                                        onChange={handleChangeInput}
                                        value={owner.address || ''}
                                        id="address"
                                        placeholder="Адрес доставки"
                                    />
                                </div>
                                <div className="form-group form-check">
                                    <input
                                        type="checkbox"
                                        checked={agreement}
                                        className="form-check-input"
                                        id="agreement"
                                        onChange={() => setAgreement(!agreement)}
                                    />
                                    <label className="form-check-label" htmlFor="agreement">
                                        Согласен с правилами доставки
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-outline-secondary"
                                    disabled={orderBtnDisabled}
                                >
                                    Оформить
                                </button>
                            </form>

                        </div>
                    </section>
                    }
                </div>
            </div>
        </main>
    );
};

export default CartPage;