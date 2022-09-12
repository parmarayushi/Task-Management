import { Users } from "../users/users.model";

export class Project {
    public id: number;
    public name: string;
    public status: string;
    public startDate: string;
    public endDate: string;
    public projectManager: string;
    public teamMembers: Users[];
    public description: string;

    constructor(
        id: number,
        name: string,
        status: string,
        startDate: string,
        endDate: string,
        projectManager: string,
        teamMembers: Users[],
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

