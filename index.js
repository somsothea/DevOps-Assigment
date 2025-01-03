require('dotenv').config();

const express = require('express');

const io = new Server(server, {
  cors: {
    origin: '*',
  },
  adapter: createAdapter(pubClient, subClient),
});
app.use(express.static(path.join(__dirname, 'frontend/dist')));

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
  