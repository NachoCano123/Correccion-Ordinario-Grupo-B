import {ContactModelType, ContactModel} from "../db/Contact.ts"
import { GraphQLError } from "graphql"

export const Query = {
    getContact: async (_:unknown, args: {id:String}): Promise<ContactModelType> => {
        const contact = await ContactModel.findById(args.id)
        
        if(!contact)
        {
            throw new GraphQLError("Contacto no encontrado")
        }
        return contact
    },

    getContacts: async(): Promise<ContactModelType[]> => {
        const contacts = await ContactModel.find()

        if(!contacts)
        {
            throw new GraphQLError("No hay ningun contacto")
        }

        return contacts
    }
}