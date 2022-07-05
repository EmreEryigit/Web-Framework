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
    attributes: Attributes<UserProps>
    constructor(attrs: UserProps) {
        this.attributes = new Attributes(attrs)
    }

    get on() { return this.events.on };
    get trigger() {return this.events.trigger}
    get get() { return this.attributes.get};

    set(update: UserProps): void {
        this.attributes.set(update)
        this.events.trigger("change")
    }
}