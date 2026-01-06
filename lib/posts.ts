import fetchAPI from "./api";

export async function getAllPosts(type: string = 'Post') {
  const data = await fetchAPI(
    `
    query AllPosts($type: String!) {
      posts(
        first: 20, 
        where: { 
          orderby: 
          	{ 
              field: DATE, 
              order: DESC 
            },
          categoryName: $type
        }
      ) {
        edges {
          node {
            categories {
              nodes {
                name
							}
            }
            id
            date
            title
            slug
            excerpt
            author {
              node {
                firstName,
                lastName
              }
            }
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
    `,
    {
      variables: {
        type
      }
    }
  );

  return data?.posts?.edges;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(
    `
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.posts;
}

export async function getPost(slug) {
  const data = await fetchAPI(
    `
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      content
      author {
        node {
          name
        }
      }
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
      }
    }
  `,
    {
      variables: {
        id: slug,
        idType: 'SLUG'
      }
    }
  );

  return data;
}