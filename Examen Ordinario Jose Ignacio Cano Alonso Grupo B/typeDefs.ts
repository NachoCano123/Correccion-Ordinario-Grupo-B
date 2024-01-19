export const typeDefs = `#graphql
type Contact {
    id:ID!
    Nombre_completo: String!
    Telefono: String!
    Pais: String!
    Hora_actual: String!
}

type Query{
    getContact(id:ID!):Contact!
    getContacts(id:ID!):[Contact!]!
}

type Mutation{
    addContact(Nombre_completo: String!, Telefono: String!): Contact!
    deleteContact(id:ID!):Contact!
    #updateContact
}
`