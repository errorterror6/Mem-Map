//import Memory
import Memory from './Memory.js';

export default class Memories {
    //memories is an array of Memory objects.
    constructor() {
        this.memories = [];
        this.length = 0;
    }
    //TODO: constructor using JSON.

    getMemories() {
        return this.memories;
    }

    getMemory(idx) {
        if (idx >= this.memories.length) {
            return new Memory(0,0,0,0,0,0)
        }
        return this.memories[idx];
    }

    createMemory(time, location, picture, title, description, id) {
        
        const memory = new Memory(time, location, picture, title, description, id);
        this.memories.push(memory);
        //save to local storage in JSON format.
        this.length = this.length + 1;
        return memory

    }

    getLength() {
        return this.length;
    }
}