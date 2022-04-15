import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Journal {
    id: ID
    title: String!
    url: String!
    issn: Int!
    domain: String!
  }

  input JournalInput {
    title: String!
    url: String!
    issn: Int!
    domain: String!
  }

  type Query {
    getAllJournals: [Journal]
    getJournalByISSN(issn: Int): Journal!
  }

  type Mutation {
    createJournal(journal: JournalInput!): Journal!
    deleteJournal(issn: Int!): String!
    updateJournal(issn: Int!, journal: JournalInput!): String!
  }
`;
