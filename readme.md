# Plano de Testes Manuais

Este documento contém o plano de testes para os cenários de teste do sistema OrangeHRM.

## Sistema

O OrangeHRM é uma plataforma de gerenciamento de recursos humanos (HRM) que oferece um ambiente robusto e flexível para testes. Com ele, você pode explorar e validar várias funcionalidades relacionadas à gestão de pessoal.

| Link          |
| ------------- |
| [https://opensource-demo.orangehrmlive.com/web/index.php/auth/login](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login) |

## Participantes

> [!IMPORTANT]
> Fabio Eloy Passos 

## Cenário 001 - Login

### Caso de Teste CT001.001 - Login com sucesso (usuário e senha corretos)

**Descrição:** 📃
**Dado** que eu esteja na tela de login. **Quando** preencher "username" corretamente e o campo "password" corretamente e apertar o botão de "login". **Então** o sistema deve acessar a tela inicial.

**Status:** 

> [!NOTE]
> PASSOU ✅

**Evidência:** 📸

<br>

![Imagem login](./Caso%20de%20Testes/img/login.png)
![Imagem dashbord apos login](./Caso%20de%20Testes/img/Dashbord.png)

### Caso de Teste CT001.002 - Login com credenciais inválidas

**Descrição:** 📃
**Dado** que eu esteja na tela de login. **Quando** preencher "username" inválido e o campo "password" inválido e apertar o botão de "login". **Então** o sistema deve retornar a mensagem "Invalid credentials".

**Status:** 

> [!NOTE]
> PASSOU ✅

**Evidência:** 📸

<br>

![Login invalido](./Caso%20de%20Testes/img/loginInvalida.png)
![mensagem de alerta](./Caso%20de%20Testes/img/image.png)

## Cenário 002 - Esqueci a senha

### Caso de Teste CT001.002 - Tentativa de recuperação de senha

**Descrição:** 📃
**Dado** que eu esteja na tela de recuperação de senha. **Quando** "Username" for preenchido corretamente e clicar no botão "Resetar senha". **Então** o sistema deve enviar um email para de recuperação para o email cadastrado e uma tela informativa deve ser exibida.

**Status:** 

> [!NOTE]
> PASSOU ✅

**Evidência:** 📸

<br>

![Resetar senha](./Caso%20de%20Testes/img/resetar.png)
![Tela informativa](./Caso%20de%20Testes/img/info.png)

### Caso de Teste CT003.002 - Cancelar a recuperação de senha

**Descrição:** 📃
**Dado** que eu esteja na tela de recuperação de senha. **Quando** clicar no botão "Cancelar". **Então** o sistema deve retornar a Tela de login.

**Status:** 

> [!NOTE]
> PASSOU ✅

**Evidência:** 📸

<br>

![Login cancelado](./Caso%20de%20Testes/img/cancel.png)
![tela login](./Caso%20de%20Testes/img/telaLogin.png)

## Testes Automatizados com Cypress

Os mesmos cenários descritos nos testes manuais foram automatizados utilizando a ferramenta Cypress. Essa abordagem permitiu que os testes fossem executados de forma rápida e repetível, garantindo a consistência dos resultados em diferentes ambientes.

### Objetivo dos Testes Automatizados 📃

Os testes foram automatizados com o objetivo de aumentar a eficiência do processo de teste e garantir a qualidade do sistema OrangeHRM. Ao automatizar os cenários de teste, pudemos economizar tempo e recursos, além de identificar rapidamente regressões e problemas potenciais.

### Descrição dos Cenários Automatizados

Cada cenário de teste descrito anteriormente foi automatizado usando o Cypress. Abaixo estão alguns exemplos de como os cenários foram implementados:

#### Login com Sucesso 🔐✅

O cenário de login com sucesso foi automatizado usando as seguintes etapas:
- Preenchimento do formulário de login com credenciais válidas.
- Clique no botão de login.
- Verificação da página inicial após o login bem-sucedido.

#### Login com Credenciais Inválidas 🔐❌

Para o cenário de login com credenciais inválidas, o seguinte procedimento foi seguido:
- Preenchimento do formulário de login com credenciais inválidas.
- Clique no botão de login.
- Verificação da mensagem de erro exibida após tentar fazer login com credenciais inválidas.


#### Tentativa de Recuperação de Senha 🔑🪛

O cenário de tentativa de recuperação de senha foi automatizado da seguinte maneira:
- Navegação para a tela de recuperação de senha.
- Preenchimento do campo "Username" com informações válidas.
- Clique no botão "Resetar senha".
- Verificação do envio de um e-mail de recuperação para o endereço cadastrado.

#### Cancelamento da Recuperação de Senha 🔑❌

O cenário de cancelamento da recuperação de senha foi automatizado com as seguintes etapas:
- Navegação para a tela de recuperação de senha.
- Clique no botão "Cancelar".
- Verificação do redirecionamento para a tela de login após o cancelamento.

### Relatórios e Resultados 📝

Os resultados dos testes automatizados estão disponíveis no [relatório Cypress](https://fabiopassos10.github.io/OrangeHRM--Testes/). Durante a execução dos testes, foram registradas métricas importantes, como taxa de sucesso, tempo de execução e número de falhas, proporcionando insights valiosos sobre a qualidade do sistema.

<br>
<br>
<br>


> [!WARNING]
> Gostaria de esclarecer que este sistema foi usado apenas para fins educacionais na área de Qualidade de Software. Não havia nenhuma intenção maliciosa por trás dessa utilização, mas sim o propósito de realizar testes manuais e automatizados dos processos de login e recuperação de senha.



<br>

<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=%20FINALIZADO&color=GREEN&style=for-the-badge"/>
</p>




