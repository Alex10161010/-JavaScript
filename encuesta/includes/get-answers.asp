<!--#include file="../data/conex_md_16_22.inc"-->
<%
Response.Expires = 15
Response.ExpiresAbsolute = Now() - 2
Response.AddHeader "pragma","no-cache"
Response.AddHeader "cache-control","private"
Response.CacheControl = "private"
Session.LCID = 1034
Session.CodePage = 65001

'Session.Contents.RemoveAll()

set Cursor = createobject("ADODB.Recordset")
Cursor.CursorType =1
Cursor.LockType = 3

	dim data
	SQL = "SELECT TOP 1 * FROM log_respuestas_encuestas WHERE id_usuario = " & Request("idu") & " AND id_encuesta = " & Request("ide") ORDER BY secuencia DESC
	'Response.Write(SQL)
	Cursor.Open SQL, StrConn, 1, 3
		if Cursor.RecordCount > 0 then
			id_usuario = Cursor("id_usuario")
			id_encuesta = Cursor("id_encuesta")
			id_especialidad = Cursor("id_especialidad")
			id_estado = Cursor("id_estado")
			tipo_practica = Cursor("tipo_practica")
			fecha_nacimiento = Cursor("fecha_nacimiento")
			secuencia = Cursor("secuencia")
	Cursor.Close
		data ="{id_usuario:"& id_usuario &",id_encuesta:"& id_encuesta &",id_especialidad:"& id_especialidad &",id_estado:"& id_estado &",tipo_practica:"& tipo_practica &",fecha:"& fecha_nacimiento &",secuencia:"& secuencia &"}"
	else
		data="{'secuencia:"& 0 &"}"
	end if

	Response.Write(data);
%>