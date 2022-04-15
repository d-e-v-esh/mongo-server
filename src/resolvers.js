import { Journal } from "./models/Journal";

export const resolvers = {
  Query: {
    getAllJournals: async () => {
      return await Journal.find();
    },
    getJournalByISSN: async (parent, args, context, info) => {
      const { issn } = args;
      return await Journal.findOne({ issn });
    },
  },
  Mutation: {
    createJournal: async (parent, args, context, info) => {
      const { title, url, issn, domain } = args.journal;
      const journal = new Journal({ title, url, issn, domain });
      await journal.save();
      return journal;
			
    },

    deleteJournal: async (parent, args, context, info) => {
      const { issn } = args;
      await Journal.deleteOne({ issn });
      return "Journal Deleted";
    },

    updateJournal: async (parent, args, context, info) => {
      const { title, url, domain, issn } = args.journal;
      const { issn: issnToUpdate } = args.issn;
			const journals = await Journal.find().limit(limitVal).skip(skipVal);
      await Journal.updateOne({ issnToUpdate }, { title, url, domain, issn });
      return "Journal Updated";
    },
  },
};
