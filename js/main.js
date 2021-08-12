// Need to turn on Allow CORS extension to run app

// TODO: require user input (right now, if input left blank, will get an error)

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