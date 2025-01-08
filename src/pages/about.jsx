import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">About Our Site</h1>
      <p className="mb-4 text-gray-700">
        Welcome to our platform, a versatile sharing space where you can post 
        anything you want! Unlike traditional text-only sites like Pastebin, 
        we encourage creativity and self-expression by allowing users to share 
        not just text, but also images and other media.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">What You Can Post</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Text snippets and notes</li>
        <li>Images and GIFs</li>
        <li>Links to videos or other resources</li>
        <li>Creative content like memes and art</li>
      </ul>
      <p className="mb-4 text-gray-700">
        Our goal is to create a community where people can share their ideas, 
        artworks, and thoughts freely. Whether you want to share a quick message, 
        a funny image, or a thought-provoking piece of content, you can do so 
        without needing an account or going through a lengthy authorization process.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Moderation</h2>
      <p className="mb-4 text-gray-700">
        While our site promotes freedom of expression, we have implemented minor 
        moderation to ensure that the content shared adheres to basic community 
        guidelines. This helps maintain a respectful and safe environment for 
        all users. We encourage users to report any inappropriate content they 
        come across.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Get Involved</h2>
      <p className="mb-4 text-gray-700">
        We invite you to join our community and start posting! Your contributions 
        help make our platform vibrant and diverse. Let your creativity flow and 
        share whatever you want with the world!
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Contact Us</h2>
      <p className="mb-4 text-gray-700">
        If you have any questions or feedback, feel free to reach out to us. You can contact the developer through links on the footer. 
        We’re always looking to improve and would love to hear from you!
      </p>

    </div>
  );
};

export default About;