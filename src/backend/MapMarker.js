import Memory from "./Memory";

export default class MapMarker {
    constructor(location, MarkerID, Memory) {
        this.location = location;
        this.MarkerID = MarkerID;
        this.Memory = Memory;
    }

    getMemoryInfo() {
        return this.Memory;
    }
}