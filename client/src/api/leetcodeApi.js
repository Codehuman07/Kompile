const fetchUserTopicStats = async (username) => {
  const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        username
        profile {
          realName
          ranking
          userAvatar
          countryName
        }
        submitStats {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
        }
        tagProblemCounts {
          advanced {
            tagName
            tagSlug
            problemsSolved
          }
          intermediate {
            tagName
            tagSlug
            problemsSolved
          }
          fundamental {
            tagName
            tagSlug
            problemsSolved
          }
        }
        userCalendar {
          activeYears
          streak
          totalActiveDays
          submissionCalendar
        }
      }
      userContestRanking(username: $username) {
        attendedContestsCount
        rating
        globalRanking
        topPercentage
      }
    }
  `;

  const response = await fetch("/leetcode/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Referer: "https://leetcode.com",
    },
    body: JSON.stringify({
      query,
      variables: { username },
    }),
  });

  const data = await response.json();
  return {
    ...data.data.matchedUser,
    contestRanking: data.data.userContestRanking,
  };
};

export default fetchUserTopicStats;
