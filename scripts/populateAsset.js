//Populate asset file:

//Event Listener:
document.addEventListener('DOMContentLoaded', populateAsset);

function populateAsset(){
    //Get Attributes
    const assetAtribute = String(window.location).split("=")[1];
    console.log(assetAtribute)
    api.request("GET", 'asset/get/' + assetAtribute, function(resp){
        let asset = JSON.parse(resp.responseText);

        console.log(asset);

        const inputBoxes = document.getElementById('selectedAssetDetails').getElementsByTagName('input');

        console.log(inputBoxes);

        document.getElementById('h3AssetID').innerText = ('AssetID: ' + asset.assetInventoryNumber);
        document.getElementById('h3AssetName').innerText = ('Asset Name: ' + asset.assetName);

        for (let field of Object.keys(asset)){
            console.log(document.getElementById("input-" + field));
            document.getElementById("input-" + field).value = asset[field];
        }
    })
}


//Document.location

//document.getelementbyid("input-" + field)