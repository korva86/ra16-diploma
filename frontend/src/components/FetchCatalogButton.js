import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {fetchMoreCatalogRequest} from "../redux/actions/actionCreators";

const FetchCatalogButton = () => {
    const {selectedCategory, offset, loadingMore, fullFetched, search} = useSelector(state => state.catalog);
    const dispatch = useDispatch();
    if (loadingMore) {
        return (
            <div className="text-center">
                <button className="btn btn-outline-primary">
                    <span className="spinner-border spinner-border-sm"/>
                </button>
            </div>
        )
    }

    return (
        !fullFetched &&
        <div className="text-center">
            <button className="btn btn-outline-primary" onClick={() => dispatch(fetchMoreCatalogRequest(selectedCategory, offset, search))}>Загрузить ещё</button>
        </div>
    )
};

export default FetchCatalogButton;