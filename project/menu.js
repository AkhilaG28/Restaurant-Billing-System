var starter_btn = document.getElementById('starters')
var main_btn = document.getElementById('main')
var desserts_btn = document.getElementById('desserts')
var every_order
var bill = []


var starters = ['Chicken Starter','Chicken Skewers','Veg Kebab','Paneer Starter','Chicken Majestic','Chicken Lollipop']
var starter_price = [145,185,155,190,205,180]
var starters_pics = ['resources/cs1.jpg','resources/cs2.jpg','resources/vg1.jpg','resources/vg3.jpg','resources/cm.jpg','resources/cl.jpg']

var main = ['Veg Biryani','Veg Fried Rice','Shezwan Fried Rice','Chicken Biryani','Mutton Biryani','Prawn Biryani','Chicken Pot Biryani','Mutton Pot Biryani','Prawn Pot Biryani']
var main_pics = ['resources/mc1.jpg','resources/mc2.jpg','resources/mc3.jpg','resources/mc4.jpg','resources/mc5.jpg','resources/mc6.jpg','resources/mc7.jpg','resources/mc8.jpg','resources/mc11.jpg']
var main_price = [195,190,215,225,335,335,365,415,415]

var desserts = ['Gulab Jamun','Ice Cream','Kulfi']
var desserts_pics = ['resources/gulab.jpg','resources/aaa.jpg','resources/kulfi.jpg']
var desserts_price = [89,99,79]


function display(type,menu,menu_pics,menu_price) {
	
	for (var i = 0; i < menu.length; i++) {
		var div = document.createElement('div')
		div.setAttribute('class', 'float')
		div.setAttribute('id',menu[i])
		var image = document.createElement('img')
		image.setAttribute('src', menu_pics[i])
		var name = document.createElement('div')
		name.textContent = menu[i]
		var price = document.createElement('div')
		price.textContent = 'Rs' + menu_price[i] + '/-'
		
		var quantity = document.createElement('input')
		quantity.setAttribute('id', 'quantity' + menu[i] + i)
		quantity.setAttribute('placeholder', 'add')
		quantity.setAttribute('type', 'number')
		quantity.style.height = '25px'
		quantity.style.width = '50px'
		quantity.style.borderRadius = '8px'
		
		var add = document.createElement('button')
		add.setAttribute('id', "add" + menu[i] + i)
		add.textContent = 'Add'
		add.style.marginLeft = '15%'
		add.style.height = '40px'
		add.style.width = '40px'
		add.style.fontSize = '12px'
		add.style.borderRadius = '20px'

	  	add.addEventListener('click', function(){
     	var add_button = event.target
     	console.log(add_button)
      	var add_id = add_button.getAttribute('id')
      	var number = add_id.split("")
      	number = number[number.length - 1]
      	//console.log(number)
      	var input = document.getElementById('quantity' + menu[number] + number).value
      	//console.log(input)
      	every_order = [menu[number],input,menu_price[number],input*menu_price[number]]
        bill.push(every_order)
      	
      	console.log(bill)
      	localStorage.setItem('bill_data',JSON.stringify(bill))  
    })
	  	
		div.append(image,name,price,quantity,add)
		type.append(div)
	}
}

function starters_menu() {
	var display_starters = document.getElementById('display_starters')
	display(display_starters,starters,starters_pics,starter_price)
	starter_btn.removeEventListener('click', starters_menu)
}

function main_menu() {
	var display_main = document.getElementById('display_main')
	display(display_main,main,main_pics,main_price)
	main_btn.removeEventListener('click', main_menu)
}

function desserts_menu() {
	var display_desserts = document.getElementById('display_desserts')
	display(display_desserts,desserts,desserts_pics,desserts_price)
	desserts_btn.removeEventListener('click', desserts_menu)
}


starter_btn.addEventListener('click', starters_menu)
main_btn.addEventListener('click', main_menu)
desserts_btn.addEventListener('click', desserts_menu)


var generate = document.getElementById('bill')


generate.addEventListener('click', function() {
	location.href = 'bill.html'
})