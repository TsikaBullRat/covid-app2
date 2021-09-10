const precautions = [
    {
        id: 0,
        text: "How can I stay safe during the covid season",
        textshort: "Stay Safe",
        img: require("./res/safety.png"),
    },
    {
        id: 1,
        text: "Sanitize with alcohol-based hand rub.",
        textshort: "Sanitize",
        img: require("./res/sanitize.png"),
    },
    {
        id: 2,
        text: "Wash your hands with soap regularly",
        textshort: "Wash hands",
        img: require("./res/wash_hands.png"),
    },
    {
        id: 3,
        text: "Maintain at least 1 metre distance between yourself and others",
        textshort: "Distance",
        img: require("./res/distance.png"),
    },
    {
        id: 4,
        text: "Avoid touching your face.",
        textshort: "Avoid your face",
        img: require("./res/facetouch.png"),
    },
    {
        id: 5,
        text: "Cover your mouth and nose when coughing or sneezing.",
        textshort: "Cover",
        img: require("./res/cough.png"),
    },
    {
        id: 6,
        text: "Stay home if you feel unwell.",
        textshort: "Stay home",
        img: require("./res/sick.png"),
    },
    {
        id: 7,
        text: "Refrain from activities that weaken the lungs.",
        textshort: "Lung care",
        img: require("./res/lungs.png"),
    },
    {
        id: 8,
        text: "Avoid unnecessary travel.",
        textshort: "Avoid travel",
        img: require("./res/avoid_travel.png"),
    },
    {
        id: 9,
        text: "Avoid large groups of people.",
        textshort: "Avoid groups",
        img: require("./res/crowds.png"),
    },
    {
        id: 10,
        text: "Wear a mask in public, heavly crowded areas.",
        textshort: "Wear a mask",
        img: require("./res/mask.png"),
    },
    {
        id: 11,
        text: "Get vaccinated to minimize your risk of being infected.",
        textshort: "Vaccinate",
        img: require("./res/vaccinate.png"),
    }
]
const symptoms = {
    common_symptoms: [
        {
            id: 0,
            textshort: "fever",
            img: require("./res/fever.png")
        },
        {
            id: 1,
            textshort: "dry cough",
            img: require("./res/dry_cough.png")
        },
        {
            id: 2,
            textshort: "tiredness",
            img: require("./res/fatigue.png")
        }
    ],
    less_common_symptoms: [
        {
            id: 0,
            textshort: "Aches and Pains",
            img: require("./res/pain.png")
        },
        {
            id: 1,
            textshort: "Sore throat",
            img: require("./res/sore_throat.png")
        },
        {
            id: 2,
            textshort: "Diarrhoea",
            img: require("./res/diarrhoea.png")
        },
        {
            id: 3,
            textshort: "Conjunctivitis",
            img: require("./res/eye_sore.png")
        },
        {
            id: 4,
            textshort: "Headache",
            img: ""
        },
        {
            id: 5,
            textshort: "Loss of taste or smell",
            img: require("./res/headache.png")
        },
        {
            id: 6,
            textshort: "A rash on skin, or discolouration of toes",
            img: require("./res/skin.png")
        }
    ],
    serious_symptoms: [
        {
            id: 0,
            textshort: "Difficulty breathing, or Shortness of breath",
            img: require("./res/pressure.png")
        },
        {
            id: 1,
            textshort: "Chest pain or pressure",
            img: require("./res/lungs.png")
        },
        {
            id: 2,
            textshort: "Loss of speech or movement",
            img: require("./res/paralysis.png")
        }
    ]
}

async function getData(Callback, country){

    const data = await fetch(`https://coronavirus-19-api.herokuapp.com/${country}`)
        .catch(err => console.log(err))
    const stats = await data.json()
    
    stats.todayCases > -1?(Callback({
        Today: {
            label: "Today",
            Active: stats.active,
            Case: stats.todayCases,
            Deaths: stats.todayDeaths
        },
        Totals: {
            label: "Total",
            Cases: stats.cases,
            Deaths: stats.deaths,
            Recovery: stats.recovered,
            Critical: stats.critical
        }
    })):(
        Callback({
            Cases: stats.cases,
            Deaths: stats.deaths,
            Recovery: stats.recovered
        })
    )
}
    

export { precautions, symptoms, getData}