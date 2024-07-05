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
}