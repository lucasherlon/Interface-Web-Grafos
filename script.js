
dicionario = {"Grafo": `Um grafo G é um par de conjunto (V,E) onde V é não vazio e E é um conjunto de
pares não ordenados de elementos de V.`,
"Vértice": "Vértices são os elementos do grafo.",
"Arestas": "Arestas (E) são os segmentos que ligam os vértices.",
"Loop": "Loop ou laço é quando uma aresta é incidente com apenas um vértice.",
"PseudoGrafo": "Um pseudografo é um grafo que contém pelo menos um laço(loop).",
"Multigrafo": `Um multigrafo é um grafo no qual existe pelo menos dois vértices ligados por
mais de uma aresta.`,
"Ordem do Grafo": "É o número de vértices do Grafo.",
"Tamanho do Grafo": "É o número de arestas do Grafo.",
"Grafo Trivial": "É aquele grafo que possui zero arestas.",
"Grafo Simples": "Um grafo simples é um grafo sem arestas paralelas e sem laços.",
"Grafo Completo": `Um grafo completo G=(V,E) é um grafo no qual existe exatamente uma aresta
ligando cada par de vértices.`,
"Grafo Bipartido": `Um grafo bipartido é um grafo simples no qual o conjunto de vértices pode ser
particionado em dois conjuntos X e Y tal que toda aresta liga um vértice em X a
um vértice em Y Ele é representado por G=(X,Y,E).`,
"Bipartido Completo": `Um grafo bipartido completo é um grafo (X,Y, com m vértices em X e n vértices
    em Y no qual existe uma aresta entre todo vértice em X e todo vértice em Y.`,
"Dígrafo": "Grafo cujas aresta possuem sentido",
"Grafo misto": "Grafo que possui aresta e arcos(arestas orientadas)."
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


