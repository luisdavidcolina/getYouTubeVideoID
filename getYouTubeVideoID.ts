export const getYouTubeVideoID = (youtubeUrl: string | string[]) => {
  let url = youtubeUrl
  let ID: string | string[] = ''
  url = String(url)
    .replace(/(>|<)/gi, '')
    .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/)
  if (url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_\-]/i)
    ID = String(ID[0])
  } else {
    ID = url
  }
  return ID
}
