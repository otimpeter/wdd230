fetch('https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json')
.then(res => {
    return res.json()
}).then((data) => {
    let dataInfo = data.prophets
    
    console.log(dataInfo)

    let prophetData = '';

    dataInfo.map((value) => {

        prophetData += 
        `<div class="card">
        <h3>${value.name} ${value.lastname}</h3>
        <p>Date of Birth ${value.birthdate}</p>
        <p>Place of Birth ${value.birthplace}</p>
        <img src="${value.imageurl}">
        </div>
        `;
    })
    document.querySelector('.items').innerHTML = prophetData;

}).then(err => {
    // console.log(err)
});
 
    
    