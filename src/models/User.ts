import { Eventing } from "./Eventing"
import { Sync } from "./Sync"
import { Attributes } from "./Attributes"

export interface UserProps {
    id?: number
    name?: string,
    age?: number
}


export class User {
    events: Eventing = new Eventing()
    sync: Sync<UserProps> = new Sync<UserProps>("http://localhost:3000/users")
    attributes: Attributes<UserProps> = new Attributes<UserProps>()
}