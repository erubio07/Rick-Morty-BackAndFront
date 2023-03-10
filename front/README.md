<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
 -->
<!-- # HW 08: React-Estado-LifeCycle | Integraci??n

## **Duraci??n estimada ????**

50 minutos

<br />

---

## **Rick & Morty App**

### **INTRO**

Hasta el momento, en nuestra Rick & Morty App tenemos estos 3 Componentes:

-  Card.jsx
-  Cards.jsx
-  SearchBar.jsx

Adicionalmente, vamos a crear otro componente denominado `Nav` que ser?? nuestra barra superior de navegaci??n, en la cual incluiremos el componente `SearchBar`.

Tambi??n vamos a reestructurar nuestra vista **_"Home"_**, que no es m??s que nuestro archivo `App.js` para darle una forma m??s ordenada.

<br />

---

### **COMENCEMOS**

En el archivo `App.js` ya tenemos importados y estamos renderizando los 3 componentes que vamos a codear. Revisa el c??digo, ver??s que le estamos pasando props a estos componentes.

<br />

---

### **??????????? EJERCICIO 1**

### **Crear Nav**

1. Crear el componente `Nav`.
2. Escribir el c??digo correspondiente en `components/Nav.jsx`.

> **Hint**: Este componente debe incluir el componente `SearchBar`.

<br />

---

### **??????????? EJERCICIO 2**

### **Reestructurar Home**

1. Veamos primero una imagen del resultado final y pensemos la estructura general:

<img src="./img/layout.png" width='800px'/>

> -  **Recuadro rojo**: Nav
> -  **Recuadro amarillo**: SearchBar
> -  **Recuadro verde**: Cards
> -  **Recuadro azul**: Card

2. Ahora vamos a modificar el contenido del archivo `App.js`:

   -  En `App` s??lo vamos a renderizar los componentes `Cards` y `Nav`.
   -  Ya no vamos a renderizar la primera `Card` "suelta" que pusimos en la primera clase. Ahora el componente `Cards` ser?? quien contenga todas las `Card` individualmente.
   -  Lo mismo sucede con `SearchBar`. No lo vamos a seguir renderizando de forma directa en App, debido a que ya se encuentra dentro de `Nav`.

3. Importar y renderizar los componentes que vamos a utilizar.
4. Aplicar estilos b??sicos al componente **_Nav_**.

???? Resultado esperado:

<img src="./img/home1.png" width='800px'/>

<br />

---

### **??????????? EJERCICIO 3**

### **Implementar un estado**

Necesitamos mantener actualizado el listado de personajes a mostrar. Para ello debemos crear un estado en el componente `App.js` donde tengamos el array de personajes.

1. Borra el import que traes de data.js (ya no vamos a usar m??s los datos de este archivo).
2. Importa el hook useState.
3. Crea un estado `characters` donde guardaremos el array de personajes.

<br />

---

### **??????????? EJERCICIO 4**

### **Funci??n para agregar personajes**

Ahora debemos crear una funci??n llamada `onSearch` para agregar nuevos personajes a nuestro estado `characters` y se la pasaremos al `SearchBar` mediante el `Nav`.

> **Hint**: Como a??n no hemos hecho el llamado a la API para obtener los datos del personaje, agregamos uno por default para ver que est?? funcionando:

```jsx
const example = {
   name: 'Morty Smith',
   species: 'Human',
   gender: 'Male',
   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
};
```

<br />

---

### **??????????? EJERCICIO 5**

### **Le pasamos la funci??n a Nav**

Nuestra funci??n reci??n creada (que modifica el estado `characters`) se la pasamos al componente `Nav`.

<br />

---

### **??????????? EJERCICIO 6**

### **Seguimos pasando la funci??n para que llegue a su destino**

Quien finalmente debe ejecutar la funci??n `onSearch` no es el `Nav` sino el `SearchBar`, por lo que debemos hacerle llegar dicha funci??n.

<br />

---

### **??????????? EJERCICIO 7**

### **Analizando funci??n onSearch**

En la homework anterior **06-React-Intro, 02 - Integration**, ya hab??amos creado el componente `SearchBar` que recib??a la funci??n como par??metro y la ejecutaba cuando se hac??a un `submit` del form.

En este punto la funci??n ya deber??a ejecutarse. Cada vez que le demos click al bot??n `Agregar` un nuevo personaje se a??ade a nuestro estado `characters`, y por cada uno de ellos nuestro componente `Cards` renderiza una `Card`.

Si observamos el c??digo anterior estamos llamando a la funci??n `onSearch` sin pasarle ning??n par??metro, pero quisi??ramos que ese par??metro dependa del input ingresado por el usuario.

<br />

---

### **??????????? EJERCICIO 8**

### **Pas??ndole par??metros a la funci??n**

1. Modifica el componente `SearchBar` para que mantenga un **estado** interno del nombre del personaje (`character`) escrito por el usuario y que cuando haya un cambio en el input, lo detecte mediante el listener `onChange` y actualice dicho estado.

2. Adicionalmente, pasar dicho estado `character` como par??metro de la funci??n `onSearch` cuando la llamamos en el `submit`; para que utilice el estado, que contiene lo que ingres?? el usuario y ??ste valor llegue as?? a la funci??n **_onSearch_** que tenemos en **App.js**.

<br />

---

### **??????????? EJERCICIO 9**

### **Buscando datos reales**

1. Comenta el c??digo que engloba la constante **example**

2. Ahora debemos modificar la funci??n `onSearch` para que obtenga los datos necesarios desde la API de [Rick&Morty](https://rickandmortyapi.com). Para ello vamos a utilizar `fetch` para hacer la llamada y obtener el resultado. Por el momento s??lo vamos a obtener los personajes por ID, ya que si los buscamos por nombre hay demasiados resultados debido a que los mismos se repiten bastante.

3. Mostrar un mensaje en caso de que el personaje no exista.

> **Hint**: Como a??n no has visto promesas, tienes este snippet para que copies y pegues la funci??n **_onSearch_**:

```js
function onSearch(character) {
   fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
}
```

> **Nota**: si tienes conocimiento base en promesas y deseas hacerlo de otra manera, puedes hacer la llamada utilizando `axios` para traer los datos. En caso que no, te invitamos a que veas el c??digo y analices qu?? puede estar pasando.????

<br />

---

### **??????????? EJERCICIO 10**

### **Cerrar cards**

Por ??ltimo, recordemos que en la homework anterior **06-React-Intro, 02 - Integration** hab??amos creado el componente `Card` para que reciba una funci??n como par??metro. ??sta va a ser la encargada de eliminar esa card al momento de hacer click en el bot??n `X`.

Para ello es necesario definir dicha funci??n `onClose` en **App.js**, para que a partir del id recibido, elimina dicho personaje del array de personajes del **_estado_**.

> **Hint**: Puedes utilizar el m??todo `filter`.

---

???? Resultado esperado:

<img src="./img/final.gif" width='800px'/>

Listo! tu app es ahora din??mica e interactiva!! ????????????

<br />

---

## **???? EJERCICIO EXTRA**

-  Controlar que no se puedan agregar personajes repetidos.
-  Generar un bot??n en la navbar que agregue un personaje random (Hint: hay 826 personajes en total).
 -->

<!--  # HW 09 - React-Routing | Integraci??n

## **Duraci??n estimada ????**

50 minutos

<br />

---

## **Rick & Morty App**

### **INTRO**

Continuamos con nuestra Rick & Morty App. Utilizaremos React-Router-DOM el cual nos va a permitir enrutar nuestra SPA. Esto quiere decir que podremos decidir en que path o "link" se renderice cada componente.

Al finalizar, habremos creado tres rutas por las que podremos navegar:

- **"/home"**: esta ser?? la ruta del Home (vista principal/general).
- **"/detail/:detailId"**: en esta ruta encontraremos informaci??n m??s detallada sobre el personaje en particular.
- **"/about"**: en esta ruta colocar??s tu nombre y describir??s de qu?? trata la aplicaci??n Rick & Morty.

<br />

---

## **COMENCEMOS**

Vamos a comenzar creando los componentes que nos faltan en nuestra carpeta components. Creamos `About.jsx` y `Detail.jsx` con sus respectivos archivos. S??lo los crearemos, a??n no los construiremos. Tambi??n creamos el archivo `.css` para el estilado. Recuerda que puedes utilizar cualquier formato de estilos (in-line, module, styled components, etc)

C??mo sabemos, `react-router-dom` nos da la posibilidad de crear rutas din??micas. Estas rutas ser??n los path o links en el que se renderizar?? el componente que nosotros decidamos. Para este ejercicio queremos que en cada link se vea lo siguiente:

- `<Nav />` debe que aparecer en todas las rutas.
- `<Cards />` debe aparecer s??lo en la ruta `/home`.
- `<About />` debe aparecer s??lo en la ruta `/about`.
- `<Detail />` debe aparecer s??lo en la ruta `/detail/:detailId`

<br />

---

### **??????????? EJERCICIO 1**

### **Instalar y configurar `react-router-dom`**

Instala `react-router-dom` desde la terminal. Importa y envuelve la aplicaci??n con "**BrowserRouter**" en el archivo index.js.

Importa los elementos "**Routes**" y "**Route**", para que luego definamos las rutas en el archivo app.js.

<br />

---

### **??????????? EJERCICIO 2**

### **Mi perfil**

Ahora si construiremos el componente `<About />`. Este componente ser?? una vista que contenga tu informaci??n y una explicaci??n acerca de la aplicaci??n!

Esto significa que es completamente libre. Puedes mostrar incluso una foto tuya. Esto le servir?? a las personas que vean tu App para conocer al creador ???????.

En la Navbar agrega el link About que dirija al componente **About** y el link Home para que dirija al componente **Home**.

<br />

---

### **??????????? EJERCICIO 3**

### **Routing time!**

En nuestro archivo "app.js" (aplicaci??n), crea las rutas necesarias para que los componentes `<About />`, `<Cards />` y `<Nav />` se rendericen en sus links correspondientes. Recuerda que en el **EJERCICIO 1** ya est??n especificadas las rutas.

Respecto al componente `<Detail />`, su ruta recibir?? el par??metro **detailId**, por lo que debes asegurarte de escribir bien el path de esta ruta.

> **Nota:** Comprueba en tu navegador que los links rendericen el componente correcto, y que el componente `<Nav />` se vea siempre.

<br />

---

### **??????????? EJERCICIO 4**

### **Detail redirection**

Ahora nuestra SPA cuenta con tres rutas distintas: "`/home`", "`/detail/:detailId`" y "`/about`".

Para este ejercicio:

1. En el componente `<Card />` importa y envuelve el nombre del personaje con el elemento "**Link**". Tiene que redirigirnos a la ruta de cada personaje.
2. A este componente deber??s pasarle por **props** el "**id**" del personaje para usarlo en el Link.

```js
// Card.js
...
<Link to={`/detail/${props.id}`} >
  <h5 className="card-title">{props.name}</h5>
</Link>
...
```

<br />

---

### **??????????? EJERCICIO 5**

### **Construcci??n del Detail**

??Genial! Cuando hacemos click sobre el nombre en una Card esta nos redirige a la ruta con el ID del personaje. Ahora necesitamos crear el componente que mostrar?? toda la informaci??n del personaje.

Para obtener esta informaci??n importa los hooks **useState** de `react` y **useParams** de `react-router-dom` en el componente `<Detail />`.

1. Primero obten el ID del personaje mediante **useParams**.

2. Crea un estado local con el nombre **character**.

3. En este paso importaremos el hook **useEffect** de `react`. Una vez importado, copia el siguiente c??digo y p??galo en el cuerpo del componente.

```js
useEffect(() => {
  fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
    .then((response) => response.json())
    .then((char) => {
      if (char.name) {
        setCharacter(char);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    })
    .catch((err) => {
      window.alert("No hay personajes con ese ID");
    });
  return setCharacter({});
}, [id]);
```

> **NOTA:** Este c??digo es el que buscar?? al personaje de la API cada vez que el componente se monte. Y luego, cada vez que se desmonte, borrar?? su informaci??n.

<br />

---

### **??????????? EJERCICIO 6**

Ahora en tu estado local **character** tendr??s toda la informaci??n del personaje disponible para que la renderices en este componente (`<Detail />`). Debes traer la siguiente informaci??n:

- Name
- Status
- Specie
- Gender
- Origin
- Image

D??ndole estilos deber??a quedarte algo similar a esto:

<img src="./img/final_detail.png" width='800px'/>

<br />

---

### **??????????? EJERCICIO 7**

Crea un bot??n en el componente `<Detail />` que te permita regresar a "`/home`".

<br />

---

### **???? EXTRA CREDIT**

Ahora te desafiamos a que crees un nuevo componente llamado **Error**. A este componente le podr??s dar los estilos que quieras, pero la idea es que se muestre un mensaje de error 404.

Pueden inspirarte en el siguiente link: "https://github.com/errroorrxd".

El desaf??o es el siguiente: haz que este componente se muestre cada vez que el usuario ingrese a cualquier otra ruta que no exista. Es decir que no la hayas especificado en esta homework. Por ejemplo, si creaste una ruta "`/home`" y "`/about`", y el usuario en el navegador escribe y "`/henry`", deber??a mostrar el error 404.
 -->

 <!-- ## HW 10: React-Forms | Integraci??n

## **Duraci??n estimada ????**

60 minutos

<br />

---

## **Rick & Morty App**

### **INTRO**

En la integraci??n de hoy crearemos un formulario de login. As??, cada vez que ingresemos a nuestra app tendremos que logearnos para utilizarla. Tanto el formulario como sus validaciones las haremos con Javascript.

Nuestro formulario va a estar compuesto de:

-  Username: el nombre de usuario tiene que ser un email, si no, tiene que mostrar un error.
-  Password: la contrase??a tiene que contener por lo menos un n??mero y tener una longitud de entre 6 y 10 caracteres, si no debe mostrar un error.

<br />

---

## **COMENCEMOS**

Vamos a comenzar creando el componente que nos falta en nuestra carpeta components. Creamos `Form.jsx` con su respectivo archivo `.css` para darle estilos.

---

### ??????????? EJERCICIO 1

### Estructura

Vamos a trabajar en el archivo `Form.jsx` que acabas de crear.

Primero agregaremos una etiqueta `<div />` que envolver?? a todo el componente. Tiene que haber una etiqueta `<label />` y una `<input />` tanto para el **username** como para la **password**. Por ??ltimo, agrega una etiqueta `<button />`.

Dale algo de estilos al componente. Te dejamos una plantilla de c??mo puede quedar!

<img src="./img/form_v1.png" alt="" />

<br />

---

### **??????????? EJERCICIO 2**

### **Ruteo**

Ahora deber??s cumplir los siguientes dos pasos:

1. Crea una ruta en el archivo `app.jsx` para que el formulario se renderice en el path "`/`".
2. Si obervas la imagen del ejercicio anterior, la barra de navegaci??n tambi??n se muestra en el **Login**. Cambia esto de modo que el `<Nav />` se muestre en todos lados, menos en el **Login**.

> **PISTA:** investiga sobre el hook "useLocation" de react-router-dom, y piensa c??mo hacer un renderizado condicional.

<br />

---

### **??????????? EJERCICIO 3**

### **Estado del formulario**

El siguiente paso es poder controlar nuestro formulario. Para esto trabajaremos con un estado local con esta estructura:

```js
// Form.jsx
const [userData, setUserData] = React.useState({ username: '', password: '' });
```

Ahora conecta tu estado local con los inputs correspondientes utilizando la propiedad `value`.

Por ??ltimo, usaremos el evento `onChange` en ambos inputs para poder guardar la informaci??n del usuario. Te sugerimos que crees una funci??n **handleInputChange** la cual reciba el evento del input, y a partir de esta se modifique el estado local.

<br />

---

### **??????????? EJERCICIO 4**

### **Validaciones**

En tu componente `<Form />` crea un nuevo estado local llamado "**errors**". Este es el estado que usar??s para encontrar errores en el formulario.

Luego crea un nuevo archivo en la carpeta de tu componente Form.jsx con el nombre "**validation.js**". Aqu?? dentro deber??s crear una funci??n que valide lo siguiente:

**USERNAME**

-  el nombre de usuario tiene que ser un email _(explora validaci??nes REGEX en internet!)_.
-  el nombre de usuario no puede estar vac??o.
-  el nombre de usuario no puede tener m??s de 35 caracteres.

**PASSWORD**

-  la contrase??a tiene que tener al menos un n??mero.
-  la contrase??a tiene que tener una longitud entre 6 y 10 caracteres.

No te olvides de renderizar y darle estilos a tus errores! Te dejamos un ejemplo de c??mo puede quedar.

<img src="./img/input_error.png" alt="" >

<br />

---

### **??????????? EJERCICIO 5**

### **Simulaci??n de seguridad**

Ahora simularemos una base de datos donde est?? guardado un username y password. De esta forma, solo si la informaci??n de usuario coincide podr?? usar la aplicaci??n. Para esto:

1. En el archivo `App.js` crea lo siguiente:

   -  Un estado local llamado "**access**" que se inicialice en `false`.
   -  Una variable llamada "**username**", y que sea igual a tu email.
   -  Una variable "**password**", y que sea igual a una contrase??a.

2. Crea una funci??n llamada "**login**" que reciba por par??metro "_userData_". Esta funci??n tiene que preguntar si el username y password que declaraste m??s arriba son iguales a los que les est?? llegando por par??metro. En caso afirmativo, el estado local access ahora ser?? `true`. Importa el hook "**useNavigate**" de `react-router-dom` y haremos que nos redirija a `/home` si la informaci??n es correcta.

```jsx
const navigate = useNavigate();
const [access, setAccess] = useState(false);
const username = 'ejemplo@gmail.com';
const password = '1password';

function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
}
```

3. Por ??ltimo, lleva el siguiente c??digo a tu componente (no te olvides de importar el `useEffect`).

```javascript
//App.js
useEffect(() => {
   !access && navigate('/');
}, [access]);
```

Esto no nos dejar?? navegar por la aplicaci??n, al menos que ingresemos la informaci??n correcta!

<br />

---

### **??????????? EJERCICIO 6**

### **Login**

Ahora le daremos la funcionalidad de cambiar los permisos a nuestro login! Para esto:

1. En el archivo `App.js`, le pasaremos la funci??n **login** que creaste en el ejercicio anterior por props al componente `<Form />`.

2. En el componente `<Form />`, crea una funci??n "**handleSubmit**". Esta funci??n por dentro s??lo debe ejecutar la funci??n "**login**" recibida por props. No te olvides de pasarle por par??metro tu estado local _userData_!

??Listo! Ya tienes un Login funcional!!????????????

Pruebalo ingresando la informaci??n que declaraste previamente.

<br />

---

### **???? EJERCICIO EXTRA**

-  Ahora te desafiamos a que crees un bot??n "**Logout**" en tu componente `<Nav />`. Si lo presionas debe quitar los permisos de acceso y redirigirte autom??ticamente a tu componente `<Form />`.

> **PISTA:** lo puedes hacer creando una funci??n **logout** en tu archivo App.js.
 -->

<!-- ## HW 12: React-Redux | Integraci??n

## **Duraci??n estimada ????**

x minutos

<br />

---

## **Rick & Morty App**

## **INTRO**

En la integraci??n de hoy crearemos un espacio en el que podremos guardar a nuestros personajes favoritos. ??Podremos agregarlos y eliminarlos!

Para esto:

-  ?????? Fav button: nuestras Cards tendr??n un bot??n para agregar/eliminar de favoritos.
-  ???? Vista nueva: crearemos una nueva vista en la que se muestre espec??ficamente todos nuestros personajes favoritos.

<br />

---

### **COMENCEMOS**

Para comenzar, en tu terminal dir??gete a la carpeta ra??z de tu proyecto. All?? tendr??s que instalar las siguientes dependencias:

```bash
npm i redux react-redux redux-thunk
```

Una vez instaladas, a la altura de la carpeta "_components_" (es decir, que sea una carpeta hermana), crea una nueva carpeta llamada "**redux**". Dentro de ella crea los archivos `actions.js`, `store.js` y `reducer.js`.

Dentro del archivo `store.js`, haz la configuraci??n del store. Una vez configurado, deber??s importarlo en tu archivo `index.js` junto con el Provider, y configurarlo en el wraper finalmente.

> **NOTA:** puedes guiarte por c??mo lo tienes hecho en la homework anterior. Ten en cuenta que el reducer lo crear??s en el siguiente paso.

<br />

---

## **??????????? EJERCICIO 1**

### **REDUCER**

Dir??gete al archivo en el que se encuentra tu **reducer**. All?? deber??s:

1. Crear un _**initialState**_ con una propiedad llamada "**myFavorites**". Esta propiedad ser?? un array vac??o.

2. Luego deber??s crear tu reducer. Recuerda que este recibe dos par??metros, y dentro de ??l hay un switch.

> **NOTA:** ten en cuenta el modo en el que lo exportas, y c??mo lo importas dentro de tu store.

3. Dentro del switch de tu reducer, crea un nuevo caso en el que podr??s agregar el personaje que recibes por payload a tu estado "_myFavorites_".

4. Crea un nuevo caso en el elimines el personaje que recibes por payload de tu estado inicial. Deber??s filtrar el personaje a partir de su **ID**.

5. No te olvides de tu caso _**default**_.

<br />

---

## **??????????? EJERCICIO 2**

### **ACTIONS**

Crea dos _actions-creators_.

-  Una que sea para agregar personajes a tu lista de favoritos. Recibe por par??metro el personaje.

-  Otro que sea para eliminar un personaje de la lista de favoritos. Recibe por par??metro el id del personaje.

> **NOTA:** no olvides que el nombre que asignes en la propiedad "TYPE" de tu acci??n, debe coincidir exactamente con el nombre de los casos que hayas asignado en tu reducer.

<br />

---

## **??????????? EJERCICIO 3**

### **FAV BUTTON**

Ahora crearemos un bot??n para agregar y eliminar de favoritos! Para esto:

1. Dir??gete al componente `Card`. Aqu?? deber??s crear una funci??n **mapDispatchToProps** que contenga dos funciones: Una para agregar tu personaje favorito, y otra para eliminarlo. Ten en cuenta que deber??s importar las _**actions**_ que ya creaste.

2. Luego conecta esta funci??n con tu componente, y recibe ambas funciones despachadoras por props.

3. Ahora crea un estado local en tu componente que se llame **isFav**, e inicial??zalo en `false`.

4. Crea una funci??n en el cuerpo del componente llamada **handleFavorite**. Esta funci??n estar?? dividida en dos partes:

   -  Si el estado _**isFav**_ es `true`, entonces settea ese estado en false, y despacha la funci??n **deleteFavorite** que recibiste por props pas??ndole el **ID** del personaje como argumento.
   -  Si el estado _**isFav**_ es `false`, entonces settea ese estado en true, y despacha la funci??n **addFavorite** que recibiste por props, pas??ndole `props` como argumento.

5. Ahora te ayudaremos a crear un renderizado condicional. Si tu estado local `isFav` es true, entonces se mostrar?? un bot??n. Si es false, se mostrar?? otro bot??n. Para esto, copia y pega el siguiente c??digo al comienzo del renderizado de tu componente (no te olvides de darle estilos).

```javascript
{
   isFav ? (
      <button onClick={handleFavorite}>??????</button>
   ) : (
      <button onClick={handleFavorite}>????</button>
   );
}
```

En este punto deber??a quedarte algo como esto:

<img src="./img/favButton.gif" alt="" />

6. Una vez hecho esto, nos tenemos que asegurar que el status de nuestro estado local se mantenga aunque nos vayamos y volvamos al componente. Para esto vamos a agregar en este componete una funci??n **mapStateToProps**. Esa funci??n debe traer nuestro estado global **myFavorites**. Rec??belo por `props` dentro de tu componente.

7. Este `useEffect` comprobar?? si el personaje que contiene esta `Card` ya est?? dentro de tus favoritos. En ese caso settear?? el estado **isFav** en true. C??pialo y p??galo dentro de tu componente (no te olvides de importarlo).

```javascript
useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);
```

> **DESAF??O:** te desafiamos a que reconstruyas ese useEffect, pero utilizando un **bucle For** en lugar de un **.forEach()**.

<br />

---

## **??????????? EJERCICIO 4**

### **COMPONENTE DE FAVORITOS**

Dir??gete a tu carpeta de componentes, y crea all?? dentro una carpeta que contenga un archivo `Favorites.jsx` y otro `favorites.css`.

1. Crea una ruta en el archivo `App.js` para mostrar este componente. La ruta se puede llamar **/favorites**. Tambi??n crea un bot??n en tu `Navbar` que te redirija a esta ruta, y otro que te devuelva a tu `Home`.

2. Dentro de este componente crea una funci??n **mapStateToProps**. Esta funci??n debe traer nuestro estado global _**myFavorites**_ a este componente. Luego rec??belo por props.

3. Una vez que tengas la lista de tus personajes favoritos dentro de tu componente, deber??s mappearlo (recorrerlo) y re-renderizar un `<div>` con informaci??n del personaje.

> **NOTA:** no te olvides de darle estilos al componente.

<br />

---

### **??LISTO! YA FUNCIONA TODO**

Todo el trabajo que hiciste en esta integraci??n deber??a darte un resultado y funcionamiento similar a este:

<img src="./img/favDemostration.gif" alt="" />

<br />

---

## **???? EJERCICIO EXTRA**

### **??Ahora te proponemos dos desaf??os!**

**1.** Si revisas, esta aplicaci??n tiene un peque??o bug que tendr??s que resolver... Cuando presionas el ?????? de una de las Cards, el personaje aparece en la vista de "**Favoritos**". Pero si luego eliminas el personaje, este a??n permanece en esta vista. Busca la manera para que cuando elimines un personaje, tambi??n se elimine de "**Favoritos**" (si es que est?? all??).

**2.** Te animamos a que crees, dentro de esta misma aplicaci??n, una nueva vista que sea tu "**PORTFOLIO**". Aqu?? podr??s agregar/eliminar/editar tus proyectos construidos durante el bootcamp en Henry!
 -->

<!-- ## HW 13: React-Hooks | Integraci??n

## **Duraci??n estimada ????**

x minutos

<br />

---

## **Rick & Morty App**

## **INTRO**

En esta homework crearemos dos cosas????

-  Por un lado, haremos un **filtrado** para nuestros personajes favoritos. Vamos a filtrar todos los personajes por su g??nero. En total hay cuatro g??neros:

```javascript
['Male', 'Female', 'unknown', 'Genderless'];
```

-  Por otro lado, haremos un **ordenamiento** tambi??n para nuestros personajes favoritos. Vamos a ordenar todos los personajes por su id (de mayor a menor y viceversa).

<br />

---

## **??????????? EJERCICIO 1**

### **ACTIONS**

Dir??gete al archivo en el que se encuentran tus **actions**. All?? deber??s:

1. Crear una action-creator con el nombre "**_filterCards_**". Esta action-creator recibir?? por par??metro un **status**. La action que retornar?? tendr?? un _type_ llamado "**FILTER**", y dentro del _payload_ ir?? el g??nero recibido.

2. Crear una action-creator con el nombre "**_orderCards_**". Esta action-creator recibir?? por par??metro un **id**. La action que retornar?? tendr?? un _type_ llamado "**ORDER**", y dentro del _payload_ ir?? el id recibido.

<br />

---

## **??????????? EJERCICIO 2**

### **REDUCER**

Para comenzar a trabajar, primero tendremos que crear un estado global en el que se guarden todos nuestros personajes a medida que los vamos agregando. Dir??gete al archivo en el que se encuentra tu reducer:

1. Crea un nuevo estado global (dentro del _initialState_) llamado _**allCharacters**_. Este debe ser un arreglo vac??o.

2. Dentro del caso **ADD_FAV** est??s haciendo una copia de tu estado _**myFavorites**_. Tendr??s que reemplazar esto por una copia de tu nuevo estado _**allCharacters**_. Una vez hecho esto, en el estado que retorna este caso deber??s agregar tambi??n la propiedad _**allCharacters**_ e igualarla a la copia de tu estado.

3. Crea un caso con el nombre "_FILTER_". Haz una copia de tu estado "**_allCharacters_**" mediante destructuring. Filtra aquellos personajes que tengan el mismo g??nero que recibes por payload. Retorna tu estado global, pero que la propiedad **_myFavorites_** sea igual al filtrado que haz hecho.

4. Crea un caso con el nombre "_ORDER_". Haz una copia de tu estado "**_allCharacters_**" mediante destructuring. Utiliza el m??todo **sort** de arreglos para ordenar tus personajes en base al n??mero de su ID. Si el _payload_ es "**Ascendiente**", entonces de menor a mayor. Si el _payload_ es "**Descendiente**, entonces de mayor a menor. Retorna tu estado global, pero que la propiedad **_myFavorites_** sea igual al ordenamiento que haz hecho.

> **NOTA:** investiga en la web sobre c??mo funciona el m??todo sort.

<br />

---

## **??????????? EJERCICIO 3**

### **FILTER/ORDER COMPONENT**

Dir??gete al archivo en el que se encuentra tu componente **Favorites**. All?? deber??s:

1. Dentro de un `div`, crea dos elementos de HTML **selector**.

   -  Dentro del primero le pasaremos dos opciones: **Ascendente** y **Descendente**. Aseg??rate de pasarles estos valores en sus atributos `value`. Por ejemplo:

   ```html
   <option value="Ascendente">Ascendente</option>
   ```

   -  Dentro del segundo p??sales las opciones: **Male**, **Female**, **Genderless** y **unknown**. Aseg??rate de pasarles estos valores en sus atributos `value`. Por ejemplo:

2. Cada vez que se seleccione una opci??n de ordenamiento, despacha la action "**orderCards**". Recuerda pasarle por par??metro el `e.target.value` del input. Utiliza el hook `useDispatch`.

3. Cada vez que se seleccione una opci??n de filtrado, despacha la action "**filterCards**". Recuerda pasarle por par??metro el `e.target.value` del input. Utiliza el hook `useDispatch`.

<br />

---

A esta altura, tu filtro y ordenamiento deber??a estar funcionando de la siguiente manera!

<img src="./img/example.gif" alt="" />
 -->

<!--  # HW 02: WebServer | Integraci??n

## **???? Duraci??n estimada**

x minutos

<br />

---

## **???? Rick & Morty App**

### **???? INTRO**

Hasta el momento hemos trabajado en nuestra app Rick and Morty en el lado frontend. A partir de ahora continuaremos con nuestra app desde el lado backend.

En esta homework, vamos a estructurar nuestro proyecto, crear nuestro primer server y conectar front con back.

<br />

---

### **??????????? EJERCICIO 1**

### **Estructuraci??n de Proyecto**

1. Dir??gete al directorio donde tienes el proyecto `Rick & Morty` y ??brelo en tu VSC.

2. En la ra??z de tu proyecto crea una carpeta llamada `front`.

3. Todo el contenido trabajado durante el m??dulo 2, gu??rdalo dentro de la carpeta **front**

4. Crea una segunda carpeta al mismo nivel de la carpeta **front** con el nombre `back`.

5. Dentro de la carpeta **back** crea una nueva carpeta con el nombre de **src**.

6. Dentro de la carpeta **src** debes crear lo siguiente:

   -  Un archivo llamado `app.js`.
   -  Una carpeta llamada `controllers`.
   -  Una carpeta llamada `routes`.
   -  Una carpeta llamada `utils`.
   -  Una carpeta llamada `test`.

7. Pasa el archivo `data.js` que se encuentra en la carpeta **02 - Integration** a tu carpeta **back/src/utils**. <br />

---

### **??????????? EJERCICIO 2**

### **Crea tu primer server**

1. Crea un archivo llamado `server.js` dentro de la carpeta **back/src/routes**.

2. Importa **http** desde el m??dulo `http`.

3. Crea y levanta el servidor en el puerto **3001**.

4. Dentro del callback del servidor debes:

   -  copiar y pegar la siguiente l??nea:

      ```JAVASCRIPT
      res.setHeader('Access-Control-Allow-Origin', '*');
      ```

   -  crear un condicional que pregunte si la **url** incluye el string `rickandmorty/character`. En caso de que si lo incluya, obt??n el personaje por id que llega por **req.url** y que coincida con el personaje en el archivo **data.js**.

5. Env??a como respuesta un JSON con toda la informaci??n del personaje.

   > **[PISTA]:** dentro del par??metro **`req.url`** est?? el id del personaje. Puedes utilizar el m??todo split() para obtenerlo...

<br />

---

### **??????????? EJERCICIO 3**

### **Conectar front - back**

1. Abre tu proyecto en la carpeta **front** para poder hacer un peque??o cambio.

2. Dentro del archivo **app.js** tienes una funci??n llamada `onSearch`. La URL a la que le haces la petici??n es, **<https://rickandmortyapi.com/api/character/>**. Tienes que reemplazarla por esta nueva URL: `http://localhost:3001/rickandmorty`.

> **[NOTA]:** recuerda agregar a la ruta el id.

<br />

---

### **??????????? EJERCICIO 4**

En la carpeta ra??z de tu Back-End tendr??s que ejecutar el comando:

```bash
    npm init
```

De esta manera crear??s un archivo `package.json`.

En este s??lo deber??s instalarle las librer??as **axios** y **nodemon** de la siguiente manera:

```bash
    npm install axios nodemon
```

Una vez hecho esto, dentro del objeto **scripts** tienes que dejar el script **`start`** de la siguiente manera:

```javascript
    "start": "nodemon ./src/routes/server.js",
```

</br >

---

Hemos terminado por ahora!! ???? m??s adelante crearemos m??s rutas para nuestro frontend. ????
 -->

<!-- # HW 03: Promises | Integraci??n

## **???? Duraci??n estimada**

x minutos

<br />

---

## **???? Rick & Morty App**

### **???? INTRO**

En esta homework vamos a seguir trabajando en nuetra App de Rick & Morty del lado del servidor. En esta ocasi??n crearemos algunas rutas asincr??nicas que nos permitir??n darle mejor funcionamiento a nuestra aplicaci??n.

Crearemos una ruta para manejar las funcionalidades:

-  GET onSearch
-  GET Detail
-  GET favorites
-  POST favorites
-  DELETE favorites

<br />

---

## **???? INSTRUCCIONES**

### **??????????? EJERCICIO 1**

### **GET Search**

1. Dir??gete a tu carpeta `controllers` y crea un archivo llamado `getCharById.js`. Dentro de este archivo deber??s:

   -  Declarar una variable con el nombre "_getCharById_" y exportarla. Esta variable ser?? una funci??n que recibe dos par??metros: **res** y **id**.

   -  Dentro de la funci??n deber??s hacer una petici??n (_c??digo asincr??nico_) a la URL `https://rickandmortyapi.com/api/character/:id`. Debes utilizar promesas para realizar esto. Recuerda que debes agregar el ID recibido por par??metro al final de esta URL.

   -  Una vez que tienes la respuesta de la petici??n, crea un objeto en el que guardar??s las propidades **id**, **image**, **name**, **gender** y **species** que recibiste como respuesta (todos los datos de la petici??n se encuentran dentro de una propiedad llamada **data**).

   -  Una vez creado el objeto, deber??s devolver una respuesta con status `200`, un Content-Type igual a `application/json`, y finalmente responde el objeto que creaste convertido en JSON:

      ```javascript
      res.end(JSON.stringify(objeto));
      ```

   -  En el caso de que la promesa tenga alg??n fallo es importante que concatenes un `.catch` al final de la promesa para poder manejar el error. Dentro del catch deber??s devolver una respuesta con status `500`, un Content-Type igual a `text/plain`, y finalmente responde con la propiedad **message** del error.

> **[NOTA]:** puedes utilizar axios o fetch. ??Como m??s gustes!

2. ??Listo! Ya tenemos nuestro primer controlador. Ahora lo vamos a utilizar en nuestra ruta. Para esto, dir??gete al archivo llamado **`src/routes/server.js`**. **Elimina** todo el contenido de este archivo.

3. Dentro de este archvio tendr??s que:

   -  Importar **http** y el controlador que creaste.

   -  Crear y levantar un servidor en el puerto **3001**.

   -  Dentro del callback del servidor debes:

      -  copiar y pegar la siguiente l??nea:

      ```javascript
      res.setHeader('Access-Control-Allow-Origin', '*');
      ```

      > **[NOTA]**: esta l??nea permitir?? contectar tu FRONT con el SERVIDOR sin que haya problemas de CORS.

      -  crear un condicional que pregunte si la **url** incluye el string "_**onsearch**_". En el caso de que si lo incluya deber??s ejecutar el controlador pas??ndole como argumentos:

         -  El par??metro **`res`**.

         -  El segundo par??metro debe ser el ID del personaje que recibes mediante la URL.

      > **[PISTA]:** dentro del par??metro **`req.url`** est?? el id del personaje. Puedes utilizar el m??todo split() para obtenerlo...

<br />

---

### **??????????? EJERCICIO 2**

### **GET Detail**

Ahora crearemos la ruta para obtener el detalle de un personaje.

1. Dir??gete a tu carpeta `controllers` y crea un archivo llamado `getCharDetail.js`. Dentro de este archivo deber??s:

   -  Declarar una variable con el nombre "_getCharDetail_" y exportarla. Esta variable ser?? una funci??n que recibe dos par??metros: **res** y **id**.

   -  El resto de la l??gica de esta funci??n es exactamente igual al ejercicio anterior, con la diferencia que esta vez debes obtener todas estas propiedades del personaje: **image**, **name**, **gender**, **status**, **origin** y **species**.

2. En tu archivo **`server.js`** tienes que:

   -  Importar el nuevo controlador.

   -  Crear un condicional que verifique si la URL recibida incluye el string "_**detail**_". En el caso de que esto sea verdadero tendr??s que obtener el ID que recibes al final de la URL, y ejecutar este controlador pas??ndole como par??metros: **res** y **ID**.

<br />

---

### **???? COMPROBEMOS...**

Levanta el servidor con el comando:

```bash
    npm start
```

Una vez levantado, verifica lo siguiente:

</br >

### **ON SEARCH**

Ve del lado del Front-End de tu proyecto, y busca la funci??n **onSearch**. En ella deber??s eliminar la URL de la API de Rick&Morty y pegar la nueva URL de tu servidor: **`http://localhost:3001/rickandmorty/onsearch/`**. Si levantas tu proyecto deber??as de poder utilizar tu search-bar normalmente.

</br >

### **DETAIL**

Ahora queda que vayas a tu componente **Detail.jsx** y reemplaces la URL de la API con esta nueva URL de tu servidor: **`http://localhost:3001/rickandmorty/detail/`**. Ahora podr??s ingresar al detalle de cualquier personaje sin problemas.

---

</br >

## **???? A TENER EN CUENTA**

Si tu servidor no est?? levantado, o si los links no fueron bien escritos, tu aplicaci??n no funcionar?? correctamente.

</br >

---

??Hemos terminado por ahora!????
 -->

<!--  # HW 05: Express | Integraci??n

## **Duraci??n estimada ????**

x minutos

<br />

---

## **Rick & Morty App**

### **INTRO**

En base a lo practicado en la homework Exercises, vamos a crear rutas con sus respectivas solicitudes HTTP que se van a ir guardando en un array que simular?? nuestra base de datos. En esta homework consumiremos la informaci??n de la API de Rick & Morty que luego enviaremos a nuestro frontend.

<br />

---

### **??????????? EJERCICIO 1**

### **Instalar Express y body-parser**

1. Debes instalar express con `npm install express`.

2. Corrobora que se ha instalado abriendo tu archivo package.json dentro de `dependencies`, secci??n que se ha creado autom??ticamente cuando instalaste express o tambi??n puedes verla dentro de la carpeta node_modules.

3. Adem??s vas a necesitar instalar body-parser con `npm i body-parser`, esta librer??a es necesaria para que puedas recibir la informaci??n por body.

4. Una vez la tengas instalada copia y pega este snippet de c??digo dentro del archivo app.js:

```javascript
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
```

<br />

---

### **??????????? EJERCICIO 2**

### **Crear servidor con Express**

1. Anteriormente hab??as creado tu servidor con node puro en el archivo app.js, ahora lo cambiaremos para utilizar directamente el framework Express.

2. Define una constante que llamada `express` y en ella guarda la funci??n `require` que incluya el m??dulo **express**, de esta forma podemos usar el paquete **Express** que instalamos.

3. Define una segunda constante llamada `app` en la que guardes la ejecuci??n de express, ello se encarga de manejar las solicitudes y respuestas cliente-servidor.

```javascript
const express = require("express");
const app = express();
```

???? Acabas de crear tu servidor con Express!!

<br />

---

### **??????????? EJERCICIO 3**

### **Crear Rutas**

1. Anteriormente hab??amos creado una ruta get que obtiene el personaje de Rick and Morty por **id** mediante un archivo que tenemos llamado `data.js`, bien vamos a modificarlo:

    a. En app tenemos los m??todos HTTP listos para utilizar, por ende si nesitamos conseguir la data, necesitamos el m??todo get, este m??todo recibe dos par??metros: el objeto `request` de ahora en m??s **req** y el objeto `response` de ahora en m??s **res**.

    b. Ahora, en vez de consumir los datos de **data.js**, lo vamos a hacer de la API de Rick & Morty con la url `https://rickandmortyapi.com/api/character`

    c. Crea la ruta **get/`rickandmorty`/character/{id}** y obt??n solo los datos de la API https://rickandmortyapi.com/api/character/{detailId} que precisamos para el componente Card.jsx en el front, estos datos son:

    - id
    - name
    - species
    - gender
    - image

2. Crea una segunda ruta **get/`rickandmorty`/detail/{detailId}**, obt??n los datos de la API https://rickandmortyapi.com/api/character/{detailId} y env??alo al componente Detail.jsx:

    - name
    - status
    - species
    - gender
    - origin
    - image

> Hint: Recuerda que los llamados a la API son as??ncronos.

3. Define una constante llamada `fav` que sea un arreglo vac??o y crea las siguientes rutas:

    a. **GET/`rickandmorty`/fav**, que obtenga los personajes guardados en el arreglo **fav**.

    b. **POST/`rickandmorty`/fav**, que guarde los personajes en el arreglo **fav**.

    c. **DELETE/`rickandmorty`/fav/${id}**, que elimine el personaje en el arreglo **fav** a partir del **id** que recibe por par??metro.

> Hint: Recuerda modularizar en tu carpeta controllers como lo aprendiste en la homework 03-Promises con los archivos **getCharById.js** y **getCharDetail.js**

<br />

---

### **??????????? EJERCICIO 4**

### **Iniciar servidor**

1. Crea un archivo llamado **start.js** en el que importes el servidor que se encuentra configurado en el archivo **app.js**, desde este archivo levantaremos el servidor.

2. El al archivo **package.json** debes cambiar el script `start` donde su valor sea `start.js`

3. Es hora de iniciar el servidor, con el m??todo listen de express, coloca a escuchar el servidor en el puerto 3001.

<br />

---

### **??????????? EJERCICIO 5**

### **Conectar rutas con frontend**

Por ??ltimo, recordemos que en el front hab??amos configurado la ruta para que consuma los datos desde nuestro servidor.

Ahora dir??gete a la carpeta **front** y haz los siguiente cambios:

1. En el componente Detail donde llamamos a la API de Rick & Morty, cambia la ruta get que actualmente llama a la ruta **https://rickandmortyapi.com/api/character/** que est?? en este momento por esta: ` http://localhost:3001/rickandmorty/detail`

2. En la action para agregar favorito, ahora debes enviar los personajes al endpoint **POST/`rickandmorty`/fav**.

3. En la action para eliminar favorito, ahora debes enviar el personaje a eliminar al endpoint **DELETE/`rickandmorty`/fav**.

??????Llegamos al final de esta homework creamos nuestro servidor y tres rutas para nuestro front!! ????????
 -->

<!--  # HW 05: Express | Integraci??n

## **Duraci??n estimada ????**

x minutos

<br />

---

## **Rick & Morty App**

### **INTRO**

En base a lo practicado en la homework Exercises, vamos a crear rutas con sus respectivas solicitudes HTTP que se van a ir guardando en un array que simular?? nuestra base de datos. En esta homework consumiremos la informaci??n de la API de Rick & Morty que luego enviaremos a nuestro frontend.

<br />

---

### **??????????? EJERCICIO 1**

### **Crear servidor con Express**

1. Instala la librer??a **`express`**.

2. Anteriormente hab??as creado tu servidor con Node puro en el archivo **`server.js`**, ahora lo cambiaremos para utilizar directamente el framework Express. Por lo que debes eliminar todo el contenido de este archivo.

3. Dentro del archivo **`server.js`** importa a `express` e incializa un nuevo servidor en el puerto 3001. Esta ser??a una forma de seguir buenas pr??cticas:

```javascript
const express = require('express');
const server = express();
const PORT = 3001;

server.lister(PORT, () => {
   console.log('Server raised in port ' + PORT);
});
```

???? Acabas de crear tu servidor con Express!!

<br />

---

### **??????????? EJERCICIO 2**

### **Reconstruyendo los controladores**

En este ejercicio recontruiremos nuestros dos controladores de modo que funcionen con express.

### **getCharByID**

Elimina todo lo que tienes en este archivo, y si estos pasos:

1. Guarda esta url en una constante llamada **`URL`**: "_https://rickandmortyapi.com/api/character/_".

2. Crea una funci??n **`getChatById`** y exp??rtala. Recibe por par??metro a **`req`** y **`res`**. Luego crea una constante con el nombre **`params`** e igu??lalo a **req.params**.

3. Haz una petici??n a la API, y recibe el personaje con el ID que obtuviste de params. S??lo necesitas las propiedades: **id**, **name**, **species**, **image** y **gender**.

4. En el caso de que salga todo OK, la ruta debe responder un JSON con la informaci??n del personaje.

5. Si hay un error debes responder con un status 500, y un JSON con la propiedad **`message`** de **error**.

</br>

### **getCharDetail**

1. En este caso debes repetir todo lo que hiciste en el controlador anterior, con la diferencia que esta vez debes agregar la propiedad **origin** de tu personaje.

<br />

---

### **??????????? EJERCICIO 3**

### **Crear Rutas**

En la constante **app** ahora tenemos acceso a los m??todos HTTP, vamos a necesitar para este ejercicio el m??todo `get` y traer informaci??n. Este m??todo recibe dos argumentos: el endpoint (path) y una funci??n callback. Esta funci??n callback recibe dos par??metros: **`req`** y **`res`**.

Dir??gete a la carpeta **routes** y crea un archivo llamado **`index.js`**. En este archivo deber??s:

1. importar mediante destructuring la funci??n **`Router`** de **express**.

2. importa los dos controlladores que hemos creado en la homewrok anterior: **`getCharById`** y **`getCharDetail`**.

3. Debajo de esto crea una constante con el nombre **`router`** e igu??lalo de la siguiente manear con la funci??n **`Router`** ejecutada:

```javascript
const router = Router();
```

4. Ahora crearemos nuestras primeras dos rutas de express. Para esto, a partir de la constante **`router`**, llama al m??todo **get**. Este m??todo debe recibir dos argumentos. El primero ser?? el path de la ruta, que en este caso es "_/onsearch/:id_". El segundo argumento ser?? la funci??n **`getCharById`**.

5. Ahora haremos lo mismo con detail. A partir de **`router`** llama al m??todo **get**. Como primer par??metro le pasaras el path "_/detail/:id_". El segundo argumento ser?? la funci??n **`getCharDetail`**.

6. Por ??ltimo exporta a la constante **`router`**.

7. Importa este **`router`** dentro del archivo **`server`**. Crea un middleware que tenga como par??metro a la variable **`express`** siendo ejecutado por el m??todo **json**. Crea otro middleware que como primer argumento le pases el path "_/_", y como segundo el router.

<br />

---

### **??????????? EJERCICIO 3**

## **Ruta Fav**

Dentro de tu carpeta **`util`** simularemos una base de datos, que en este caso ser?? un arreglo. Para esto crea un archivo que se llame **`favs`**. Dentro de ??l crea y exporta un arreglo vac??o.

1. Crea la ruta **POST/`rickandmorty`/fav**, la cual recibe un personaje por **`req.body`**. A este personaje lo deber??s pushear dentro de este arreglo.

2. Crea la ruta **GET/`rickandmorty`/fav**, la cual debe obtener todos los personajes guardados en el arreglo **`favs`**.

3. Crea la ruta **DELETE/`rickandmorty`/fav/:id**, que elimine el personaje en el arreglo **fav** a partir del **id** que recibe por par??metro.

<br />

---

### **??????????? EJERCICIO 4**

### **Conectar rutas con frontend**

Por ??ltimo, recordemos que en el front hab??amos configurado la ruta para que consuma los datos desde nuestro servidor.

Ahora dir??gete a la carpeta **front** y haz los siguientes cambios:

1. En el componente Detail donde llamamos a la API de Rick & Morty en la ruta **https://rickandmortyapi.com/api/character/** c??mbiala por la ruta que creamos en el back: **http://localhost:3001/rickandmorty/detail**

2. En la action para agregar favorito, ahora debes enviar los personajes al endpoint **http://localhost:3001/rickandmorty/fav** con el m??todo `post`.

3. En la action para eliminar favorito, ahora debes enviar el personaje a eliminar al endpoint **http://localhost:3001/rickandmorty/fav** con el m??todo `delete`.

??????Llegamos al final de esta homework creamos nuestro servidor y tres rutas para nuestro front!! ???????? -->

# HW 06: AsyncAwait | Integraci??n

## **???? Duraci??n estimada**

x minutos

<br />

---

## **???? Rick & Morty App**

### **???? INTRO**

En esta homework vamos a seguir trabajando en nuetra App de Rick & Morty del lado del servidor. En base a las rutas asincr??nicas ya creadas, vamos a pasarlas de promesas a AsyncAwait.

Las rutas que tenemos creadas hasta el momento son:

- GET onSearch
- GET Detail
- GET favorites
- POST favorites
- DELETE favorites

<br />

---

## **???? INSTRUCCIONES**

### **??????????? EJERCICIO 1**

### **GET Search**

1. Dir??gete a tu carpeta `controllers` y en el archivo llamado `getCharById.js`, en la funci??n llamada _getCharById_ ya est??s haciendo una petici??n (_c??digo asincr??nico_) a la URL `https://rickandmortyapi.com/api/character/`. As?? que s??lo debes cambiar de promesas a `async await`.

2. Para el manejo de errores, en el caso de que la promesa falle, envuelve el c??digo dentro del bloque try-catch:

   - Dentro del bloque `try` inyecta el c??digo donde haces el llamado y la l??gica antes realizada.

   - Dentro del bloque `catch`, ??ste debe recibir como par??metro el `error` y devuelve una respuesta con status `500` y enviar un mensaje de error y/o con la propiedad **message** del error que recibe el catch como par??metro.

<br />

---

### **??????????? EJERCICIO 2**

### **GET Detail**

Ahora modificaremos la ruta de detalle de promesas a async await.

1. Dir??gete a tu carpeta `controllers`, en el archivo llamado `getCharDetail.js`, en la funci??n llamada _getCharDetail_ implementa los mismos pasos del ejercicio anterior.

<br />

---

### **??????????? EJERCICIO 3**

### **GET Favorites**

Ahora trabajaremos en la ruta de favoritos, en el m??todo get creada en la **homework 05-Express** y la pasaremos de promesas a async await.

1. Dir??gete a tu carpeta `controllers`, en el archivo llamado `getFavorites.js`, en la funci??n llamada _getFavorites_ implementa los mismos pasos del ejercicio anterior.

<br />

---

### **??????????? EJERCICIO 4**

### **POST Favorites**

Ahora trabajaremos en la ruta de favoritos, en el m??todo post creada en la **homework 05-Express** y la pasaremos de promesas a async await.

1. Dir??gete a tu carpeta `controllers`, en el archivo llamado `postFavorites.js`, en la funci??n llamada _postFavorites_ implementa los mismos pasos del ejercicio anterior.

<br />

---

### **??????????? EJERCICIO 5**

### **DELETE Favorites**

Ahora trabajaremos en la ruta de favoritos, en el m??todo delete creada en la **homework 05-Express** y la pasaremos de promesas a async await.

1. Dir??gete a tu carpeta `controllers`, en el archivo llamado `deleteFavorites.js`, en la funci??n llamada _deleteFavorites_ implementa los mismos pasos del ejercicio anterior.

<br />

---

### **???? COMPROBEMOS...**

Levanta el servidor con el comando:

```bash
    npm start
```

Una vez levantado, verifica lo siguiente:

</br >

### **FRONTEND**

### **ACTIONS**

Haremos un par de cambios en el lado frontend:

1. La action `addFavorites`, ahora debe ser una funci??n as??ncrona, promisificada con async/await, manejando errores con try/catch que env??e el personaje favorito al endpoint con el m??todo POST **http://localhost:3001/rickandmorty/fav**.

2. La action `removeFavorites`, ahora debe ser una funci??n as??ncrona, promisificada con async/await, manejando errores con try/catch que elimine el personaje favorito con el m??todo DELETE al endpoint **http://localhost:3001/rickandmorty/fav**.

3. Crea una action `getFavorites`, debe ser una funci??n as??ncrona, promisificada con async/await, manejando errores con try/catch que solicite el personaje favorito con el m??todo GET al endpoint **http://localhost:3001/rickandmorty/fav**.

4. Levanta tambi??n tu aplicaci??n en **http://localhost:3000** para ver tu aplicaci??n Rick & Morty funcionando completamente.

---

</br >

## **???? A TENER EN CUENTA**

Si tu servidor no est?? levantado, o si los links no fueron bien escritos, tu aplicaci??n no funcionar?? correctamente.

</br >

---

??Felicitaciones! Ahora tienes una comunicaci??n front-back completa!????????
