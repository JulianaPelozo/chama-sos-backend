import { Schema, model } from "mongoose";

export enum Role {
    ADMIN = "admin",
    USER = "user",
    MODERATOR = "moderator"
}
export interface ILogin {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    CPF: string;
    role: Role;
}
const loginSchema = new Schema<ILogin>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    CPF: { type: String, required: true, unique: true },
    role: { type: String, enum: Object.values(Role), required: true }
}, { timestamps: true });

const Login = model<ILogin>("Login", loginSchema);
export default Login;