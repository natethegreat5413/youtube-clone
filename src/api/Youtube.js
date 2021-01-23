import axios from 'axios';
const KEY = 'AIzaSyDQ2a0yRZtvAVHWZTUNw1Z0jd9UGaBMWWA';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
