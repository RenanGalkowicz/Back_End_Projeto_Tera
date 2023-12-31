import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        id: Schema.Types.ObjectId,
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        zipcode: {
            type: String,
            required: true,
        },
        street: {
            type: String,
            required: true,
        },
        number: {
            type: String,
            required: true,
        },
        complement: {
            type: String,
        },
        neighborhood: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true
        },
        createdAt:{
            type: Date,
            default: new Date()
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model("user", userSchema)