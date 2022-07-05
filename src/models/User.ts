import { Eventing } from "./Eventing"
import { Sync } from "./Sync"
interface UserProps {
    id?: number
    name?: string,
    age?: number
}



export class User {
    events: Eventing = new Eventing()
    sync: Sync<UserProps> = new Sync<UserProps>("http://localhost:3000/users")
    constructor(private data: UserProps){}

    get(propName: string): string | number {
        return this.data[propName]
    }

    set(update: UserProps): void {
        Object.assign(this.data, update)
    }
}