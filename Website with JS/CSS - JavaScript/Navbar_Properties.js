function NavBarToggle() {
    const navtoggle = document.getElementById("Vertical_Navigator");
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

function xyz() {
    const PageExpander = document.getElementById('Expander');
    if(PageExpander.className === "Content_Home") {
        PageExpander.className += " Content_Home_Off";
    } else {
        PageExpander.className = "Content_Home";
    }
}

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
function SymbolNavToggle2(){
    const SymbolToggle3 = document.getElementById('NavSymbols2');
    if(SymbolToggle3.className === "Recommended_Consultants"){
        SymbolToggle3.className += " SymbolOff";
    } else {
        SymbolToggle3.className = "Recommended_Consultants";
    }

}
function SymbolNavToggle3(){
    const SymbolToggle3 = document.getElementById('NavSymbols3');
    if(SymbolToggle3.className === "Consultant_Menu"){
        SymbolToggle3.className += " SymbolOff";
    } else {
        SymbolToggle3.className = "Consultant_Menu";
    }

}
function SymbolNavToggle4(){
    const SymbolToggle4 = document.getElementById('NavSymbols4');
    if(SymbolToggle4.className === "Button_Wrapper"){
        SymbolToggle4.className += " SymbolOff";
    } else {
        SymbolToggle4.className = "Button_Wrapper";
    }

}
function SymbolNavToggle5(){
    const SymbolToggle5 = document.getElementById('NavSymbols5');
    if(SymbolToggle5.className === "LineBeak"){
        SymbolToggle5.className += " SymbolOff";
    } else {
        SymbolToggle5.className = "LineBeak";
    }

}
