var data = sessionStorage.getItem('user'); 
$("#login").html("<i class='fa fa-user' aria-hidden='true'></i><b style='margin-left:10px'>"+data+"</b>");

function pagina(op){
    if(op==1){
        $("#todo").load("home.html");
    }
    if(op==2){
        $("#todo").load("personas.html");
    }
    if(op==3){
        $("#todo").load("operations.html");
    }
    if(op==4){
        $("#todo").load("examples.html");
    }
}
<nav class="navegador">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="dropdown-item" href="#" onclick="pagina(1)">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="dropdown-item" href="#" onclick="pagina(2)">Persons</a>
                    </li>
                    <li class="nav-item">
                        <a class="dropdown-item" href="#" onclick="pagina(3)">Operations</a>
                    </li>
                    <li class="nav-item">
                        <a class="dropdown-item" href="#" onclick="pagina(4)">Examples</a>
                    </li>
                </ul>
            </nav>