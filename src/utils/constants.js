const GOOGLE_API_KEY = "AIzaSyBRFaHAnr8yAYD9uDVZNSc2mFZcN3VmKRs";

export const YOUTUBE_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;
