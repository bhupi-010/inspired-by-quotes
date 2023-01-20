import React from "react";

export const QuoteItems = ({ quotes }) => {
  return (
    <div>
      {quotes.map((item, i) => (
        <div key={i} className="quote-item">
          <p className="quote-content">
            <span className="quote-icon"></span> {item.content}
          </p>
          <div className="quote-info">
            <span className="quote-author">★{item.author}</span>

          </div>
        </div>
      ))}
    </div>
  );
};
