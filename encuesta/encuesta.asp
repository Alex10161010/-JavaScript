<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="">
	<meta name="author" content="">
	<title>XXXX Encuestas</title>

	<!-- Favicons-->
	<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
	<link rel="apple-touch-icon" type="image/x-icon" href="img/apple-touch-icon-57x57-precomposed.png">
	<link rel="apple-touch-icon" type="image/x-icon" sizes="72x72" href="img/apple-touch-icon-72x72-precomposed.png">
	<link rel="apple-touch-icon" type="image/x-icon" sizes="114x114" href="img/apple-touch-icon-114x114-precomposed.png">
	<link rel="apple-touch-icon" type="image/x-icon" sizes="144x144" href="img/apple-touch-icon-144x144-precomposed.png">

	<!-- GOOGLE WEB FONT -->
	<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet">

	<!-- BASE CSS -->
	<link href="css/animate.min.css" rel="stylesheet">
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/menu.css" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet">
	<link href="css/responsive.css" rel="stylesheet">
	<link href="css/icon_fonts/css/all_icons_min.css" rel="stylesheet">
	<link href="css/skins/square/grey.css" rel="stylesheet">

	<!-- COLOR CSS -->
	<link href="css/color_3.css" rel="stylesheet">

	<!-- BASE CSS -->
	<link href="css/date_time_picker.css" rel="stylesheet">

	<!-- YOUR CUSTOM CSS -->
	<link href="css/custom.css" rel="stylesheet">

	<script src="js/modernizr.js"></script>

	<!-- Include SmartWizard CSS -->
  <link href="https://cdn.jsdelivr.net/npm/smartwizard@5/dist/css/smart_wizard_all.min.css" rel="stylesheet" type="text/css" />


	<!-- Modernizr -->
	<style>
		#form_container {
			margin: 40px auto 30px;
		}

		#bottom-wizard {
    		width: 50%;
		}

		.sw-theme-progress {
			border: 0px solid #eee;
		}
		@media screen and (max-width: 768px) {
		#bolitas{display:none;}
		}

		.label_letra{
			font-size: 16px;
    		line-height: 2;
    		font-family: "Roboto Condensed", Arial, sans-serif;
    		color: #999999;
			padding-left:10px;
			}
		.form-check-input{
			width:22px;
			height:22px;
			vertical-align: middle;
			color: #999999;
			background:#999999;
		}
		#left_form {
			background-color:transparent !important;
}
	</style>
</head>
<body>

	<div id="preloader">
		<div data-loader="circle-side"></div>
	</div><!-- /Preload -->

	<div id="loader_form">
		<div data-loader="circle-side-2"></div>
	</div><!-- /loader_form -->

	<header>
		<div class="container">
		    <div class="row">
                <div class="col-3 col-sm-3 col-md-3 col-lg-3">
                    <div id="logo_home">
                        <!--<a href="#">-->
							<img class="img-fluid" src="https://XXXX.org/images/logo_XXXX.png">
						<!--</a>-->
                    </div>
                </div>
                <div class="col-5 col-sm-5 col-md-6 col-lg-6">
                    <!--<div id="social">
                        <ul>
                            <li><a href="#0"><i class="icon-facebook"></i></a></li>
                            <li><a href="#0"><i class="icon-twitter"></i></a></li>
                            <li><a href="#0"><i class="icon-google"></i></a></li>
                            <li><a href="#0"><i class="icon-linkedin"></i></a></li>
                        </ul>
                    </div>-->
                    <!-- /social -->
                    <!--<nav>
                        <ul class="cd-primary-nav">
                            <li><a href="index.html" class="animated_link">Register Version</a></li>
                            <li><a href="reservation_version.html" class="animated_link">Reservation Version</a></li>
                            <li><a href="questionare_version.html" class="animated_link">Questionare Version</a></li>
                            <li><a href="review_version.html" class="animated_link">Review Version</a></li>
                            <li><a href="about_color_3.html" class="animated_link">About Us</a></li>
                            <li><a href="contacts_color_3.html" class="animated_link">Contact Us</a></li>
                        </ul>
                    </nav>-->
                </div>
				<div class="col-4 col-sm-4 col-md-3 col-lg-3"></div>
            </div>
		</div>
		<!-- container -->
	</header>
	<!-- End Header -->

	<main>
		<div id="form_container">
			<div class="row">
				<div class="col-12 col-sm-12 col-md-5 col-lg-5" style="background-image: url(img/ansioliticos.jpg); background-size: 100% 100%;">
					<div id="left_form">
						<!--<img src="img/ansioliticos.jpg" alt="">-->
						<!--<figure></figure>-->
						<!--
						<h2><%=tituloEncuesta%></h2>
						<p>Queremos conocer sus preferencias para continuar ofreciéndole cursos de Educación Médica Continua gratuitos con aval de acuerdo a su interés. </p>
						<p>Le pedimos de favor nos ayude a contestar el siguiente test de actualización de ANTIDIABETICOS DM2, durara sólo 5 minutos, tenga por seguro que las opiniones que usted exprese se mantendrán de manera totalmente anónimas.</p>-->
						<!--<a href="#0" id="more_info" data-toggle="modal" data-target="#more-info"><i class="pe-7s-info"></i></a>-->
					</div>
				</div>
				<div class="col-12 col-sm-12 col-md-7 col-lg-7" id="divFormContenido">
					<div id="smartwizard" style="padding: 10px;">
						<ul class="nav" id="bolitas">
							<% for i = 1 to 11 %>
							<li class="nav-item">
								<a class="nav-link" href="#step-<%=i%>"></a>
							</li>
							<% next %>
						</ul>

						<form id="encuesta" padding="padding-top: 30px;margin-top: 30px;">
							<input  type="text" name="idu" id="idu" value="<%=idu%>" class="form-control d-none">
							<input  type="text" name="ide" id="ide" value="<%=ide%>" class="form-control d-none">
							<input  type="text" name="incentivo" id="incentivo" value="<%=incentivo%>" class="form-control d-none">
							<div class="tab-content">
								<%
								'Tipo: /Base
								pregunta=0
								formulario=1
								'Cuestionario: 0
								%>
								<div id="step-<%=formulario%>" class="tab-pane" role="tabpanel" aria-labelledby="step-<%=formulario%>">
									<h3 class="main_question"><strong></strong>Elija una opción de acuerdo a su perfil</h3>
									<div class="row">
										<!--Tipo de Especialidad-->
										<div class="col-12 col-md-6">
											<div class="form-group">
												<div class="styled-select">
													<select class="required" name="especialidad" id="especialidad">
														<option value="" selected>Especialidad</option>
														<% SQL = "select * from cat_especialidades_ususarios where activa = 'SI'"
														Cursor.Open SQL, StrMed, 1, 3
														Do While Not Cursor.EOF %>
														<option value="<%=Cursor("id_especialidad")%>"><%=Cursor("especialidad")%></option>
														<% Cursor.MoveNext
														Loop
														Cursor.Close %>
													</select>
												</div>
											</div>
										</div>
										<!--Tipo de Práctica-->
										<div class="col-12 col-md-6">
											<div class="form-group">
												<div class="styled-select">
													<select class="required" name="tipo_practica" id="tipo_practica">
														<option value="" selected>Tipo de Práctica</option>
														<option value="1">Pública</option>
														<option value="2">Privada</option>
														<option value="3">Ambas</option>
													</select>
												</div>
											</div>
										</div>

										<!--Fecha de nacimiento-->
										<div class="col-12 col-md-12">
											<div class="form-group">
												<label for="fechanacimiento">Fecha de nacimiento</label>
												<div class="d-flex flex-row">
													<div class="col-md-4">
														<select id="txtdia" name="dia" class="form-control">
														  <option value="">Día</option>
														  	<%For i = 1 To 31%>
														  <option value="<%=i%>"><%=i%></option>
															<%Next%>
														</select>
													</div>
													<div class="col-md-4">
														<select id="txtmes" name="mes" class="form-control"></select>
													</div>
													<div class="col-md-4">
														<select id="txtanio" name="anio" class="form-control">
														  <option value="">Año</option>
														  	<%For i = 1940 To 2001%>
														  <option value="<%=i%>"><%=i%></option>
															<%Next%>
														</select>
													</div>
												</div>
											</div>
										</div>

										<!--Estado donde práctica-->
										<div class="col-12 col-md-6">
											<div class="form-group">
												<div class="styled-select">
													<select class="required" name="estado" id="estado">
														<option value="" selected>Estado donde práctica</option>
														<% SQL = "select * from cat_estados where activo = 'SI'"
														Cursor.Open SQL, StrMed, 1, 3
														Do While Not Cursor.EOF %>
														<option value="<%=Cursor("id_estado")%>"><%=Cursor("estado")%></option>
														<% Cursor.MoveNext
														Loop
														Cursor.Close %>
													</select>
												</div>
											</div>
										</div>

										<!--Cédula profesional-->
										<div class="col-12 col-md-6">
											<div class="form-group">
												<input type="text" class="form-control inputNumero" id="txtcedula" name="cedula" placeholder="Cédula profesional">
											</div>
										</div>

									</div>
									<!-- div boton siguiente -->
									<div class="row mt-5 ">
    									<div class="col-md-12 d-flex flex-row-reverse">
											<button type="button" name="btn_form<%=formulario%>" id="btn_form<%=formulario%>" data-prg="<%=pregunta%>" class="btn btn-sm btn-info mr-5 btnSiguiente">Siguiente</button>
										</div>
									</div>
								</div>

								<%
								'Tipo: Numerica
								pregunta=25
								formulario=2
								'Cuestionario: 1
								%>
								<div id="step-<%=formulario%>" class="tab-pane" role="tabpanel" aria-labelledby="step-<%=formulario%>">
									<% SQL = "select * from tbl_preguntas_encuestas where activo = 'SI' and id_encuesta = " & ide & " and id_pregunta="& pregunta
									Cursor.Open SQL, StrConn, 1, 3
									Do While Not Cursor.EOF
									%>
									<h3 class="main_question"><%=Cursor("pregunta")%></h3>
									<!--div Contenido-->
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<div class="qty-buttons">
													<input type="button" value="+" class="qtyplus" name="p_<%=Cursor("id_pregunta")%>">
													<input type="text" id="p_<%=Cursor("id_pregunta")%>" name="p_<%=Cursor("id_pregunta")%>" value="" class="qty form-control required" placeholder="Ingrese número" onkeyup="this.value=this.value.replace(/[^\d]/,'')">
													<input type="button" value="-" class="qtyminus" name="p_<%=Cursor("id_pregunta")%>">
												</div>
											</div>
										</div>
									</div>
									<!-- div boton siguiente -->
									<div class="row mt-5">
    									<div class="col-md-12 d-flex flex-row-reverse">
											<button type="button" name="btn_form<%=formulario%>" id="btn_form<%=formulario%>" data-prg="<%=pregunta%>" class="btn btn-sm btn-info mr-5 btnSiguiente">Siguiente</button>
										</div>
									</div>
									<% Cursor.MoveNext
									Loop
									Cursor.Close %>
								</div>

								<%
								'Tipo: Numerica
								pregunta=26
								formulario=3
								'Cuestionario: 2
								%>
								<div id="step-<%=formulario%>" class="tab-pane" role="tabpanel" aria-labelledby="step-<%=formulario%>">
									<% SQL = "select * from tbl_preguntas_encuestas where activo = 'SI' and id_encuesta = " & ide & " and id_pregunta="& pregunta
									Cursor.Open SQL, StrConn, 1, 3
									Do While Not Cursor.EOF
									%>
									<h3 class="main_question"><%=Cursor("pregunta")%></h3>
									<!--div Contenido-->
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<div class="qty-buttons">
													<input type="button" value="+" class="qtyplus" name="p_<%=Cursor("id_pregunta")%>">
													<input type="text" id="p_<%=Cursor("id_pregunta")%>" name="p_<%=Cursor("id_pregunta")%>" value="" class="qty form-control required" placeholder="Ingrese número" onkeyup="this.value=this.value.replace(/[^\d]/,'')">
													<input type="button" value="-" class="qtyminus" name="p_<%=Cursor("id_pregunta")%>">
												</div>
											</div>
										</div>
									</div>
									<!-- div boton siguiente -->
									<div class="row mt-5">
    									<div class="col-md-12 d-flex flex-row-reverse">
											<button type="button" name="btn_form<%=formulario%>" id="btn_form<%=formulario%>" data-prg="<%=pregunta%>" class="btn btn-sm btn-info mr-5 btnSiguiente">Siguiente</button>
										</div>
									</div>
									<% Cursor.MoveNext
									Loop
									Cursor.Close %>
								</div>

								<%
								'Tipo: Checkbox
								pregunta=27
								formulario=4
								'Cuestionario: 3
								%>
								<div id="step-<%=formulario%>" class="tab-pane" role="tabpanel" aria-labelledby="step-<%=formulario%>">
									<% SQL = "select * from tbl_preguntas_encuestas where activo = 'SI' and id_encuesta = " & ide & " and id_pregunta="& pregunta
									Cursor.Open SQL, StrConn, 1, 3
									Do While Not Cursor.EOF
									%>
									<h3 class="main_question"><%=Cursor("pregunta")%></h3>
									<!-- div contenido -->
									<div class="row">
										<% nuevaFila = "SI"
											i = 1 %>
											<% SQL = "select * from tbl_respuestas_encuestas where activo = 'SI' and id_pregunta = " & Cursor("id_pregunta")
											Cursor2.Open SQL, StrConn, 1, 3
											Do While Not Cursor2.EOF %>
											<% if nuevaFila = "SI" then
												nuevaFila = "NO"
												cerrado = "NO"%>
												<div class="col-md-6">
											<%end if %>
											<div class="form-check">
												<input class="form-check-input checkclick" type="checkbox" value="<%=Cursor2("respuesta")%>" data-div="<%=pregunta%>" id="checkbox<%=Cursor2("id_respuesta")%>" name="p_<%=Cursor("id_pregunta")%>">
												<label class="form-check-label checkclick label_letra" id="labelche<%=Cursor2("id_respuesta")%>" for="checkbox<%=Cursor2("id_respuesta")%>" data-div="<%=pregunta%>"><%=Cursor2("respuesta")%></label>
											</div>
											<% i = i + 1
											if i > Cursor("filas") then
												nuevaFila = "SI"
												i = 1
												cerrado = "SI"
												Response.Write("</div>")
											end if %>
											<% Cursor2.MoveNext
											Loop
											Cursor2.Close %>
											<% if cerrado = "NO" then%>
												</div>
											<% end if %>
									</div>
									<!-- div Otros o Otras -->
									<div class="col-md-12 divOtros" id="divotro<%=pregunta%>">
										<div class="form-group">
											<input type="text" name="txtotro<%=pregunta%>" id="txtotro<%=pregunta%>" class="form-control" placeholder="Especifique cuál">
										</div>
									</div>
									<!-- div boton siguiente -->
									<div class="row mt-5">
    									<div class="col-md-12 d-flex flex-row-reverse">
											<button type="button" name="btn_form<%=formulario%>" id="btn_form<%=formulario%>" data-prg="<%=pregunta%>" class="btn btn-sm btn-info mr-5 btnSiguiente">Siguiente</button>
										</div>
									</div>
									<% Cursor.MoveNext
									Loop
									Cursor.Close %>
								</div>

								<%
								'Tipo: Checkbox
								pregunta=28
								formulario=5
								'Cuestionario: 4
								%>
								<div id="step-<%=formulario%>" class="tab-pane" role="tabpanel" aria-labelledby="step-<%=formulario%>">
									<% SQL = "select * from tbl_preguntas_encuestas where activo = 'SI' and id_encuesta = " & ide & " and id_pregunta="& pregunta
									Cursor.Open SQL, StrConn, 1, 3
									Do While Not Cursor.EOF
									%>
									<h3 class="main_question"><%=Cursor("pregunta")%></h3>
									<!-- div contenido -->
									<div class="row">
										<% nuevaFila = "SI"
											i = 1 %>
											<% SQL = "select * from tbl_respuestas_encuestas where activo = 'SI' and id_pregunta = " & Cursor("id_pregunta")
											Cursor2.Open SQL, StrConn, 1, 3
											Do While Not Cursor2.EOF %>
											<% if nuevaFila = "SI" then
												nuevaFila = "NO"
												cerrado = "NO"%>
												<div class="col-md-6">
											<%end if %>
											<div class="form-check">
												<input class="form-check-input checkclick" type="checkbox" value="<%=Cursor2("respuesta")%>" data-div="<%=pregunta%>" id="checkbox<%=Cursor2("id_respuesta")%>" name="p_<%=Cursor("id_pregunta")%>">
												<label class="form-check-label checkclick label_letra" id="labelche<%=Cursor2("id_respuesta")%>" for="checkbox<%=Cursor2("id_respuesta")%>" data-div="<%=pregunta%>"><%=Cursor2("respuesta")%></label>
											</div>
											<% i = i + 1
											if i > Cursor("filas") then
												nuevaFila = "SI"
												i = 1
												cerrado = "SI"
												Response.Write("</div>")
											end if %>
											<% Cursor2.MoveNext
											Loop
											Cursor2.Close %>
											<% if cerrado = "NO" then%>
												</div>
											<% end if %>
									</div>
									<!-- div Otros o Otras -->
									<div class="col-md-12 divOtros" id="divotro<%=pregunta%>">
										<div class="form-group">
											<input type="text" name="txtotro<%=pregunta%>" id="txtotro<%=pregunta%>" class="form-control" placeholder="Especifique cuál">
										</div>
									</div>
									<!-- div boton siguiente -->
									<div class="row mt-5">
    									<div class="col-md-12 d-flex flex-row-reverse">
											<button type="button" name="btn_form<%=formulario%>" id="btn_form<%=formulario%>" data-prg="<%=pregunta%>" class="btn btn-sm btn-info mr-5 btnSiguiente">Siguiente</button>
										</div>
									</div>
									<% Cursor.MoveNext
									Loop
									Cursor.Close %>
								</div>

								<%
								'Tipo: Checkbox
								pregunta=29
								formulario=6
								'Cuestionario: 5
								%>
								<div id="step-<%=formulario%>" class="tab-pane" role="tabpanel" aria-labelledby="step-<%=formulario%>">
									<% SQL = "select * from tbl_preguntas_encuestas where activo = 'SI' and id_encuesta = " & ide & " and id_pregunta="& pregunta
									Cursor.Open SQL, StrConn, 1, 3
									Do While Not Cursor.EOF
									%>
									<h3 class="main_question"><%=Cursor("pregunta")%></h3>
									<!-- div contenido -->
									<div class="row">
										<% nuevaFila = "SI"
											i = 1 %>
											<% SQL = "select * from tbl_respuestas_encuestas where activo = 'SI' and id_pregunta = " & Cursor("id_pregunta")
											Cursor2.Open SQL, StrConn, 1, 3
											Do While Not Cursor2.EOF %>
											<% if nuevaFila = "SI" then
												nuevaFila = "NO"
												cerrado = "NO"%>
												<div class="col-md-12">
											<%end if %>
											<div class="form-check">
												<input class="form-check-input checkclick" type="checkbox" value="<%=Cursor2("respuesta")%>" data-div="<%=pregunta%>" id="checkbox<%=Cursor2("id_respuesta")%>" name="p_<%=Cursor("id_pregunta")%>">
												<label class="form-check-label checkclick label_letra" id="labelche<%=Cursor2("id_respuesta")%>" for="checkbox<%=Cursor2("id_respuesta")%>" data-div="<%=pregunta%>"><%=Cursor2("respuesta")%></label>
											</div>
											<% i = i + 1
											if i > Cursor("filas") then
												nuevaFila = "SI"
												i = 1
												cerrado = "SI"
												Response.Write("</div>")
											end if %>
											<% Cursor2.MoveNext
											Loop
											Cursor2.Close %>
											<% if cerrado = "NO" then%>
												</div>
											<% end if %>
									</div>
									<!-- div Otros o Otras -->
									<div class="col-md-12 divOtros" id="divotro<%=pregunta%>">
										<div class="form-group">
											<input type="text" name="txtotro<%=pregunta%>" id="txtotro<%=pregunta%>" class="form-control" placeholder="Especifique cuál">
										</div>
									</div>
									<!-- div boton siguiente -->
									<div class="row mt-5">
    									<div class="col-md-12 d-flex flex-row-reverse">
											<button type="button" name="btn_form<%=formulario%>" id="btn_form<%=formulario%>" data-prg="<%=pregunta%>" class="btn btn-sm btn-info mr-5 btnSiguiente">Siguiente</button>
										</div>
									</div>
									<% Cursor.MoveNext
									Loop
									Cursor.Close %>
								</div>

								<%
								'Tipo: Radio
								pregunta=30
								formulario=7
								'Cuestionario: 6
								%>
								<div id="step-<%=formulario%>" class="tab-pane" role="tabpanel" aria-labelledby="step-<%=formulario%>">
									<% SQL = "select * from tbl_preguntas_encuestas where activo = 'SI' and id_encuesta = " & ide & " and id_pregunta="& pregunta
									Cursor.Open SQL, StrConn, 1, 3
									Do While Not Cursor.EOF
									%>
									<h3 class="main_question"><%=Cursor("pregunta")%></h3>
									<!-- div contenido -->
									<div class="row">
										<!--nuevos col -->
										<% nuevaFila = "SI"
											i = 1 %>
											<% SQL = "select * from tbl_respuestas_encuestas where activo = 'SI' and id_pregunta = " & Cursor("id_pregunta")
											Cursor2.Open SQL, StrConn, 1, 3
											Do While Not Cursor2.EOF %>
											<% if nuevaFila = "SI" then
												nuevaFila = "NO"
												cerrado = "NO"%>
												<div class="col-md-6">
											<%end if %>
											<div class="form-check">
												<input class="form-check-input radioclick" type="radio" value="<%=Cursor2("respuesta")%>" data-div="<%=pregunta%>" id="checkbox<%=Cursor2("id_respuesta")%>" name="p_<%=Cursor("id_pregunta")%>">
												<label class="form-check-label radioclick label_letra" id="labelrdi<%=Cursor2("id_respuesta")%>" for="checkbox<%=Cursor2("id_respuesta")%>" data-div="<%=pregunta%>"><%=Cursor2("respuesta")%></label>
											</div>
											<% i = i + 1
											if i > Cursor("filas") then
												nuevaFila = "SI"
												i = 1
												cerrado = "SI"
												Response.Write("</div>")
											end if %>
											<% Cursor2.MoveNext
											Loop
											Cursor2.Close %>
											<% if cerrado = "NO" then%>
												</div>
											<% end if %>
									</div>
									<!-- div Otros o Otras -->
									<div class="col-md-12 divOtros" id="divotro<%=pregunta%>">
										<div class="form-group">
											<input type="text" name="txtotro<%=pregunta%>" id="txtotro<%=pregunta%>" class="form-control" placeholder="Especifique cuál">
										</div>
									</div>
									<!-- div boton siguiente -->
									<div class="row mt-5">
    									<div class="col-md-12 d-flex flex-row-reverse">
											<button type="button" name="btn_form<%=formulario%>" id="btn_form<%=formulario%>" data-prg="<%=pregunta%>" class="btn btn-sm btn-info mr-5 btnSiguiente">Siguiente</button>
										</div>
									</div>
									<% Cursor.MoveNext
									Loop
									Cursor.Close %>
								</div>

								<%
								'Tipo: Radio
								pregunta=31
								formulario=8
								'Cuestionario: 7
								%>
								<div id="step-<%=formulario%>" class="tab-pane" role="tabpanel" aria-labelledby="step-<%=formulario%>">
									<% SQL = "select * from tbl_preguntas_encuestas where activo = 'SI' and id_encuesta = " & ide & " and id_pregunta="& pregunta
									Cursor.Open SQL, StrConn, 1, 3
									Do While Not Cursor.EOF
									%>
									<h3 class="main_question"><%=Cursor("pregunta")%></h3>
									<!-- div contenido -->
									<div class="row">
										<!--nuevos col -->
										<% nuevaFila = "SI"
											i = 1 %>
											<% SQL = "select * from tbl_respuestas_encuestas where activo = 'SI' and id_pregunta = " & Cursor("id_pregunta")
											Cursor2.Open SQL, StrConn, 1, 3
											Do While Not Cursor2.EOF %>
											<% if nuevaFila = "SI" then
												nuevaFila = "NO"
												cerrado = "NO"%>
												<div class="col-md-6">
											<%end if %>
											<div class="form-check">
												<input class="form-check-input radioclick" type="radio" value="<%=Cursor2("respuesta")%>" data-div="<%=pregunta%>" id="checkbox<%=Cursor2("id_respuesta")%>" name="p_<%=Cursor("id_pregunta")%>">
												<label class="form-check-label radioclick label_letra" id="labelrdi<%=Cursor2("id_respuesta")%>" for="checkbox<%=Cursor2("id_respuesta")%>" data-div="<%=pregunta%>"><%=Cursor2("respuesta")%></label>
											</div>
											<% i = i + 1
											if i > Cursor("filas") then
												nuevaFila = "SI"
												i = 1
												cerrado = "SI"
												Response.Write("</div>")
											end if %>
											<% Cursor2.MoveNext
											Loop
											Cursor2.Close %>
											<% if cerrado = "NO" then%>
												</div>
											<% end if %>
									</div>
									<!-- div Otros o Otras -->
									<div class="col-md-12 divOtros" id="divotro<%=pregunta%>">
										<div class="form-group">
											<input type="text" name="txtotro<%=pregunta%>" id="txtotro<%=pregunta%>" class="form-control" placeholder="Especifique cuál">
										</div>
									</div>
									<!-- div boton siguiente -->
									<div class="row mt-5">
    									<div class="col-md-12 d-flex flex-row-reverse">
											<button type="button" name="btn_form<%=formulario%>" id="btn_form<%=formulario%>" data-prg="<%=pregunta%>" class="btn btn-sm btn-info mr-5 btnSiguiente">Siguiente</button>
										</div>
									</div>
									<% Cursor.MoveNext
									Loop
									Cursor.Close %>
								</div>

								<%
								'Tipo: Checkbox
								pregunta=34
								formulario=9
								'Cuestionario: 5
								%>
								<div id="step-<%=formulario%>" class="tab-pane" role="tabpanel" aria-labelledby="step-<%=formulario%>">
									<% SQL = "select * from tbl_preguntas_encuestas where activo = 'SI' and id_encuesta = " & ide & " and id_pregunta="& pregunta
									Cursor.Open SQL, StrConn, 1, 3
									Do While Not Cursor.EOF
									%>
									<h3 class="main_question"><%=Cursor("pregunta")%></h3>
									<!-- div contenido -->
									<div class="row">
										<% nuevaFila = "SI"
											i = 1 %>
											<% SQL = "select * from tbl_respuestas_encuestas where activo = 'SI' and id_pregunta = " & Cursor("id_pregunta")
											Cursor2.Open SQL, StrConn, 1, 3
											Do While Not Cursor2.EOF %>
											<% if nuevaFila = "SI" then
												nuevaFila = "NO"
												cerrado = "NO"%>
												<div class="col-md-12">
											<%end if %>
											<div class="form-check">
												<input class="form-check-input checkclick" type="checkbox" value="<%=Cursor2("respuesta")%>" data-div="<%=pregunta%>" id="checkbox<%=Cursor2("id_respuesta")%>" name="p_<%=Cursor("id_pregunta")%>">
												<label class="form-check-label checkclick label_letra" id="labelche<%=Cursor2("id_respuesta")%>" for="checkbox<%=Cursor2("id_respuesta")%>" data-div="<%=pregunta%>"><%=Cursor2("respuesta")%></label>
											</div>
											<% i = i + 1
											if i > Cursor("filas") then
												nuevaFila = "SI"
												i = 1
												cerrado = "SI"
												Response.Write("</div>")
											end if %>
											<% Cursor2.MoveNext
											Loop
											Cursor2.Close %>
											<% if cerrado = "NO" then%>
												</div>
											<% end if %>
									</div>
									<!-- div Otros o Otras -->
									<div class="col-md-12 divOtros" id="divotro<%=pregunta%>">
										<div class="form-group">
											<input type="text" name="txtotro<%=pregunta%>" id="txtotro<%=pregunta%>" class="form-control" placeholder="Especifique cuál">
										</div>
									</div>
									<!-- div boton siguiente -->
									<div class="row mt-5">
    									<div class="col-md-12 d-flex flex-row-reverse">
											<button type="button" name="btn_form<%=formulario%>" id="btn_form<%=formulario%>" data-prg="<%=pregunta%>" class="btn btn-sm btn-info mr-5 btnSiguiente">Siguiente</button>
										</div>
									</div>
									<% Cursor.MoveNext
									Loop
									Cursor.Close %>
								</div>

								<%
								'Tipo: Checkbox
								pregunta=35
								formulario=10
								'Cuestionario: 5
								%>
								<div id="step-<%=formulario%>" class="tab-pane" role="tabpanel" aria-labelledby="step-<%=formulario%>">
									<% SQL = "select * from tbl_preguntas_encuestas where activo = 'SI' and id_encuesta = " & ide & " and id_pregunta="& pregunta
									Cursor.Open SQL, StrConn, 1, 3
									Do While Not Cursor.EOF
									%>
									<h3 class="main_question"><%=Cursor("pregunta")%></h3>
									<!-- div contenido -->
									<div class="row">
										<% nuevaFila = "SI"
											i = 1 %>
											<% SQL = "select * from tbl_respuestas_encuestas where activo = 'SI' and id_pregunta = " & Cursor("id_pregunta")
											Cursor2.Open SQL, StrConn, 1, 3
											Do While Not Cursor2.EOF %>
											<% if nuevaFila = "SI" then
												nuevaFila = "NO"
												cerrado = "NO"%>
												<div class="col-md-12">
											<%end if %>
											<div class="form-check">
												<input class="form-check-input checkclick" type="checkbox" value="<%=Cursor2("respuesta")%>" data-div="<%=pregunta%>" id="checkbox<%=Cursor2("id_respuesta")%>" name="p_<%=Cursor("id_pregunta")%>">
												<label class="form-check-label checkclick label_letra" id="labelche<%=Cursor2("id_respuesta")%>" for="checkbox<%=Cursor2("id_respuesta")%>" data-div="<%=pregunta%>"><%=Cursor2("respuesta")%></label>
											</div>
											<% i = i + 1
											if i > Cursor("filas") then
												nuevaFila = "SI"
												i = 1
												cerrado = "SI"
												Response.Write("</div>")
											end if %>
											<% Cursor2.MoveNext
											Loop
											Cursor2.Close %>
											<% if cerrado = "NO" then%>
												</div>
											<% end if %>
									</div>
									<!-- div Otros o Otras -->
									<div class="col-md-12 divOtros" id="divotro<%=pregunta%>">
										<div class="form-group">
											<input type="text" name="txtotro<%=pregunta%>" id="txtotro<%=pregunta%>" class="form-control" placeholder="Especifique cuál">
										</div>
									</div>
									<!-- div boton siguiente -->
									<div class="row mt-5">
    									<div class="col-md-12 d-flex flex-row-reverse">
											<button type="button" name="btn_form<%=formulario%>" id="btn_form<%=formulario%>" data-prg="<%=pregunta%>" class="btn btn-sm btn-info mr-5 btnSiguiente">Siguiente</button>
										</div>
									</div>
									<% Cursor.MoveNext
									Loop
									Cursor.Close %>
								</div>

								<%
								'Tipo: Abierta
								pregunta=36
								formulario=11
								'Cuestionario: 10
								%>
								<div id="step-<%=formulario%>" class="tab-pane" role="tabpanel" aria-labelledby="step-<%=formulario%>">
									<% SQL = "select * from tbl_preguntas_encuestas where activo = 'SI' and id_encuesta = " & ide & " and id_pregunta="& pregunta
									Cursor.Open SQL, StrConn, 1, 3
									Do While Not Cursor.EOF
									%>
									<h3 class="main_question"><%=Cursor("pregunta")%></h3>
									<!-- div contenido -->
									<div class="row">
										<div class="col-md-12">
											<div class="form-group">
												<textarea name="p_<%=Cursor("id_pregunta")%>" id="p_<%=Cursor("id_pregunta")%>" class="form-control" style="height:150px;" placeholder="Escriba aquí su respuesta"></textarea>
											</div>
										</div>
									</div>
									<!-- div boton siguiente -->
									<div class="row mt-5">
    									<div class="col-md-12 d-flex flex-row-reverse">
											<button type="button" name="btn_form<%=formulario%>" id="btn_form<%=formulario%>" data-prg="<%=pregunta%>" class="btn btn-success btn-sm mr-5 btnSiguiente">Enviar</button>
										</div>
									</div>
									<% Cursor.MoveNext
									Loop
									Cursor.Close %>
								</div>
							</div>
						</form>
					</div>
					<!-- /Wizard container -->
				</div>
			</div><!-- /Row -->
		</div><!-- /Form_container -->

	</main>

	<!--#include file="aviso-privacidad.asp"-->
	<!--#include file="terminos-condiciones.asp"-->
	<footer id="home" class="clearfix">
		<p>© 2021 XXXX S de RL de CV / Número de aviso COFEPRIS: XXXXXXXXXXXX</p>
		<ul>
			<li><a href="#" class="animated_link" data-toggle="modal" data-target="#aviso">Privacidad</a></li>
			<li><a href="#" class="animated_link" data-toggle="modal" data-target="#terminos">Términos de Uso</a></li>
			<li><a href="https://network.medchannel.org/help/contact" target="_blank" class="animated_link">Contacto</a></li>
		</ul>
	</footer>
	<!-- end footer-->

	<!-- Jquery-->
	<script src="js/jquery-3.5.1.min.js"></script>
	<!-- Common script -->
	<script src="js/common_scripts.js"></script>
	<!-- Wizard script -->
	<script src="js/questionare_wizard_func.js"></script>
	<!-- Menu script -->
	<script src="js/velocity.min.js"></script>
	<script src="js/main.js"></script>
	<!-- Theme script -->
	<script src="js/functions.js"></script>
	<!-- Datepicker script -->
	<script src="js/datepicker_func.js"></script>

	<!-- Include SmartWizard JavaScript source -->
	<script src="https://cdn.jsdelivr.net/npm/smartwizard@5/dist/js/jquery.smartWizard.min.js" type="text/javascript"></script>
	<!--incluimos la libreria de momentjs para trabajar las fechas-->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js" integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ==" crossorigin="anonymous"></script>
	<!--Incluimos sweet alert-->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"></script>
	<script src="//cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.js"></script>

	<script src="js/main.js"></script>

</body>
</html>