let amigos = []

function agregarAmigo() {
  const input = document.getElementById('amigo')
  const nombre = input.value.trim()

  if (!nombre) {
    alert('Por favor, inserta un nombre válido')
    return
  }

  amigos.push(nombre)

  const lista = document.getElementById('listaAmigos')
  const nuevoLi = document.createElement('li')
  nuevoLi.textContent = nombre
  nuevoLi.classList.add('name-item')
  lista.appendChild(nuevoLi)

  input.value = ''
}

function actualizarListaAmigos() {
  const lista = document.getElementById('listaAmigos')
  lista.innerHTML = ''

  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li class="name-item">${amigos[i]}</li>`
  }
}

function sortearAmigo() {
  const resultado = document.getElementById('resultado')

  if (amigos.length === 0) {
    alert('No hay amigos para sortear. Agrega al menos uno')
    return
  }

  const index = Math.floor(Math.random() * amigos.length)
  const ganador = amigos[index]

  resultado.innerHTML = `<li class="result-item">🎉 El amigo secreto es: <strong>${ganador}</strong> 🎁</li>`
}
