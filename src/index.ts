import { User } from "./models/User";

const user = new User({name: "my name", age: 2})
user.on("click", () => {
    console.log("1");
    
})
user.on("click", () => {
    console.log("2");
    
})

user.trigger("click")
