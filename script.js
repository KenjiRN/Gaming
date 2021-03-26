var listaFilmes = ["https://cdn.akamai.steamstatic.com/steam/apps/550/header.jpg?t=1601578341", "https://cdn.akamai.steamstatic.com/steam/apps/814380/header.jpg?t=1603904569", "https://cdn.akamai.steamstatic.com/steam/apps/883710/header.jpg?t=1608602727", "https://cdn.akamai.steamstatic.com/steam/apps/241930/header_brazilian.jpg?t=1609425636", "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt499d33ffa4aa68b1/6011f2b613fecf6168631b6b/logo_na.png?auto=webp", "https://static.heroesofthestorm.com/images/legacy/logo-heroes-large-e140cd832b.png","https://playragnarokonlinebr.com/img/logo.png", "https://cdn.akamai.steamstatic.com/steam/apps/311210/header.jpg?t=1595366455" ]



var nomeDosFilmes = ["Left 4 Dead", "Sekiro - shadows die twice", "Resident Evil 2", "Shadows of Mordor", "World of Warcraft", "Heroes of the Storm", "Ragnarok", "Call of Duty"]

var linkDosTrailers = ["https://cdn.akamai.steamstatic.com/steam/apps/5952/movie480.webm?t=1447353587", "https://cdn.akamai.steamstatic.com/steam/apps/256806899/movie480_vp9.webm?t=1603837979", "https://cdn.akamai.steamstatic.com/steam/apps/256741841/movie480.webm?t=1548920979", "https://youtu.be/fpRXiyIvvX4", "https://youtu.be/gVxM6XU85-I", "https://www.youtube.com/watch?v=C4bnFYsXW6s&ab_channel=HeroesoftheStorm-Brasil", "https://www.youtube.com/watch?v=gwpIWwsiq-g&ab_channel=N%C3%A3ovainaMel", "https://cdn.akamai.steamstatic.com/steam/apps/256785837/movie480_vp9.webm?t=1589836574", "https://cdn.akamai.steamstatic.com/steam/apps/256785837/movie480_vp9.webm?t=1589836574"]


for(var i = 0; i < linkDosTrailers.length; i++){
  document.write("<div id='container2'>" + "<div id='container3'>" +"<a href=" + linkDosTrailers[i] + ' target="_blank"><img src=' + listaFilmes[i] + ' alt="" class="imgDoFilme"></a> '+ "<p>" + nomeDosFilmes[i] + "</p>"+ "</div>" +"</div");
}
