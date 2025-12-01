import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "./dbConnect";
import User from "@/models/Users";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        await dbConnect();
        const user = await User.findOne({ email });

        if (!user) return null;

        // ⚠️ In production use bcrypt.compare(password, user.password)
        const isPassOK = password === user.password;
        if (!isPassOK) return null;

        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          await dbConnect();
          const existingUser = await User.findOne({ email: user.email });
          if (!existingUser) {
            await User.create({
              name: user.name,
              email: user.email,
              role: "user",
              providerAccountId: account.providerAccountId,
              provider: account.provider,
              image: user.image,
            });
          }
        } catch (err) {
          console.error("Google SignIn error:", err);
          return false;
        }
      }
      return true;
    },
    async session({ session, token }) {
      if (token) {
        session.user.email = token.email;
        session.user.role = token.role || "user";
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.role = user.role || "user";
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth/signin", // ✅ put here, not inside callbacks
  },
  debug: true,
};
