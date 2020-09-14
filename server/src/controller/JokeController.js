module.exports = {
    list: (req, res) => {
        Joke.find({}, (err, jokes) => {
            if(err != null) {
                return res.send(JSON.stringify({err: err}))
            }
    
            return res.json(jokes);
        })
    },

    find: (req, res) => {
        return Joke.findById(req.params.id, (err, jokeRes) => {
            if(err != null) {
                return res.send(JSON.stringify({err: err}));
            }
    
            if(jokeRes == null) {
                return res.send(JSON.stringify({err: 'not found'}));
            }
    
            return res.send(JSON.stringify(jokeRes));
        })
    },

    random: (req, res) => {
        return Joke.find({}, (err, jokes) => {
            console.log('jokes random list', jokes, err)
            if(err != null) {
                return res.send(JSON.stringify({err: err}))
            }
            if(jokes == null || jokes.length == 0) {
                return res.send(JSON.stringify({err: "no jokes found"}))
            }
    
            const len = jokes.length;
    
            const indx = Math.floor(len * Math.random());
    
            return res.json(jokes[indx]);
        })
    },

    add: (req, res) => {
        const jokeData = req.body;
        console.log('New Joke req.body = ', jokeData)
    
        jokeData._id = uuidv4();
        Joke.create(jokeData, (err, jokeInst) => {
            if(err != null) {
                return res.send(JSON.stringify({err: err}))
            }
            return res.send('created' + JSON.stringify(jokeInst))
        });
    },

    modify: (req, res) =>{
        Joke.updateOne({_id: req.params.id}, req.body,
            (err, jokeRes) => {
            if(err != null) {
                return res.send(JSON.stringify({err: err}));
            }
    
            if(jokeRes == null) {
                return res.send(JSON.stringify({err: 'unknown'}));
            }
    
            return res.send(JSON.stringify(jokeRes));
        });
    },

    delete: (req, res) => {
        Joke.deleteOne({_id: req.params.id}, (err, jokeRes) => {
            if(err != null) {
                return res.send(JSON.stringify({err: err}));
            }
    
            if(jokeRes == null) {
                return res.send(JSON.stringify({err: 'unknown'}));
            }
    
            return res.send(JSON.stringify(jokeRes));
        });
    },


}