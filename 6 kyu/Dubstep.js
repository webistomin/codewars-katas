function songDecoder(song) {
  return song.replace(/WUB/g, ' ').replace(/ {2,}/g, ' ').trim()
}
