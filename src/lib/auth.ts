import { betterAuth } from "better-auth";
import { memoryAdapter } from "better-auth/adapters/memory";

const githubClientId = process.env.GITHUB_CLIENT_ID || process.env.GITHUB_ID;
const githubClientSecret =
  process.env.GITHUB_CLIENT_SECRET || process.env.GITHUB_SECRET;
const hasGithubCredentials =
  Boolean(githubClientId) &&
  Boolean(githubClientSecret) &&
  !githubClientId?.includes("<") &&
  !githubClientSecret?.includes("<");

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  database: memoryAdapter({
    user: [],
    session: [],
    account: [],
    verification: [],
  }),
  emailAndPassword: { enabled: true },
  socialProviders: hasGithubCredentials
    ? {
        github: {
          clientId: githubClientId as string,
          clientSecret: githubClientSecret as string,
        },
      }
    : undefined,
});
