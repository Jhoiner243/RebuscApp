-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-07-2024 a las 23:17:15
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `i_need`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `cod_categoria` int(2) NOT NULL,
  `nombres_categoria` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`cod_categoria`, `nombres_categoria`) VALUES
(1, 'Jardinería'),
(2, 'Acabados'),
(3, 'Equipo Electrón'),
(4, 'Confección'),
(16, 'Joyería y Relojería'),
(17, 'Audiovisuales'),
(18, 'Artesanía'),
(19, 'Construcción e Infraestructura'),
(20, 'Eléctrico'),
(22, 'Organizador de eventos'),
(23, 'Tecnología de pc y Móviles'),
(26, 'musicos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comision`
--

CREATE TABLE `comision` (
  `cod_servicio1` varchar(20) NOT NULL,
  `id_tecnico1` bigint(15) NOT NULL,
  `valor_comi` int(20) NOT NULL,
  `N_cuenta_comi` int(20) NOT NULL,
  `cod_comision` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ocupacion`
--

CREATE TABLE `ocupacion` (
  `codigo_ocu` int(3) NOT NULL,
  `Cod_categoria1` int(2) NOT NULL,
  `nombres_ocu` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `ocupacion`
--

INSERT INTO `ocupacion` (`codigo_ocu`, `Cod_categoria1`, `nombres_ocu`) VALUES
(1, 2, 'Instalador de cielorrazo '),
(2, 2, 'Enchapador de cocina'),
(3, 2, 'Enchapador de pisos'),
(4, 2, 'Pintor'),
(5, 22, 'Animador'),
(6, 22, 'Decoracion'),
(7, 22, 'Decoracion de florez'),
(8, 22, 'alquiler e instalacion de audio y video'),
(9, 22, 'Coreografo'),
(10, 17, 'Diseñador grafico'),
(11, 17, 'Fotografo'),
(12, 17, 'grabacion y produccion de video'),
(15, 26, 'banda de porro'),
(16, 26, 'mariachis'),
(17, 26, 'grupo urbanos'),
(18, 26, 'dj'),
(20, 17, 'producion de audios y mezcla'),
(21, 19, 'maestro de obra'),
(22, 19, 'albañil oficial'),
(23, 19, 'ayudande de albañileria');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio`
--

CREATE TABLE `servicio` (
  `cod_servicio` varchar(20) NOT NULL,
  `id_tecnico2` bigint(15) NOT NULL,
  `Cc_1` varchar(20) NOT NULL,
  `problema_usuario` varchar(30) NOT NULL,
  `oferta_usuario` varchar(20) NOT NULL,
  `contraoferta_tec` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tecnico`
--

CREATE TABLE `tecnico` (
  `id_tecnico` bigint(15) NOT NULL,
  `nombres_tec` varchar(25) NOT NULL,
  `apellidos_tec` varchar(25) NOT NULL,
  `correo_tec` varchar(50) NOT NULL,
  `celular_tec` varchar(25) NOT NULL,
  `direccion_tec` varchar(30) NOT NULL,
  `sexo_tec` varchar(1) NOT NULL,
  `fecha_nacimiento_tec` date NOT NULL,
  `contra_tec` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `tecnico`
--

INSERT INTO `tecnico` (`id_tecnico`, `nombres_tec`, `apellidos_tec`, `correo_tec`, `celular_tec`, `direccion_tec`, `sexo_tec`, `fecha_nacimiento_tec`, `contra_tec`) VALUES
(1, 'manuel 2', 'm', 'm', '3', 'c', 'M', '2002-05-06', 'asdf'),
(12, 'bb', 'e', 'manns', '1', '23', 'M', '1997-08-03', 'vbnm'),
(123456, 'luis', 'angel', 'luis@gmail.com', '321675467', '23 con 5', 'M', '1996-03-03', '12345'),
(1233444, 'andres', 'ospino', 'andres@gmail.com', '3005001868', 'valencia', 'M', '1996-04-15', '12134ao'),
(99887766, 'luis fernando', 'negrette', 'luifernec@gmail.com', '3000012345', 'vallejo', 'M', '1990-03-21', '1234');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tec_ocu`
--

CREATE TABLE `tec_ocu` (
  `cod_relacion` bigint(12) NOT NULL,
  `radicado_fecha` date NOT NULL,
  `id_tecnico6` bigint(15) NOT NULL,
  `codigo_ocu1` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `Cc` varchar(20) NOT NULL,
  `nombres_usu` text NOT NULL,
  `apellidos_usu` text NOT NULL,
  `fecha_naciusu` date NOT NULL,
  `telefono_usu` varchar(15) NOT NULL,
  `direccion_usu` varchar(20) NOT NULL,
  `sexo_usu` varchar(1) NOT NULL,
  `correo_usu` varchar(30) NOT NULL,
  `contra_usu` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`Cc`, `nombres_usu`, `apellidos_usu`, `fecha_naciusu`, `telefono_usu`, `direccion_usu`, `sexo_usu`, `correo_usu`, `contra_usu`) VALUES
('7575', 'victor', 'tobon', '2002-03-18', '328484', '1234', 'M', 'victor123@gmail.com', 'mdmmdmdm'),
('777', 'm', 'm', '2002-03-18', '4455666', 'magali', 'M', 'manuel@gmail.com', '123455');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`cod_categoria`);

--
-- Indices de la tabla `comision`
--
ALTER TABLE `comision`
  ADD PRIMARY KEY (`cod_comision`),
  ADD KEY `cod_servicio1` (`cod_servicio1`),
  ADD KEY `id_tecnico1` (`id_tecnico1`);

--
-- Indices de la tabla `ocupacion`
--
ALTER TABLE `ocupacion`
  ADD PRIMARY KEY (`codigo_ocu`),
  ADD KEY `Cod_categoria1` (`Cod_categoria1`);

--
-- Indices de la tabla `servicio`
--
ALTER TABLE `servicio`
  ADD PRIMARY KEY (`cod_servicio`),
  ADD KEY `id_tecnico2` (`id_tecnico2`),
  ADD KEY `Cc_1` (`Cc_1`);

--
-- Indices de la tabla `tecnico`
--
ALTER TABLE `tecnico`
  ADD PRIMARY KEY (`id_tecnico`);

--
-- Indices de la tabla `tec_ocu`
--
ALTER TABLE `tec_ocu`
  ADD PRIMARY KEY (`cod_relacion`),
  ADD KEY `id_tecnico` (`id_tecnico6`),
  ADD KEY `cod_ocu` (`codigo_ocu1`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`Cc`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `cod_categoria` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `ocupacion`
--
ALTER TABLE `ocupacion`
  MODIFY `codigo_ocu` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `tec_ocu`
--
ALTER TABLE `tec_ocu`
  MODIFY `cod_relacion` bigint(12) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comision`
--
ALTER TABLE `comision`
  ADD CONSTRAINT `comision_ibfk_1` FOREIGN KEY (`id_tecnico1`) REFERENCES `tecnico` (`id_tecnico`) ON UPDATE CASCADE,
  ADD CONSTRAINT `comision_ibfk_2` FOREIGN KEY (`cod_servicio1`) REFERENCES `servicio` (`cod_servicio`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `ocupacion`
--
ALTER TABLE `ocupacion`
  ADD CONSTRAINT `ocupacion_ibfk_2` FOREIGN KEY (`Cod_categoria1`) REFERENCES `categoria` (`cod_categoria`);

--
-- Filtros para la tabla `servicio`
--
ALTER TABLE `servicio`
  ADD CONSTRAINT `servicio_ibfk_1` FOREIGN KEY (`id_tecnico2`) REFERENCES `tecnico` (`id_tecnico`) ON UPDATE CASCADE,
  ADD CONSTRAINT `servicio_ibfk_2` FOREIGN KEY (`Cc_1`) REFERENCES `usuario` (`Cc`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `tec_ocu`
--
ALTER TABLE `tec_ocu`
  ADD CONSTRAINT `tec_ocu_ibfk_1` FOREIGN KEY (`id_tecnico6`) REFERENCES `tecnico` (`id_tecnico`) ON UPDATE CASCADE,
  ADD CONSTRAINT `tec_ocu_ibfk_2` FOREIGN KEY (`codigo_ocu1`) REFERENCES `ocupacion` (`codigo_ocu`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
