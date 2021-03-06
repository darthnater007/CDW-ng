import { User } from './user';

export class Piece {
    
    Id: number;
    User: User;
    Title: string;
    Genre: string;
    Description: string;
    FileName: string;
    Submitted: Date;
    Publication: boolean;

    constructor(Id: number, User: User, Title: string, Genre: string, Description: string, FileName: string, Submitted: Date, Publication: boolean){
        this.Id = Id;
        this.User = User;
        this.Title = Title;
        this.Genre = Genre;
        this.Description = Description;
        this.FileName = FileName;
        this.Submitted = Submitted;
        this.Publication = Publication;
    }
}
