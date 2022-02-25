import React from "react";

function Map() {
  return (
    <div>
      <iframe
        width="100%"
        height="300px"
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?q=Villa%20Azzur&key=${process.env.GoogleApi}`}
      ></iframe>
    </div>
  );
}

export default Map;
