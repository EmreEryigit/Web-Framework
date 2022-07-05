import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";
import { UserEdit } from "./views/UserEdit";
import { UserForm } from "./views/UserForm";

const user = User.buildUser({name: "Emre", age: 25})
const root = document.getElementById("root")!
const userEdit = new UserEdit(root, user)
userEdit.render()
console.log(userEdit);

