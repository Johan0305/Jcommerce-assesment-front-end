Preguntas para responder

1. ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?

- Las reuniones son 5: Daily Scrum,Sprint Planning,Sprint Review,Retrospective, y refinement. La daily srum es una reunion diaria que se hace para determinar que se hizo el dia anterior y que se va a hacer el dia actual, el sprint planning se hace a inicio de semana sobre en que funcionalidades de la aplicación se va a trabajar. Sprint review es una sesión para ver las funcionalidades implementadas en acción. Retrospective es una ceremonia que se establece con el cliente para dar un feedback de lo trabajado en el sprint. y el refinement es la revisión de las funciones establecidas en el planning.

  2.¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.

- los wirframes es un entorno donde se va a realizar como van a quedar las diferentes vistas de nuestra página. Uno de estos wirframes es Figma

  3.Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.

- var antes de ES6 era la forma de declarar variables, pero con ES6 se implemento let y const, que principalmente otorgan la funcionalidad de tener una variable almacenada en un lexical scope. la diferencia de let y const es que let puede mutar su contenido interno mientras que const es una variable inmutable

  4.¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?

- git checkout -b rama-1,git branch rama-1 desde nuestro Gitbash, la otra forma es ir a nuestro repositorio remoto en este caso Github y en la parte donde están almacenadas las ramas poner el nombre de nuestra rama y abajo de ella va a aparecer una opción que dirá Create "rama-1"

  5.Explicar la diferencia entre git merge y git rebase.

- git merge lo que hace es fusionar las ramas, y git rebase se encarga de sobrepasar nuestra rama master, dejando un comportamiento lineal como si hubieramos trabajado sobre una sola rama

  6.¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?

- un git pull manda la información al repositorio remoto con los cambios efectuados o creados dentro de la rama principal, y el PR es una petición de parte de la persona que hizo el pull para poder fusionar esos cambios, el autor del repositorio local permitirá estos cambios o no

  7.¿Qué es el Virtual DOM?

- Virtual DOM es implementado en React y es un dom que se almacena en la memoria para según el estado que se maneje en nuestra aplicación este se despliegue

8. anexo el css que hice en codepen

.c-section{
display:flex;
flex-direction:column;
width:60%;
align-items:center;
margin-left:350px;
}

h2{
font-size:30px;
display:flex;
width:100%;
justify-content:center;
align-items:center;
color: white;
background-color:black;
height:80px
}

.c-services{
display:grid;
grid-template-columns: repeat(2, 1fr);
}

.c-services\_\_item{
width:90%;
height:250px;
margin-bottom:20px;
text-align:justify;
background-color:rgb(237, 237, 237);
list-style: none;
border-radius:10px;
padding:20px;
}

.c-services\_\_item > h3{
font-size:30px;
text-align:center;
}

.c-services\_\_item > p {
font-size:20px;
}

.c-services\_\_item:hover{
box-shadow: 0px 5px 10px -5px;
}
