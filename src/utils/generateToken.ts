import jwt from "jsonwebtoken";

export const generateToken = (
  payload: string,
  value: string | number
): string => {
  const token = jwt.sign(
    { [payload]: value },
    String(process.env.AUTH_SECRET),
    {
      expiresIn: 86400,
    }
  );
  return token;
};
