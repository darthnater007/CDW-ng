export class User {
    Id: number;
    UserName: string;
    Password: string;
    FirstName: string;
    LastName: string;
    Bio: string;
    Website: string;
    Email: string;
    Phone: string;
    Admin: boolean;
    
    about(): string{
        return 'User Name = ${this.UserName}';
    }
    
    constructor(Id: number, UserName: string, Password: string, FirstName: string, LastName: string, Bio: string, Website: string, Email: string, Phone: string, Admin: boolean)
    {
        this.Id= Id;
        this.UserName = UserName;
        this.Password = Password;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Bio = Bio;
        this.Website = Website;
        this.Email = Email;
        this.Phone = Phone;
        this.Admin = Admin;
    }
}
