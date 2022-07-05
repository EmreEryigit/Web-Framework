import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";


export class Collection<T, K> {
    models: T[] = [];
    events: Eventing = new Eventing();
    constructor(public rootURL: string, public deserialize: (json: K) => T) { }
    get on() {
        return this.events.on;
    }
    get trigger() {
        return this.events.trigger; 2
    }

    fetch(): void {
        axios(this.rootURL).then((res: AxiosResponse) => {
            res.data.forEach((value: K) => {
                const user = this.deserialize(value)
                this.models.push(user)
            })

            this.trigger("change")
        })
    }
}