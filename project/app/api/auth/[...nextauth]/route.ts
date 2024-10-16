import { randomUUID } from "crypto";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

// Define your auth options
const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Your authentication logic here
        const user = { id: randomUUID, email: credentials?.email }; // Dummy user
        if (user) {
          return user; // If authentication is successful
        } else {
          return null; // If authentication fails
        }
      },
    }),
  ],
  // callbacks: {
  //   async signIn({ user }) {
  //     //처리
  //     return true;
  //   },
  // },
};

// Export the NextAuth API route
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };


