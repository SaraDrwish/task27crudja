
var tasks = [];

function add(){

    var task = document.getElementById("task").value ;
    tasks.push(task);
    document.getElementById("task").value = "";

    view();
}

function view(){

    var list = "";
    var count = tasks.length;

    for(var i = 0 ; i< count; i++ ){

        list += "<li ondblclick = 'destroy( " + i + ")   '> "   +  tasks[i] + "</li>" ;  
    }
 
    document.getElementById("res").innerHTML= list;

}

function destroy(index){
    
    tasks.splice(index , 1);
    view();
}



function update(){


}


function edit(){

    
}