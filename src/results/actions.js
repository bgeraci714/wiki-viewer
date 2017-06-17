exports.updateResults = (results) =>{
    return {
        type: 'UPDATE_RESULTS',
        results: [...results]
    };
};
