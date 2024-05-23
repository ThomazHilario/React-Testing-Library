# O que são testes?
* Testes são uma forma de garantir o funcionamento correto do código desenvolvido. Eles são automatizados e cobrem vários cenários para assegurar que o software funciona como esperado.

## Tipos de Testes
* Existem três tipos principais de testes:

### Testes Unitários:

* Testam apenas um componente individual para garantir que ele funciona corretamente.
* Não devem chamar agentes externos, como APIs.

### Testes de Integração:

* Garantem o funcionamento de dois ou mais componentes trabalhando juntos.

### Testes End-to-End (E2E):

* Testam o fluxo completo do usuário, incluindo interações com agentes externos, como APIs e bancos de dados.

# Ferramentas para Testes:

* Jest: Um framework de testes JavaScript.
* Testing Library: Uma coleção de utilitários para testar componentes React e outras bibliotecas.

# Detalhes sobre cada tipo de teste:

## Testes Unitários:

* Foco: Testar componentes individuais isoladamente.
* Objetivo: Assegurar que cada componente funcione corretamente por conta própria.
* Restrição: Não deve haver chamadas a agentes externos (ex.: APIs).

## Testes de Integração:

* Foco: Testar a interação entre dois ou mais componentes.
* Objetivo: Garantir que componentes diferentes funcionem bem em conjunto.

## Testes End-to-End (E2E)
* Foco: Testar o fluxo completo do usuário.
* Objetivo: Simular o comportamento real do usuário, incluindo interações com APIs e bancos de dados.
* Característica: Incluem testes de agentes externos.