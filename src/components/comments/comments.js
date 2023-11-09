import React from 'react';
import './styles.css'

function Comments(){
    return(
        <div className='comments-cards-container'>
            <div className='cards-contents'>
                <div class="cardw comentario-1">@CaioSantos - Esse jogo é maravilhoso, entrega tudo o que prometeu. História bem escrita e bem contada, uma bela continuação que traz consigo elementos do primeiro, mas possui uma cara própria, apresenta novos personagens interessantes e os desenvolvem muito bem, assim como faz com os já conhecidos.</div>
                <div class="cardw comentario-2">@MatheusVinicius - Simplesmente sensacional, um dos maiores da geração passada. O jogo simula perfeitamente o que aconteceria no mundo real, onde ações geram consequências.</div>
                <div class="cardw comentario-3">@GabrielleSantos - É sobre o nosso pior e sobre seguirmos pelo pior ou tentarmos melhorar. Não é fácil, não é leve e não é doce. E apesar de todos os dissabores e sentimentos profundamente intensos e tristes ao longo do game, ele é maravilhoso e necessário.</div>
            </div>
        </div>
    )
}

export default Comments;