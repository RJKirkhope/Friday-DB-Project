const database = require("./database-connection");

module.exports = {
    list(){
        return database('g90_students').select()
    },
    read(id){
        return database('g90_students').select().where('id', id).first()
    },
    create(student){
        return database('g90_students').insert(student).returning("*").then(record => record[0])
    },
    update(id, student){
        return database('g90_students').update(student).where('id', id).returning("*").then(record => record[0])
    },
    delete(id){
        return database('g90_students').delete().where('id', id)
    }
};