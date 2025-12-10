import jwt from 'jsonwebtoken';
import User from '../models/User.js'; // Adjust the path according to your project structure

// Existing register and login functions...

export const register = async (req, res) => {
  // Your register logic...
};

export const login = async (req, res) => {
  // Your login logic...
};

// New dashboard function
export const dashboard = async (req, res) => {
  try {
    // Retrieve token from Authorization header
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).send({ error: 'Unauthorized' });

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) return res.status(401).send({ error: 'Invalid token' });

      // Fetch user data based on the decoded user ID
      const userId = decoded.userId; // Assuming userId is stored in the token
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).send({ error: 'User not found' });
      }

      // Send the user data back in the response
      res.send({
        name: user.name,
        email: user.email,
        // Add other user data as needed
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Server error' });
  }
};

