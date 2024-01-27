import {ContactModelType, ContactModel} from "../db/Contact.ts"
import { GraphQLError } from "graphql"

export const Mutation = {
    addContact: async(_:unknown, args:{Nombre_completo: string, Telefono: string}): Promise<ContactModelType> => {
        const {Nombre_completo, Telefono} = args
        const contact = new ContactModel({
            Nombre_completo,
            Telefono
            //Pais y Hora_actual los sacamos de la API
        })
        await contact.save()
        return contact
    },

    deleteContact: async(_:unknown, args:{ID:String}) => {
        const {ID} = args
        const contact = await ContactModel.findById(ID)
        if(!contact)
        {
            throw new GraphQLError("Contact not found")
        }

        const deletecontact = await ContactModel.findByIdAndDelete(ID)

        console.info("Contacto borrado")
    }
}