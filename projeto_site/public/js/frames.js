function change_frame(local) {

    frame = document.getElementById('frame_change')

    if (local == 'home'){
    frame.src = 'iframes/index_frame.html'
        inicio.classList.add('atual')
        historia.classList.remove('atual')
        personagens.classList.remove('atual')
        galeria.classList.remove('atual')
        chefes.classList.remove('atual')
    } else if (local == 'lore'){
    frame.src = 'iframes/historia_frame.html'
        inicio.classList.remove('atual')
        historia.classList.add('atual')
        personagens.classList.remove('atual')
        galeria.classList.remove('atual')
        chefes.classList.remove('atual')
    } else if (local == 'char'){
    frame.src = 'iframes/personagens_frame.html'
        inicio.classList.remove('atual')
        historia.classList.remove('atual')
        personagens.classList.add('atual')
        galeria.classList.remove('atual')
        chefes.classList.remove('atual')
    } else if (local == 'gal'){
    frame.src = 'iframes/galeria_frame.html'
        inicio.classList.remove('atual')
        historia.classList.remove('atual')
        personagens.classList.remove('atual')
        galeria.classList.add('atual')
        chefes.classList.remove('atual')
    } else if (local == 'boss'){
    frame.src = 'iframes/bosses_frame.html'
        inicio.classList.remove('atual')
        historia.classList.remove('atual')
        personagens.classList.remove('atual')
        galeria.classList.remove('atual')
        chefes.classList.add('atual')
    } else {
        console.error('erro inesperado');
        alert('VOCÊ PRECISA ESTAR LOGADO PARA ACESSAR ESTA PAGINA')
    }
}