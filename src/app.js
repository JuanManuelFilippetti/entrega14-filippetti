import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./graphql/schema.graphql.js";
import { getProductById, getProducts, createProduct, updateProduct, deleteProduct} from "./graphql/resolvers.graphql.js";

const app = express();

app.use("/graphql", graphqlHTTP({
  schema,
  rootValue: {
    getProductById,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
  },
  graphiql: true,
  })
);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});