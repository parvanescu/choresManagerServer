export class User{
    constructor({id,name,password}) {
        this.id=id;
        this.name=name;
        this.password=password;
    }
}

export class Task{
    constructor({id,userId,description,dueDate}) {
        this.id = id;
        this.user_id = userId;
        this.description=description;
        this.due_date=dueDate;
    }
}