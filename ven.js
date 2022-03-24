document.getElementById('vendor').addEventListener('click',onvendor)

function onvendor (e) {
    const bbr = new XMLHttpRequest()
    bbr.open('GET','vendor.json',true)
    bbr.onload = function () {
        if(this.status==200){
console.log(this.responseText);
        }
        
    }
    bbr.send()
}