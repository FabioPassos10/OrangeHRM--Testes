# Plano de Testes

Este documento contém o plano de testes para os cenários de teste do sistema OrangeHRM.

# Sistema

O OrangeHRM é uma plataforma de gerenciamento de recursos humanos (HRM) que oferece um ambiente robusto e flexível para testes. Com ele, você pode explorar e validar várias funcionalidades relacionadas à gestão de pessoal.

|        Link          |
|  ------------------- |
| [https://opensource-demo.orangehrmlive.com/web/index.php/auth/login](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login) |


# Participantes


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
<br>

![Login invalido](./Caso%20de%20Testes/img/loginInvalida.png)
![mensagem de alerta](./Caso%20de%20Testes/img/image.png)

## Cenário 002 - Esqueci a senha

### Caso de Teste CT001.002 - Tentativa de recuperação de senha

**Descrição:**
**Dado** que eu esteja na tela de recuperação de senha. **Quando** "Username" for preenchido corretamente e clicar no botão "Resetar senha". **Então** o sistema deve enviar um email para de recuperação para o email cadastrado e uma tela informativa deve ser exibida.

**Status:** 

> [!NOTE]
> PASSOU ✅

**Evidência:** 📸

<br>
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
<br>

![Login cancelado](./Caso%20de%20Testes/img/cancel.png)
![tela login](./Caso%20de%20Testes/img/telaLogin.png)




> [!WARNING]
> Gostaria de esclarecer que este sistema foi usado apenas para fins educacionais na área de Qualidade de Software. Não havia nenhuma intenção maliciosa por trás dessa utilização, mas sim o propósito de realizar testes manuais e automatizados dos processos de login e recuperação de senha.

