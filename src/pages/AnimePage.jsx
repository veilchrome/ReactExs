import { useState } from "react";

function AnimeDetails() {
  const [animeName, setAnimeName] = useState("");
  const [animeDetails, setAnimeDetails] = useState(null);

  const fetchAnimeDetails = async () => {
    try {
      const response = await fetch(
        `https://api.jikan.moe/v3/search/anime?q=${encodeURIComponent(
          animeName
        )}`
      );
      const data = await response.json();
      // Check if any results are returned
      if (data.results && data.results.length > 0) {
        // Assuming we just take the first result
        const firstAnime = data.results[0];
        setAnimeDetails(firstAnime);
      } else {
        // No anime found
        setAnimeDetails(null);
        console.log("Anime not found");
      }
    } catch (error) {
      console.error("Error fetching anime details:", error);
    }
  };

  return (
    <div>
      <h1>Anime Details</h1>
      <label htmlFor="animeName">Enter Anime Name: </label>
      <input
        type="text"
        id="animeName"
        value={animeName}
        onChange={(e) => setAnimeName(e.target.value)}
      />
      <button onClick={fetchAnimeDetails}>Get Details</button>

      {animeDetails && (
        <div>
          <h2>Anime Title:</h2>
          <p>{animeDetails.title}</p>
          <h2>Anime Synopsis:</h2>
          <p>{animeDetails.synopsis}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
}

export default AnimeDetails;
