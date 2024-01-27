import mongoose from "mongoose"
import {Schema} from "mongoose"

const ContactSchema = new Schema({
    ID: {type: String, required: true},
    Nombre_completo: {type: String, required: true},
    Telefono: {type: Date, required: true, unique: true}, 
    Pais: {type: String, required: true},
    Hora_actual: {type: String, required: true}
})

export type ContactModelType = mongoose.Document //& Omit<>
export const ContactModel = mongoose.model<ContactModelType> ("contact", ContactSchema)