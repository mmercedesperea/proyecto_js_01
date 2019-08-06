$(document).ready(function () {


    // Slider

    if ((window.location.href.indexOf('index') > -1) || (window.location.href.indexOf('') ) )  { // para comprobar de que la pagina tiene en su URL Index (que index sea mayor que -1)para que no de error si no es asi

        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            // captions: false,  // Para que no se muestren las palabas que van debajo de las fotos
            slideWidth: 1200,
            responsive: true
        });

    }

    // Posts creamos un Array con Json dentro

    if (window.location.href.indexOf('index') > -1) {
        var posts = [
            {
                title: 'Prueba de titulo 1',
                // date: new Date(),
                // date: moment().format('MMMM dddd YYYY'),
                // date: moment().format('MMMM Do YYYY'),
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem fistrum nostrud a gramenawer papaar papaar. Papaar papaar aliqua ullamco te voy a borrar el cerito ese que llega voluptate ut commodo llevame al sircoo dolor minim. Qui por la gloria de mi madre hasta luego Lucas tiene musho peligro reprehenderit amatomaa ut diodeno quis sexuarl. Qui diodenoo eiusmod ut ex nisi. Aliquip aliqua sed ese hombree fistro magna exercitation. Papaar papaar aute adipisicing me cago en tus muelas consectetur veniam officia ese que llega. Está la cosa muy malar dolor sit amet sed ahorarr eiusmod. Ullamco consequat ese que llega fistro me cago en tus muelas elit a wan te voy a borrar el cerito. Dolore ahorarr hasta luego Lucas labore'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem fistrum nostrud a gramenawer papaar papaar. Papaar papaar aliqua ullamco te voy a borrar el cerito ese que llega voluptate ut commodo llevame al sircoo dolor minim. Qui por la gloria de mi madre hasta luego Lucas tiene musho peligro reprehenderit amatomaa ut diodeno quis sexuarl. Qui diodenoo eiusmod ut ex nisi. Aliquip aliqua sed ese hombree fistro magna exercitation. Papaar papaar aute adipisicing me cago en tus muelas consectetur veniam officia ese que llega. Está la cosa muy malar dolor sit amet sed ahorarr eiusmod. Ullamco consequat ese que llega fistro me cago en tus muelas elit a wan te voy a borrar el cerito. Dolore ahorarr hasta luego Lucas labore'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem fistrum nostrud a gramenawer papaar papaar. Papaar papaar aliqua ullamco te voy a borrar el cerito ese que llega voluptate ut commodo llevame al sircoo dolor minim. Qui por la gloria de mi madre hasta luego Lucas tiene musho peligro reprehenderit amatomaa ut diodeno quis sexuarl. Qui diodenoo eiusmod ut ex nisi. Aliquip aliqua sed ese hombree fistro magna exercitation. Papaar papaar aute adipisicing me cago en tus muelas consectetur veniam officia ese que llega. Está la cosa muy malar dolor sit amet sed ahorarr eiusmod. Ullamco consequat ese que llega fistro me cago en tus muelas elit a wan te voy a borrar el cerito. Dolore ahorarr hasta luego Lucas labore'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem fistrum nostrud a gramenawer papaar papaar. Papaar papaar aliqua ullamco te voy a borrar el cerito ese que llega voluptate ut commodo llevame al sircoo dolor minim. Qui por la gloria de mi madre hasta luego Lucas tiene musho peligro reprehenderit amatomaa ut diodeno quis sexuarl. Qui diodenoo eiusmod ut ex nisi. Aliquip aliqua sed ese hombree fistro magna exercitation. Papaar papaar aute adipisicing me cago en tus muelas consectetur veniam officia ese que llega. Está la cosa muy malar dolor sit amet sed ahorarr eiusmod. Ullamco consequat ese que llega fistro me cago en tus muelas elit a wan te voy a borrar el cerito. Dolore ahorarr hasta luego Lucas labore'
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem fistrum nostrud a gramenawer papaar papaar. Papaar papaar aliqua ullamco te voy a borrar el cerito ese que llega voluptate ut commodo llevame al sircoo dolor minim. Qui por la gloria de mi madre hasta luego Lucas tiene musho peligro reprehenderit amatomaa ut diodeno quis sexuarl. Qui diodenoo eiusmod ut ex nisi. Aliquip aliqua sed ese hombree fistro magna exercitation. Papaar papaar aute adipisicing me cago en tus muelas consectetur veniam officia ese que llega. Está la cosa muy malar dolor sit amet sed ahorarr eiusmod. Ullamco consequat ese que llega fistro me cago en tus muelas elit a wan te voy a borrar el cerito. Dolore ahorarr hasta luego Lucas labore'
            },

        ];

        // Recorremos el Array de posts
        posts.forEach((item, index) => {
            // Creamos una variable con los elementos que queremos que tenga nuestro post
            var post = `
        <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>
        ${item.content}
        </p>
        <a href="#" class="button-more">Leer más</a>
      </article>
        `;
            // Añadimos nuestra variable a el elemento con la id post de nuestro index.html
            $('#post').append(post);
        });
    }

    // Selector de tema
    var theme = $('#theme');

    $('#to-green').click(function () {
        theme.attr('href', 'css/green.css');
    });

    $('#to-red').click(function () {
        theme.attr('href', 'css/red.css');
    });

    $('#to-blue').click(function () {
        theme.attr('href', 'css/blue.css');
    });


    // Scroll arriba de la web
    $('.subir').click(function (e) {
        e.preventDefault(); // prevent es para que no ejecute el funcionamiento normal de un formulario o un enlace y no recargue la pagina para que se ejecute tu javascript 

        $('html,body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    // Login falso

    $('#login form').submit(function () { // cuando se haga un submit
        var form_name = $('#form_name').val() //Cogemos el valor que esta dentro del form_name
        localStorage.setItem('form_name', form_name); // lo guardamos en el localStorage , ponemos el nombre que tendra  y el elemento que guardara
    });

    var form_name = localStorage.getItem('form_name'); // una vez se recarge la pantalla guardamos el valor del local storage en una variable

    if (form_name != null && form_name != 'undefined') { // comprobamos que el form name ha sido rellenado
        var about_parrafo = $('#about p');

        about_parrafo.html('<strong>bienvenido, ' + form_name + '</strong>'); // llamamos al elemento con id about y a su parrafo(p) y le añadimos el texto html ('bienvenido, ' + la variable almacenada en el localStorage)
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>"); // le añadimos el boton logout

        $('#login').hide();

        $('#logout').click(function () {
            localStorage.clear(); //limpiamos el localStorage
            location.reload(); //recargamos la pagina
        })
    }

    // Acordeon
    if (window.location.href.indexOf('about') > -1) {
        $('#acordeon').accordion();
    }

    // Reloj
    if (window.location.href.indexOf('reloj') > -1) {
        setInterval(function () { // permite ejecutar en blucle segun el tiempo que le pongamos en este caso 1 segundo (1000)
            var reloj = moment().format('hh:mm:ss');
            $('#reloj').html(reloj);
        }, 1000);
    }

    // Validación
    if (window.location.href.indexOf('contact') > -1) {

        // para poner un calendario
        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        // para cargar la validacion
        $.validate({
            lang: 'es',
            // para mostrar errores
            errorMessagePosition: 'top',
            scrollTopOnError: true
        });
    }

});