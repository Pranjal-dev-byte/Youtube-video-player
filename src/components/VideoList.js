import React from 'react';
import VideoItem from './VideoItem';

function VideoList({ videos, onVideoSelect }) {
	const videoItem = videos.map((video) => {
		return (
			<VideoItem
				video={video}
				key={video.id.videoId}
				onVideoSelect={onVideoSelect}
			/>
		);
	});
	return <div className='ui relaxed divided list'>{videoItem}</div>;
}

export default VideoList;
