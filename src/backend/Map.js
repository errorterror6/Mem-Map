import MapMarker from './MapMarker.js';
import Memory from './Memory.js';
import Memories from './Memories.js';

export default class Map {
    constructor(memories) {
        //array of memory.
        this.MapMarkers = [];
        this.memories = memories;
    }

    
    readMemories(memories) {
        //read memories in. should call generateMapMarker on each memory and then push to self.MapMarkers array.
        //loop through each memory in memories
        for (let i = 0; i < memories.getLength(); i++) {
            //call generateMapMarker on each memory and push to self.MapMarkers array.
            this.MapMarkers.push(this.generateMapMarker(memories.getMemories(i)));
        }

    }

    generateMapMarker(memory) {
        //generate map markers based on memories. should updateFrontEnd on each memory.
        //create a new MapMarker object
        const mapMarker = new MapMarker(memory.location, memory.id, memory);
        //update front end
        this.updateFrontEnd(mapMarker);
        return mapMarker;
    }

    createMemory(time, location, picture, title, description, id) {
        //adds a memory, creates a map marker and then updates the front end.
        //create a new Memory object
        const memory = this.memories.createMemory(time, location, picture, title, description, id);
        //create a new MapMarker object
        const mapMarker = new MapMarker(memory.location, memory.id, memory);
        //push mapMarker to self.MapMarkers
        this.MapMarkers.push(mapMarker);
        //update front end
        this.updateFrontEnd(mapMarker);

    }
    

    updateFrontEnd(mapmarker) {
        //given a mapmarker, tell front end about it.

    }

    getMarkerInfo(MarkerID) {
        //given ID, return a memory object.
        //loop through each mapMarker in self.MapMarkers
        for (let i = 0; i < this.MapMarkers.length; i++) {
            //if the id of the mapMarker is equal to the MarkerID
            if (this.MapMarkers[i].MarkerID === MarkerID) {
                //return the memory object
                return this.MapMarkers[i].getMemoryInfo();
            }
        }
    }
}