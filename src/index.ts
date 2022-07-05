import { User } from "./models/User";

const user = new User({ name: "my name", age: 1})
user.on("change", () => {
    console.log("user was changed");
    
})
user.set({name: "EMREMRe"})