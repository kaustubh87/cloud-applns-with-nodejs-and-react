const axios = require('axios').default;

async function connectToURL(url){
    const resp = await axios.get(url);
    let listOfWork = resp.data.work;
    let workIds = listOfWork.map((work) => {
        return work.workid;
    });

    workIds.forEach(async (workid) => {
        const req = await axios.get("https://reststop.randomhouse.com/resources/works/" +workid);
        console.log(req.data.titleAuth);
    });
}

console.log("Before connect URL");

connectToURL('https://reststop.randomhouse.com/resources/works/?expandLevel=1&search=Grisham').catch(err => {
    console.log(err.toString());
});
