<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="MAVIA - Register, Reservation, Questionare, Reviews form wizard">
	<meta name="author" content="Ansonika">
	<title>Livemed Encuestas</title>

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
							<img class="img-fluid" src="https://livemed.org/images/logo_livemed.png">
						<!--</a>-->
                    </div>
                </div>
                <div class="col-5 col-sm-5 col-md-6 col-lg-6">
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
							<% for i = 1 to 10 %>
							<li class="nav-item">
								<a class="nav-link" href="#step-<%=i%>"></a>
							</li>
							<% next %>
						</ul>
						<form id="encuesta" padding="padding-top: 30px;margin-top: 30px;">
							<input  type="text" name="idu" id="idu" value="<%=idu%>" class="form-control d-none">
							<input  type="text" name="ide" id="ide" value="<%=ide%>" class="form-control d-none">
							<div class="tab-content">
								<!-- /Base -->
								<div id="step-1" class="tab-pane" role="tabpanel" aria-labelledby="step-1">
									<h3 class="main_question"><strong></strong>Elija una opción de acuerdo a su perfil</h3>
									<div class="row">
										<div class="col-12 col-md-6">
											<div class="form-group">
												<div class="styled-select">
													<select class="required" name="especialidad" id="especialidad">
														<option value="" selected>Especialidad</option>
														<% SQL = "select * from cat_especialidades_ususarios where activa = 'SI'"
														Cursor.Open SQL, StrConn, 1, 3
														Do While Not Cursor.EOF %>
														<option value="<%=Cursor("id_especialidad")%>"><%=Cursor("especialidad")%></option>
														<% Cursor.MoveNext
														Loop
														Cursor.Close %>
													</select>
												</div>
											</div>
										</div>
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

										<div class="col-12 col-md-12">
											<div class="form-group">
												<!--<input class="form-control required" type="text" name="fecha_nacimiento" id="check_in" placeholder="Fecha de nacimiento" autocomplete="off">-->
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
														<select id="txtmes" name="mes" class="form-control">
														  <option value="">Mes</option>
														  	<%For i = 1 To 12%>
														  <option value="<%=i%>"><%=i%></option>
															<%Next%>
														</select>
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

										<div class="col-12 col-md-6">
											<div class="form-group">
												<div class="styled-select">
													<select class="required" name="estado" id="estado">
														<option value="" selected>Estado donde práctica</option>
														<% SQL = "select * from cat_estados where activo = 'SI'"
														Cursor.Open SQL, StrConn, 1, 3
														Do While Not Cursor.EOF %>
														<option value="<%=Cursor("id_estado")%>"><%=Cursor("estado")%></option>
														<% Cursor.MoveNext
														Loop
														Cursor.Close %>
													</select>
												</div>
											</div>
										</div>

									</div>
									<!-- div boton siguiente -->
									<div class="row mt-5 ">
    									<div class="col-md-12 d-flex flex-row-reverse">
											<button type="button" name="btn_form1" id="btn_form1" class="btn btn-sm btn-info mr-5 btnSiguiente">Siguiente</button>
										</div>
									</div>
								</div>

								<!-- /Numerica -->
								<div id="step-2" class="tab-pane" role="tabpanel" aria-labelledby="step-2">
									<% SQL = "select * from tbl_preguntas_encuestas where activo = 'SI' and id_encuesta = " & ide & " and id_pregunta=14"
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
											<button type="button" name="btn_form2" id="btn_form2" class="btn btn-sm btn-info mr-5 btnSiguiente ">Siguiente</button>
										</div>
									</div>
									<% Cursor.MoveNext
									Loop
									Cursor.Close %>
								</div>

								<!-- /Numerica -->
								<div id="step-3" class="tab-pane" role="tabpanel" aria-labelledby="step-3">
									<% SQL = "select * from tbl_preguntas_encuestas where activo = 'SI' and id_encuesta = " & ide & " and id_pregunta=15"
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
											<button type="button" name="btn_form3" id="btn_form3" class="btn btn-sm btn-info mr-5 btnSiguiente">Siguiente</button>
										</div>
									</div>
									<% Cursor.MoveNext
									Loop
									Cursor.Close %>
								</div>

								<!-- /Radio-evaluacion -->
								<div id="step-4" class="tab-pane" role="tabpanel" aria-labelledby="step-4">
									<% SQL = "select * from tbl_preguntas_encuestas where activo = 'SI' and id_encuesta = " & ide & " and id_pregunta=16"
									Cursor.Open SQL, StrConn, 1, 3
									Do While Not Cursor.EOF
									%>
									<h3 class="main_question"><%=Cursor("pregunta")%></h3>
									<!-- div contenido -->
									<div class="row">
										<div class="col-md-12">
											<% SQL = "select * from tbl_respuestas_encuestas where activo = 'SI' and id_pregunta = " & Cursor("id_pregunta")
											Cursor2.Open SQL, StrConn, 1, 3
											Do While Not Cursor2.EOF %>
											<div class="form-group radio_input mb-0">
												<label><input type="radio" value="<%=Cursor2("respuesta")%>" name="p_<%=Cursor("id_pregunta")%>" id="p_<%=Cursor("id_pregunta")%>" class="icheck required"><%=Cursor2("respuesta")%></label>
											</div>
											<% Cursor2.MoveNext
											Loop
											Cursor2.Close %>
										</div>
									</div>
									<!-- div boton siguiente -->
									<div class="row mt-5">
    									<div class="col-md-12 d-flex flex-row-reverse">
											<button type="button" name="btn_form4" id="btn_form4" class="btn btn-sm btn-info mr-5 btnSiguiente">Siguiente</button>
										</div>
									</div>
									<% Cursor.MoveNext
									Loop
									Cursor.Close %>
								</div>

								<!-- /Checkbox 17-->
								<div id="step-5" class="tab-pane" role="tabpanel" aria-labelledby="step-5">
									<% SQL = "select * from tbl_preguntas_encuestas where activo = 'SI' and id_encuesta = " & ide & " and id_pregunta=17"
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
												<input class="form-check-input che<%=Cursor2("respuesta")%>_<%=Cursor("id_pregunta")%>" type="checkbox" value="<%=Cursor2("respuesta")%>" id="<%=Cursor2("respuesta")%><%=Cursor("id_pregunta")%>" name="p_<%=Cursor("id_pregunta")%>">
												<label class="form-check-label lab<%=Cursor2("respuesta")%>_<%=Cursor("id_pregunta")%> label_letra" id="lab<%=Cursor2("respuesta")%>_<%=Cursor("id_pregunta")%>" for="<%=Cursor2("respuesta")%><%=Cursor("id_pregunta")%>"><%=Cursor2("respuesta")%></label>
											</div>
											<%if Cursor2("respuesta")= "Otra" then%>
												<div class="col-md-12" id="divotro<%=Cursor("id_pregunta")%>">
													<div class="form-group">
														<input type="text" name="txtotro<%=Cursor("id_pregunta")%>" id="txtotro<%=Cursor("id_pregunta")%>" class="form-control" placeholder="Especifique cuál">
													</div>
												</div>
											<%end if%>
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
									<!-- div boton siguiente -->
									<div class="row mt-5">
    									<div class="col-md-12 d-flex flex-row-reverse">
											<button type="button" name="btn_form5" id="btn_form5" class="btn btn-sm btn-info mr-5 btnSiguiente">Siguiente</button>
										</div>
									</div>
									<% Cursor.MoveNext
									Loop
									Cursor.Close %>
								</div>

								<!-- /Radio-evaluacion -->
								<div id="step-6" class="tab-pane" role="tabpanel" aria-labelledby="step-6">
									<% SQL = "select * from tbl_preguntas_encuestas where activo = 'SI' and id_encuesta = " & ide & " and id_pregunta=18"
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
											<div class="form-group radio_input mb-0">
												<label><input type="radio" value="<%=Cursor2("respuesta")%>" name="p_<%=Cursor("id_pregunta")%>" id="p_<%=Cursor("id_pregunta")%>" class="icheck required"><%=Cursor2("respuesta")%></label>
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
									<!-- div boton siguiente -->
									<div class="row mt-5">
    									<div class="col-md-12 d-flex flex-row-reverse">
											<button type="button" name="btn_form6" id="btn_form6" class="btn btn-sm btn-info mr-5 btnSiguiente">Siguiente</button>
										</div>
									</div>
									<% Cursor.MoveNext
									Loop
									Cursor.Close %>
								</div>

								<!-- /Checkbox 19-->
								<div id="step-7" class="tab-pane" role="tabpanel" aria-labelledby="step-7">
									<% SQL = "select * from tbl_preguntas_encuestas where activo = 'SI' and id_encuesta = " & ide & " and id_pregunta=19"
									Cursor.Open SQL, StrConn, 1, 3
									Do While Not Cursor.EOF
									%>
									<h3 class="main_question" id="pre19"><%=Cursor("pregunta")%></h3>
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
												<input class="form-check-input che<%=Cursor2("respuesta")%>_<%=Cursor("id_pregunta")%>" type="checkbox" value="<%=Cursor2("respuesta")%>" id="<%=Cursor2("respuesta")%><%=Cursor("id_pregunta")%>" name="p_<%=Cursor("id_pregunta")%>">
												<label class="form-check-label lab<%=Cursor2("respuesta")%>_<%=Cursor("id_pregunta")%> label_letra" id="lab<%=Cursor2("respuesta")%>_<%=Cursor("id_pregunta")%>" for="<%=Cursor2("respuesta")%><%=Cursor("id_pregunta")%>"><%=Cursor2("respuesta")%></label>
											</div>
											<%if Cursor2("respuesta")= "Otra" then%>
												<div class="col-md-12" id="divotro<%=Cursor("id_pregunta")%>">
													<div class="form-group">
														<input type="text" name="txtotro<%=Cursor("id_pregunta")%>" id="txtotro<%=Cursor("id_pregunta")%>" class="form-control" placeholder="Especifique cuál">
													</div>
												</div>
											<%end if%>
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
									<!-- div boton siguiente -->
									<div class="row mt-5">
    									<div class="col-md-12 d-flex flex-row-reverse">
											<button type="button" name="btn_form7" id="btn_form7" class="btn btn-sm btn-info mr-5 btnSiguiente">Siguiente</button>
										</div>
									</div>
									<% Cursor.MoveNext
									Loop
									Cursor.Close %>
								</div>

								<!-- /Checkbox 20-->
								<div id="step-8" class="tab-pane" role="tabpanel" aria-labelledby="step-8">
									<% SQL = "select * from tbl_preguntas_encuestas where activo = 'SI' and id_encuesta = " & ide & " and id_pregunta=20"
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
												<input class="form-check-input che<%=Cursor2("respuesta")%>_<%=Cursor("id_pregunta")%>" type="checkbox" value="<%=Cursor2("respuesta")%>" id="<%=Cursor2("respuesta")%><%=Cursor("id_pregunta")%>" name="p_<%=Cursor("id_pregunta")%>">
												<label class="form-check-label lab<%=Cursor2("respuesta")%>_<%=Cursor("id_pregunta")%> label_letra" id="lab<%=Cursor2("respuesta")%>_<%=Cursor("id_pregunta")%>" for="<%=Cursor2("respuesta")%><%=Cursor("id_pregunta")%>"><%=Cursor2("respuesta")%></label>
											</div>
											<%if Cursor2("respuesta")= "Otra" then%>
												<div class="col-md-12" id="divotro<%=Cursor("id_pregunta")%>">
													<div class="form-group">
														<input type="text" name="txtotro<%=Cursor("id_pregunta")%>" id="txtotro<%=Cursor("id_pregunta")%>" class="form-control" placeholder="Especifique cuál">
													</div>
												</div>
											<%end if%>
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
									<!-- div boton siguiente -->
									<div class="row mt-5">
    									<div class="col-md-12 d-flex flex-row-reverse">
											<button type="button" name="btn_form8" id="btn_form8" class="btn btn-sm btn-info mr-5 btnSiguiente">Siguiente</button>
										</div>
									</div>
									<% Cursor.MoveNext
									Loop
									Cursor.Close %>
								</div>

								<!-- /Checkbox 21-->
								<div id="step-9" class="tab-pane" role="tabpanel" aria-labelledby="step-9">
									<% SQL = "select * from tbl_preguntas_encuestas where activo = 'SI' and id_encuesta = " & ide & " and id_pregunta=21"
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
												<input class="form-check-input che<%=Cursor2("respuesta")%>_<%=Cursor("id_pregunta")%>" type="checkbox" value="<%=Cursor2("respuesta")%>" id="<%=Cursor2("respuesta")%><%=Cursor("id_pregunta")%>" name="p_<%=Cursor("id_pregunta")%>">
												<label class="form-check-label lab<%=Cursor2("respuesta")%>_<%=Cursor("id_pregunta")%> label_letra" id="lab<%=Cursor2("respuesta")%>_<%=Cursor("id_pregunta")%>" for="<%=Cursor2("respuesta")%><%=Cursor("id_pregunta")%>"><%=Cursor2("respuesta")%></label>
											</div>
											<%if Cursor2("respuesta")= "Otra" then%>
												<div class="col-md-12" id="divotro<%=Cursor("id_pregunta")%>">
													<div class="form-group">
														<input type="text" name="txtotro<%=Cursor("id_pregunta")%>" id="txtotro<%=Cursor("id_pregunta")%>" class="form-control" placeholder="Especifique cuál">
													</div>
												</div>
											<%end if%>
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
									<!-- div boton siguiente -->
									<div class="row mt-5">
    									<div class="col-md-12 d-flex flex-row-reverse">
											<button type="button" name="btn_form9" id="btn_form9" class="btn btn-sm btn-info mr-5 btnSiguiente">Siguiente</button>
										</div>
									</div>
									<% Cursor.MoveNext
									Loop
									Cursor.Close %>
								</div>

								<!-- /Abierta -->
								<div id="step-10" class="tab-pane" role="tabpanel" aria-labelledby="step-10">
									<% SQL = "select * from tbl_preguntas_encuestas where activo = 'SI' and id_encuesta = " & ide & " and id_pregunta=22"
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
											<button type="button" name="btn_form10" id="btn_form10" class="btn btn-success btn-sm mr-5 btnEnviar">Enviar</button>
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
		<p>© 2021 Livemed S de RL de CV / Número de aviso COFEPRIS: 183300202A0008</p>
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
	<script src="app.js"></script>

</body>
</html>