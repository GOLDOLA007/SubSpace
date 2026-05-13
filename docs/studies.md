# 📝 Anotações de Estudo: Newsletter Project

### 1. O Ecossistema (Node & Vite)
Diferente do Java, onde você baixa um JDK, no Frontend moderno usamos o **Node.js** como motor.

- **NPM (Node Package Manager):** É o equivalente ao Maven ou Gradle. Ele gerencia as bibliotecas.

- **Vite:** Uma ferramenta de build extremamente rápida que substituiu o antigo `create-reac-app`. Ele serve o código para o navegador enquanto você desenvolve.

- **2.TypeScript: "java do Frontend"**

    O TypeScript não roda no navegador; ele é "traduzido" (transpilado) para JavaScript.

    - **Interfaces:** Definem contratos. Se o backend Java espera um Long id, a interface TS impede que o front envie uma `string` por exemplo.

    - **Tipagem:** Evita o erro `undefined is not a functiom`.

- **3. React: Componentes**

    Em vez de uma página HTML, dividimos tudo em pequenas peças reutilizáveis.

    - **JSX ou TSX:** É a mistura de HTML com lógica TypeScript

    - **Props (Propriedades):** São os argumentos que passamos para um componente (como os parâmetros de um construtor em Java). **OBS:** Props são imutáveis (read-only) para o componente que as recebe.

    - **Estado (usestate):** É a "memória" do componente. Quando o valor de um `useState`muda, o React redesenha (renderiza) a interface automaticamente.

- **4. Tailwind CSS: Utility-First**

    Ao invés de escrever classes como `.card-subscription {...}`, usamos classes utilitárias que já existem.

    - **Vantagem:** Não há conflito de CSS (o estilo de um botão nao vaza para o outro).

    - **Arbitrary Values `[]`:** Permite usar valores exatos quando as classes padrão não bastam, ex: `bg-[#121212]`.

    - **Responsividade:** O prefixo `md:` facilita criar o layout para desktiop sem quebrar o celular.

- **5. Gerenciamento de Estado do Modal**
    
    Para `PurchaseWindow` funcionar, aplicamos o conceito de **Lifting State Up** (Subir o Estado):

    - O Modal não decide sozinho se está aberto ou fechado.

    - O componente pai (`App.tsx`) controla isso através de um booleano (`isModalOpen`).

    - **Renderização Condicional:** Usamos `{isOpen ** <Componente />}` ou `if (!isOpen) return null`. Isso significa que o elemento só passar no DOM quando necessário.

- **6. Fluxo de Dados do Projeto:**

    1. **Usuário clica no Card:** Dispara uma função `onClick` passada via Props.

    2. **App.tsx captura o clique:** Salva os dados do plano clicado no estado `selectdPlan`.

    3. **App.tsx abre o Modal:** Muda `isModalOpen` para `true`.

    4. **PurchaseWindow recebe os dados:** Exibe o título e o preço corretos baseados no que foi clicado.