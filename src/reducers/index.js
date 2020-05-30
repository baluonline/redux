import { combineReducers } from 'redux';

const songsReducer= () => {
    return [
        {title: 'venkatesaya', duration: '4.05'},
        {title: 'anjineya', duration: '4.05'},
        {title: 'lakshme', duration: '4.05'},
        {title: 'bhavani', duration: '4.05'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    song: songsReducer,
    selectedSong:selectedSongReducer
});
