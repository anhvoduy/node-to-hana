// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbContext from '../utils/dbContext';

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')  
  res.json({ name: 'Hello ANH' })
}