<h1>PuzzleHub</h1>
<hr><p>PuzzleHub is a web application designed for puzzle lovers to share their puzzles with the community and engage with others by liking their posts. It’s a place to discover new puzzles, showcase your creations, and enjoy puzzles created by fellow enthusiasts.</p>
<p>Built using the MERN stack (MongoDB, Express, React, Node.js), PuzzleHub provides a seamless experience for users to interact with a growing collection of puzzles.</p><h2>Technologies Used</h2>
<hr><ul>
<li>MongoDB</li>
</ul><ul>
<li>Express</li>
</ul><ul>
<li>React</li>
</ul><ul>
<li>Node.js</li>
</ul><ul>
<li>JWT Authentication</li>
</ul><h2>Features</h2>
<hr><ul>
<li>Share Your Puzzles: Upload your puzzles and share them with others.</li>
</ul><ul>
<li>Like Posts: Users can like other users' posts.</li>
</ul><ul>
<li>Browse Puzzles: Discover a wide range of puzzles, shared by other users.</li>
</ul><ul>
<li>User Authentication: Create an account, log in, and manage your profile.</li>
</ul><h2>Setup</h2>
<hr><p>Make sure the following software is installed:</p>
<p>Node.js (both for server and client)</p>
<p>MongoDB</p><h5>Steps</h5><ul>
<li>Clone the repository: https://github.com/mar7ynez/Project-Defense-React.git</li>
</ul><ul>
<li>Install server-side dependencies: cd Project-Defense-React/server &gt; npm install</li>
</ul><ul>
<li>Install client-side dependencies: cd ../client &gt; npm install</li>
</ul><ul>
<li>Set up environment variables: Create a .env file in the server directory and add the necessary variables:</li>
  <li>DB_URI="mongodb://localhost:27017/puzzle-hub"</li>
  <li>JWT_KEY="JWT_SECRE_GOES_HERE"</li>
</ul><ul>
<li>Run the application: In one terminal window, run the server (back-end): cd server &gt; npm run dev</li>
</ul><ul>
<li>In another terminal window, run the client (front-end): cd client &gt; npm run dev</li>
</ul><ul>
<li>This will start both the front-end and back-end servers, and you can access the app at: http://localhost:5173</li>
</ul><h2>Usage</h2>
<hr><p>Sign Up / Log In: Register or log in to share your puzzles and like posts.</p>
<p>Create and Share a Puzzle: Add a new puzzle by submitting its title, description, and solution.</p>
<p>Like Posts: Browse puzzles and like the ones you enjoy. (Note: Comments are not allowed.)</p>
<p>Browse Puzzles: Explore a variety of puzzles shared by the community.</p>
