# Bienvenido a SocialVegan


![socialveganinicio](https://user-images.githubusercontent.com/45245032/52438778-d082cd80-2af8-11e9-8fc2-7329f0e1ddc0.png)



## Índice

* [Introducción](#introducción)
* [Definición del producto](#definición-del-producto)
* [Resumen de entrevistas con usuarios](#resumen-de-entrevistas-con-usuarios)
* [Historias de usuario](#historias-de-usuario)
* [Diseño de la Interfaz de Usuario (prototipo de baja fidelidad)](#Diseño-de-la-Interfaz-de-Usuario-(prototipo-de-baja-fidelidad))

* [Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)](#Diseño-de-la-Interfaz-de-Usuario-(prototipo-de-alta-fidelidad))

* [Test de usabilidad](#test-de-usabilidad)

* [Implementación de la Interfaz de Usuario](#Implementación-de-la-Interfaz-de-Usuario)

***



## Introducción

Una emprendedora nos ha encargado crear una red social y nos ha dado ciertos temas
en los que le gustaría invertir:

* Alimentación
* Feminismo
* Educación
* Salud
* Energías Renovables

A raiz de nuestra investigacion hemos decidido crear una red social de Alimentación Vegetariana/Vegana

## Definición del producto

* Para iniciar nuestro proyecto y conocer mejor el mercado de las redes sociales investigamos sobre los diferentes tipos de redes sociales exitentes, su clasificación y las necesidades específicas que cada una de ellas cubre.

* A continuación, elaboramos una encuesta para determinar las verdaderas necesidades de nuestros usuarios con respecto a una red social vegana.

*  Entre los puntos clave deducidos a partir de nuestra investigación destacan:

* El elemento básico de una red social está conformado por las personas que la integran y los puntos de convergencia que existen entre ellos. Estos puntos pueden ser un tema en común o actividades compartidas.

* Para integrar una red social "virtual" es necesario unirse a ella creando una cuenta. El "muro" se considera el punto de comunión entre los integrantes de la red. Los "eventos" que ocurren en dicho muro representan las interacciones de los usuarios.


* Los principales usuarios de nuestro producto son mujeres entre 18 y 50 años, interesadas principalmente en mantener dietas vegetarianas y/o veganas, que privilegien su salud, el respeto animal y la ecología.

* Para descubrir las necesidades de los usuarios realizamos una encuestra orientada a conocer el interés de nuestro target por este tipo de redes y sus principales necesidades al participar en una red de esta naturaleza.

* Nuestro producto permite a las personas interesadas en vegetarianismo/veganismo formar redes de cooperación y apoyo para su proceso de transición a este estilo de vida. También les permite acceder a información relevante que les permita conocer tipos de alimentos apropiados, alimentación equilibrada y sana,información de picadas para comprar o comer alimentos veganos, artículos de fomento a la vida sana, entre otros.

* Gran parte de nuestros usuarios son personas que se interesan por este estilo de vida y quisieran un sitio para orientarlos en su transición.
En general, la mayoría de ellos coinciden en la necesidad de contar con buenas recetas, datos para obtener sus alimentos, así sea en restaurantes o mercados, esquemas de alimentación, y un colectivo social que les permita  generar movimientos sociales,



### Resumen de entrevistas con usuarios.
Para revisar las encuestas realizadas, por favor pinche
[aquí](https://es.surveymonkey.com/results/SM-YV92YGDQV/).

#### Resumen de los puntos principales:

Total encuestados 12.
El rango de edades va entre los 23 y 50 años.
En su mayoría mujeres y de ellas 8 vegetarianas.

La principal motivación para elegir este estilo de vida fue:
medio ambiente, industrialización, explotación de las especies y salud (7 animalistas, 7 salud, 6 ecología).

9 obtienen la información para su dieta desde internet
3 obtienen la información de nutricionistas.

8 compran en vegas y ferias
5 compran en supermercados
2 compran en tiendas naturistas y especializadas

4 quisieran un sitio para orientarlos en su transición.

En general, los usuarios coinciden en querer un sitio con recetas, datos, restaurantes, esquemas de alimentación y colectivo social (grupo organizado para presión social).


### Historias de usuario
* Para revisar nuestras historias de usuario, por favor pincha
[aquí](https://drive.google.com/drive/folders/1pvTZKcE55xdAUkaaZS0a6C-rbvwYRHWf).


### Diseño de la Interfaz de Usuario (prototipo de baja fidelidad)

Para el prototipo de baja fidelidad, realizamos un sketch tratando de plasmar los resultados de la etapa anterior, incluyendo todos los requerimientos que recabamos de la encuesta inicial.

![pbf](https://user-images.githubusercontent.com/45245032/52440353-adf2b380-2afc-11e9-9472-c4949f12c71d.png)


### Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)

En esta etapa, desarrollamos un prototipo en Figma, imitando el aspecto que consideramos debe tener el producto final.


* [Enlace a Figma](https://www.figma.com/file/BbiI5vzgQ9uYNDaIWAlwkePn/Untitled?node-id=0%3A1)

![socialvegan](https://user-images.githubusercontent.com/45245032/52440498-0aee6980-2afd-11e9-9f02-1901527ea67b.png)



### Test de usabilidad

Testeo realizado con el prototipo de alta fidelidad y con el producto en HTML.


#### Objetivo

Verificar si la aplicación es comprensible

* Tareas

1) Si tuvieras que ingresar a esta red social ¿Cómo lo harías?

2) Postea un comentario.

3) Elimina un posteo.

4) Dale un like a un posteo.

#### Conclusiones

En general, los usuarios se encuentran bastante familiarizados con los conceptos utilizados como posteo y comentario.

Sin embargo, para eliminar mensajes se utilizó el simbolo de una "X" roja, pero no fue entendida como símbolo de eliminar. Mas bien, pensaron que era para cerrar algo.

Los posteos estaban muy cerca uno de otro, lo que generó confusión en los usuarios al momento de asociar el mensaje y sus funcionalidades.

* Solución

Se cambió el ícono de "eliminar" a uno más representativo y compresible para el usuario.

Se aumentó la distancia entre posteos para identificar dónde inicia y termina cada uno.


![test-usabilidad](https://user-images.githubusercontent.com/45245032/52442294-84885680-2b01-11e9-8f96-3942fce50e23.png)



### Implementación de la Interfaz de Usuario (UI y comportamiento de Interfaz de Usuario)

La interfaz implementada permite al usuario realizar las siguientes acciones:

* Crear una cuenta de usuario e iniciar su sesión.
* Publicar un post.
* Poner like a una publicación.
* Llevar un conteo de los likes.
* Eliminar un post específico.


## Planificación

Para planificar y coordinar las tareas del proyecto, se utilizó Trello, el cual modificamos conforme íbamos avanzando en las tareas.

Para ver planificación en Trello
por favor pinche
[aquí](https://trello.com/b/tEwxHA7M/social-network)