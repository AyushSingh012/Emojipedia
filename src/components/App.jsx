import React, { useState } from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia.js";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter emojis based on search term
  const filteredEmojis = emojipedia.filter((emojiTerm) => {
    return (
      emojiTerm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emojiTerm.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emojiTerm.emoji.includes(searchTerm)
    );
  });

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search emojis or meanings..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>

      {/* Emoji List */}
      <dl className="dictionary">
        {filteredEmojis.length > 0 ? (
          filteredEmojis.map((emojiTerm) => (
            <Entry
              key={emojiTerm.id}
              emoji={emojiTerm.emoji}
              name={emojiTerm.name}
              meaning={emojiTerm.meaning}
            />
          ))
        ) : (
          <div className="not-found">
            <div>🔍</div>
            <div>Emoji Not Found</div>
            <span>Try another search term</span>
          </div>
        )}
      </dl>
    </div>
  );
}

export default App;
