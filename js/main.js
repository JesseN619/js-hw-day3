/*

const getData = async () => {
    let season = document.querySelector('#season').value
    let round = document.querySelector('#round').value
    let response = await axios.get(`http://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    return response.data
}

const submit = () => {
    document.getElementById("table-container").innerHTML = '';
    loadData();
}

const createTable = () => {
    const container = document.getElementById("table-container");
    const table = document.createElement("table");
    table.className = "table";
    const header = `<thead>
                        <tr>
                            <th scope="col">Position</th>
                            <th scope="col">Name</th>
                            <th scope="col">Nationality</th>
                            <th scope="col">Sponsor</th>
                            <th scope="col">Points</th>
                        </tr>
                    </thead>`;
    table.insertAdjacentHTML('afterbegin', header);
    const tBody = document.createElement("tbody");
    table.append(tBody);
    for (let i = 1; i < 8; i++) {
        const row = `<tr id="${i}"><th scope="row">${i}</th></tr>`;
        tBody.insertAdjacentHTML('beforeend', row);
    }
    container.append(table);
}

const loadData = async () => {
    const driverInfo = await getData();
    createTable()
    for(let i = 0; i < 7; i++) {
        let firstName = driverInfo.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName;
        let lastName = driverInfo.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName;
        let name = firstName + " " + lastName;
        let nationality = driverInfo.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality;
        let sponsor = driverInfo.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name;
        let points = driverInfo.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points;

        let categories = [name, nationality, sponsor, points]
        let row = document.getElementById(`${i+1}`);
        for (let j = 0; j < categories.length; j++) {
            let cell = document.createElement("td");
            cell.innerHTML = categories[j];
            row.append(cell);
        }
    }
}

const btn = document.getElementById("submit-btn");
btn.addEventListener('click', submit);

*/

// ======================================


const submit2 = () => {
    document.getElementById("table-container").innerHTML = '';
    loadData2();
}

let siteData = {"MRData":{"xmlns":"http:\/\/ergast.com\/mrd\/1.4","series":"f1","url":"http://ergast.com/api/f1/2020/1/driverstandings.json","limit":"30","offset":"0","total":"20","StandingsTable":{"season":"2020","round":"1","StandingsLists":[{"season":"2020","round":"1","DriverStandings":[{"position":"1","positionText":"1","points":"25","wins":"1","Driver":{"driverId":"bottas","permanentNumber":"77","code":"BOT","url":"http:\/\/en.wikipedia.org\/wiki\/Valtteri_Bottas","givenName":"Valtteri","familyName":"Bottas","dateOfBirth":"1989-08-28","nationality":"Finnish"},              "Constructors":[{"constructorId":"mercedes","url":"http:\/\/en.wikipedia.org\/wiki\/Mercedes-Benz_in_Formula_One","name":"Mercedes","nationality":"German"}]},{"position":"2","positionText":"2","points":"18","wins":"0","Driver":{"driverId":"leclerc","permanentNumber":"16","code":"LEC","url":"http:\/\/en.wikipedia.org\/wiki\/Charles_Leclerc","givenName":"Charles","familyName":"Leclerc","dateOfBirth":"1997-10-16","nationality":"Monegasque"},              "Constructors":[{"constructorId":"ferrari","url":"http:\/\/en.wikipedia.org\/wiki\/Scuderia_Ferrari","name":"Ferrari","nationality":"Italian"}]},{"position":"3","positionText":"3","points":"16","wins":"0","Driver":{"driverId":"norris","permanentNumber":"4","code":"NOR","url":"http:\/\/en.wikipedia.org\/wiki\/Lando_Norris","givenName":"Lando","familyName":"Norris","dateOfBirth":"1999-11-13","nationality":"British"},              "Constructors":[{"constructorId":"mclaren","url":"http:\/\/en.wikipedia.org\/wiki\/McLaren","name":"McLaren","nationality":"British"}]},{"position":"4","positionText":"4","points":"12","wins":"0","Driver":{"driverId":"hamilton","permanentNumber":"44","code":"HAM","url":"http:\/\/en.wikipedia.org\/wiki\/Lewis_Hamilton","givenName":"Lewis","familyName":"Hamilton","dateOfBirth":"1985-01-07","nationality":"British"},              "Constructors":[{"constructorId":"mercedes","url":"http:\/\/en.wikipedia.org\/wiki\/Mercedes-Benz_in_Formula_One","name":"Mercedes","nationality":"German"}]},{"position":"5","positionText":"5","points":"10","wins":"0","Driver":{"driverId":"sainz","permanentNumber":"55","code":"SAI","url":"http:\/\/en.wikipedia.org\/wiki\/Carlos_Sainz_Jr.","givenName":"Carlos","familyName":"Sainz","dateOfBirth":"1994-09-01","nationality":"Spanish"},              "Constructors":[{"constructorId":"mclaren","url":"http:\/\/en.wikipedia.org\/wiki\/McLaren","name":"McLaren","nationality":"British"}]},{"position":"6","positionText":"6","points":"8","wins":"0","Driver":{"driverId":"perez","permanentNumber":"11","code":"PER","url":"http:\/\/en.wikipedia.org\/wiki\/Sergio_P%C3%A9rez","givenName":"Sergio","familyName":"Pérez","dateOfBirth":"1990-01-26","nationality":"Mexican"},              "Constructors":[{"constructorId":"racing_point","url":"http:\/\/en.wikipedia.org\/wiki\/Racing_Point_F1_Team","name":"Racing Point","nationality":"British"}]},{"position":"7","positionText":"7","points":"6","wins":"0","Driver":{"driverId":"gasly","permanentNumber":"10","code":"GAS","url":"http:\/\/en.wikipedia.org\/wiki\/Pierre_Gasly","givenName":"Pierre","familyName":"Gasly","dateOfBirth":"1996-02-07","nationality":"French"},              "Constructors":[{"constructorId":"alphatauri","url":"http:\/\/en.wikipedia.org\/wiki\/Scuderia_AlphaTauri","name":"AlphaTauri","nationality":"Italian"}]},{"position":"8","positionText":"8","points":"4","wins":"0","Driver":{"driverId":"ocon","permanentNumber":"31","code":"OCO","url":"http:\/\/en.wikipedia.org\/wiki\/Esteban_Ocon","givenName":"Esteban","familyName":"Ocon","dateOfBirth":"1996-09-17","nationality":"French"},              "Constructors":[{"constructorId":"renault","url":"http:\/\/en.wikipedia.org\/wiki\/Renault_in_Formula_One","name":"Renault","nationality":"French"}]},{"position":"9","positionText":"9","points":"2","wins":"0","Driver":{"driverId":"giovinazzi","permanentNumber":"99","code":"GIO","url":"http:\/\/en.wikipedia.org\/wiki\/Antonio_Giovinazzi","givenName":"Antonio","familyName":"Giovinazzi","dateOfBirth":"1993-12-14","nationality":"Italian"},              "Constructors":[{"constructorId":"alfa","url":"http:\/\/en.wikipedia.org\/wiki\/Alfa_Romeo_in_Formula_One","name":"Alfa Romeo","nationality":"Swiss"}]},{"position":"10","positionText":"10","points":"1","wins":"0","Driver":{"driverId":"vettel","permanentNumber":"5","code":"VET","url":"http:\/\/en.wikipedia.org\/wiki\/Sebastian_Vettel","givenName":"Sebastian","familyName":"Vettel","dateOfBirth":"1987-07-03","nationality":"German"},              "Constructors":[{"constructorId":"ferrari","url":"http:\/\/en.wikipedia.org\/wiki\/Scuderia_Ferrari","name":"Ferrari","nationality":"Italian"}]},{"position":"11","positionText":"11","points":"0","wins":"0","Driver":{"driverId":"latifi","permanentNumber":"6","code":"LAT","url":"http:\/\/en.wikipedia.org\/wiki\/Nicholas_Latifi","givenName":"Nicholas","familyName":"Latifi","dateOfBirth":"1995-06-29","nationality":"Canadian"},              "Constructors":[{"constructorId":"williams","url":"http:\/\/en.wikipedia.org\/wiki\/Williams_Grand_Prix_Engineering","name":"Williams","nationality":"British"}]},{"position":"12","positionText":"12","points":"0","wins":"0","Driver":{"driverId":"kvyat","permanentNumber":"26","code":"KVY","url":"http:\/\/en.wikipedia.org\/wiki\/Daniil_Kvyat","givenName":"Daniil","familyName":"Kvyat","dateOfBirth":"1994-04-26","nationality":"Russian"},              "Constructors":[{"constructorId":"alphatauri","url":"http:\/\/en.wikipedia.org\/wiki\/Scuderia_AlphaTauri","name":"AlphaTauri","nationality":"Italian"}]},{"position":"13","positionText":"13","points":"0","wins":"0","Driver":{"driverId":"albon","permanentNumber":"23","code":"ALB","url":"http:\/\/en.wikipedia.org\/wiki\/Alexander_Albon","givenName":"Alexander","familyName":"Albon","dateOfBirth":"1996-03-23","nationality":"Thai"},              "Constructors":[{"constructorId":"red_bull","url":"http:\/\/en.wikipedia.org\/wiki\/Red_Bull_Racing","name":"Red Bull","nationality":"Austrian"}]},{"position":"14","positionText":"14","points":"0","wins":"0","Driver":{"driverId":"raikkonen","permanentNumber":"7","code":"RAI","url":"http:\/\/en.wikipedia.org\/wiki\/Kimi_R%C3%A4ikk%C3%B6nen","givenName":"Kimi","familyName":"Räikkönen","dateOfBirth":"1979-10-17","nationality":"Finnish"},              "Constructors":[{"constructorId":"alfa","url":"http:\/\/en.wikipedia.org\/wiki\/Alfa_Romeo_in_Formula_One","name":"Alfa Romeo","nationality":"Swiss"}]},{"position":"15","positionText":"15","points":"0","wins":"0","Driver":{"driverId":"russell","permanentNumber":"63","code":"RUS","url":"http:\/\/en.wikipedia.org\/wiki\/George_Russell_%28racing_driver%29","givenName":"George","familyName":"Russell","dateOfBirth":"1998-02-15","nationality":"British"},              "Constructors":[{"constructorId":"williams","url":"http:\/\/en.wikipedia.org\/wiki\/Williams_Grand_Prix_Engineering","name":"Williams","nationality":"British"}]},{"position":"16","positionText":"16","points":"0","wins":"0","Driver":{"driverId":"grosjean","permanentNumber":"8","code":"GRO","url":"http:\/\/en.wikipedia.org\/wiki\/Romain_Grosjean","givenName":"Romain","familyName":"Grosjean","dateOfBirth":"1986-04-17","nationality":"French"},              "Constructors":[{"constructorId":"haas","url":"http:\/\/en.wikipedia.org\/wiki\/Haas_F1_Team","name":"Haas F1 Team","nationality":"American"}]},{"position":"17","positionText":"17","points":"0","wins":"0","Driver":{"driverId":"kevin_magnussen","permanentNumber":"20","code":"MAG","url":"http:\/\/en.wikipedia.org\/wiki\/Kevin_Magnussen","givenName":"Kevin","familyName":"Magnussen","dateOfBirth":"1992-10-05","nationality":"Danish"},              "Constructors":[{"constructorId":"haas","url":"http:\/\/en.wikipedia.org\/wiki\/Haas_F1_Team","name":"Haas F1 Team","nationality":"American"}]},{"position":"18","positionText":"18","points":"0","wins":"0","Driver":{"driverId":"stroll","permanentNumber":"18","code":"STR","url":"http:\/\/en.wikipedia.org\/wiki\/Lance_Stroll","givenName":"Lance","familyName":"Stroll","dateOfBirth":"1998-10-29","nationality":"Canadian"},              "Constructors":[{"constructorId":"racing_point","url":"http:\/\/en.wikipedia.org\/wiki\/Racing_Point_F1_Team","name":"Racing Point","nationality":"British"}]},{"position":"19","positionText":"19","points":"0","wins":"0","Driver":{"driverId":"ricciardo","permanentNumber":"3","code":"RIC","url":"http:\/\/en.wikipedia.org\/wiki\/Daniel_Ricciardo","givenName":"Daniel","familyName":"Ricciardo","dateOfBirth":"1989-07-01","nationality":"Australian"},              "Constructors":[{"constructorId":"renault","url":"http:\/\/en.wikipedia.org\/wiki\/Renault_in_Formula_One","name":"Renault","nationality":"French"}]},{"position":"20","positionText":"20","points":"0","wins":"0","Driver":{"driverId":"max_verstappen","permanentNumber":"33","code":"VER","url":"http:\/\/en.wikipedia.org\/wiki\/Max_Verstappen","givenName":"Max","familyName":"Verstappen","dateOfBirth":"1997-09-30","nationality":"Dutch"},              "Constructors":[{"constructorId":"red_bull","url":"http:\/\/en.wikipedia.org\/wiki\/Red_Bull_Racing","name":"Red Bull","nationality":"Austrian"}]}]}]}}}

const getData2 = () => {
    let response = siteData;
    return response
}

const createTable2 = () => {
    const container = document.getElementById("table-container");
    const table = document.createElement("table");
    table.className = "table";
    const header = `<thead>
                        <tr>
                            <th scope="col">Position</th>
                            <th scope="col">Name</th>
                            <th scope="col">Nationality</th>
                            <th scope="col">Sponsor</th>
                            <th scope="col">Points</th>
                        </tr>
                    </thead>`;
    table.insertAdjacentHTML('afterbegin', header);
    const tBody = document.createElement("tbody");
    table.append(tBody);
    for (let i = 1; i < 8; i++) {
        const row = `<tr id="${i}"><th scope="row">${i}</th></tr>`;
        tBody.insertAdjacentHTML('beforeend', row);
    }
    container.append(table);
}

const loadData2 = () => {
    const driverInfo = getData2();
    createTable2()
    for(let i = 0; i < 7; i++) {
        let firstName = driverInfo.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName;
        let lastName = driverInfo.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName;
        let name = firstName + " " + lastName;
        let nationality = driverInfo.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality;
        let sponsor = driverInfo.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name;
        let points = driverInfo.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points;
        // let row = document.getElementById(`${i+1}`);
        // put categories in arr
        let categories = [name, nationality, sponsor, points]
        // define row
        let row = document.getElementById(`${i+1}`);
        // loop through categories * 4
        for (let j = 0; j < categories.length; j++) {
            let cell = document.createElement("td");
            cell.innerHTML = categories[j];
            row.append(cell);
        }
    }
}

const btn2 = document.getElementById("submit-btn");
btn2.addEventListener('click', submit2);