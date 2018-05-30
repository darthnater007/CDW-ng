export class Event {
    
    Id: number;
    HostedBy: string;
    Description: string;
    EventName: string;
    Location: string;
    EventDate: Date;
    EventStart: Time;
    EventEnd: Time;
    
    constructor(Id: string, HostedBy: string, Description: string, EventName: string, Location: string, EventDate: Date, EventStart: Time, EventEnd: Time){
        this.Id = Id;
        this.HostedBy = HostedBy;
        this.Description = Description;
        this.EventName = EventName;
        this.Location = Location;
        this.EventDate = EventDate;
        this.EventStart = EventStart;
        this.EventEnd = EventEnd;
    }
}
