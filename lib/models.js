import mongoose from "mongoose";


  const ownerSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        unique: true,
      },
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
        min: 0,
      }
    }
  );

export const Owner = mongoose.models.Owner || mongoose.model("Owner", ownerSchema);  
