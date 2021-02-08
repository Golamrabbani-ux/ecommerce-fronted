const searchParams = query =>{
    if(query){
        const queryString = query.split("?")[1]
        // if(queryString.lenth > 0){
            const params = queryString.split("&");
            const paramsObj = {};
            params.forEach(param => {
                const keyValue= param.split("=");
                paramsObj[keyValue[0]] = keyValue[1]
            });
            return paramsObj;
        // }
        
    }
    return {};
}

export default searchParams;