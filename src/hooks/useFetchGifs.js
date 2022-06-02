import { useEffect, useState } from "react";
import {getGift} from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data:[],
        loading:true
    });

    useEffect( () => {

        getGift(category).then(img => {
            setTimeout(()=> {
                console.log(img);
                setState({
                    data:img,
                    loading:false
                });
            },3000);
        })
    },[category])

    /*setTimeout( () => {
        setState({
            data: [1,2,3,5,6],
            loading:false
        },3000);

        return state;
    })*/

    return state;  
}