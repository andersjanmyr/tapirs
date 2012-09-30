var facts = [
    'The tapir is related to the horse and the rhinoserous.',
    'The tapir is a fast and agile runner.',
    'The tapir is an excellent swimmer.',
    'The tapir has excellent vision and hearing.',
    'The tapir has fourteen toes, three on its hind legs and four on the front.',
    'The snout of the tapir is converd with sensory hairs.',
    'The tapir was not discovered until the early 19th century.',
    'The tapir is very shy.',
    'There are four kinds of tapirs, Mountain, Brazilian, Baird, and Malayan.',
    'A tapir weight between 150 and 400 kg.',
    'The Mountain tapir has longer hair in order to keep warm at high altitude.',
    'The Malayan tapir is the largest and the Mountain tapir is the smallest.',
    'The camoflage style of the Malayan is called disruptive camoflage.',
    'All tapirs prefer a tropical climate.',
    'Tapirs are normally active at dawn and dusk.',
    'Tapir babies have white stripes and spotsj.',
    'The tapir eats almost all kinds of plants.',
    'The tapir uses its snout to smell and grab food',
    'Tapirs mate both on land and in water.'
];

function toJson(index) {
    return {
        id: index,
        fact: facts[index]
    };
}


var routes = function(app) {
    app.get('/facts', function(req, res) {
        var jsons = [];
        for (var i in facts)
            jsons.push(toJson(i));
        res.send(jsons);
    });

    app.post('/facts', function(req, res) {
        console.log(req.body);
        facts[facts.length] = req.body.fact;
        res.status(201);
        res.send(req.params.id);
    });

    app.get('/facts/:id', function(req, res) {
        res.send(toJson(req.params.id));
    });

    app.put('/facts/:id', function(req, res) {
        console.log(req.params.id, req.body);
        facts[req.params.id] = req.body.fact;
        res.send(toJson(req.params.id));
    });

    app.del('/facts/:id', function(req, res) {
        console.log(req.params.id);
        var json = toJson(req.params.id);
        delete facts[req.params.id]
        res.send(json);
    });

};

module.exports = routes;


