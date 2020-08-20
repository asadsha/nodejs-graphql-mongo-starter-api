// import GraphQL BookType
import bookType from '../GqlSchemas/bookType';
import bookController from '../Controllers/books';

const graphql = require('graphql');

const { GraphQLList } = graphql;

// Query
const getBooks = {
	type: new GraphQLList(bookType),
	args: {},
	resolve: async () => {
		return bookController.getBooks();
	},
};

export default getBooks;
