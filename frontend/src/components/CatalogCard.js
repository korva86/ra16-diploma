import React from 'react';
import {Link} from "react-router-dom";
import noImg from '../img/no_photo.jpg'

const CatalogCard = ({item}) => {
    return (
        <div className="col-4">
            <div className="card catalog-item-card">
                <img
                    src={item.images[0]}
                    className="card-img-top img-fluid" alt={item.title}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `${noImg}`;
                    }}
                />
                <div className="card-body">
                    <p className="card-text">{item.title}</p>
                    <p className="card-text">{item.price} руб.</p>
                    <Link to={`/catalog/${item.id}`}
                          className="btn btn-outline-primary">Заказать</Link>
                </div>
            </div>
        </div>
    );
};

export default CatalogCard;