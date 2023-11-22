"use server"

import { Owner, User } from "./models"

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
