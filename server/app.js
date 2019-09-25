<<<<<<< HEAD
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
=======
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
>>>>>>> a2d1621455e657b96361083c050a66061d943b82

dotenv.config();

const app = express();
const distPath = path.join(__dirname, '../dist');
const htmlIndex = path.join(distPath, 'index.html');
<<<<<<< HEAD
const port = process.env.port || 8080;
=======
const port = process.env.PORT || 8080;
>>>>>>> a2d1621455e657b96361083c050a66061d943b82
app.use(express.static(distPath));
app.use(cors());
app.get('/', (req, res) => {
  res.send(htmlIndex);
});
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Author's Haven running on port: ${port}`);
});
