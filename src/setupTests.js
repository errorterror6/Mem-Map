// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

//import all modules for testing file.
import Map from './backend/Map.js';
import Memory from './backend/Memory.js';
import Memories from './backend/Memories.js';
import MapMarker from './backend/MapMarker.js';

//use jest to test the Map class.
describe("Create a Memory", () => {
    //initialize memories
    const memories = new Memories();
    //get memory for testing   
    
    //initialise map
    const map = new Map(memories);
    //create memory
    map.createMemory("420", "sydney", "picture", "title", "description", "MEM_1");
    const memory = memories.getMemory(0);
    //test retrieving memory from the map
    test("getMarkerInfo", () => {
        expect(map.getMarkerInfo("MEM_1")).toBe(memory);
    });
    test("length of memories", () => {
        expect(memories.getLength()).toBe(1);
    });
    test("Memory time", () => {
        expect(map.getMarkerInfo("MEM_1").time).toBe("420");
    });

});