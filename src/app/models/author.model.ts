import { ProjectModel } from "./project.model";

export interface AuthorModel{
    id: number;
    project:ProjectModel;
    email: string;
    age: number;
    identification: string;
    name: string;

}