function agregarTexto() {
    let nt
    let obj
    nt = document.createTextNode('TEXTO1')
    obj = document.getElementById('list1')
    obj.appendChild(nt)
    nt = document.createTextNode('TEXTO2')
    obj = document.getElementById('list2')
    obj.appendChild(nt)
    nt = document.createTextNode('TEXTO3')
    obj = document.getElementById('list3')
    obj.appendChild(nt)
}