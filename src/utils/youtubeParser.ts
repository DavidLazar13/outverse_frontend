const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
export default function youtubeParser(url: string | undefined) {
  if(!url) {
    return false
  }
  const match = url.match(regExp);
  console.log(match)
  if (!match){
    return null
  }
  if (match && match[7].length !== 11 && match[7] !== null){
    return null;
  }
  return match[7]
}
