# Curva Digital

O teste está dividido em duas partes. Na primeira parte você vai resolver uma série 
de exercícios para avaliar sua capacidade de resolução de problemas e design de 
código. Na segunda etapa vamos avaliar seu desempenho em um mini projeto. Abaixo
seguem as descrições.


# Exercícios

O objetivo desse projeto é verificar que você é capaz de produzir código usável,
legível e testável em Javascript. Ele foi concebido para que qualquer participante
com um mínimo de conhecimento em JS possa resolvê-lo em um tempo razoável. Nós
daremos ênfase para a qualidade do código produzido.

Nesse projeto você vai precisar implementar uma série de funções bem especificadas
de modo que elas passem nos testes. O projeto já tem todos os testes implementados 
(TDD) e seu principal objetivo é fazer com que todos os testes passem. Quaisquer
dúvidas, enviar email para cti@curva.digital

## Setup

Primeiro faça o clone do projeto para sua máquina e crie uma branch com as seguintes
características:

- Nome da branch: seunome_curva_test Ex.: joao_amorim_curva_test

```
$ git clone curva_exercicios@github.com
$ cd curva_exercicios
$ git checkout -b meunome_curva_test
```

### Verificando o setup

Se tudo correu bem, vc poderá rodar o seguinte comando na pasta principal do
projeto:

`$ npm test`

Você vai ver um monte de testes falhando. 

### Implementação

Uma vez que o projeto está configurando, com testes falhando, e na sua branch,
implemente as funções de acordo com a especificação das mesmas.

### Exercícios

0. Faça uma função `soma` que recebe dois números e retorna sua soma:
```js
>> soma(1,2)
3
>>
```
1. Faça uma função chamada `incremento` que recebe um `valor inteiro` e retorna o incremento desse valor.
```js
>> incremento(10)
11
>> incremento(-1)
0
```
2. Faça uma função chamada `maior` que receber três valores inteiros e retorne o maior deles.
```js
>> maior(10, 5, 9)
10
>> maior(56, 799, 549)
799
>> maior(1, 2, 3)
3
```
3. Faça uma função chamada `letra` que recebe um `caractere` e retorna uma string dizendo se aquele é consoante ou vogal.
```js
>> letra('a')
"vogal"
>> letra('z')
"consoante"
```

4. Faça uma função chamada `desconto` que recebe um valor e uma porcentagem, calcule e retorne o novo valor com o desconto aplicado. O resultado deve ter duas casas decimais (use o método `toFixed(2)` e `parseFloat`.
```js
>> desconto(100, 20)  // 100 dinheiros com 20% de desconto = 80 dinheiros
80.00
>> desconto(500, 10)  // 500 dinheiros com 10% de desconto = 450 dinheiros
450.00
``` 
5. Faça uma função chamada `sequencia` que recebe dois números inteiros e retorna uma lista/vetor contendo a sequencia de números compreendida entre os dois, incluindo os mesmos.
```js
>> sequencia(1, 5)
[1,2,3,4,5]
>> sequencia(5, 1)
[5,4,3,2,1]
>> sequencia(10,10)
[10]
```
6. Altere o programa anterior e chame-o de `impares` para imprimir somente os números ímpares dentro da sequência.
```js
>> impares(1,5)
[1, 3, 5]
>> impares(6, 0)
[5, 3, 1]
```
7. Faça uma função `somatorio` que recebe `dois números` e faça o somatório da sequencia compreendida entre os dois números (inclusos).
```js
>> somatorio(1,5)
15
>> 
```
No caso acima o resultado foi: 1+2+3+4+5 = 15

8. Faça uma função chamada `produto` que receba `dois números` e calcule o produto da sequência compreendida entre os números.
```js
>> produto(1,5)  // 1*2*3*4*5=120
120
>> produto(2,4) // 2*3*4=24
24
```
9. Faça uma função chamada `stat` que recebe um vetor/lista e retorne um dicionário/objeto/hashmap contendo a média dos valores, o somatório dos valores, o menor e o maior número.
```js
>> stat([10,5,2,20])
{"media": 9.25,
 "somatorio": 37,
 "menor": 2,
 "maior", 20}
>> stat([10])
{"media": 10,
 "somatorio": 10,
 "menor": 10,
 "maior": 10}
```
10. Faça uma função chamada `first` que recebe um `vetor` e retorna o primeiro elemento. Retorne nil/null se o vetor for vazio.
```js
>> first([20,30,10,34])
20
>>
```
11. Faça uma função chamada `last` que recebe um `vetor` e retorna o último elemento. Retorne nil/null se o vetor for vazio.
```js
>> last([20,30,10,34])
34
>>
```
12. Faça uma função chamada `rest` que recebe um `vetor` e retorna o vetor com exceção do primeiro elemento.
```js
>> rest([1,2,3,4])
[2,3,4]
>> rest([10])
[]
>> rest([])
[]
```
13. Utilizando as funções `last` e `rest`, definidas nos exercícios anteriores, crie uma função chamada `second` que retorna o segundo elemento de uma lista.
```js
>> second([1,2,3])
2
>> second([1])
null
>> second([])
null
```
14. Faça uma função chamada `concat` que recebe dois `vetores/arrays` e retorna a concatenação dos dois vetores.
```js
>> concat([1,2,3], [10,20,30])
[1,2,3,10,20,30]
>> concat([1,2,3], [])
[1,2,3]
>> concat([], [10])
[10]
>> concat([],[])
[]
```
15. Sem usar `Array.prototype.reverse()`, faça uma função chamada `reverse` que recebe um `vetor` e retorna o vetor com os valores invertidos.
```js
>> reverse([1,2,3])
[3,2,1]
>> reverse([])
[]
>> reverse([5])
[5]
``` 
16. Faça uma função chamada `unique` que recebe um `vetor` e retorna outro vetor sem itens repetidos. Obs. Não use `new Set()` 
```js
>> unique([1,1,2,2,3,3,4])
[1,2,3,4]
>> unique([])
[]
>> unique([1])
[1]
```
17. Faça uma função chamada `take` que recebe um `vetor` e um número `n` como parâmetros. Essa função deve retornar um novo vetor/array contendo apenas os `n` primeiros números. Assuma que `n >= 0`
```js
>> take(2, [1,2,3,4,5,6])
[1,2]
>> take(2, [])
[]
>> take(10, [1,2,3])
[1,2,3]
```
18. Faça uma função chamada `drop` que recebe um `vetor/array` e um número `n` e retorna um novo array sem os `n` primeiros números. Assuma que `n >= 0`.
```js
>> drop([1,2,3,4,5], 2)
[3,4,5]
>> drop([1,2,3], 4)
[]
>> drop([1], 0)
[1]
```
19. Faça uma função chamada `pertence` que recebe um `vetor` e um número `n`. A função deve retornar `true` se n estiver presente no `vetor` e falso caso contrário.
```js
>> pertence([1,2,3,4,5,6,7,8,9,10],5)
true
>> pertence([10,20,30,40], 100)
false
```
20. Faça uma função chamada `mesclar` que recebe dois `vetores/arrays` e retorne um novo vetor com os elementos de ambos intercalados. Assuma que os dois vetores terão sempre o mesmo tamanho para facilitar.
```js
>> mesclar([1, 2, 3], ['a', 'b', 'c'])
[1, 'a', 2, 'b', 3, 'c']
>> mesclar([0,2,4], [1,3,5])
[0, 1, 2, 3, 4, 5]
```
21. Faça uma função chamada `intersect` que recebe dois `vetores/arrays` e retorna um novo array apenas com os elementos presentes nos dois vetores ao mesmo tempo. (Interseção da teoria dos conjuntos). Transforme o vetor em um conjunto com a função `unique` definida na questão 16 antes de realizar a operação de interseção.
```js
>> intersect([1, 2, 3, 4], [3, 4, 5])
[3, 4]
>> intersect([1, 2, 3], [6])
[]
>> intersect([0,1,2], [0])
[0]
```
22. Faça uma função chamada `partition` que recebe um vetor e um número inteiro `n` que particiona os elementos dessa lista, criando novas listas de tamanho `n`. Assuma que `n > 0`.
```js
>> partition([1,2,3,4,5], 2)
[[1,2],[3,4]]
>> partition([1,2,3,4,5]. 3)
[[1,2,3]]
>> partition([1,2,3,4,5], 1)
[[1],[2],[3],[4],[5]]
>> partition([1,2,3,4,5,6,7,8,9,10], 5)
[[1,2,3,4,5],[6,7,8,9,10]]
```

23. QUESTÃO BÔNUS - Faça uma função chamada `rotate` que recebe um `vetor` e um número inteiro `n` e faça a 'rotação' da lista como podemos ver nos exemplos abaixo:
```js
>> rotate([1,2,3], 1)
[3,1,2]
>> rotate([1,2,3], 2)
[2,3,1]
>> rotate([0,1,2,3,4,5], 3)
[3,4,5,0,1,2]
>> rotate([0,1,2,3,4,5], 5)
[1,2,3,4,5,0]
```

Seria interessante você escrever algumas dessas funções de forma recursiva. 

# A qualquer sinal de plágio, o candidato será automaticamente desclassificado do processo.
