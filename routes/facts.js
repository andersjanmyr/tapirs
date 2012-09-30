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

var routes = function(app) {
    app.get('/facts', function(req, res){
        res.send(facts);
    });

    app.get('/facts/:id', function(req, res){
        res.send(facts[req.params.id]);
    });

    app.put('/facts/:id', function(req, res){
        console.log(req.params);
        res.send(facts[req.params.id]);
    });
};

module.exports = routes;


