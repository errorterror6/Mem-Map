import MapMarker from './MapMarker.js';
import Memory from './Memory';
import Memories from './Memories';

export default class Map {
    constructor(memories) {
        //array of memory.
        this.MapMarkers = [];
        this.readMemories(memories);
    }

    readMemories(memories) {
        //read memories in. should call generateMapMarker on each memory.
        //loop through each memory in memories
        for (let i = 0; i < memories.length; i++) {
            this.generateMapMarker(memories[i]);
        }
    }

    generateMapMarker(memory) {
        //generate map markers based on memories. should updateFrontEnd on each memory.
        //create a new MapMarker object
        const mapMarker = new MapMarker(memory.location, memory.id, memory);
    }

    addMemory(memory) {
        //adds a memory, creates a map marker and then updates the front end.
    }

    updateFrontEnd(mapmarker) {
        //given a mapmarker, tell front end about it.
    }

    getMarkerInfo(MarkerID) {
        //given ID, return a memory object.
    }
}