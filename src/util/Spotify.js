import React from 'react';
const CLIENT_ID= '43527826c41b4766837793a7c7c93591';
const REDIRECT_URI = 'http://localhost:3000/';
let accessToken = undefined;
let expiresIn = '';
const Spotify = {
  getAccessToken(){
    if(accessToken){
      return accessToken;
    }else{
      const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
      return accessToken;
    } else {
      const accessUrl = "https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${https://accounts.spotify.com/authorize?client_id=CLIENT_ID&response_type=token&scope=playlist-modify-public&redirect_uri=REDIRECT_URI}";
      window.location = accessUrl;
    }
  }
}
   search(term){
     const searchEndpoint = '';
     const accessToken = this.getAccessToken();

     return fetch(searchEndpoint,{
       headers: {
         Authorization : 'Bearer ${accessToken}'
       }
     })
     .then(response => respons.json())
     .then(jsonResponse => {
       if(!jsonResponse.tracks) return[];
       return jsonResponse.tracks.items.map(track=>{
         return{
           id:track.id,
           name:track.name,
           artist: track.artists[0].name,
           album:track.album.name,
           uri:track.uri
         }
       })
     })
   }
   savePlaylist(playlistName,trackUris){

   		if (!playlistName && !trackUris){
   			return;
   		}

   		const userIdEndpoint = 'https://api.spotify.com/v1/me';
   		const accessToken = this.getAccessToken();
   		// get current user id

   			let userId = undefined;
   			let playlistId = undefined;

   			fetch(userIdEndpoint, {headers: { Authorization: "Bearer " + accessToken }})
   			.then(response => response.json())
   			.then(jsonResponse => userId = jsonResponse.id)
   			.then(() => {

   			const savePlaylistEndpoint = `https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/users/${userId}/playlists`;

   			return fetch(savePlaylistEndpoint,{
   				headers: {
   					Authorization: "Bearer " + accessToken,
   					'content-type': 'application/json',
   				},
   				method: 'POST',
   				body: JSON.stringify({
   					name: playlistName,
   				})
   			})
   			.then(response => response.json())
   			.then(jsonResponse => playlistId = jsonResponse.id)
   			.then(() => {

   				fetch(`https://cors-anywhere.herokuapp.com/https://api.spotify.com//v1/users/${userId}/playlists/${playlistId}/tracks`,{
   					headers: {
   					Authorization: "Bearer " + accessToken,
   					'content-type': 'application/json',
   					},
   					method: 'POST',
   					body: JSON.stringify({
   						uris: trackUris,
   					})
   				})
   				.then(respuesta => respuesta.json())
   			})
   });

 }

export default Spotify;
