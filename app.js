// mongodb connection : mongodb+srv://brieucdegoussencourt:<password>@myclusterbrieuc.aprgjhv.mongodb.net/?retryWrites=true&w=majority&appName=MyClusterBrieuc
// mongodb pw: wiaoFjc6FGXVhegA

const express = require('express');

const app = express();

const mongoose = require('mongoose');
console.log(mongoose.version);


mongoose.connect('mongodb+srv://brieucdegoussencourt:wiaoFjc6FGXVhegA@myclusterbrieuc.aprgjhv.mongodb.net/?retryWrites=true&w=majority&appName=MyClusterBrieuc')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.post('/api/stuff', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Thing created successfully!'
    });
});

app.get('/api/stuff', (req, res, next) => {
    const stuff = [
        {
            _id: 'oeihfzeoi',
            title: 'My first thing',
            description: 'All of the info about my first thing',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Canon_EOS_60D_without_lens.png',
            price: 4900,
            userId: 'qsomihvqios',
        },
        {
            _id: 'oeihfzeomoihi',
            title: 'My second thing',
            description: 'All of the info about my second thing',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Canon_EOS_60D_without_lens.png',
            price: 2900,
            userId: 'qsomihvqios',
        },
    ];
    res.status(200).json(stuff);
});

module.exports = app;