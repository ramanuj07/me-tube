const VideoCard = ({ details }) => {
  const { snippet, statistics } = details;
  const { thumbnails, title, channelTitle } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="w-96 p-2 m-2 cursor-pointer shadow-lg">
      <img
        src={thumbnails.high.url}
        alt="video"
        className="w-full rounded-xl"
      />
      <h1 className="font-bold py-2">{title}</h1>
      <p>{channelTitle}</p>
      <p>{viewCount} views</p>
    </div>
  );
};

export default VideoCard;
