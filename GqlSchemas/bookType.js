const graphql = require('graphql');

const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString } = graphql;

const bookType = new GraphQLObjectType({
	name: 'bookType',
	fields: () => {
		return {
			id: {
				type: new GraphQLNonNull(GraphQLID),
			},
			name: { type: GraphQLString },
			author: { type: GraphQLString },
		};
	},
});

export default bookType;
