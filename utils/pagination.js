class APIFeatures {
    constructor(query, queryString) {
      this.query = query;
      this.queryString = queryString;
    }

    paginate() {
        // page and limit will come from POSTMAN

        // converting string to number  
        const pageNumber = this.queryString.page * 1 || 1;
        //limit is amount of results per page
        const limit = this.queryString.limit * 1 || this.query.length;
        //skip is the amount of data to be skipped before querying the database
        const skip = (pageNumber - 1) * limit;
    
        this.query = this.query.skip(skip).limit(limit);
    
        return this;
      }
}

module.exports = APIFeatures;