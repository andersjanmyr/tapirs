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

function toJson(fact) {
    return {
        id: facts.indexOf(fact),
        fact: fact
    };
}


function find_matching(name) {
    console.log(name);
    var regex = new RegExp(name);
    return facts.filter(function(fact) {
        return regex.test(fact);
    });
}

var routes = function(app) {
    app.get('/facts', function(req, res) {
        if (req.query.search)
            matching = find_matching(req.query.search);
        else
            matching = facts;
        var jsons = matching.map(toJson);
        res.send(jsons);
    });

    app.post('/facts', function(req, res) {
        console.log(req.body);
        var id = facts.length;
        facts[id] = req.body.fact;
        res.send(201, '' + id);
    });

    app.get('/facts/:id', function(req, res) {
        var fact = facts[req.params.id];
        if (!fact)
            res.send(404);
        else
            res.send(toJson(fact));
    });

    app.put('/facts/:id', function(req, res) {
        var id = req.params.id;
        console.log(id, req.body);
        facts[id] = req.body.fact;
        res.send(toJson(facts[id]));
    });

    app.del('/facts/:id', function(req, res) {
        var id = req.params.id;
        console.log(id);
        var json = toJson(facts[id]);
        delete facts[id];
        res.send(json);
    });

};

module.exports = routes;


