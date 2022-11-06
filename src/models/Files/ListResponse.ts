import { IListFolder } from "./IListFolder";

export interface ListResponse {
   cursor: string
   entries: IListFolder[]
   "has-more": boolean
}