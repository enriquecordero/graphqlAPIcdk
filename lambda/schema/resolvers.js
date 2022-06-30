const {UserList} = require('../FakeData')
const {_} = require('lodash')

const resolvers = {
    Query: {
        users: () => {
            //que hago en javascript para q funcione
            return UserList;
        },
        user: (parent , args) =>{
            const id = args.id
            const user = _.find(UserList,{id : Number(id)})
            return user;
        } 
    }

}

module.exports = {resolvers}