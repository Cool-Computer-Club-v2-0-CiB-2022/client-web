//Populate asset file:

//Event Listener:
document.addEventListener('DOMContentLoaded', populateAsset);

function populateAsset(event){
    //Get Attributes
    const assetAtribute = String(window.location).split("=")[1];
    console.log(assetAtribute)
    api.request("GET", 'asset/get/' + assetAtribute, function (resp) {
        let assets = JSON.parse(resp.responseText);
        console.log(assets)
        let assetToCheck = assets.assetInventoryNumber;
        console.log(assetToCheck)

        console.log(assets)
        let asset = document.querySelector('[assetInventoryNumber = '+ assetToCheck + ']');
        const inputBoxes = document.getElementById('selectedAssetDetails').getElementsByTagName('input');

        for (let field in inputBoxes){
         inputBoxes[field].value = asset.attributes[field];
        }
    })
}


//Document.location