import React, { useState } from "react";

import styles from './App.module.css'

import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
//import Spotify from "../../util/Spotify";

function App() {
  const [searchResults, setSearchResults] = useState([
    
    {id: "id", name: "name", artist: "artist", album: "album"},
    {id: "id", name: "name", artist: "artist", album: "album"},
    {id: "id", name: "name", artist: "artist", album: "album"},
    {id: "id", name: "name", artist: "artist", album: "album"},
    {id: "id", name: "name", artist: "artist", album: "album"},
    {id: "id", name: "name", artist: "artist", album: "album"},
    {id: "id", name: "name", artist: "artist", album: "album"},
    {id: "id", name: "name", artist: "artist", album: "album"},
    {id: "id", name: "name", artist: "artist", album: "album"},
    {id: "id", name: "name", artist: "artist", album: "album"},
    {id: "id", name: "name", artist: "artist", album: "album"},
    {id: "id", name: "name", artist: "artist", album: "album"},
    {id: "id", name: "name", artist: "artist", album: "album"},
    
  ]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");

  function search(term) {
    alert("search");
    //Spotify.search(term).then(setSearchResults);
  }

  function addTrack(track) {
    if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
      return;
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  }

  function removeTrack(track) {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }

  function updatePlaylistName(name) {
    alert("updatePlaylistName");
    /*
    setPlaylistName(name);
    */
  }

  function savePlaylist() {
    alert("savePlaylist");
    /*
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
    */
  }

  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        <SearchBar onSearch={search} />
        <div className={styles.AppPlaylist}>
          <SearchResults 
            searchResults={searchResults} 
            onAdd={addTrack} 
          />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
            onRemove={removeTrack}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
