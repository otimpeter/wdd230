
fetch('C:\Users\LENOVO\Desktop\week12\scripts\data.json')
.then(res => {
    return res.json()
}).then((data) => {
    let dataInfo = data.fruits
    
    console.log(dataInfo)

    let fruitsData = '';

    dataInfo.map((value) => {

        fruitsData += 
        `<div class="friuts">
        <h3>${value.name} ${value.lastname}</h3>
        <p>Date of Birth ${value.birthdate}</p>
        <p>Place of Birth ${value.birthplace}</p>
        <img src="${value.imageurl}">
        </div>
        `;
    })
    document.querySelector('.items').innerHTML = fruitsData;

}).then(err => {
    // console.log(err)
});
