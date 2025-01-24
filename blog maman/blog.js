document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mexique').style.display = 'none';
    document.getElementById('retour').style.display = 'none';
    document.body.style.backgroundImage = 'url("image/fond.jfif")';
});

function mexique() {
    document.getElementById('accueil').style.display = 'none';
    document.getElementById('mexique').style.display = 'block';
    document.getElementById('retour').style.display = 'none';
    document.body.style.backgroundImage = 'url("image/yucatan.jfif")';
}

function retour() {
    document.getElementById('accueil').style.display = 'block';
    document.getElementById('mexique').style.display = 'none';
    document.body.style.backgroundImage = 'url("image/fond.jfif")';
}