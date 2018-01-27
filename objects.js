var playlist = {norah : 'Come away with me' , jason: 'I am yours'}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return Object.assign({},playlist, songTitle)
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return Object.assign({}, playlist, artistName)
}