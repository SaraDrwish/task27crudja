 var listbox=[];
// var box = document.getElementById("box");

function add( ){

var pname = document.getElementById("pname").value  ;
var ppric = document.getElementById("ppric").value ;
var pcatgo = document.getElementById("pcatgo").value ;
var pdesc= document.getElementById("pdesc").value ;
var text1 = document.getElementById("text1");
var text2= document.getElementById("text2");
var text3 = document.getElementById("text3");
var text4 = document.getElementById("text4");
 
    var temp = "";
    var count = listbox.length;

                    for(var i = 0 ; i<count  ; i++ )
                    {

                        
                                temp +=
                        ` 
                        <div class="innerbox" id="innerbox">
                        <img src= "https://elzerowebschool.github.io/HTML_And_CSS_Template_Two/images/shuffle-06.jpg"  alt="gg"></img>
                        <span id="text1"> `+pname +` </span> 
                        <span id="text2"> `+ppric +` </span>
                        <p id="text3" >  `+ pdesc+`  </p>
                        <span id="text4" > `+ pcatgo +`</span>
                        </div>
                        `   

                       

                        // var temp = document.getElementById("temp").value ;

                    }

                    var pname = document.getElementById("pname").value=""  ;
                    var ppric = document.getElementById("ppric").value ="";
                    var pcatgo = document.getElementById("pcatgo").value ="";
                    var pdesc= document.getElementById("pdesc").value="" ;

// box = document.getElementById("box").style.display="none";
document.getElementById("box").innerHTML= temp;
listbox.push(temp);

}
add( );
// function veiw(){
//     var temp = document.getElementById("temp").value ;
//     listbox.push(temp);
//     document.getElementById("temp").value = "";

//     add();
// }

