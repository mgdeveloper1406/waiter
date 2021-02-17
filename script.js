const smallcups = document.querySelectorAll('.cup-small')
const litres = document.getElementById('litres')
const precentage = document.getElementById('percentage')
const remained= document.getElementById('remained')
updatebigcup()
smallcups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightcups(idx))
})
function highlightcups(idx){
  if(smallcups[idx].classList.contains('full') && !smallcups[idx].nextElementSibling.classList.contains('full')){
    idx--
  }
  smallcups.forEach((cup, idx2) => {
    if(idx2 <= idx){
      cup.classList.add('full')
    }
    else{
      cup.classList.remove('full')
    }
  })
  updatebigcup()
}
function updatebigcup(){
  const fullcups = document.querySelectorAll('.cup-small.full').length
  const totalcups = smallcups.length
  if(fullcups === 0){
    percentage.style.visibilty = 'hidden'
    percentage.style.height = 0
  }
  else{
    percentage.style.visibilty = 'visible'
    percentage.style.height = `${fullcups / totalcups * 330}px`
    percentage.innerText = `${fullcups / totalcups * 100}%`
  }
  if(fullcups === totalcups){
    remained.style.visibilty = 'hidden'
    remained.style.height = 0
  }
  else{
    remained.style.visibilty = 'visible'
    litres.innerText = `${2 - (250 * fullcups / 1000)}L`
  }
}
