const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Gifs {
    title: String
    link: String
    id: String
  }

  type Query {
    gifs: [Gifs]
  }
`;

const gifs = [
  {
    title: "Creepy Cat",
    link: "https://i.giphy.com/media/BJa0a20ni8yYHrQXfl/giphy.gif",
    id: "1"
  },
  {
    title: "Dark Cat",
    link: "https://i.giphy.com/media/iYzB1c5KJF0LzU2sbO/giphy.gif",
    id: "2"
  },
  {
    title: "Angry Cat",
    link: "https://i.giphy.com/media/hJpqQ5L3MWPWo/giphy.gif",
    id: "3"
  },
  {
    title: "Scared Cat",
    link: "https://i.giphy.com/media/9QkuSuf7vc3Ly/giphy.gif",
    id: "4"
  },
  {
    title: "Judgy Cat",
    link: "https://i.giphy.com/media/PGGsOfnjKBHvW/giphy.gif",
    id: "5"
  },
  {
    title: "Shadow Cat",
    link: "https://i.giphy.com/media/vySsa85fMARRm/giphy.gif",
    id: "6"
  },
  {
    title: "Book Cat",
    link: "https://i.giphy.com/media/LmgHHxtKgDsYrVsEOw/giphy.gif",
    id: "7"
  },
  {
    title: "Long Cat",
    link: "https://media.giphy.com/media/tCXYuJLb554sw/giphy.gif",
    id: "8"
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
