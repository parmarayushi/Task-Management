import { Employees } from "../users/users.model";

export class Project {
    public id: number;
    public name: string;
    public status: string;
    public startDate: string;
    public dueDate: string;
    public projectManager: string;
    public teamMembers: Employees[];
    public description: string;

    constructor(
        id: number,
        name: string,
        status: string,
        startDate: string,
        dueDate: string,
        projectManager: string,
        teamMembers: Employees[],
        description: string,
    ) {
        this.id = id;
        this.name = name
        this.status = status;
        this.startDate = startDate;
        this.dueDate = dueDate;
        this.projectManager = projectManager;
        this.teamMembers = teamMembers;
        this.description = description;
    }
}

