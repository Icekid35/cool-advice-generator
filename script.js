var body=document.querySelector('.body')
var btn=document.querySelector('.btn')
var copy=document.querySelector('.copy')
var id =document.querySelector('.id')
async function copytext(e){
  await navigator.clipboard.writeText(body.innerText)
  copy.innerText='copied🦸 '
  setTimeout(()=>{
    copy.innerText='copy🧞'
  },2000)
}

async function generatetext() {
  var former=btn.style.background
  btn.style.background='red'
  var newtext= await fetch('https://api.adviceslip.com/advice').then(res=>newtext=res.json()).catch(err=>newtext={id:-1,advice:'sorry an unexpected error occurred'})
  newtext=newtext.slip ? newtext.slip : newtext
  
  body.innerText=newtext?.advice
  id.innerText=newtext?.id
  btn.style.background=former
  // body...
}

btn.addEventListener('click',()=>generatetext())
copy.addEventListener('click',()=>copytext())

