# Contributing

## Configure Auth0
`open-fantasy-football-api` uses Auth0 as its Identity and Access Management Service. To run the API locally will take some setup.

First, go out to Auth0 and make a new, free account. After creating an account, create a new tenant (the name does matter).
After creating the tenant, the next step is to make a new API using the left nav bar.

After creating the API, the next step is to get your local environment variables set. In the root directory of the API project, create
a `.env` file with the following:

```bash
AUTH0_ISSUER_URL={your auth0 issuer}
AUTH0_AUDIENCE={your auth0 audience}
```

After getting the `.env` file created, your local environment should be ready to go.

To test with postman, follow this [article](https://auth0.com/blog/manage-a-collection-of-secure-api-endpoints-with-postman/#Authorization-in-Postman).