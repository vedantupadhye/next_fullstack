
import { connectToDB } from "./utils";
import { Owner } from "./models";


export const fetchOwner = async () =>{

  try {
    connectToDB();
    const owners = await Owner.find()
    return owners

  } catch (error) {
    console.log(error)
  }
}
// import { User } from "./models";
// import { connectToDB } from "./utils";
// export const fetchUsers = async(q) =>{
//   try {
//     connectToDB();
//     const users = await User.find()
//     return users;
//   } catch (error) {
//     console.log(error)
//     // throw new error("failed to fetch data ")
//   }
// }
