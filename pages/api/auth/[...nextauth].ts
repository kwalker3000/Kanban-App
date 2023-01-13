import NextAuth, { NextAuthOptions } from 'next-auth'

// Adapter
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../lib/prismadb'

// Providers
import GithubProvider from 'next-auth/providers/github'

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  // secret
  callbacks: {
    session: async ({ session, user }) => {
      return {
        ...session,
        user: user,
        // user,
      }
    },
  },
}

export default NextAuth(authOptions)

// in github example them mention color theme
