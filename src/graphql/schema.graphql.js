import { buildSchema } from "graphql";

export const schema = buildSchema(`

type Product {
    id: ID
    name: String
    price: Int
    stock: Int
}

input ProductInput {
    name: String!
    price: Int!
    stock: Int
}

type Query {
    getProductById(id: ID): Product
    getProducts: [Product]
}

type Mutation {
    createProduct(input:ProductInput): Product
    updateProduct(id:ID, input: ProductInput): Product
    deleteProduct(id:ID): Product
}
`);