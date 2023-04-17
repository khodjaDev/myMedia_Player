//  CREATION DU DOM créer la div container CREATION MISE EN PAGE

const mediaPlayerContainer = document.createElement("div");

mediaPlayerContainer.id = 'mediaPlayer';




//------------------------------------------------création des div-----------------------------------------------------




// créer le lecteur video

const video = document.createElement('video');

video.id = 'video';

video.src='/Pixel_video.mp4';




// créer la div contenant les boutons

const divBtn = document.createElement('div');

divBtn.id = 'divBtn';




//----------------------------------------------création des bouttons---------------------------------------------------




// créer le bouton play

const btnPlay = document.createElement('button');

btnPlay.textContent = 'Play';




// créer le bouton btnBackward

const btnBackward = document.createElement('button');

btnBackward.className = 'btnBackward';

btnBackward.textContent = '<<<';




// créer barre de progression

const progressBar = document.createElement('input');

progressBar.type = 'range';

progressBar.min = '0';

progressBar.max = '100';

progressBar.value = '0';




// créer le bouton btnForward

const btnForward = document.createElement('button');

btnForward.className ='btnForward';

btnForward.textContent = '>>>';




//créer btn volume

const volume = document.createElement('input');

volume.id = 'volume';

volume.type = 'range';// (0.1, 0.22, 0.37, ... jusqu'à 1)

volume.min = '0';// la valeur = value '0' ou mute : pas de son

volume.max = '1';

volume.value = '1';// valeur par défault au début à 0% de la progression et 1 à la fin de la barre

volume.step = '0.1';//définir la valeur voulue step by step




//btn plein écran

const btnFullScreen = document.createElement('button');

btnFullScreen.className = 'fullScreen';

btnFullScreen.textContent = '#';




//--------------------------------------------------------apparenté les enfants--------------------------------------




// mettre les boutons dans la divBtn - avec juste l'attribut contracté APPEND on peut ainsi insérer entre les parenthése plusieures variables ou constantes

divBtn.append(btnPlay,btnBackward,progressBar,btnForward,volume,btnFullScreen);//l'emplacement de chaque élèment est determiné par sa place dans la chaîne




// placer le lecteur et la divBtn dans le container

mediaPlayerContainer.append(video,divBtn);




// faire apparaitre la div container dans le body - fait réference à l'index via document.body

document.body.appendChild(mediaPlayerContainer);






//---------------------------------------FONCTIONS-------------------------------

// 3 méthodes génerale pour écrire la fonction

// btnPlay.addEventListener('click', function(ANONYME) { // fonction = addEventListener

// console.log(coucou);

// })//--------------------------- on remplace function par =>

// btnPlay.addEventListener('click', () => {

//     console.log(coucou);




// })

// btnPlay.addEventListener('click', helloWorld)




// function helloWorld () {

//     console.log(coucou);

// }

// regex =/^[A-Za-z][0-9]{2}$/





btnPlay.addEventListener('click', () => { // ajouter un évenement au click

if (video.paused) { // si l'état de la vidéo est en pause

btnPlay.textContent = 'Play';// on a fait appel à la constante btnPlay auquel on à attribué la propriété textContent afin de modifier le contenu du bouton

video.play();// alors le passé en play



} else {

video.pause(); // sinon en pause

btnPlay.textContent = 'Pause';




}

// video = video.paused ? video.play() : video.pause(); // écriture : ternaire = L'opérateur (ternaire) conditionnel est le seul opérateur JavaScript qui comporte trois opérandes. Cet opérateur est fréquemment utilisé comme raccourci pour la déclaration de Instructions/if...else.




});




progressBar.addEventListener('input', () => {

video.currentTime = video.duration * (progressBar.value/100); // La propriété HTMLMediaElementde l'interface currentTime spécifie le temps de lecture actuel en secondes. Changer la valeur de currentTimecherche le média à la nouvelle heure.




});




video.addEventListener('timeupdate', () => {

const timer = (video.currentTime/video.duration)*100;// La propriété en lecture seule indique la longueur du média de l'élément en secondes. HTMLMediaElementduration Valeur. Valeur à virgule flottante double précision indiquant la durée du média en secondes. Si aucune donnée multimédia n'est disponible, la valeur NaNest renvoyée. Si le média de l'élément n'a pas de durée connue, comme pour les flux multimédia en direct, la valeur de durationest +Infinity.




progressBar.value = timer;

console.log(timer);

});




const volumeRange = document.querySelector('#volume');// faire l'appel à l'aide du # dans le contexte du CSS - volumeRange : correspond aux valeurs de la barre de progression




volume.addEventListener('input', () => {

video.volume = volume.value; //




});




btnFullScreen.addEventListener('click', () => {




if (video.fullScreenElement) {

video.exitfullScreen();// La méthode Document.exitFullscreen() extrait le document du mode plein écran ; elle est utilisée pour inverser les effets d'un appel au mode plein écran réalisé avec la méthode Element.requestFullscreen().

} else {

video.requestFullscreen();




}

});





btnBackward.addEventListener('click', function() {

video.currentTime -= 10;

});





btnForward.addEventListener('click', function() {

video.currentTime += 10;

});