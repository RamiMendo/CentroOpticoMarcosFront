function agregarCristales(){

    const modal = document.createElement('div');
    modal.id = "container-modal";

    modal.innerHTML = `
        <button class="boton-modal" id="boton-modal-cerrar">X</button>
        <h1 id="titulo-modal">Cristal</h1>
        <label id="label-modal">Nombre Cristal</label>
        <input id="input-modal" type="text" placeholder="Vulk">
        <button class="boton-modal" id="boton-modal-aceptar">ACEPTAR</button>
    `;

    document.body.appendChild(modal);
    
}