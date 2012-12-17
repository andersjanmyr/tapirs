"use strict";

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
    'Tapir babies have white stripes and spots.',
    'The tapir eats almost all kinds of plants.',
    'The tapir uses its snout to smell and grab food.',
    'Tapirs mate both on land and in water.',
    'The top speed of a tapir is 48 km/h.',
    'A tapir lives 25 to 30 years.',
    'The Malayan Tapir once roamed the tropical forests across South East Asia.',
    'he Mountain Tapir is the smallest of the four different tapir species.',
    'The Mountain Tapir inhabits more mountainous regions rather than lowland forests.',
    'The Mountain Tapir is found in the high forests in the Andes mountains across Colombia, Ecuador and parts north of Peru.',
    'The Brazilian Tapir, also known as the South American Tapir, is known to be a fantastic swimmer.',
    'The Brazilian Tapir is generally found close to water in the Amazon Rainforest.',
    'The tapir is a herbivore and spends its time browsing for food to eat.',
    'The tapir eats leaves, twigs, branches, buds, shoots, berries, fruits and aquatic plants.',
    'Due to its large size, the tapir has few natural predators in its environment.',
    'The tapir is known to be prey upon by wild cats such as tigers, jaguars and cougars along with large reptiles like crocodiles and even the odd snake.',
    'The human is believed to be the most common predator of the tapir as they have been hunted for food and even domesticated in some areas.',
    'Tapirs have a long, flexible nose similar to the trunk of an elephant but no way near as big.',
    'Despite their stocky build, tapirs are known to be fantastic swimmers and tapirs therefore spend a great deal of their time close to water which the tapirs use to cool down. ',
    'Tapirs are even known to dive into the shallows in order to feed on the lush aquatic plants.',
    'After a gestation period of more than a year, the female tapir gives births to just one tapir baby.',
    'A newborn baby tapir weighs around 10 kg',
    'The baby tapirs also have a stripy coat particularly in comparison to the adult tapirs.',
    'Female tapirs are thought to breed every other year.',
    'The baby tapirs tend to leave their mother when they are between 2 and 3 years old.',
    'All four species of tapir are considered to be endangered',
    'Humans have hunted tapirs for both their meat and their leathery skin.',
    'Tapirs are solitary animals with the exception of the mating season and the mother tapir nursing the baby tapir.',
    'Tapirs are known to defend themselves using their powerful jaws and although rare, tapir attacks on humans are known to occur.',
    'The most damage the tapir will generally do though is give you a nasty bite!',
    'A group of tapirs is called a "candle."',
    'Tapir calves are born with dappled markings; at about six months, they lose the markings and look like a miniature adult tapir.',
    'The dappled markings of a tapir calf are excellent camouflage.',
    'The average lifespan of a tapir is 25 to 30 years.',
    'The tapir’s nose is prehensile and is used to grab leaves – and also as a snorkel while swimming.',
    'Tapirs have a long gestation period (13 months) and give birth to one calf per gestation.',
    'All tapir populations are in decline – a not-so-cool fact.',
    'In 1998, a female tapir at the Oklahoma City Zoo bit off a zookeeper’s arm at the bicep. The tapir had a two-month-old calf in her enclosure.',
    'Scientists believe that tapirs have not changed very much over tens of millions of years.',
    'A hybrid tapir was reportedly born at the San Francisco Zoo around 1968 – a cross between a Baird’s Tapir and a lowland tapir.',
    'Tapirs starred in the movie, 2001: A Space Odyssey.'
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

function randomId() {
    return Math.floor(Math.random() * facts.length);
}

var routes = function(app) {
    app.get('/facts', function(req, res) {
        var matching;
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
        var id = req.params.id === 'random' ? randomId() : req.params.id;
        var fact = facts[id];
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


