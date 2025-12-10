import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // Attach user info to the request
    next();  // Continue to the next middleware or route handler
  } catch (err) {
    console.error('Invalid token:', err);
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};
