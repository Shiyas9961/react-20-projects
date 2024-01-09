
const showComponentsObj = {
    showLightAndDark : true,
    showClickTabs : true,
    showAccordian : false,
    showRandomColor : true,
    sowTicTocGame : true
}

function fetchEnableComponent () {
    return new Promise((resolve, reject) => {
        if(showComponentsObj) setTimeout(resolve(showComponentsObj), 500)
        else reject("Some error occured !")
    })
}

export default fetchEnableComponent