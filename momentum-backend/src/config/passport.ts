import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/User";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: "/auth/google/callback",
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: any
    ) => {
      try {
        const { id, displayName, emails, photos } = profile;
        // Find or create the user in your database
        const user =
          (await User.findOne({ googleId: id })) ||
          (await User.create({
            googleId: id,
            firstName: displayName.split(" ")[0],
            lastName: displayName.split(" ")[1],
            email: emails[0].value,
            profilePicture: photos[0]?.value, // Save profile picture URL
          }));

        done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);

passport.serializeUser((user: any, done: any) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done: any) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});
