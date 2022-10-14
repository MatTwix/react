import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {newsSelectors} from "../redux/reducers/News/index"
import {getNews} from "../redux/reducers/News/newsReducer";

const NewsPage = () => {
    const newsList = useSelector(newsSelectors.newsList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNews())
    }, [])

    return (
        <div>
            {newsList.length ?
                newsList.map((newsItem) => {
                        return(
                            <div key={newsItem.id}>
                                {newsItem.title}
                                <hr/>
                            </div>
                        )
                    }) :
                <p>Новостей нет!</p>
            }
        </div>
    );
};

export default NewsPage;