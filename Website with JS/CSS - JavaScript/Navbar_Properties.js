
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const power = document.getElementById("proven");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("TitleAL").style.marginLeft = "0rem";
        document.getElementById("TitleAL").style.fontSize = "1.5rem";

        document.getElementById("proven").style.borderBottom = "solid 1px rgba(255, 255, 255, 0.507)";
        document.getElementById("proven").style.backgroundImage = "linear-gradient(to right, rgb(0, 0, 0), rgba(0, 0, 0, 0))";
        document.getElementById("proven").style.backdropFilter = "blur(9px)";

        document.getElementById("Logo").style.opacity = "1";
    
    } else {
        document.getElementById("TitleAL").style.marginLeft = "-3.6rem";
        document.getElementById("TitleAL").style.fontSize = "smaller";

        document.getElementById("proven").style.borderBottom = "solid 1px rgba(255, 255, 255, 0)";
        document.getElementById("proven").style.backgroundImage = "linear-gradient(to right, rgb(0, 0, 0, 0), rgba(0, 0, 0, 0))";
        document.getElementById("proven").style.backdropFilter = "blur(0px)";

        document.getElementById("Logo").style.opacity = "0";
    }

}
















/*
function NavBarToggle() {
    const navtoggle = document.getElementById('Vertical_Navigator');
    if (navtoggle.className === "Vertical_Navigation_Bar_Wrapper"){
        navtoggle.className += " NavbarOff";
        xyz();
        SymbolNavToggle1();
        SymbolNavToggle2();
        SymbolNavToggle3();
        SymbolNavToggle4();
        SymbolNavToggle5();       
    } else {
        navtoggle.className = "Vertical_Navigation_Bar_Wrapper";
        xyz();
        SymbolNavToggle1();
        SymbolNavToggle2();
        SymbolNavToggle3();
        SymbolNavToggle4();
        SymbolNavToggle5();
    }
}
//Main Page Margin Expander
function xyz() {
    const PageExpander = document.getElementById('Expander');
    if(PageExpander.className === "Content_Home") {
        PageExpander.className += " Content_Home_Off";
    } else {
        PageExpander.className = "Content_Home";
    }
}












//Tab Text Display
function SymbolNavToggle1(){
    const SymbolToggle1 = document.getElementById('NavSymbols1');
    if(SymbolToggle1.className === "Vertical_Navigation_Text"){
        SymbolToggle1.className += " SymbolOff";
    } else {
        SymbolToggle1.className = "Vertical_Navigation_Text";
    }

    const SymbolToggle11 = document.getElementById('NavSymbols11');
    if(SymbolToggle11.className === "Vertical_Navigation_Text"){
        SymbolToggle11.className += " SymbolOff";
    } else {
        SymbolToggle11.className = "Vertical_Navigation_Text";
    }

    const SymbolToggle12 = document.getElementById('NavSymbols12');
    if(SymbolToggle12.className === "Vertical_Navigation_Text"){
        SymbolToggle12.className += " SymbolOff";
    } else {
        SymbolToggle12.className = "Vertical_Navigation_Text";
    }

}

//Recommended Consultants Title
function SymbolNavToggle2(){
    const SymbolToggle3 = document.getElementById('NavSymbols2');
    if(SymbolToggle3.className === "Recommended_Consultants"){
        SymbolToggle3.className += " SymbolOff";
    } else {
        SymbolToggle3.className = "Recommended_Consultants";
    }

}

//Consultant Menu
function SymbolNavToggle3(){
    const SymbolToggle3 = document.getElementById('NavSymbols3');
    if(SymbolToggle3.className === "Consultant_Menu"){
        SymbolToggle3.className += " SymbolOff";
    } else {
        SymbolToggle3.className = "Consultant_Menu";
    }

}

//Contact Us Button
function SymbolNavToggle4(){
    const SymbolToggle4 = document.getElementById('NavSymbols4');
    if(SymbolToggle4.className === "Button_Wrapper"){
        SymbolToggle4.className += " SymbolOff";
    } else {
        SymbolToggle4.className = "Button_Wrapper";
    }

}

//Line Break
function SymbolNavToggle5(){
    const SymbolToggle5 = document.getElementById('NavSymbols5');
    if(SymbolToggle5.className === "LineBeak"){
        SymbolToggle5.className += " SymbolOff";
    } else {
        SymbolToggle5.className = "LineBeak";
    }

}
*/

window.addEventListener("load", () => {
    const Load = document.querySelector(".Loader");

    Load.classList.add("Loader-Hidden");

    Load.addEventListener("transitioned", () => {
        document.body.removeChild(document.querySelector(".Loader"));
    })
})



window.onload = function a(){
    let navtoggle = document.getElementById('Vertical_Navigator');
    let PageExpander = document.getElementById('Expander');

    SymbolToggle1 = document.getElementById('NavSymbols1');
    SymbolToggle2 = document.getElementById('NavSymbols11');
    SymbolToggle3 = document.getElementById('NavSymbols12');

    SymbolToggle4 = document.getElementById('NavSymbols2');
    SymbolToggle5 = document.getElementById('NavSymbols3');
    SymbolToggle6 = document.getElementById('NavSymbols4');
    SymbolToggle7 = document.getElementById('NavSymbols5');

    if(localStorage.getItem("toggle") === 'on'){
        console.log("Onload Sidebar = false");
        SymbolToggle1.classList.add("SymbolOff");
        SymbolToggle2.classList.add("SymbolOff");
        SymbolToggle3.classList.add("SymbolOff");
        SymbolToggle4.classList.add("SymbolOff");
        SymbolToggle5.classList.add("SymbolOff");
        SymbolToggle6.classList.add("SymbolOff");
        SymbolToggle7.classList.add("SymbolOff");

        navtoggle.classList.add("NavbarOff");
        PageExpander.classList.add("Content_Home_Off");
    }
    if(localStorage.getItem("toggle") === null){
        console.log("setting = false");
        localStorage.setItem("toggle", 'off');
    }
}
function NavBarToggle() {
    let navtoggle = document.getElementById('Vertical_Navigator'); 
    let PageExpander = document.getElementById('Expander');

    SymbolToggle1 = document.getElementById('NavSymbols1');
    SymbolToggle2 = document.getElementById('NavSymbols11');
    SymbolToggle3 = document.getElementById('NavSymbols12');

    SymbolToggle4 = document.getElementById('NavSymbols2');
    SymbolToggle5 = document.getElementById('NavSymbols3');
    SymbolToggle6 = document.getElementById('NavSymbols4');
    SymbolToggle7 = document.getElementById('NavSymbols5');
    
    //navtoggle.classList.toggle("NavbarOff");
    // navtoggle.classList.toggle("NavbarOff");
    if(localStorage.getItem("toggle") == 'on'){
        console.log("Sidebar = True");
        navtoggle.classList.remove("NavbarOff");
        navtoggle.classList.add("Vertical_Navigation_Bar_Wrapper");

        PageExpander.classList.remove("Content_Home_Off");

        SymbolToggle1.classList.remove("SymbolOff");
        SymbolToggle2.classList.remove("SymbolOff");
        SymbolToggle3.classList.remove("SymbolOff");
        SymbolToggle4.classList.remove("SymbolOff");
        SymbolToggle5.classList.remove("SymbolOff");
        SymbolToggle6.classList.remove("SymbolOff");
        SymbolToggle7.classList.remove("SymbolOff");

        localStorage.setItem("toggle", 'off');
    }
    else{
        navtoggle.classList.add("NavbarOff");
        navtoggle.classList.remove("Vertical_Navigation_Bar_Wrapper");
        PageExpander.classList.add("Content_Home_Off");

        SymbolToggle1.classList.add("SymbolOff");
        SymbolToggle2.classList.add("SymbolOff");
        SymbolToggle3.classList.add("SymbolOff");
        SymbolToggle4.classList.add("SymbolOff");
        SymbolToggle5.classList.add("SymbolOff");
        SymbolToggle6.classList.add("SymbolOff");
        SymbolToggle7.classList.add("SymbolOff");

        console.log("Sidebar = false");
        localStorage.setItem("toggle", 'on');
    }
    console.log(localStorage.getItem("toggle"));

}




