import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Youtube from '../api/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

export class App extends Component {
	state = { videos: [], selectedVideo: null };
	onSearchSubmit = async (term) => {
		const res = await Youtube.get('/search', {
			params: {
				q: term,
			},
		});
		this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
	};
	componentDidMount() {
		this.onSearchSubmit('buildings');
	}
	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	};
	render() {
		return (
			<div className='ui container' style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<div className='ui grid'>
					<div className='ui row'>
						<div className='eleven wide column'>
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className='five wide column'>
							<VideoList
								videos={this.state.videos}
								onVideoSelect={this.onVideoSelect}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
