/* MENU */
function menuSticky(control, scrollTop){
    var cc = document.getElementById(control);
    if(scrollTop > 1){
        cc.classList.add("menu_site_sticky");
    }
    else{
        cc.classList.remove("menu_site_sticky");
    }
    if(scrollTop > 50){
        cc.classList.add("menu_site_sticky_background");
    }
    else{
        cc.classList.remove("menu_site_sticky_background");
    }
}
function showMenuRight(){
    var panel = document.getElementById("menu_site_panelRight");
    if(!panel.classList.contains("menu_site_panelRight_show")){
        panel.classList.add("menu_site_panelRight_show");
        panel.classList.remove("menu_site_panelRight_hide");
    }
    else{
        panel.classList.add("menu_site_panelRight_hide");
        panel.classList.remove("menu_site_panelRight_show");
    }
}
function menuRight_hide(){
    var panel = document.getElementById("menu_site_panelRight");
    if(panel.classList.contains("menu_site_panelRight_show")){
        panel.classList.add("menu_site_panelRight_hide");
        panel.classList.remove("menu_site_panelRight_show");
    }
}
/* ----------------------------------------------------- */
/* LOGIN */
function showloginControl(){
    var panel = document.getElementById("userPanel");
    if(!panel.classList.contains("userPanel--show")){
        panel.classList.add("userPanel--show");
        panel.classList.remove("userPanel--hide");
    }
    else{
        panel.classList.add("userPanel--hide");
        panel.classList.remove("userPanel--show");
    }
}
function hideloginControl(){
    var panel = document.getElementById("userPanel");
    if(panel.classList.contains("userPanel--show")){
        panel.classList.add("userPanel--hide");
        panel.classList.remove("userPanel--show");
    }
}