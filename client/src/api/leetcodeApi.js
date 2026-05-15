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

const fetchUserTopicStats = async (username) => {
  try {
    await fetch("/leetcode/", { credentials: "include" });
  } catch (_) {}

  const csrfToken =
    document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("csrftoken="))
      ?.split("=")?.[1] ?? "";

  const response = await fetch("/leetcode/graphql/", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Referer: "https://leetcode.com",
      Origin: "https://leetcode.com",
      ...(csrfToken ? { "x-csrftoken": csrfToken } : {}),
    },
    body: JSON.stringify({
      query,
      variables: { username },
    }),
  });

  const json = await response.json();

  if (json.errors) {
    console.error("[LeetCode API] GraphQL errors:", json.errors);
  }

  return {
    ...json.data?.matchedUser,
    contestRanking: json.data?.userContestRanking,
  };
};

export default fetchUserTopicStats;
