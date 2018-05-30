export class Event {
    
    Id: number;
    HostedBy: string;
    Description: string;
    EventName: string;
    Location: string;
    EventStart: Date;
    EventEnd: Date;
    
    constructor(Id: number, HostedBy: string, Description: string, EventName: string, Location: string, EventStart: Date, EventEnd: Date){
        this.Id = Id;
        this.HostedBy = HostedBy;
        this.Description = Description;
        this.EventName = EventName;
        this.Location = Location;
        this.EventStart = EventStart;
        this.EventEnd = EventEnd;
    }
}
