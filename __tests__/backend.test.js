//import Map and Memory classes
/** @type {import('jest').Config} */
import '@testing-library/jest-dom';

import Map from '../src/backend/Map.js';
import Memory from '../src/backend/Memory.js';
import Memories from '../src/backend/Memories.js';

// //use jest to test the Map class.
describe("Map", () => {
    //create a new Map object
    const memories = new Memories()
    // const map = new Map(memories);
    //create a new Memory object
    // const memory = new Memory("420", "sydney", "picture", "title", "description", "MEM_1");
    //test memory length
    test("backend", () => {
        expect(memories.length).toBe(1);
    });
    //create a new MapMarker object
    // map.addMemory("420", "sydney", "picture", "title", "description", "MEM_1");

    //test that map.getMarkerInfo returns the correct memory object.
    // test("getMarkerInfo", () => {
    //     expect(map.getMarkerInfo("MEM_1")).toBe(memory);
    // });

});