/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    getUsers: function(req, res) {
        
        console.log(sails.hooks.attachdata);

        return res.status(200).json({message: 'du lieu resp'});
    }
};

