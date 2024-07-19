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


# Configurando ambiente de testes em React + vite:

## 1: Instale o jest usando: 
``` npm install jest -d ```

## 2: Depois crie um script de teste no package.json com o valor jest
``` "test": "jest" ```

## 3: Agora será necessário adicionar as dependências do testing-library:
```` npm install  @testing-library/jest-dom @testing-library/react @testing-library/user-event -d ```

## 4: Adicionar as dependências do Babel:
``` npm install @babel/core @babel/preset-env @babel/preset-react babel-jest identity-obj-proxy jest-environment-jsdom -d ```

## 5: Agora será necessário criar um arquivo chamado jest.config.js na raiz do projeto para configurar o jest:
``` module.exports = { testEnvironment: 'jest-environment-jsdom', setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.ts'], moduleNameMapper: {'\\.(gif|ttf|eot|svg|png)$': '<rootDir>/.jest/mocks/fileMock.js', '\\.(css|less|sass|scss)$': 'identity-obj-proxy', },} ```

## em seguida criar uma pasta .jest com o arquivo setup-tests. com o seguinte código:
``` import '@testing-library/jest-dom' ```

## 6: criar um arquivo chamado babel.config.json na raiz do projeto e adicionar o seguinte código:

``` { "presets": [ ["@babel/preset-env", { "targets": { "esmodules": true } }], ["@babel/preset-react", { "runtime": "automatic" }] ] } ```

## 7: Por ultimo criar uma pasta mocks, dentro da pasta .jest com um arquivo chamado fileMock.js que tem o seguinte código:

``` module.exports = 'test-file-stub ```
