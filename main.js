
var y = [
    { name: "tv", cate: 'tv', price: 3000, desc: "lorem" },
    { name: "samsung", cate: 'tv', price: 3000, desc: "lorem" },
    { name: "tv", cate: 'tv', price: 3000, desc: "lorem" },
    { name: "tv", cate: 'tv', price: 3000, desc: "lorem" },
    { name: "tv", cate: 'tv', price: 3000, desc: "lorem" },
    { name: "tv", cate: 'tv', price: 3000, desc: "lorem" },
    { name: "tv", cate: 'tv', price: 3000, desc: "lorem" },
]
console.log(y[1].name);

var copaya = ``

for (var i = 0; i < y.length; i++) {
    copaya += `
    <tr>
    <td>${i}</td>
    <td>${y[i].name}</td>
    <td>${y[i].cate}</td>
    <td>${y[i].price}</td>
    <td>${y[i].desc}</td>
    <td><button class="btn btn-warning">Delete</button></td>
    <td><button class="btn btn-danger">Update</button></td>

</tr>
    `
}
document.getElementById('demo').innerHTML = copaya
   