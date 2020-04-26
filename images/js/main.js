var d = new Date();
var string = document.lastModified;
document.getElementById("lastUpdated").textContent = `Last Updated: ${string}`
document.getElementById("year").textContent = d.getFullYear();
console.log("teste")