const aRecibos = [
    {id: 1, numero: '00000002', importe : 1000, cliente:'R00001'},
    {id: 2, numero: '00000003', importe : 3000, cliente:'C00002'},
    {id: 3, numero: '00000004', importe : 2000, cliente:'R00002'},
    {id: 4, numero: '00000005', importe : 8000, cliente:'C00001'},
    ];

function message(msg) {
    console.log(msg);
}
setTimeout(message, 7000, 'holaaaa');

aRecibos.forEach(element => {
    console.log("cliente: " + element.cliente + " importe: " + element.importe);
});

aRecibos.sort((a,b) => a.importe - b.importe);
console.log(aRecibos);

let newArray = aRecibos.filter(aRecibos => aRecibos.cliente.startsWith("R"));
console.log(newArray);

let newRecibosIncremented = aRecibos;
newRecibosIncremented.forEach(element => {
    element.importe = element.importe * 1.3;
})
console.log(newRecibosIncremented);