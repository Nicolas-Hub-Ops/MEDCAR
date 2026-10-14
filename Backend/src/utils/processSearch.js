function processSearch(query, filters) {
    const objectFilter = {};

    filters.map((filter) => {
        if(query[filter]) {
            objectFilter[filter] = { $regex: query[filter], $options: "i" };
            console.log(objectFilter[filter])
        }
    });
    return objectFilter;
};

export default processSearch;