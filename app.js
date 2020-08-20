/* eslint-disable func-names */
import express from 'express';
import cors from 'cors';
import status from 'http-status';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';

import dbConnection from './Connection/dbConnect';

// import graphql-express and GraphQLSchema
import graphQLSchema from './GraphQLSchema';
// The express-graphql dependency provides a simple implementation of an Express server that runs GraphQL API.
const { graphqlHTTP } = require('express-graphql');

dbConnection();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(
	express.urlencoded({
		extended: false,
	}),
);

app.use(express.json());

app.get('/', (req, res) => {
	res.status(status.OK).send({ Message: 'Connected', status: status.OK });
});

const port = process.env.PORT || 5000;

// add the schema to graphql-express
app.use(
	'/graphql',
	graphqlHTTP({
		schema: graphQLSchema,
		graphiql: true,
	}),
);

app.listen(port, () =>
	console.log(`App listening On port http://localhost:${port}`),
);
