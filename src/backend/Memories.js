//import Memory class
import Memory from './Memory.js';

export default class Memories {
    //memories is an array of Memory objects.
    constructor(memories) {
        this.memories = memories;
    }

    getMemories() {
        return this.memories;
    }

    createMemory(time, location, picture, title, description, id) {
        //create new Memory object
        //push it to memories array
        const Memory = new Memory(time, location, picture, title, description, id);
        this.memories.push(Memory);
        // @TODO: save to local storage
    }
}