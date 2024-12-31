import mongoose from "mongoose";
import { Content } from "./contentInterface";

const contentSchema = new mongoose.Schema<Content>({
    type: {
        type: String,

    } 
})