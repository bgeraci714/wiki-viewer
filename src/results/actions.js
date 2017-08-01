exports.updateResults = (results) =>{
    return {
        type: 'UPDATE_RESULTS',
        results: results
    };
};

exports.fetchResults = (query) => {
  return {
    type: 'FETCH_RESULTS',
    query: query, 
  }
}
