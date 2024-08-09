const express = require('express');
const app = express();
require('dotenv').config(); // Carregar variáveis de ambiente do .env

// Simulação de banco de dados de documentários
const documentaries = [
    {
        title: "Before the Flood",
        director: "Fisher Stevens",
        description: "Leonardo DiCaprio explora a crise climática global e possíveis soluções para evitar o colapso ambiental.",
        year: 2016,
        link: "https://example.com/before-the-flood"
    },
    {
        title: "An Inconvenient Truth",
        director: "Davis Guggenheim",
        description: "Al Gore apresenta uma visão chocante sobre as mudanças climáticas e suas consequências.",
        year: 2006,
        link: "https://example.com/an-inconvenient-truth"
    },
    {
        title: "Chasing Ice",
        director: "Jeff Orlowski",
        description: "Um fotógrafo documenta a transformação das geleiras devido às mudanças climáticas.",
        year: 2012,
        link: "https://example.com/chasing-ice"
    },
    {
        title: "The 11th Hour",
        director: "Nadia Conners, Leila Conners",
        description: "Leonardo DiCaprio narra este documentário sobre os problemas ambientais enfrentados pelo planeta.",
        year: 2007,
        link: "https://example.com/the-11th-hour"
    },
    {
        title: "Our Planet",
        director: "Alastair Fothergill",
        description: "Uma série documental que explora a beleza natural da Terra e os impactos das mudanças climáticas.",
        year: 2019,
        link: "https://example.com/our-planet"
    },
    // Adicionando mais documentários sobre mudanças climáticas
    {
        title: "Planet Earth II",
        director: "David Attenborough",
        description: "Explora a vida selvagem em vários ambientes naturais e como as mudanças climáticas afetam o planeta.",
        year: 2016,
        link: "https://example.com/planet-earth-ii"
    },
    {
        title: "Years of Living Dangerously",
        director: "Various",
        description: "Uma série de documentários com celebridades investigando os problemas relacionados às mudanças climáticas.",
        year: 2014,
        link: "https://example.com/years-of-living-dangerously"
    }
];

// Rota GET para sugestões de documentários sobre sustentabilidade
app.get('/suggestions/documentaries/sustainability', (req, res) => {
    const sustainabilityDocs = [
        {
            title: "The True Cost",
            director: "Andrew Morgan",
            description: "Explora o impacto da moda rápida na saúde do nosso planeta.",
            year: 2015,
            link: "https://example.com/the-true-cost"
        },
        {
            title: "The Age of Consequences",
            director: "Jared P. Scott",
            description: "Analisa como as mudanças climáticas afetam a segurança e a estabilidade global.",
            year: 2016,
            link: "https://example.com/the-age-of-consequences"
        },
        {
            title: "Kiss the Ground",
            director: "Josh Tickell, Rebecca Harrell Tickell",
            description: "Explora como a agricultura regenerativa pode reverter as mudanças climáticas e restaurar a saúde do solo.",
            year: 2020,
            link: "https://example.com/kiss-the-ground"
        }
    ];
    res.json({ documentaries: sustainabilityDocs });
});

// Rota GET para dados sobre poluição do ar
app.get('/data/air-pollution', (req, res) => {
    const city = req.query.city || "São Paulo";
    
    // Dados sobre poluição do ar
    const airPollutionData = {
        "São Paulo": {
            aqi: 150,
            main_pollutant: "PM2.5",
            description: "A qualidade do ar é insalubre para grupos sensíveis."
        },
        "New York": {
            aqi: 100,
            main_pollutant: "O3",
            description: "A qualidade do ar é moderada."
        },
        "Beijing": {
            aqi: 200,
            main_pollutant: "PM10",
            description: "A qualidade do ar é muito insalubre."
        },
        "Mumbai": {
            aqi: 180,
            main_pollutant: "NO2",
            description: "A qualidade do ar é insalubre para todos."
        }
    };

    const data = airPollutionData[city] || airPollutionData["São Paulo"];
    res.json({ city, ...data });
});

// Rota GET para sugestões de documentários sobre mudanças climáticas
app.get('/suggestions/documentaries/climate-change', (req, res) => {
    const limit = req.query.limit ? parseInt(req.query.limit) : documentaries.length;
    const filteredDocs = documentaries.slice(0, limit);
    res.json({ documentaries: filteredDocs });
});

// Rota para a URL raiz
app.get('/', (req, res) => {
    res.send('Bem-vindo à API de Sugestões de Documentários! Explore nossas rotas para encontrar documentários sobre sustentabilidade, mudanças climáticas e muito mais.');
});

// Inicializando o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});
