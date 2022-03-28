export const getYouTubeVideoID = (youtubeUrl: string | string[]) => {
  const url = String(youtubeUrl)
    .replace(/(>|<)/gi, "")
    .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/)
  if (url[2] !== undefined) {
    let ID: string | string[] = ""
    ID = url[2].split(/[^0-9a-z_\-]/i)
    ID = String(ID[0])
    return ID
  }
  return url
}
