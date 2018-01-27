var playlist = {norah : 'Come away with me' , jason: 'I am yours'}

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign({artistName: songTitle})
  return Object.assign({},playlist, songTitle)
}