export class Task {
    public id: number;
    public projectName: string
    public task: string;
    public description: string;
    public assignTo: string;
    public priority:string;
    public dueDate: string
    public status: string;

    constructor(
        id: number,
        projectName: string,
        task: string,
        description: string,
        assignTo: string,
        priority:string,
        dueDate: string,
        status: string,
    ) {
        this.id = id;
        this.projectName = projectName;
        this.task = task;
        this.description = description;
        this.assignTo = assignTo;
        this.priority=priority;
        this.dueDate = dueDate;
        this.status = status
    }
}