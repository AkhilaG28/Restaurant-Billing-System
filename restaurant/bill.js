var body = document.querySelector('body')
var bill = localStorage.getItem('bill_data')
bill = JSON.parse(bill)
var billed = document.getElementById('billed')
var select = document.querySelector('select')
var form_data = document.querySelector('form')
var details = document.getElementById('details')
form_data = document.forms['form']
var size = form_data.elements.length
var obj = {}
var tax

var good = document.getElementById('good')

function generate_bill() {
	event.preventDefault()
	form.remove()
	good.remove()
	body.style.background = '#EDE7F6'
	body.style.color = '#3F51B5'
	for (var i = 0; i < size-1; i++) {
		obj[i] = form_data.elements[i].value
	}
	console.log(select.value)
	//console.log(obj[0])

	var divhead = document.createElement("div")
    divhead.innerHTML = "@Akhila's"
    divhead.setAttribute("id", "total")   

    details.append(divhead)

    var name = document.createElement("div")
    name.setAttribute('class', 'float')
    name.innerHTML = "Name : " + obj[0]

    var num = document.createElement("div")
    num.setAttribute('class', 'float')
    num.innerHTML = "Mobile Number : " + obj[1]

    var day = document.createElement("div")
    day.setAttribute('class', 'float')
    day.innerHTML = select.value
    
    details.append(name,num,day)

    var hr = document.createElement('hr')
    hr.setAttribute('class', 'newline')
    hr.style.color = 'white'

    var dish = document.createElement('div')
    dish.setAttribute('class', 'float newline bg wide')
    dish.textContent = 'Item'

    var quantity = document.createElement('div')
    quantity.setAttribute('class', 'float bg')
    quantity.textContent = 'Price'

    var price = document.createElement('div')
    price.setAttribute('class', 'float bg')
    price.textContent = 'Qnty'

    var total = document.createElement('div')
    total.setAttribute('class', 'float bg')
    total.textContent = 'Total'

    billed.append(dish,quantity,price,total,hr)
    var total_amt = 0

    for (var i = 0; i < bill.length; i++) {
    	var div_dish = document.createElement('div')
		div_dish.setAttribute('class', 'float newline wide')
		div_dish.textContent = bill[i][0]

		var div_quantity = document.createElement('div')
		div_quantity.setAttribute('class', 'float')
		div_quantity.textContent = bill[i][1]

		var div_price = document.createElement('div')
		div_price.setAttribute('class', 'float')
		div_price.textContent = bill[i][2]

		var div_total = document.createElement('div')
		div_total.setAttribute('class', 'float')
		div_total.textContent = bill[i][3]

		total_amt += Number(bill[i][3])

		billed.append(div_dish,div_price,div_quantity,div_total)
    }
    console.log(total_amt)
    
    var amount = document.createElement('div')
    amount.setAttribute('class', 'newline float wide')
    amount.textContent = 'Sub Total'

    var amt = document.createElement('div')
    amt.setAttribute('class', 'right_float')
    amt.textContent = total_amt

    tax = total_amt*(5/100)
    tax = tax.toFixed(2)
    tax = Number(tax)
    //console.log(tax)
    var div_tax = document.createElement('div')
    div_tax.setAttribute('class','float newline wide')
    div_tax.textContent = 'Tax'

    var tax_amt = document.createElement('div')
    tax_amt.setAttribute('class', 'right_float')
    tax_amt.textContent = tax

    total_amt += tax
    var total_div = document.createElement('div')
    total_div.setAttribute('class','float newline wide')
    total_div.textContent = 'Total'

    var total_div_amt = document.createElement('div')
    total_div_amt.setAttribute('class', 'right_float')
    total_div_amt.textContent = total_amt
    //console.log(total_amt)

    
    if (select.value == 'Friday' && total_amt > 1500) {
    	var disc = total_amt*0.1
    	disc = disc.toFixed(2)
        disc = Number(disc)
    	total_amt = total_amt - disc 
        total_amt = total_amt.toFixed(2)
    	console.log(total_amt)
    	var disc_div = document.createElement('div')
    	disc_div.setAttribute('class','float newline wide')
    	disc_div.textContent = 'Disc'

    	var div_disc = document.createElement('div')
    	div_disc.setAttribute('class','right_float')
    	div_disc.textContent = disc

   		var total_div_amt = document.createElement('div')
    	total_div_amt.setAttribute('class', 'right_float')
    	total_div_amt.textContent = total_amt
    	//console.log(total_amt)


       	billed.append(hr,amount,amt,div_tax,tax_amt,disc_div,div_disc,total_div,total_div_amt)
    }
    else {
    	billed.append(hr,amount,amt,div_tax,tax_amt,total_div,total_div_amt)
    }

    var thanku = document.createElement('div')
    thanku.setAttribute('class','newline thanku')

    setInterval(function() {
	thanku.style.opacity = (thanku.style.opacity == 0 ? 1 : 0);
	}, 500);
	thanku.textContent = "Thank You"

    var button = document.createElement('button')
    button.setAttribute('class','newline vist')
    button.style.textAlign = 'center'
    button.style.marginLeft = '45%'
    button.textContent = 'Visit Again'
    button.addEventListener('click', function() {
    	location.href = 'index.html'
    })

    billed.append(thanku,button)
}

good.addEventListener('click', generate_bill)