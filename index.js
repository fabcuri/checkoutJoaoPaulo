let resultado = document.getElementById('resultado')
let forma = document.getElementById('forma')
document.getElementById('botao1').onclick = () =>{
let valorCompra = Number(document.getElementById('valor').value);
let frete = Number(document.getElementById('frete').value);
let valorAPagar = ((valorCompra+frete) * 0.9).toFixed(2)
let forma1 = 'PIX'
forma.innerText = `Forma: ${forma1}`
resultado.innerText = `Total: ${valorAPagar}`
document.getElementById('valor').value = "";
document.getElementById('frete').value = "";
document.getElementById('valor').focus();
}