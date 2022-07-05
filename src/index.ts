import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";
import { UserForm } from "./views/UserForm";

const user = User.buildUser({name: "Emre", age: 25})
const userForm = new UserForm(
    document.getElementById("root")!,
    user
)
userForm.render()
const collection = User.buildUserCollection()

collection.on("change", () => {
    console.log(collection)
})
collection.fetch()