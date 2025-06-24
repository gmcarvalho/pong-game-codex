# Jogo Pong com p5.js

Este repositório contém uma versão do jogo Pong criada utilizando a biblioteca p5.js. As implementações foram geradas com o auxílio do Codex, descrevendo cada etapa do desenvolvimento.

## Etapas do desenvolvimento com Codex

1. **Configuração inicial**
   - O Codex criou a estrutura básica do repositório e adicionou os recursos de imagem e áudio utilizados no jogo.
   - Os arquivos `index.html`, `style.css` e `sketch.js` foram iniciados para receber o código.
   - Referência: commit `base for pong with codex`.

2. **Implementação do jogo**
   - A partir das instruções, o Codex gerou as classes `Paddle` e `Ball`, além da lógica principal em `sketch.js`.
   - Esse passo deu origem ao funcionamento básico do Pong, com movimentação das raquetes e da bola.

3. **Melhorias na movimentação**
   - Em seguida, o Codex ajustou o código para que a raquete da esquerda fosse controlada pelo mouse e a da direita funcionasse como uma IA simples.
   - Exemplo de código no arquivo `paddle.js`:
     ```javascript
     if (this.control === 'mouse') {
       this.y = mouseY;
     } else if (this.control === 'ai') {
       if (typeof ball !== 'undefined') {
         if (ball.y < this.y - this.speed) {
           this.y -= this.speed;
         } else if (ball.y > this.y + this.speed) {
           this.y += this.speed;
         }
       }
     }
     ```
     — `paddle.js` linhas 15‑23.

4. **Controle de rounds**
   - O Codex adicionou contagem de pontos, condição de vitória e botão de reinício para cada rodada.
   - No `sketch.js` são verificadas as saídas da bola e exibida a mensagem de vencedor quando um jogador alcança a pontuação máxima.

5. **Ajustes finais**
   - Por fim, o Codex posicionou o botão de reiniciar sobre a mensagem de vencedor e aplicou estilos para melhor experiência.

## Como executar

Não é necessário instalar dependências. Basta abrir o arquivo `index.html` em um navegador moderno. O p5.js será carregado via CDN e o jogo ficará disponível.

- A raquete da esquerda segue o movimento do mouse.
- A raquete da direita é controlada pela IA.
- Sons de batida e gol são reproduzidos a cada evento.

A implementação principal do jogo está nas classes `Paddle` e `Ball`, bem como no loop de `draw` do `sketch.js`.
