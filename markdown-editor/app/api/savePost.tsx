// pages/api/savePost.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { content } = req.body;
  
      // Aquí enviarás el contenido a tu backend en Laravel
      const response = await fetch('http://localhost:8000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });
  
      if (response.ok) {
        res.status(200).json({ message: 'Post saved successfully' });
      } else {
        res.status(response.status).json({ message: 'Error saving post' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  