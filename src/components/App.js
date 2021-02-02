import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/Youtube';
import VideoList from '../components/VideoList';
import VideoDetail from './VideoDetail';
import Header from './Header';

const App = () => {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	useEffect(() => {
		onTermSubmit('people are awesome');
	}, []);

	const onTermSubmit = async (term) => {
		const res = await youtube.get('/search', {
			params: {
				q: term
			}
		});
		setVideos(res.data.items);
		setSelectedVideo(res.data.items[0]);
	};

	const onVideoSelect = (video) => {
		setSelectedVideo(video);
	};

	return (
		<div className="ui container" style={{ marginTop: 10 }}>
			<Header />
			<SearchBar onFormSubmit={onTermSubmit} />
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail video={selectedVideo} />
					</div>
					<div className="five wide column">
						<VideoList onVideoSelect={onVideoSelect} videos={videos} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
