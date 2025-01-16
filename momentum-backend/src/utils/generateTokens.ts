import jwt from "jsonwebtoken";

export const generateRefreshToken = (user: any) => {
  return jwt.sign({ id: user._id }, process.env.REFRESH_TOKEN_SECRET!, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRATION,
  });
};
