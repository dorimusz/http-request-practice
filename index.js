const axios = require('axios');

/*
// Make a request for a user with a given ID
axios.get('http://nemzetisport.hu')
    .then(function (response) {
        // handle success
        console.log("response");
        console.log(response.status);
        // console.log(response.data);
        // console.log(response.headers);
    })
    .catch(function (error) {
        // handle error
        console.log("error");
    })
    .then(function () {
        // always executed
        console.log("lefutott");
    });
*/





/*
//a getData async function, minden esetben egy ígérettel tér vissza, promiset ad vissza
const getData = async () => {
    // const response = await axios.get('http://nemzetisport.hu');
    const response = 5 + 5;
    return response;
}
console.log(getData());
*/




/*
//Feliratkozunk az ígéretre(statusra), majd meghívjuk a workWithResponset, hogy feldolgozzuk
const workWithResponse = (status) => {
    console.log(status);
    //setState, innerHTML, console.log jöhet ide. vagyis, hogy mit akarunk ezzel az adattal csinálni,
}

const promiseOfResponse = axios.get('http://nemzetisport.hu'); //ez egy ígéretet ad vissza, hogy majd egyszer lesz egy eredmény, amire fel tudunk iratkozni
promiseOfResponse.then((response) => {
    workWithResponse(response.status);
});
*/





//ugyanez async-await-tel:
const run = async () => {
    const response = await axios.get('http://nemzetisport.hu');
    const resStatus = response.status;
    console.log(resStatus); //harmadszor
    return 5; //ha nincs benne ez a return, undefined jön vissza
}
//lefut az 1 és a 2, majd csak utána a run()
console.log("1"); //először
const promiseOfResult = run();
promiseOfResult.then(
    (promiseResult) => {
        console.log(promiseResult); //negyedszerre, ami a return eredménye, vagyis az 5
    })
console.log("2"); //másodszor
