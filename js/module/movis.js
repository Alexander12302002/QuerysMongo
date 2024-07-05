import { connect } from "../../helpers/db/connect.js";

export class movis extends connect {
    static instance; 
    constructor() {
        if(typeof movis.instance === "object") {
            return movis.instance;
        }
        super();
        this.collection = this.db.collection("movis");
        movis.instance = this;
        return this;
    }

    async getAllMovis(){
        let res = await this.collection.aggregate([
            {
                $project: {
                    name: 1
                }
            }]).toArray();
        return res;
    }

    async getMovisAction(){
        let res = await this.collection.find({genre: {$eq: "Accion"}},{name: 1, genre: 1}).toArray();
        return res;
    }

    async getMovisWith200CopyAndBluray(){
        let res = await  this.collection.find({"format.name": "Bluray", "format.copies": {$gt: 200}} ,{_id:0, name: 1, format: 1}).toArray();
        return res;
    }

    async getMoviesWithCharacterNicknamedCobb(){
        let res = await this.collection.find({"character.apodo": "Cobb"} ,{_id:0, name: 1, character: 1})
        return res;
    }

    async getMoviesWithActorsId2AndId3(){
        let res = await this.collection.find({"character.id_actor": {$in:[2,3]}},{name: 1, character: 1})
        return res;
    }

    async getMoviesWithFormatBluray(){
        let res = await this.collection.find({"format.name": {$eq: "Bluray"}} ,{name: 1, format:1})
        return res;
    }

    async getMoviesWithGenreScienceFiction(){
        let res = await this.collection.find({genre: {$elemMatch: {$eq: "Ciencia Ficción"}}},{_id: 0, name:1, genre:1})
        return res;
    }

    async getMoviesWithLeadRoleNamedMiguel(){
        let res = await this.collection.find({"character.rol": "principal" ,"character.apodo": "Miguel"} ,{_id:0, name: 1, character: 1})
        return res;
    }

    async getMoviesWithAnyFormatOver100Copies(){
        let res = await this.collection.find({"format.copies": {$gt: 100}} ,{_id:0, name: 1, format: 1})
        return res;
    }

    async getMoviesWithActorId1(){
        let res = await this.collection.find({"character.id_actor": {$in:[1]}},{name: 1, character: 1})
        return res;
    }

    async getMoviesWithSupportingCharacterNicknamedArthur(){
        let res = await this.collection.find({"character.rol": "secundario" ,"character.apodo": "Arthur"} ,{_id:0, name: 1, character: 1})
        return res;
    }
}