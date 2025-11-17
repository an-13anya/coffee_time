const btn=document.getElementById("no-but");
btn.addEventListener("mouseover", ()=>
{
    const x=Math.random()*200-100;
    const y=Math.random()*100-50;
    btn.style.transform=`translate(${x}px,${y}px)`;
})
