//Action creator
export const selectSong = song => {
    //return an action like plain object
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
}
/* 
// Action creator
// export as a named export
export const selectSong = song => {
    // Return an action
    return {
      type: "SONG_SELECTED",
      payload: song
    };
  }; */