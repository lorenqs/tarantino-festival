## Explicando o código JavaScript:

# 1. const formatarDigito = (digito) => \0${digito}\.slice(-2);
Função que formata números para sempre terem dois dígitos.

Exemplo:

formatarDigito(5) → "05"
formatarDigito(12) → "12"

Dica: concatenar um 0 na frente e depois usar .slice(-2) para pegar os dois últimos caracteres.

# 2. const atualizar = (tempo) => { ... }
Essa função atualiza o contador na tela.

Primeiro, pega os elementos HTML (segundos, minutos, horas, dias) pelo id.
Depois, calcula cada unidade de tempo a partir do total de segundos (tempo):
qtdSegundos = tempo % 60 → resto da divisão por 60 (segundos).
qtdMinutos = Math.floor((tempo % (60*60)) / 60) → minutos dentro da hora.
qtdHoras = Math.floor((tempo % (60*60*24)) / (60*60)) → horas dentro do dia.
qtdDias = Math.floor(tempo / (60*60*24)) → dias completos.

## Observação: O Math.floor é uma função nativa do JavaScript que arredonda um número para baixo até o inteiro mais próximo. Ele sempre descarta a parte decimal, sem arredondar para cima. Exemplo:
Math.floor(5.9);   // 5
Math.floor(-5.9);  // -6  (com negativos ele vai "mais baixo")
Math.floor(-5.1);  // -6

Em seguida, coloca os valores formatados no HTML (textContent).

O cálculo (tempo % (60 * 60 * 24)) / (60 * 60) pode resultar em um número com casas decimais (por exemplo, 3.75 horas). 
O Math.floor garante que você obtenha apenas o valor inteiro (3 horas), descartando os minutos extras. Muito útil em contadores regressivos, porque você não quer mostrar 3.75 horas, mas sim 03 horas e deixar os minutos aparecerem no campo correto.

# 3. const contagemRegressiva = (tempo) => { ... }
Essa função faz a contagem regressiva.

Cria uma função interna contar que:

Verifica se tempo === 0. Se esta condição foi verdadeira, sim, para a contagem com clearInterval.

Chama atualizar(tempo) para mostrar o valor atual.

Diminui tempo-- a cada segundo.

Usa setInterval(contar, 1000) para executar contar a cada 1 segundo.

O id do intervalo é guardado para poder parar depois.

# 4. const tempoRestante = () => { ... }
Calcula quantos segundos faltam até a data do evento, que você pode programar certinho no código do js
dataEvento = new Date('2026-08-12 09:40:00') → cria a data alvo.
hoje = Date.now() → pega o timestamp atual em milissegundos.
(dataEvento - hoje) / 1000 → diferença em segundos.
Math.floor(...) → arredonda para baixo.

# 5. contagemRegressiva(tempoRestante());
Chama a função principal passando o tempo restante até o evento fazendo com que o contador regressivo seja inicializado.

# Explicando o Fluxo do Programa:
A ideia principal é fazer com que seja calculado quantos segundos faltam até a data alvo. Então o programa:
- Calcula quantos segundos faltam até a data alvo.
- Inicia um setInterval que roda a cada segundo.
- E a cada execução:
Atualiza os elementos HTML com dias, horas, minutos e segundos. Diminui o tempo. Para quando chega a zero.

# Código CSS: Quanto ás dúvidas do CSS:

vw (viewport width)

1 vw = 1% da largura da janela do navegador.
Exemplo: se a janela tem 1200px de largura, então 100vw = 1200px.
vh (viewport height)
1 vh = 1% da altura da janela do navegador.
Exemplo: se a janela tem 800px de altura, então 100vh = 800px

width: 100vw;
height: 100vh;
O elemento ocupará 100% da largura da janela (100vw).

O elemento ocupará 100% da altura da janela (100vh).

Ou seja, ele vai preencher toda a área visível da tela, independentemente do tamanho do navegador ou dispositivo.

Eu compartilhei alguns links com vocês durante a aula e também no próprio teams.

Para reforçar o aprendizado, acesse a documentação do JavaScript, teste os valores mudando os dados, refaça o programa com uma versão diferente, pesquise suas dúvidas, anote-as em local acessível.

Desta forma vocês irão aprender muito mais! As aulas são os passos iniciais e o avanço depende de vocês!
### Bons estudos!
### profª Debora B. Paulo
