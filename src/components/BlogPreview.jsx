import React from 'react';
import './styles.css';

const BlogPreview = () => {
    return (
        <div className="blog-preview">
            <h2>Latest From Our Blog</h2>
            <div className="blog-post">
                <h3>Top 5 Must-Visit Parks in Kenya</h3>
                <p>Explore the wild beauty of Kenya with our guide to the top parks...</p>
                <a href="/blog/top-5-must-visit-parks" className="read-more">Read More</a>
            </div>
            <div className="blog-post">
                <h3>Travel Tips for a Memorable Safari</h3>
                <p>Make your safari unforgettable with these essential tips...</p>
                <a href="/blog/travel-tips" className="read-more">Read More</a>
            </div>
        </div>
    );
};

export default BlogPreview;