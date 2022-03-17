# Goth Cats GraphQL API Documentation

Goth Cats is a new way to get gifs of gothic felines into your users hands. We've revolutionaized what was an archaic and messy search for these -creatures of the night- into an easy to consume experience that will leave your users satisfied.

### Example Query

-GraphQL Query:-
```graphql 
query ExampleQuery {
  gifs {
    title
    link
  }
}
```

-The above query returns the following example:-
```json
{
  "data": {
    "gifs": [
      {
        "title": "cat1",
        "link": "https://url-to-kitty.com"
      },
      {
        "title": "cat2",
        "link": "https://url-to-kitty.com"
      }
    ]
  }
}
```

## To Run
- move into the 'backend' folder and run `npm i` followed by `node index.js`