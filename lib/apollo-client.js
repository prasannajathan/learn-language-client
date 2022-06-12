import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache()
});

export default client;

/**
 * Queries
 */

//  query {
//     articles(pagination: { page: 1, pageSize: 5 })  {
//       data {
//             id
//         attributes {
//                 title
//                 description
//             }
//         }
//     }
// }


//   mutation updateArticle {
//     updateArticle(id: "1", data: { title: "Zero 1conditional in English: What it is and how to use it test" }) {
//     data {
//             id
//       attributes {
//                 title
//             }
//         }
//     }
// }



// mutation {
//     register(input: { username: "test@test.com", email: "test@test.com", password: "password" }) {
//         jwt
//       user {
//             username
//             email
//         }
//     }
// }

  
// query {
//     tutors{
//       data{
//         id
//         attributes{
//           name
//           about
//           ratings{
//             data{
//               id
//               attributes{
//                 rating
//                 review
//               }
//             }
//           }
//         }
//       }
//     }
//   }


// with pagination
// query {
//     articles(pagination: {page: 1, pageSize:5})  {
//       data {
//         id
//         attributes {
//           title
//           description
//         }
//       }
//       meta {
//         pagination {
//           page
//           pageSize
//           total
//           pageCount
//         }
//       }
//     }
//   }
  