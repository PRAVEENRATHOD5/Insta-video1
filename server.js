const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/download', async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ success: false, message: 'URL is required' });
    }

    try {
        // Here, you'd implement the logic to fetch the Instagram video URL.
        // For example, using an Instagram scraping library or API.
        console.log('Received request to download video:', url);
        
        // This is just a placeholder; replace it with actual fetching logic.
        const videoUrl = 'https://example.com/video.mp4'; // Replace with actual logic

        res.json({ success: true, videoUrl });
    } catch (error) {
        console.error('Error fetching video:', error);
        res.status(500).json({ success: false, message: 'Failed to download video' });
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
