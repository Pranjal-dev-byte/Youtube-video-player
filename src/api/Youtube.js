import axios from 'axios';

const KEY = 'AIzaSyAnrwkUXboYc7H32d-jh4TdDK4jgkyhhVw';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		key: KEY,
		type: 'video',
	},
});
