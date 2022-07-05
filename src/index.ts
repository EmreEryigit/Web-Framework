import { User } from "./models/User";

const user = new User({name: "my name", age: 2})
console.log(user.get("name"));
