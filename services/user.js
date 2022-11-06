exports.loginHandler = (req, res) => {
    res.send("Login route");
}

exports.registerHandler = (req, res) => {
    res.send("Register route");
}

exports.fetchUsersHandler = (req, res) => {
    res.status(200).send(
        [
            {name: 'Ranga', id: 121088, state: 'Andhrapradesh', phone: '8179470834'},
            {name: 'Pawan', id: 121078, state: 'Telangana', phone: '8179470835'},
            {name: 'Mohin', id: 121098, state: 'Kerala', phone: '8179470836'},
            {name: 'Somesh', id: 121078, state: 'Tamilnadu', phone: '8179470837'}
        ]
    );
}
