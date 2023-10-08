import { KUTYALIST } from "../../adatok.js";
class Model {
    #list = []
    constructor(list){
        this.#list = KUTYALIST
        ;

    }
    ujAdat(obj){
        this.#list.push(obj)
    }
    getList(){
        return this.#list
    }
}
export default Model