let mainContainer = document.getElementById('container');
let roundOne = document.getElementById('round-one-container')
let roundTwo = document.getElementById('round-two-container')
let roundThree = document.getElementById('round-three-container')
let roundFour = document.getElementById('four')
let roundFive = document.getElementById('round-five-container')
let roundSix = document.getElementById('round-six-container')
let roundSeven = document.getElementById('round-seven-container')
let teamBoxA; 
let teamBoxB;
let teams = ['Paris Saint-Germain', 'Manchester City', 'FC Bayern München','Liverpool', 'Manchester United', 'Real Madrid', 'Atlético Madrid',
            'FC Barcelona', 'Chelsea', 'Juventus', 'Tottenham Hotspur', 'Inter', 'Sevilla FC', 'Borussia Dortmund', 'RB Leipzig', 'Villarreal CF',
            'Leicester City', 'Real Sociedad', 'Atalanta', 'Milan', 'Napoli', 'Lazio', 'Arsenal', 'Athletic Club de Bilbao', 'West Ham United',
            'Everton', 'Real Betis', 'SL Benfica', 'Borussia Mönchengladbach', 'Olympique Lyonnais', 'Roma', 'AS Monaco', 'VfL Wolfsburg', 'Ajax',
            'Olympique de Marseille', 'Sporting CP', 'Wolverhampton Wanderers', 'Bayer 04 Leverkusen', 'Aston Villa', 'LOSC Lille', 'FC Porto', 
            'Valencia CF', 'Levante UD', 'Leeds United', ' Granada CF', 'Eintracht Frankfurt','RC Celta',  'OGC Nice', 'Newcastle United',
            'PSV', 'CA Osasuna', 'Stade Rennais FC',  'Flamengo', 'Crystal Palace', 'Fiorentina', 'Olympiacos CFP', 'RCD Espanyol', 'Southampton',
            'Burnley', 'TSG 1899 Hoffenheim', 'Torino', 'Getafe CF', 'Brighton & Hove Albion', 'River Plate', 'Tigres U.A.N.L.', 'Bologna', 'Sampdoria',
            'Club Brugge KV', 'Beşiktaş JK', 'Elche CF', 'Fenerbahçe SK', 'Cagliari', 'Monterrey', 'Hellas Verona', 'SC Braga', 'Hertha BSC', 'Watford',
            'Sassuolo', 'Atlético Mineiro', 'SK Slavia Praha', 'Shakhtar Donetsk', 'Boca Juniors', 'RCD Mallorca', 'Cruz Azul', 'FC Union Berlin',
            'Norwich City', 'Cádiz CF', 'RC Strasbourg Alsace', 'FC Girondins de Bordeaux', 'Club América', 'Udinese', 'Rayo Vallecano', 'Lokomotiv Moscow',
            'Fulham', 'Genoa', 'Spartak Moscow', 'Palmeiras', 'Trabzonspor', 'Real Valladolid CF', 'Bragantino Venezuela']
let rand;
let teamTextA; 
let teamTextB;
let winner;
let checkbox;

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while(currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];                           //shuffles the array before the teams are assigned to their divs
    }
    console.log(array);
    return array;
}

function create16() {
    let gameBoxA;
    let gameBoxB; 
    let checkboxA;
    let checkboxB;
    let versus;
    
    for(let i = 0; i <= 7; i++) {
        gameBoxA = document.createElement('div');
        versus = document.createElement('p');
        gameBoxB = document.createElement('div');
        teamBoxA = document.createElement('div');
        teamBoxB = document.createElement('div'); 
        teamBoxA.classList.add('team-box');
        teamBoxB.classList.add('team-box');
        teamBoxA.id = `box8${i}a`;
        teamBoxB.id = `box8${i}b`;
        versus.classList.add('versus')
        checkboxA = document.createElement('input');
        checkboxB = document.createElement('input');
        checkboxA.type = "checkbox";
        checkboxA.name = "winner";
        checkboxA.value = "value";
        checkboxA.id = "8[i]a";
        checkboxB.type = "checkbox";
        checkboxB.name = "winner";
        checkboxB.value = "value";
        checkboxB.id = "8[i]b";
        roundFour.appendChild(gameBoxA);
        roundFour.appendChild(versus);
        roundFour.appendChild(gameBoxB);
        gameBoxA.appendChild(teamBoxA);
        gameBoxB.appendChild(teamBoxB);
        gameBoxA.appendChild(checkboxA);
        gameBoxB.appendChild(checkboxB);
        versus.textContent = 'v';
        
    }

    for (let i = 0; i <= 3; i++) {

        gameBoxA = document.createElement('div');
        versus = document.createElement('p');
        gameBoxB = document.createElement('div');
        teamBoxA = document.createElement('div');
        teamBoxB = document.createElement('div'); 
        teamBoxA.classList.add('team-box');
        teamBoxB.classList.add('team-box');
        versus.classList.add('versus')
        checkboxA = document.createElement('input');
        checkboxB = document.createElement('input');
        checkboxA.type = "checkbox";
        checkboxA.name = "winner";
        checkboxA.value = "value";
        checkboxA.id = "8[i]a";
        checkboxB.type = "checkbox";
        checkboxB.name = "winner";
        checkboxB.value = "value";
        checkboxB.id = "8[i]b";
        roundFive.appendChild(gameBoxA);
        roundFive.appendChild(versus);
        roundFive.appendChild(gameBoxB);
        gameBoxA.appendChild(teamBoxA);
        gameBoxB.appendChild(teamBoxB);
        gameBoxA.appendChild(checkboxA);
        gameBoxB.appendChild(checkboxB);
        versus.textContent = 'v';
        
    }for (let i = 0; i <= 1; i++) {

        gameBoxA = document.createElement('div');
        versus = document.createElement('p');
        gameBoxB = document.createElement('div');
        teamBoxA = document.createElement('div');
        teamBoxB = document.createElement('div'); 
        teamBoxA.classList.add('team-box');
        teamBoxB.classList.add('team-box');
        versus.classList.add('versus')
        checkboxA = document.createElement('input');
        checkboxB = document.createElement('input');
        checkboxA.type = "checkbox";
        checkboxA.name = "winner";
        checkboxA.value = "value";
        checkboxA.id = "8[i]a";
        checkboxB.type = "checkbox";
        checkboxB.name = "winner";
        checkboxB.value = "value";
        checkboxB.id = "8[i]b";
        roundSix.appendChild(gameBoxA);
        roundSix.appendChild(versus);
        roundSix.appendChild(gameBoxB);
        gameBoxA.appendChild(teamBoxA);
        gameBoxB.appendChild(teamBoxB);
        gameBoxA.appendChild(checkboxA);
        gameBoxB.appendChild(checkboxB);
        versus.textContent = 'v';
    
    }

    gameBoxA = document.createElement('div');
    versus = document.createElement('p');
    gameBoxB = document.createElement('div');
    teamBoxA = document.createElement('div');
    teamBoxB = document.createElement('div'); 
    teamBoxA.classList.add('team-box');
    teamBoxB.classList.add('team-box');
    versus.classList.add('versus')
    roundSeven.appendChild(gameBoxA);
    roundSeven.appendChild(versus);
    roundSeven.appendChild(gameBoxB);
    gameBoxA.appendChild(teamBoxA);
    gameBoxB.appendChild(teamBoxB);
    versus.textContent = 'v';

}

function create32() {
    let gameBoxA;
    let gameBoxB;
    let versus;
    
    for(let i = 0; i <= 15; i++) {
        gameBoxA = document.createElement('div');
        versus = document.createElement('p');
        gameBoxB = document.createElement('div');
        teamBoxA = document.createElement('div');
        teamBoxB = document.createElement('div'); 
        teamBoxA.classList.add('team-box');
        teamBoxB.classList.add('team-box');
        teamBoxA.id = `box16${i}a`;
        teamBoxB.id = `box16${i}b`;
        versus.classList.add('versus')
        roundThree.appendChild(gameBoxA);
        roundThree.appendChild(versus);
        roundThree.appendChild(gameBoxB);
        gameBoxA.appendChild(teamBoxA);
        gameBoxB.appendChild(teamBoxB);
        versus.textContent = 'v';
    }


    for(let i = 0; i <= 7; i++) {
        gameBoxA = document.createElement('div');
        versus = document.createElement('p');
        gameBoxB = document.createElement('div');
        teamBoxA = document.createElement('div');
        teamBoxB = document.createElement('div'); 
        teamBoxA.classList.add('team-box');
        teamBoxB.classList.add('team-box');
        versus.classList.add('versus')
        roundFour.appendChild(gameBoxA);
        roundFour.appendChild(versus);
        roundFour.appendChild(gameBoxB);
        gameBoxA.appendChild(teamBoxA);
        gameBoxB.appendChild(teamBoxB);
        versus.textContent = 'v';
        
    }

    for (let i = 0; i <= 3; i++) {

        gameBoxA = document.createElement('div');
        versus = document.createElement('p');
        gameBoxB = document.createElement('div');
        teamBoxA = document.createElement('div');
        teamBoxB = document.createElement('div'); 
        teamBoxA.classList.add('team-box');
        teamBoxB.classList.add('team-box');
        versus.classList.add('versus')
        roundFive.appendChild(gameBoxA);
        roundFive.appendChild(versus);
        roundFive.appendChild(gameBoxB);
        gameBoxA.appendChild(teamBoxA);
        gameBoxB.appendChild(teamBoxB);
        versus.textContent = 'v';
        
    }for (let i = 0; i <= 1; i++) {

        gameBoxA = document.createElement('div');
        versus = document.createElement('p');
        gameBoxB = document.createElement('div');
        teamBoxA = document.createElement('div');
        teamBoxB = document.createElement('div'); 
        teamBoxA.classList.add('team-box');
        teamBoxB.classList.add('team-box');
        versus.classList.add('versus')
        roundSix.appendChild(gameBoxA);
        roundSix.appendChild(versus);
        roundSix.appendChild(gameBoxB);
        gameBoxA.appendChild(teamBoxA);
        gameBoxB.appendChild(teamBoxB);
        versus.textContent = 'v';
    
    }

    gameBoxA = document.createElement('div');
    versus = document.createElement('p');
    gameBoxB = document.createElement('div');
    teamBoxA = document.createElement('div');
    teamBoxB = document.createElement('div'); 
    teamBoxA.classList.add('team-box');
    teamBoxB.classList.add('team-box');
    versus.classList.add('versus')
    roundSeven.appendChild(gameBoxA);
    roundSeven.appendChild(versus);
    roundSeven.appendChild(gameBoxB);
    gameBoxA.appendChild(teamBoxA);
    gameBoxB.appendChild(teamBoxB);
    versus.textContent = 'v';
    
}

function create64() {
    let gameBoxA;
    let gameBoxB; 
    let checkboxA;
    let checkboxB;
    let versus;

    for(let i = 0; i <= 31; i++) {
        gameBoxA = document.createElement('div');
        versus = document.createElement('p');
        gameBoxB = document.createElement('div');
        teamBoxA = document.createElement('div');
        teamBoxB = document.createElement('div'); 
        teamBoxA.classList.add('team-box');
        teamBoxB.classList.add('team-box');
        teamBoxA.id = `box32${i}a`;
        teamBoxB.id = `box32${i}b`;
        versus.classList.add('versus');
        roundTwo.appendChild(gameBoxA);
        roundTwo.appendChild(versus);
        roundTwo.appendChild(gameBoxB);
        gameBoxA.appendChild(teamBoxA);
        gameBoxB.appendChild(teamBoxB);
        versus.textContent = 'v';
    }
    
    for(let i = 0; i <= 15; i++) {
        gameBoxA = document.createElement('div');
        versus = document.createElement('p');
        gameBoxB = document.createElement('div');
        teamBoxA = document.createElement('input');
        teamBoxB = document.createElement('input'); 
        teamBoxA.id = `box16${i}a`;
        teamBoxB.id = `box16${i}b`;
        teamBoxA.classList.add('team-box');
        teamBoxB.classList.add('team-box');
        versus.classList.add('versus');
        roundThree.appendChild(gameBoxA);
        roundThree.appendChild(versus);
        roundThree.appendChild(gameBoxB);
        gameBoxA.appendChild(teamBoxA);
        gameBoxB.appendChild(teamBoxB);
        versus.textContent = 'v';
    }


    for(let i = 0; i <= 7; i++) {
        gameBoxA = document.createElement('div');
        versus = document.createElement('p');
        gameBoxB = document.createElement('div');
        teamBoxA = document.createElement('div');
        teamBoxB = document.createElement('div'); 
        teamBoxA.classList.add('team-box');
        teamBoxB.classList.add('team-box');
        versus.classList.add('versus');
        roundFour.appendChild(gameBoxA);
        roundFour.appendChild(versus);
        roundFour.appendChild(gameBoxB);
        gameBoxA.appendChild(teamBoxA);
        gameBoxB.appendChild(teamBoxB);
        versus.textContent = 'v';
        
    }

    for (let i = 0; i <= 3; i++) {

        gameBoxA = document.createElement('div');
        versus = document.createElement('p');
        gameBoxB = document.createElement('div');
        teamBoxA = document.createElement('div');
        teamBoxB = document.createElement('div'); 
        teamBoxA.classList.add('team-box');
        teamBoxB.classList.add('team-box');
        versus.classList.add('versus')
        roundFive.appendChild(gameBoxA);
        roundFive.appendChild(versus);
        roundFive.appendChild(gameBoxB);
        gameBoxA.appendChild(teamBoxA);
        gameBoxB.appendChild(teamBoxB);
        versus.textContent = 'v';
        
    }for (let i = 0; i <= 1; i++) {

        gameBoxA = document.createElement('div');
        versus = document.createElement('p');
        gameBoxB = document.createElement('div');
        teamBoxA = document.createElement('div');
        teamBoxB = document.createElement('div'); 
        teamBoxA.classList.add('team-box');
        teamBoxB.classList.add('team-box');
        versus.classList.add('versus')
        roundSix.appendChild(gameBoxA);
        roundSix.appendChild(versus);
        roundSix.appendChild(gameBoxB);
        gameBoxA.appendChild(teamBoxA);
        gameBoxB.appendChild(teamBoxB);
        versus.textContent = 'v';
    
    }

    gameBoxA = document.createElement('div');
    versus = document.createElement('p');
    gameBoxB = document.createElement('div');
    teamBoxA = document.createElement('div');
    teamBoxB = document.createElement('div'); 
    teamBoxA.classList.add('team-box');
    teamBoxB.classList.add('team-box');
    versus.classList.add('versus');
    roundSeven.appendChild(gameBoxA);
    roundSeven.appendChild(versus);
    roundSeven.appendChild(gameBoxB);
    gameBoxA.appendChild(teamBoxA);
    gameBoxB.appendChild(teamBoxB);
    versus.textContent = 'v';

                                                        //disable button after execution
    
}

function populate64Teams() {
    shuffle(teams);
    fill64Boxes();
                            //disable buttom after execution
}

function populate32Teams() {
    shuffle(teams);
    fill32Boxes();
}

function populate16Teams() {
    shuffle(teams);
    fill16Boxes();
}

function fill64Boxes() {
    for(let i = 0; i <= 31; i++) {
        teamTextA = document.getElementById(`box32${i}a`);
        teamTextA.textContent = teams[i];
        teamTextB = document.getElementById(`box32${i}b`)
        teamTextB.textContent = teams[i + 32];
  }
}

function fill32Boxes() {
    for(let i = 0; i <= 15; i++) {
        teamTextA = document.getElementById(`box16${i}a`);
        teamTextA.textContent = teams[i];
        teamTextB = document.getElementById(`box16${i}b`)
        teamTextB.textContent = teams[i + 16];
  }
}

function fill16Boxes() {
    for(let i = 0; i <= 7; i++) {
        teamTextA = document.getElementById(`box8${i}a`);
        teamTextA.textContent = teams[i];
        teamTextB = document.getElementById(`box8${i}b`)
        teamTextB.textContent = teams[i + 8];
  }
}




function clearAll() {}

    
    