import React, { useState, useEffect } from 'react';

function YouTube() {
  const [youTube, setYouTube] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY; // Access the key
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6`
    )
      .then((response) => response.json())
      .then((data) => {
        const itemData = data.items;
        setYouTube(itemData);
      })
      .catch((error) => console.error("Error fetching YouTube data:", error));
  }, []);

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wrapper bold video-title-wrapper">
              Latest Videos
            </div>
          </div>
          {youTube.map((singleVideo) => {
            const vidId = singleVideo.id.videoId;
            const vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            return (
              <div key={vidId} className="col-sm-12 col-md-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank" rel="noopener noreferrer">
                      <img
                        src={singleVideo.snippet.thumbnails.high.url}
                        alt="video thumbnail"
                      />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a
                        href={vidLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default YouTube;
