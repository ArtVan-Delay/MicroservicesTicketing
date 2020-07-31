import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
  req.session = null; // Destroy the cookie

  res.send({});
});

export { router as signoutRouter };