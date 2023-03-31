import Memories from "./Memories";

//create Memory class
export default class Memory {

    constructor(time, location, picture, title, description, id) {
        this.time = time;
        this.location = location;
        this.picture = picture;
        this.title = title;
        this.description = description;
        this.id = id;
    }
}