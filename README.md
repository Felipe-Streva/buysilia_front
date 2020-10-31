## Componentes

### Input
O componente `<Input />` recebe 4 props, o `title`, `type`, `name` e `percWidth`. A propriedade `title` recebe uma string que é o valor do Label referente ao input. A propriedade `type` recebe o tipo de input e a propriedade `name`, o name do input. A propriedade `percWidth` recebe uma string com um valor em porcentagem, ex: `'100%'`. Esse valor é em relação ao elemento em que o componente Input está inserido.

### SideHeader
O componente `<SideHeader />` não recebe props e é para ser utilizado como primeiro elemento da página. Usando na div pai display flex e align-itens center, e com media query em 850px alterando a flex-direction para collumn ele funciona como header lateral e para telas menores, header superior

### SubmitButton

O componente `<SubmitButton />` recebe uma props `text`. Essa propriedade recebe uma string que é o texto do botão. 

### Header 

O componente `<Header />` não recebe props e é para ser utilizado como cabeçalho da página inicial. 

### CardProduct

O componente `<CardProduct />` recebe 3 props, `img`, `title` e `price`. A propriedade `img` recebe uma imagem para ser adicionado no `src` da tag. A propriedade `title` recebe uma string que será o título e a propriedade `price` recebe uma string que será o valor do produto.

