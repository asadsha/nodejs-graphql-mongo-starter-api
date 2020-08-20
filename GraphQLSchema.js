import Query from './Queries/Query';
import Mutation from './Mutations/Mutation';

const graphql = require('graphql');

const { GraphQLSchema, GraphQLObjectType } = graphql;

// root query
const RootQuery = new GraphQLObjectType({
	name: 'Queries',
	fields: Query,
});

// mutation query
const mutation = new GraphQLObjectType({
	name: 'Mutations',
	fields: Mutation,
});

const schema = new GraphQLSchema({
	query: RootQuery,
	mutation,
});

export default schema;
