const graphql = require("graphql");

const { client } = require("../server.js");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = graphql;

// Resolvers

const resolveCompanyUsers = ({ id }, args) =>
  client.get(`/companies/${id}/users`);
const resolveUserCompany = ({ companyId }, args) =>
  client.get(`/companies/${companyId}`);
const resolveRootUser = (p, { id }) => client.get(`/users/${id}`);
const resolveRootCompany = (p, { id }) => client.get(`/companies/${id}`);
const resolveAddUser = (p, args) => client.post(`/users`, args);
const resolveDeleteUser = (p, { id }) => client.delete(`/users/${id}`);
const resolveEditUser = (p, args) => client.patch(`/users/${args.id}`, args);

// Types

const CompanyType = new GraphQLObjectType({
  name: "Company",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    users: {
      type: new GraphQLList(UserType),
      resolve: resolveCompanyUsers
    }
  })
});

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
    company: {
      type: CompanyType,
      resolve: resolveUserCompany
    }
  })
});

// Roots

const rootUser = () => ({
  type: UserType,
  args: { id: { type: GraphQLString } },
  resolve: resolveRootUser
});

const rootCompany = () => ({
  type: CompanyType,
  args: { id: { type: GraphQLString } },
  resolve: resolveRootCompany
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: rootUser(),
    company: rootCompany()
  }
});

// Mutations

const mutateAddUser = () => ({
  type: UserType,
  args: {
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    age: { type: new GraphQLNonNull(GraphQLInt) },
    companyId: { type: GraphQLString }
  },
  resolve: resolveAddUser
});

const mutateDeleteUser = () => ({
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve: resolveDeleteUser
});

const mutateEditUser = () => ({
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
    companyId: { type: GraphQLString }
  },
  resolve: resolveEditUser
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: mutateAddUser(),
    deleteUser: mutateDeleteUser(),
    editUser: mutateEditUser()
  }
});

// Exports

module.exports = new GraphQLSchema({
  mutation,
  query: RootQuery
});
