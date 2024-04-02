import mongoose, {Schema, Document, model, Types} from "mongoose";
import { IUserSchema } from "../../adapters/interfaces/IUserSchema";

const skillSchema = new Schema({
  value: String,
  label: String,
});

const userSchema = new Schema<IUserSchema>({
    username: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
    },
    phone: {
      type: Number,
    },
    description: {
      type: String
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    profilePicture: {
      type: String,
      default: 'https://res.cloudinary.com/dihrwghx2/image/upload/v1699291554/admin-user-react/default-pic_rkk3gl.jpg'
    },
    role: {
      type: Boolean,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: Boolean,
      default: true
    },
    clients: [{
      type: Types.ObjectId,
      ref: "User",
    }],
    skills: {
      type: [skillSchema],
      default: [],
    },

    portfolio: {
      type: Schema.Types.ObjectId,
      ref: "Portfolio", // Assuming 'Portfolio' is the name of the model
    },
    orders: {
      type: Schema.Types.ObjectId,
    },
    ordersReceived: {
      type: Schema.Types.ObjectId,
    },
  });
  
  const UserModel = model<IUserSchema>("User", userSchema);
  
  export { UserModel };