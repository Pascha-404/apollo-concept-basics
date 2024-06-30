import gql from 'graphql-tag';

export const typeDefs = gql`
	type Query {
		"Get tracks array for homepage grid"
		tracksForHome: [Track!]!
	}

	"A track is a group of Modules that teaches about a specific topic"
	type Track {
		id: ID!
		"The Tracks title"
		title: String!
		"The track's main author"
		author: Author!
		"The track's main illustration to display, as url"
		thumbnail: String
		"The track's approcimate length to complete, in minutes"
		length: Int
		"The number of modules this track contains"
		modulesCount: Int
	}

	"Author of a complete Track or a Module"
	type Author {
		id: ID!
		name: String!
		photo: String
	}
`;
