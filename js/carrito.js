




var contador = 0;
var preciototal = 0;
var seleccionadas =[]
function seleccionar(idfila) {
    //console.log("Id:" + idfila);
    if ($("#" + idfila).hasClass("seleccionada")) {
        $("#" + idfila).removeClass("seleccionada");
        console.log(seleccionadas.lastIndexOf(idfila))
        seleccionadas.splice(seleccionadas.lastIndexOf(idfila),1)
        //console.log(seleccionadas);
    } else {
        $("#" + idfila).addClass("seleccionada");
        seleccionadas.push(idfila);
    }
    
    console.log(seleccionadas);
}
$("#btnpizza").click(function () {
    agregar("#nombre", "#precio");
});
$("#btnbrgr").click(function () {
    agregar("#nombre2", "#precio2");
});
$("#btncafe").click(function () {
    agregar("#nombre3", "#precio3");
});
$("#btnice").click(function () {
    agregar("#nombre4", "#precio4");
});
function agregar(nombre, precio) {
    $("#span1").text(1 + parseInt($("#span1").text()));
    contador++
    preciototal += parseInt($(precio).text())
    $("#montoTotal").text(preciototal);
    var fila = '<tr id="fila' + contador +
        '" class="selected" onclick="seleccionar(this.id)">' +
        '<td id="orden' + contador +'">' + contador + '</td>' +
        '<td>' + $(nombre).text() + '</td>' +
        '<td>' + $(precio).text() + '</td></tr>';
    $("tbody").append(fila);
}
$("#btnComprarTodo").click(function () {
    
    preciototal = 0
    $("#montoTotal").text(preciototal);
    $("tbody>tr").remove();
});





$("#btnElim").click(function () {
    eliminar(seleccionadas)
});
function eliminar(seleccionadas) {
    var nres=0
    for(let i=0; i<seleccionadas.length; i++){
        var cadena=($("#"+seleccionadas[i]).text())
        var ultimoNumeroEncontrado = cadena.match(/(\d+)$/);

        // Mostrar el último número encontrado
        if (ultimoNumeroEncontrado) {
            nres+=parseInt(ultimoNumeroEncontrado[1])
        console.log("Último número encontrado:", ultimoNumeroEncontrado[1]);
        }
        $("#" + seleccionadas[i]).remove();
    }
    preciototal=preciototal-nres
    $("#montoTotal").text(preciototal);
    reordenar()
  
}

function reordenar()
    {
        n=1
        $("tbody td:nth-child(1)").each(function() {
            $(this).text(n++);
        });
        var d=$("tbody tr")
        $("#span1").text(d.length); 
    }








$("#btncarrito").mousemove(function (e) { 
    $(this).css("transform", "scale(1.2)")
    $(this).css("transform", "rotate(10deg)")
    
});
$("#btncarrito").mouseout(function () {
    $(this).css("transform", "scale(1)")
    
});

var posi=0
$("#btncarrito").click(function(){
    posi= $(this).position();
    
    $(this).animate({left: '-250px'});
    
  }); 
  

$("#btncarritoPosicion").click(function(){
    
    console.log(typeof(posi.left))
    $("#btncarrito").animate({left:"0px"});
  }); 