const express = require('express');
const app = express();
require('dotenv').config(); // Carregar variáveis de ambiente do .env

// Simulação de banco de dados
const documentaries = [
    {
        title: "Before the Flood",
        director: "Fisher Stevens",
        description: "Leonardo DiCaprio apresenta um documentário que explora a crise climática global e as possíveis soluções para evitar o colapso ambiental.",
        year: 2016,
        link: "https://example.com/before-the-flood"
    },
    {
        title: "An Inconvenient Truth",
        director: "Davis Guggenheim",
        description: "Al Gore apresenta uma visão chocante e informativa sobre as mudanças climáticas e suas consequências.",
        year: 2006,
        link: "https://example.com/an-inconvenient-truth"
    },
    {
        title: "Chasing Ice",
        director: "Jeff Orlowski",
        description: "Um fotógrafo de natureza documenta a dramática transformação das geleiras devido às mudanças climáticas.",
        year: 2012,
        link: "https://example.com/chasing-ice"
    },
    {
        title: "The 11th Hour",
        director: "Nadia Conners, Leila Conners",
        description: "Leonardo DiCaprio narra este documentário que explora os problemas ambientais enfrentados pelo planeta e as soluções possíveis.",
        year: 2007,
        link: "https://example.com/the-11th-hour"
    },
    {
        title: "Our Planet",
        director: "Alastair Fothergill",
        description: "Uma série documental que explora a beleza natural da Terra e os impactos das mudanças climáticas.",
        year: 2019,
        link: "https://example.com/our-planet"
    }
];
// Nova rota GET para sugestões de documentários sobre sustentabilidade
app.get('/suggestions/documentaries/sustainability', (req, res) => {
    const sustainabilityDocs = [
        {
            title: "The True Cost",
            director: "Andrew Morgan",
            description: "Um documentário que explora o impacto da moda rápida na saúde do nosso planeta.",
            year: 2015,
            link: "https://example.com/the-true-cost"
        },
        // Outros documentários...
    ];
    res.json({ documentaries: sustainabilityDocs });
});

// Rota GET para dados sobre poluição do ar
app.get('/data/air-pollution', (req, res) => {
    const city = req.query.city || "São Paulo";
    const airPollutionData = {
        city: city,
        aqi: 150,
        main_pollutant: "PM2.5",
        description: "A qualidade do ar é insalubre para grupos sensíveis."
    };
    res.json(airPollutionData);
});

// Rota para sugestões de documentários sobre mudanças climáticas
app.get('/suggestions/documentaries/climate-change', (req, res) => {
    const limit = req.query.limit ? parseInt(req.query.limit) : documentaries.length;
    res.json({ documentaries: documentaries.slice(0, limit) });
});

// Inicializando o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});