# IgNews

<h1 align="center">

<img src="https://raw.githubusercontent.com/khalleb/ignews/main/public/images/avatar.svg" alt="rocketshoes" width="100px"/>

</h1>

<p align="center">
  IGNEWS - Portal de notícias 📰🚀
  <br>
  <br>

 
</p>

---

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requerimentos">Requerimentos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a> &#xa0; &#xa0; | &#xa0;
  <a href="#framed_picture-imagens">Imagens</a> &#xa0; &#xa0;
</p>

<br>

## :dart: Sobre ##

O projeto ig.news é um blog onde os usuários podem ter acesso ao conteúdo de cada postagem de acordo com o status de sua assinatura.<br>
O blog possui um sistema de compra integrado com o STRIPE, e após o usuário realizar o pagamento, sua inscrição estará ativa e pronta para visualizar o conteúdo completo
de todo o blog. Caso o usuário não deseje optar pela assinatura, ele terá acesso limitado ao conteúdo das postagens. E todos os dados necessários para se fazer verificações
de assinaturas ou dados dos usuários, estão salvos no banco de dados FaunaDB.
<br>
<br>
Essa é uma aplicação Serverless, ou seja, todo o processo que dependeria de um backend foi integrado dentro do front e seguindo o padrão da JAMStack.
<br>
As postagens são feitas pelo painel do Prismic CMS e integradas diretamente pelo front.


## :rocket: Tecnologias ##

As seguintes tecnologias foram utilizadas no projeto:

- [Next.js](https://nextjs.org/)
- [Prismic CMS](https://prismic.io/)
- [Stripe](https://stripe.com/)
- [FaunaDB](https://fauna.com/)

## :white_check_mark: Requerimentos ##

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/)

## :checkered_flag: Começando ##

```bash
# Clone this project
$ git clone https://github.com/zingrad/IgNews.git

# Access
$ cd ignews

# Install dependencies
$ yarn install

# Run the project
$ yarn dev

# The server will initialize in the <http://localhost:3000>
```
## Layout 🤩

### Desktop (screenshot):

| Home  | Post List | 
| --- | --- |
| <img src="https://github.com/jfernandesdev/ignews/blob/ff41ff913da29adcbe7811e9e72b6a1d917d0f00/public/layout/layout-desktop-1.png" /> | <img src="https://github.com/jfernandesdev/ignews/blob/ff41ff913da29adcbe7811e9e72b6a1d917d0f00/public/layout/layout-desktop-2.png" /> | 

| Post Preview | Checkout |
| --- | --- |
| <img src="https://github.com/jfernandesdev/ignews/blob/ff41ff913da29adcbe7811e9e72b6a1d917d0f00/public/layout/layout-desktop-3.png" /> | <img src="https://github.com/jfernandesdev/ignews/blob/ff41ff913da29adcbe7811e9e72b6a1d917d0f00/public/layout/layout-desktop-4.png" /> |

### Mobile (screenshot):

| Home | Post List | Post | Checkout |
| --- | --- | --- | --- |
| <img src="https://github.com/jfernandesdev/ignews/blob/ff41ff913da29adcbe7811e9e72b6a1d917d0f00/public/layout/layout-mobile-1.png" width='275px' /> | <img src="https://github.com/jfernandesdev/ignews/blob/ff41ff913da29adcbe7811e9e72b6a1d917d0f00/public/layout/layout-mobile-2.png" width='275px' /> | <img src="https://github.com/jfernandesdev/ignews/blob/ff41ff913da29adcbe7811e9e72b6a1d917d0f00/public/layout/layout-mobile-3.png" width='275px' /> | <img src="https://github.com/jfernandesdev/ignews/blob/ff41ff913da29adcbe7811e9e72b6a1d917d0f00/public/layout/layout-mobile-4.png" width='275px' /> |


