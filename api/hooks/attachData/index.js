'use strict';

module.exports = function attachData(sails) {

    return {

        defaults: {

            data: {

                address: 'HVH PN GV'
            }
        },

        configure: function(){

           //console.log(sails.config[data]);
        },

        routes: {

            before: {
                'GET /api/*': function(req, res, next) {

                    console.log(req.url);
                    return next();
                }
            }
        }
    }
}