const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Gifs {
    title: String
    link: String
  }

  type Query {
    gifs: [Gifs]
  }
`;

const gifs = [
  {
    title: "Creepy Cat",
    link: "https://i.giphy.com/media/BJa0a20ni8yYHrQXfl/giphy.gif",
  },
  {
    title: "Dark Cat",
    link: "https://i.giphy.com/media/PGGsOfnjKBHvW/giphy.gif",
  },
  {
    title: "Angry Cat",
    link: "https://i.giphy.com/media/PGGsOfnjKBHvW/giphy.gif",
  },
  {
    title: "Scared Cat",
    link: "https://i.giphy.com/media/PGGsOfnjKBHvW/giphy.gif",
  },
  {
    title: "Judgy Cat",
    link: "https://i.giphy.com/media/PGGsOfnjKBHvW/giphy.gif",
  },
  {
    title: "Shadow Cat",
    link: "https://i.giphy.com/media/tCXYuJLb554sw/giphy.gif"
  },
  {
    title: "Book Cat",
    link: "https://i.giphy.com/media/LmgHHxtKgDsYrVsEOw/giphy.gif"
  }
];

const resolvers = {
  Query: {
    gifs: () => gifs,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🐈 Server ready at ${url}`);
});
