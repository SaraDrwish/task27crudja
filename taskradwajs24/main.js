 var listbox=[];
function add( ){
var pname = document.getElementById("pname").value  ;
var ppric = document.getElementById("ppric").value ;
var pcatgo = document.getElementById("pcatgo").value ;
var pdesc= document.getElementById("pdesc").value ;
    var temp = "";
    var count = listbox.length;
                    for(var i = 0 ; i<count  ; i++ )
                    {
                                temp =
                        ` 
                        <div class="innerbox" id="innerbox">
                        <img src= "https://elzerowebschool.github.io/HTML_And_CSS_Template_Two/images/shuffle-06.jpg"  alt="gg"></img>
                        <span id="text1"> `+pname +` </span> 
                        <span id="text2"> `+ppric +` </span>
                        <p id="text3" >  `+ pdesc+`  </p>
                        <span id="text4" > `+ pcatgo +`</span>
                        </div>
                        `   
                    }

var pname = document.getElementById("pname").value=""  ;
var pcatgo = document.getElementById("pcatgo").value ="";
var pdesc= document.getElementById("pdesc").value="" ;
var ppric= document.getElementById("ppric").value="" ;

document.getElementById("box").innerHTML+= temp;
listbox.push(temp);
}
add( );

