
-- creo la base de datos
create database proyecto_integrador;
select database();
-- selecciono la base que voy a usar
use proyecto_integrador;
-- chequeo que la estoy usando
select database();

-- creo la tabla, doy espacio de memoria de sobra
create table mensaje_contacto
(
contactoID int auto_increment primary key,			-- ID autoincremental a cada mensaje -- sacar el unsigned
nombre varchar(50) not null,
email varchar(50) not null,
consulta_sobre varchar(40) not null,
mensaje text(1000) not null,
fecha date    			-- la fecha debería ser siempre la actual
);

-- chequeo la tabla
select * from mensaje_contacto;


-- pruebo la inseción de datos e la tabla
insert into mensaje_contacto(    nombre      ,      email               ,     consulta_sobre     ,              mensaje                         , fecha     )
values					  ("Matias Szostak", "matiasszostak@gmail.com", "Servicio fotográfico" , "Quería conocer el precio de este servicio." , curdate() );

-- chequeo la tabla
select * from mensaje_contacto;


-- inserto más datos de prueba
insert into mensaje_contacto(    nombre      ,      email               ,     consulta_sobre     ,              mensaje                                         , fecha     )
values					  ("Batman"        , "therealbatman@gmail.com", "Servicio de Drone"    , "Necesito unas buenas tomas desde el cielo de Ciudad Gótica" , curdate() ),
						  ("Alberto Samid" , "albertosamid@gmail.com" , "Servicio fotográfico" , "Quiero una sesión de fotos para Mac Rey."                   , curdate() ),
						  ("Carlitos Balá" , "carlitosbala@gmail.com" , "Licencia de imágenes" , "Quiero saber cuánto sale la licencia."                      , curdate() ),
						  ("Horacio Oneto" , "horaciooneto@gmail.com" , "Servicio fotográfico" , "Quiero una sesión de fotos con mis hackers en Cadore"       , curdate() ),
						  ("Kanye West"    , "kanyewest@gmail.com"    , "Comprar fotografías"  , "Quiero comprar todas las fotos que tengas"                  , curdate() );


-- chequeo la tabla
select * from mensaje_contacto;


-- Fin









