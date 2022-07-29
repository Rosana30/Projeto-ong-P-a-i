                             Projeto Final do Curso de Desenvolvimento Back-End da Reprograma - TURMA ON15

                                             # Projeto-ong-P-a-i

# Sobre

A inspiração em criar o Projeto de uma api para cadastrar todos os gatos da ONG para adoção e as pessoas que estão interessada em adotar foi feito por mim porque eu também já resgatei alguns gatos de rua e adotei e levei pra casa, e dei um novo lar para eles. Sempre nas ruas que passo vejo muitos gatos abandonados e muito debilitados a maioria. Sempre quando eu vejo alguns gatos abandonados perto da minha casa sempre levo algumas raçoes e deixo na vasilha pra eles se alimentarem. Descobri a ONG P.A.I que também resgatam os animais das ruas debilitados e também castram para poder adotar. A ONG pai faz um trabalho incrível nos resgates de gatos e e cachorros nas ruas e isso que me chamou a atenção em fazer o projeto para ajudar a ONG nessa causa tão nobre.

Fundadores Ângela Cristina Machado fundadora da ONG P.A.I e RUBENS É O PRESIDENTE E Ângela Cristina Machado É VICE PRESIDENTE EM CABO DE SANTO AGOSTINHO PE.

Início das atividades ONG P.A.I em 10/07/2021

A ong P.A.I e uma instituição não governamental sem fins lucrativos, que realiza seus projetos na causa animal com ajuda de colaboradores ativistas simpatizantes na causa e protetores não tem ajuda municipal.

A primeira feira de adoção deu início no  dia 21/07/2018  responsável no município ao qual foram doados mais 40 animais em um só dia.

Em cada evento de adoção média e de 15 a 20 animais
Média 3 felinos 12 caninos
Só comigo tem 26 ANIMAIS entre cães e gatos
Fora de cada protetores põe aí média 10 cada


# Projeto-ong-P-a-i - Back-end

## Pre-requisitos

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/pt-br)

## Router- Você pode testar pelo insomia ou postman.

## Como rodar

- na raiz do projeto rode no terminal:

```javascript
//baixar dependências
$ npm install

//rodar o projeto
$ npm run dev
```

## Variáveis de ambiente

- Na raiz do projeto crie um arquivo _.env_ conforme o arquivo passando a url do seu banco local.

## Router

Você pode testar pelo [insomia](https://insomnia.rest/download) ou [postman](https://www.postman.com/).

### Post: Criando perfil de um(a) gato(a) do Projeto-ong-P-a-i

```
Post: /gatos/create
```

- Exemplo <br>
  _Body (json)_

```json
{
  "nome": "Miah",
  "sexo": "Femea",
  "idade": "10 meses",
  "local": "Recife-PE"
}
```

- Exemplo de saída/resposta <br>
  ![rota post gato ](/imagens/Gatoscreate.JPG)

### Delete: Excluir perfil de um(a) gato(a) do Projeto-ong-P-a-i

```
Delete: /gatos/excluir/:id
```

- Exemplo <br>

```
/gatos/excluir/62e3114e23bdc0c88a322b21
```

- Exemplo de saída/resposta <br>
  ![rota Delete gato ](/imagens/Gato%20excluir.JPG)

### Put: Atualizar perfil de um(a) gato(a) do Projeto-ong-P-a-i

```
Put: /gatos/update/:id
```

- Exemplo <br>

```json
{
  "nome": "Miah Brum"
}
```

- Exemplo de saída/resposta <br>
  ![rota Update gato ](/imagens/Gato%20update.JPG)

### Get: Listar Todos os gatos do Projeto-ong-P-a-i

```
Get: /gatos/gato/
```

- Exemplo de saída/resposta <br>
  ![rota Get gato ](/imagens/Get%20Gatos.JPG)

### Post: Criando perfil de um(a) usuario(a) do Projeto-ong-P-a-i

```
Post: /pessoas/create
```

- Exemplo <br>
  _Body (json)_

```json
{
  "nome": "enrico silva",
  "sexo": "M",
  "idade": "30",
  "endereco": "Recife",
  "telefone": "35212150",
  "email": "enrico2@hotmail.com"
}
```

- Exemplo de saída/resposta <br>
  ![rota post pessoas ](/imagens/Create%20Pessoas.JPG)

### Delete: Excluir perfil de um(a) usuario(a) do Projeto-ong-P-a-i

```
Delete: /pessoas/excluir/:id
```

- Exemplo <br>

```
/pessoas/excluir/62e3114e23bdc0c88a322b21
```

- Exemplo de saída/resposta <br>
  ![rota Delete pessoas ](/imagens/Pessoas%20excluir.JPG)

### Put: Atualizar perfil de um(a) usuario(a) do Projeto-ong-P-a-i

```
Put: /pessoas/update/:id
```

- Exemplo de saída/resposta <br> <br>

```json
{
	
		"nome": "BrunA",
		"sexo": "F"
	
	}


Pull
```

- Exemplo de saída/resposta <br> 
  ![rota Update pessoas ](/imagens/)

  



# Agradecimentos
Agradeço primeiramente a Deus autor e consumador da nossa Fé. Sem ele não conseguiria atingir meus objetivos segundo a minha Família que sempre esteve comigo. aos meus cinco gatos Bruna, Brunely, clara, frederico e ao gato mais novo que resgatei das ruas que se chama Enrico.

<br>

![rota Update pessoas ](/imagens/WhatsApp%20Image%202022-07-25%20at%2014.43.49%20(1).jpeg)
![rota Update pessoas ](/imagens/WhatsApp%20Image%202022-07-25%20at%2014.43.35%20(2).jpeg)
![rota Update pessoas ](/imagens/WhatsApp%20Image%202022-07-25%20at%2014.43.32.jpeg)
![rota Update pessoas ](/imagens/WhatsApp%20Image%202022-07-25%20at%2014.43.36.jpeg)






agradeço a minha Querida Mentora Rayane pimentel por sua disponibilidade em ser minha monitora anjo no momento que mais precisei
ela estava lá ,me falando vai dar certo Rosana,e por sua paciência em me ensinar.
agradeço ao Reprograma por nos proporcionar esse curso tão maravilhoso e ter pessoas Professoras que nos inspiraram e conhecer pessoas íncriveis em especial A Professora Hannah por ser tão disponivel e acessivel a todas ,A querida Paula alamend Beatriz Analu,e todas as outras Professoras maravilhosas que nos passaram conteúdos íncriveis.também agradeço A psicologa Juliana pelo apoio e jessica e todas as pessoas que fazem o Reprograma acontecer.

https://github.com/rayanepimentel
https://github.com/Rosana30
