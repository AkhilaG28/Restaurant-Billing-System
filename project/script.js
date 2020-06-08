var welcome = document.getElementById('welcome')
var btn = document.getElementById('order')

setInterval(function() {
	welcome.style.opacity = (welcome.style.opacity == 0 ? 1 : 0);
}, 500);
welcome.textContent = "Welcome to my Restaurant"

btn.addEventListener('click', function(){
	location.href = 'menu.html'
})