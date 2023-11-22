"use server"
import { revalidatePath } from "next/cache";
import { Owner, User } from "./models";
import { Product } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/dist/server/api-utils";
import bcrypt from "bcrypt"
import { signIn } from "../auth";

export const addUser = async(formData) => {
    
    const{username ,email,password ,phone ,address ,isAdmin ,isActive } = Object.fromEntries(formData);
     
    try {
        connectToDB()
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            username ,
            email,
            password : hashedPassword,
            phone ,
            address ,
            isAdmin ,
            isActive,
        })
        await newUser.save()
    } catch (error) {
        console.log(error)
    }
    revalidatePath("/dashboard/users")
}


export const addOwner = async(formData) =>{

  "use server"
  const {title ,name ,price } = Object.fromEntries(formData)

  try {
    connectToDB()
    const newOwner = new Owner({
      title,
      name,
      price
    })

    await newOwner.save()
  } catch (error) {
    console.log(error)
  }
}

export const addProduct = async (formData) => {
    const { title, desc, price, stock, color, size } =
      Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      const newProduct = new Product({
        title,
        desc,
        price,
        stock,
        color,
        size,
      });
  
      await newProduct.save();
    } catch (err) {
      console.log(err);
      throw new Error("Failed to create product!");
    }
  
    revalidatePath("/dashboard/products");
    // redirect("/dashboard/products");
  };

export const deleteProduct = async (formData) =>{

  const { id } = Object.fromEntries(formData);

  try {
    connectToDB()
    await Product.findByIdAndDelete(id)
    
  } catch (error) {
    console.log(error)
    throw new Error("Failed to delete product")
  }
  revalidatePath("/dashboard/products")
}


export const deleteUser = async (formData) =>{

  const { id } = Object.fromEntries(formData);

  try {
    connectToDB()
    await Product.findByIdAndDelete(id)
    
  } catch (error) {
    console.log(error)
    throw new Error("Failed to delete user")
  }
  revalidatePath("/dashboard/users")
}



export const updateUser = async(formData) => {
    
  const{id , username ,email,password ,phone ,address ,isAdmin ,isActive } = Object.fromEntries(formData);
   
  try {
      connectToDB()

        const updateFields ={
        username ,
        email,
        password ,
        phone ,
        address ,
        isAdmin ,
        isActive
        }
        Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined )  && delete updateFields[key])

        await User.findByIdAndUpdate(id, updateFields)
      }
    
   catch (error) {
      console.log(error)
  }
  revalidatePath("/dashboard/users")
}



export const updateProduct = async(formData) => {
    
  const{id , desc, price, stock, color, size} = Object.fromEntries(formData);
   
  try {
      connectToDB()

        const updateFields ={
          desc, 
          price, 
          stock, 
          color, 
          size
        }
        Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined )  && delete updateFields[key])

        await Product.findByIdAndUpdate(id, updateFields)
      }
    
   catch (error) {
      console.log(error)
  }
  revalidatePath("/dashboard/products")
}

export const authenticate = async (formData) =>{
  const {username , password} = Object.fromEntries(formData);

  try {
    await signIn("credentials", {username,password})
  } catch (error) {
    console.log(error)
    throw error
    
  }
}