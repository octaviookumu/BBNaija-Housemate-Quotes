const quotes = [
	{
		name: 'Mike',
		quote: 'A wise man once said...nothing at all.'
	},
	{
		name: 'Tacha',
		quote: 'No leave, no transfer.'
	},
	{
		name: 'Ike',
		quote: "I go pepper dem till they can't take it no more."
	},
	{
		name: 'Seyi',
		quote: 'They call me sucre papito.'
	},
	{
		name: 'Khafi',
		quote: 'All I do is win, win, win no matter what.'
	},
	{
		name: 'Mercy',
		quote: "I don't dance now I make money moves."
	},
	{
		name: 'Omashola',
		quote: 'Warii!! Street!!'
	}
];

const quoteBtn = document.querySelector('#quoteBtn');
const quoteHousemate = document.querySelector('#quoteHousemate');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote() {
	let number = Math.floor(Math.random() * quotes.length);
	//console.log(number);
	quoteHousemate.innerHTML = quotes[number].name;
	quote.innerHTML = quotes[number].quote;
}
