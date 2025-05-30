import { pokemons } from "./pokemon.js";

let rowData = document.querySelector('#row')
let serch = document.querySelector('#serch')
let btn = document.querySelector('#btn')
let data = []
let za = document.querySelector('#za')
let az = document.querySelector('#az')
let ALL = document.querySelector('#ALL')

function renderData(filterData = pokemons) {
    rowData.innerHTML = '';
    filterData.forEach((iteam) => {
        let cardPokemon = document.createElement('div')
        cardPokemon.classList.add('w-[250px]', 'bg-[#FFFF00]', 'rounded-[10px]', 'text-center')

        cardPokemon.innerHTML = `
                    <div class="w-[250px] bg-[#FFFF00] rounded-[10px] text-center">
                <div class="flex justify-end">
                    <div class="w-[36px] h-[34px] bg-[#FF0000] rounded-tr-[10px] text-[#FFFFFF] content-center text-center">${iteam.num}</div>
                </div>
                <h2 class="font-bold text-[20px]">${iteam.name}</h2>
                <img src="${iteam.img}"  class="mx-auto w-[100px] h-[107px] my-[28px] borderr border-red-500" alt="${iteam.name}">
                <div class="w-[129px] h-[40px] bg-[#C4E4FF] px-[5px] py-[10px] rounded-[20px] mx-auto">${iteam.type}</div>
                <div class="my-[16px]">
                    <p class="text-center text-[16px] ">Candy count: ${iteam.candy_count === undefined ? 0 : iteam.candy_count}</p>
                    <p class="text-center text-[16px]">${iteam.weight} kg</p>
                    <p class="text-center text-[14px] text-[#80007C]">${iteam.weaknesses}</p>
                </div>
            </div>
        `
        rowData.append(cardPokemon)
    });
}
renderData();

btn.addEventListener('click', () => {
    let filterData = pokemons.filter(item => 
        item.name.toLowerCase().includes(serch.value.toLowerCase())
    );
    renderData(filterData);
});


za.addEventListener('click', () => {
    pokemons.sort((a, b) => b.name.localeCompare(a.name));
    renderData(pokemons)
})

az.addEventListener('click', () => {
    pokemons.sort((a, b) => a.name.localeCompare(b.name));
    renderData(pokemons)
})

