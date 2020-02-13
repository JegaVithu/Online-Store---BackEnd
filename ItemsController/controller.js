var sql = require('../DB/dbConfig');

var controller = function() {
    this.getAll = () => {
        return new Promise((resolve, reject) => {
            sql.query("SELECT * FROM Items", (err, data) => {
                if(err) {
                    resolve({status: 500, message : "No data available"})
                }
                else{
                    resolve({status: 200, blogs: data})
                }
            }); 
        });
    }
    
    this.getItem = (id) => {
        return new Promise((resolve, reject) => {
            sql.query("SELECT * FROM Items WHERE ItemID = " + id, (err, data) => {
                if(err) {
                    resolve({status: 500, message : "No data available"})
                }
                else{
                    resolve({status: 200, blog_for_id: data})
                }
            });
        });
    }
}

module.exports = new controller();