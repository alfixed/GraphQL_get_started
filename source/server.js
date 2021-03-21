var { graphql, buildSchema } = require('graphql');
 
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String,
    hi: String
  }
`);
 
// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hey! This is root.';
  },
  hi: () => {
    return `Hi! I'm here!`;
  }
};
 
// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, '{ hello, hi }', root).then((response) => {
  console.log(response.data.hello);
  console.log(response.data.hi);
});
