import { ProjectModel } from "./project.model";

export interface AuthorModel{
    id?: number;
    project?:ProjectModel;
    names?: string;
    email?: string;
    identification?: string;
    phone?:string;
    age?: number;

}