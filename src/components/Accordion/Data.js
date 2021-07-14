import RocketIcon from '../../assets/rocket.svg';
import FrontPageIcon from "../../assets/front.svg";
import BackPageIcon from "../../assets/database.svg";
import MobileIcon from "../../assets/mobile.svg";
import BootcampIcon from "../../assets/bootcamp.svg";

export const Data = [
    {
        titleCard: "Fundamentos",
        titleContent: "Trilha de Fundamentos",
        firstParagraph: "Essa trilha é para você que tem curiosidade mas não conhece muito sobre o mundo da programação.",
        seccondParagraph: " Separamos links com informações complementares e selecionamos cursos GRATUITOS para você dar início nos seus estudos em:",
        itemList: [
            {
                text: "Algorítmos e Lógica de Programação;"
            },
            {
                text: "Fundamentos de GitHub;"
            },
            {
                text: "Conhecendo o HTML;"
            },
            {
                text: "Utilizando a estilização com CSS."
            },
        ],
        buttonLinkRedirect: "trail-fundamentals",
        image: RocketIcon,
        textButton: "Conhecer trilha",
        showButton: true

    },
    {
        titleCard: "FrontEnd",
        titleContent: "Trilha FrontEnd",
        firstParagraph: "Quer conhecer frameworks ou aprender algum recurso para melhorar o básico?",
        seccondParagraph: "Essa trilha é para você, caso já saiba o básico e queira incrementar suas páginas com Javascript ou utilizar algum Framework:",
        itemList: [
            {
                text: "Desenvolvimento Web com Javascript;"
            },
            {
                text: "Utilizando jQuery;"
            },
            {
                text: "Conhecendo e aplicando o ReactJS;"
            },
            {
                text: "Curso de Angular."
            },
        ],
        buttonLinkRedirect: "trail-frontend",
        image: FrontPageIcon,
        textButton: "Conhecer trilha",
        showButton: true
    },
    {
        titleCard: "BackEnd",
        titleContent: "Trilha Backend",
        firstParagraph: "Essa trilha é para você que gostaria de se aprofundar no desenvolvimento de APIs, conhecer um pouco mais sobre armazenamentos de informações em banco de dados por exemplo.",
        seccondParagraph: "",
        itemList: [
            {
                text: "Em construção.",
            },
        ],
        buttonLinkRedirect: "trail-back",
        image: BackPageIcon,
        textButton: "Conhecer trilha",
        showButton: false,
    },
    {
        titleCard: "Mobile",
        titleContent: "Trilha Mobile",
        firstParagraph: "Cansou de olhar aqueles lindos aplicativos instalados no seu celular e pensar, será que eu consigo criar um para mim? Que tal dar uma olhada nesses conteúdos bacana que selecionamos para você?",
        seccondParagraph: "",
        itemList: [
            {
                text: "Em construção."
            },
        ],
        buttonLinkRedirect: "trail-mobile",
        image: MobileIcon,
        textButton: "Conhecer trilha",
        showButton: false,

    },
    {
        titleCard: "Bootcamps e mais!",
        titleContent: "Bootcamps e mais",
        firstParagraph: "Os Bootcamps são uma ótima maneira de você adquirir conhecimento na prática.",
        seccondParagraph: "Separamos bootcamps que permitirão que você realize uma imersão na tecnologia. Sabemos que temos Devas em todo o Brasil, e por isso, selecionamos também conteúdos Online, para acessar de onde estiver.",
        itemList: [
        ],
        buttonLinkRedirect: "bootcamps",
        image: BootcampIcon,
        textButton: "Conhecer Bootcamps",
        showButton: true

    }
]
