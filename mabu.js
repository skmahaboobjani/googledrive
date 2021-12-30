var c=document.getElementById("p1")
c.addEventListener("click",fn)



function fn()
{
var d=document.getElementById("p2")
if(d.style.flexDirection=="row")
{
    d.style.flexDirection="column"
}
else{
    d.style.flexDirection="row"
}

}