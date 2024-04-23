<!Doctype html>
<html >
 <head>
  <meta charset='UTF-8'>
  <title>บทเรียน JavaScript</title>
 </head>
 <body>
  <script>
  let mth=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"]
  let today=new Date()
  let d=today.getDay();
  let dd=today.getDate();
  let mm=today.getMonth();
  let y=today.getFullYear()
  let yth=y+543
  let space=new Date(y,mm,1).getDay()
  let maxday=new Date(y,mm+1,0).getDate()
 document.write('<table align=center border=1><tr><th colspan=7>'+mth[mm]+
 '&nbsp;&nbsp;&nbsp;'+yth+'</th></tr>'+
 '<tr><th>อา</th><th>จ</th><th>อ</th>'+
 '<th>พ</th><th>พฤ</th><th>ศ</th><th>ส</th></tr>')
for(let r=0;r<maxday;r++){
document.write('<tr>')
for(let sp=0;sp<space;sp++)document.write('<td width=30 align=center>&nbsp;</td>')
for(let l=1;l<=7-space;l++){
	r++
	if(r>maxday)
	document.write('<td width=30 align=center>&nbsp;</td>')
	else if(r==dd)
    document.write('<td  style=background:orange;color width=30 align=center><b>'+r+'</td>')
	else
document.write('<td width=30 align=center>'+r+'</td>')
}//end loop l
    r--
	space=0
document.write('</tr>')
}//end loop r
document.write('</table>')
</script> </body>
</html>