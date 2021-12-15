import React from 'react'

import { useGetSpacexNewsQuery } from '../services/spacexNewsAPI'
import Loader from './Loader';

const News = () => {
    const {data:spacexNews, isFetching} = useGetSpacexNewsQuery({newsCategory:'spacex',count:5});

    if(isFetching){
        return <Loader />
    }

    console.log(spacexNews)

    return (
        <div>
            <h1 color='#000000'>News</h1>
        </div>
    )
}

export default News
