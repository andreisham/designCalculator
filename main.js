let maket_mm_div = document.querySelector('.maket_mm')
let maket_pxl_div = document.querySelector('.maket_pxl')
let pravki_div = document.querySelector('.pravki')
let dop_maket_div = document.querySelector('.dop_maket')
let results = document.querySelectorAll('.results')
let main_result = document.querySelector('#main_result')

maket_mm_div.addEventListener('change', calcMaketMm)
maket_pxl_div.addEventListener('change', calcMaketPxl)
pravki_div.addEventListener('change', calcPravki)
dop_maket_div.addEventListener('change', calcDopMaket)


function calcMaketMm() {
    console.log('qwe')
    let width = parseFloat(maket_mm_div.getElementsByTagName('div')[0].firstElementChild.value)
    let height = parseFloat(maket_mm_div.getElementsByTagName('div')[1].firstElementChild.value)
    let mm_cost = parseFloat(maket_mm_div.getElementsByTagName('div')[2].firstElementChild.value)
    let design_cost = parseFloat(maket_mm_div.getElementsByTagName('div')[3].firstElementChild.value)

    maket_mm_div.getElementsByTagName('div')[4].firstElementChild.value = (width * height * mm_cost + design_cost).toFixed(2);
    calcAll()
}

function calcMaketPxl() {
    console.log('qwe')
    let width = parseFloat(maket_pxl_div.getElementsByTagName('div')[0].firstElementChild.value)
    let height = parseFloat(maket_pxl_div.getElementsByTagName('div')[1].firstElementChild.value)
    let pxl_cost = parseFloat(maket_pxl_div.getElementsByTagName('div')[2].firstElementChild.value)
    let design_cost = parseFloat(maket_pxl_div.getElementsByTagName('div')[3].firstElementChild.value)

    maket_pxl_div.getElementsByTagName('div')[4].firstElementChild.value = (width * height * pxl_cost + design_cost).toFixed(2);
    calcAll()
}

function calcPravki() {
    console.log('qwe')
    let count_of_fixes = parseFloat(pravki_div.getElementsByTagName('div')[0].firstElementChild.value)
    let cost = parseFloat(pravki_div.getElementsByTagName('div')[1].firstElementChild.value)

    pravki_div.getElementsByTagName('div')[2].firstElementChild.value = (count_of_fixes * cost).toFixed(2);
    calcAll()
}

function calcDopMaket() {
    console.log('qwe')
    let count_of_dop = parseFloat(dop_maket_div.getElementsByTagName('div')[0].firstElementChild.value)
    let cost = parseFloat(dop_maket_div.getElementsByTagName('div')[1].firstElementChild.value)

    dop_maket_div.getElementsByTagName('div')[2].firstElementChild.value = (count_of_dop * cost).toFixed(2);
    calcAll()
}

function calcAll() {
    console.log(results)
    let sum = 0
    results.forEach(function(elem) {
        sum += parseInt(elem.value)
    })
    main_result.value = sum
}