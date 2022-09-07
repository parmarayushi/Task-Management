export class Project {
    public id: number;
    public name: string;
    public status: string;
    public startDate: string;
    public endDate: string;
    public projectManager: string;
    public teamMembers: string;
    public description: string;

    constructor(
        id: number,
        name: string,
        status: string,
        startDate: string,
        endDate: string,
        projectManager: string,
        teamMembers: string,
        description: string,
    ) {
        this.id = id;
        this.name = name
        this.status = status;
        this.startDate = startDate;
        this.endDate = endDate;
        this.projectManager = projectManager;
        this.teamMembers = teamMembers;
        this.description = description;
    }
}

export class Task {
    public id:number;
    public task: string;
    public description: string;
    public status: string;

    constructor(
        id:number,
        task: string,
        description: string,
        status: string
    ) {
        this.id=id;
        this.task = task;
        this.description = description;
        this.status = status
    }
}