
dicionario = {"Grafo": `<strong>Grafo: </strong>Um grafo G é um par de conjunto (V,E) onde V é não vazio e E é um conjunto de
pares não ordenados de elementos de V.`,
"Vértice": "<strong>Vértice: </strong>Vértices são os elementos do grafo.",
"Arestas": "<strong>Arestas</strong> (E) são os segmentos que ligam os vértices.",
"Loop": "<strong>Loop</strong> ou laço é quando uma aresta é incidente com apenas um vértice.",
"PseudoGrafo": "<strong>Pseudografo: </strong>Um pseudografo é um grafo que contém pelo menos um laço(loop).",
"Multigrafo": `<strong>Multigrafo: </strong>Um multigrafo é um grafo no qual existe pelo menos dois vértices ligados por
mais de uma aresta.`,
"Ordem do Grafo": "<strong>Ordem do Grafo: </strong>É o número de vértices do Grafo.",
"Tamanho do Grafo": "<strong>Tamanho do Grafo: </strong>É o número de arestas do Grafo.",
"Grafo Trivial": "<strong>Grafo Trivial: </strong>É aquele grafo que possui zero arestas.",
"Grafo Simples": "<strong>Grafo Simples: </strong>Um grafo simples é um grafo sem arestas paralelas e sem laços.",
"Grafo Completo": `<strong>Grafo Completo: </strong>Um grafo completo G=(V,E) é um grafo no qual existe exatamente uma aresta
ligando cada par de vértices.`,
"Grafo Bipartido": `<strong>Grafo Bipartido: </strong>Um grafo bipartido é um grafo simples no qual o conjunto de vértices pode ser
particionado em dois conjuntos X e Y tal que toda aresta liga um vértice em X a
um vértice em Y Ele é representado por G=(X,Y,E).`,
"Bipartido Completo": `<strong>Bipartido Completo: </strong>Um grafo bipartido completo é um grafo (X,Y, com m vértices em X e n vértices
    em Y no qual existe uma aresta entre todo vértice em X e todo vértice em Y.`,
"Dígrafo": "<strong>Dígrafo: </strong>Grafo cujas arestas possuem sentido.",
"Grafo misto": "<strong>Grafo Misto: </strong>Grafo que possui aresta e arcos(arestas orientadas).",
"Ciclo": "<strong>Ciclo: </strong>Um ciclo é um caminho v 1 ,v 2 ,...,v k ,v k+1 sendo v 1 =v k+1 e k≥3.",
"Subgrafo Próprio": `<strong>Subgrafo Próprio: </strong> É qualquer subgrafo de um grafo,
excetuando o próprio grafo original.`,
"Subgrafo Gerador": "<strong>Subgrafo Gerador: </strong>É um subgrafo que possui todos os vértices do grafo original.",
"Grafo Conectado": `<strong>Grafo Conectado</strong>: Um grafo G = (V,E) é conectado quando existe um caminho entre cada
par de vértices de G. Caso contrário G é desconectado.`,
"Componente": `<strong>Componente: </strong>Uma componente de um grafo G é um subgrafo que é conectado e
que não é um subgrafo próprio de outro subgrafo conectado de G.`,
"Subgrafo Maximal": `<strong>Subgrafo Maximal: </strong>Um subgrafo conectado H de um grafo G é maximal se H não é
subgrafo próprio de algum subgrafo conectado de G.`,
"Conjunto Desconectante": `<strong>Conjunto Desconectante: </strong>Um conjunto F de arestas em G é chamado um conjunto desconectante em G
se G F tem mais de uma componente.`,
"Ponte": `<strong>Ponte: </strong>Se um conjunto desconectante F consiste de uma arestas simples f, então
esta aresta é chamada ponte.`,
"Número de Conectividade": `<strong>Número de Conectividade: </strong>O numero de conectividade em vértices k(G) de um grafo G é o
tamanho mínimo de um conjunto de articulação em G.`,
"Conjunto de Corte": `<strong>Conjunto de Corte: </strong>Um conjunto desconectante F é dito ser um conjunto de corte se
nenhum subconjunto próprio de F é um conjunto desconectante.`,
"Distância": `<strong>Distância: </strong>O número de arestas em um caminho com o menor número de
arestas possíveis entre dois vértices v e w de um grafo conectado G é a distância.`,
"Excentricidade": `<strong>Excentricidade: </strong>Denomina se excentricidade e(v) do vértice v ao valor máximo da distância para todo w ϵ V.`,
"Raio": `<strong>Raio: </strong>O raio r(G) de G é a excentricidade do vértice de excentricidade
mínima.`,
"Vértice Central": `<strong>Vértice Central: </strong>Um vértice v é um vértice central se sua excentricidade é igual ao
raio do grafo.`,
"Centro": `<strong>Centro: </strong>O centro c(G) de um grafo é o conjunto de todos os seus vértices
centrais.`,
"Diâmetro": `<strong>Diâmetro: </strong>Diâmetro de um grafo G é a excentricidade do vértice de
    excentricidade máxima.`
}

let botoes = document.querySelectorAll('.conceito');
let exp = document.querySelector('.exp');

botoes.forEach(botao => {
    botao.addEventListener('click', function() {
      let conceito = botao.innerText;
      let texto = dicionario[conceito];
      exp.innerHTML = texto;
   });
});

const proxima = ()=> {
    window.location.href = 'second.html';
}

