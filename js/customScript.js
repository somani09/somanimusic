var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabpanels");

function showPanel(panelIndex, colorCode)
{
    tabButtons.forEach(function(node)
    {
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node)
    {
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    // tabPanels[panelIndex].style.backgroundColor=colorCode;
}

showPanel(0,' rgba(214, 214, 208, .3)');