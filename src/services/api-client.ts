import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '34667e85916d45e7a4d31fa7cb572122'
    }
})