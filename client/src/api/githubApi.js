const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export default async function getGithubStats(username) {
  const query = `
    query($login: String!) {
      user(login: $login) {

        login
        name
        bio
        avatarUrl
        company
        location
        websiteUrl
        twitterUsername

        followers {
          totalCount
        }

        following {
          totalCount
        }

        repositories(first: 100, ownerAffiliations: OWNER) {
          totalCount
          nodes {
            languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
              edges {
                size
                node {
                  name
                  color
                }
              }
            }
            stargazerCount
          }
        }

        contributionsCollection {
          totalCommitContributions
          contributionCalendar {
            totalContributions

            weeks {
              contributionDays {
                contributionCount
                date
                color
              }
            }
          }
        }

        pullRequests {
          totalCount
        }

        issues {
          totalCount
        }

        repositoriesContributedTo {
          totalCount
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        login: username,
      },
    }),
  });

  const data = await response.json();

  return data?.data?.user;
}
