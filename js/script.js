const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// Trasformo in maiuscolo i nomi delle icone e li pusho dentro un nuovo array
const nameUppercase = icons.map((element) => {
  const nameUpper = element.name.toUpperCase()
  console.log(nameUpper);
  return nameUpper
})
console.log(nameUppercase);


// Creo una costante entro cui immettere la nuova stringa delle icone
let html = '';

// Aggancio l'elemento entro cui stampare il testo HTML da Javascript
const container = document.querySelector('.box-container');

stampaBoxIcons (icons);

function stampaBoxIcons (icons){
  for(let icon of icons){
    let sigla = icon.prefix + icon.name;
    html += 
      `
      <div class="box d-flex justify-content-center align-items-center flex-column">
        <i class="${icon.family} ${sigla} ${icon.type} ${icon.color}"></i>
        <div class="name">${icon.name.toUpperCase()}</div>
      </div>
      `
      console.log(html);
      container.innerHTML = html;
  }
}

// Faccio in modo che si vedano solo gli elementi dello stesso tipo quando vengono selezionati dal tag select

let animalSelect = document.getElementById('animal').value;
console.log(animalSelect);
let vegetableSelect = document.getElementById('vegetable').value;
console.log(vegetableSelect);
let userSelect = document.getElementById('user').value;
console.log(userSelect);
let optionSelect = document.querySelector('.form-select').value;
console.log(optionSelect);
var selectDaVerificare = document.getElementById("selectDaVerificare");
 
var indiceSelezionato = selectDaVerificare.selectedIndex;
 
 
var valoreSelezionato = selectDaVerificare.options[indiceSelezionato];
 
var valoreDentroLopzione = valoreSelezionato.value;
 
var informaticooDentroLopzione = valoreSelezionato.text;



