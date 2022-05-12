// document.getElementById("btnSearchAssets").addEventListener('click', searchAsset);

// soo that the names of fields arent whats in the db
let fieldNames = {
    assetInventoryNumber: "AssetID",
    assetName: "Asset Name",
    type: "Type",
    typePresence: "Type Presence",
    location: "Location",
    locationCode: "Location Code",
    locationType: "Location Type",
    resolverQueue: "Resolver Queue",
    status: "Status",
    subStatus: "Sub-Status",
    assignedTo: "Assigned To",
    billedTo: "Billed To",
    dateCreated: "Date Created",
    dateActive: "Date Active",
    dateInstalled: "Date Installed",
    dateDecomm: "Date Decommissioned",
    maintenanceWindow: "Maintenance Window"
};

document.addEventListener("DOMContentLoaded", function () {
    api.request('GET', 'report.json',
    function (resp) {
        // load object
        let assets = JSON.parse(resp.responseText);
        let newHtml = "";
        // go through each asset and generate its html
        for (let asset of Object.values(assets.data)) {
            let assetHtml = "<li>";
            // go through each field of the asset
            for (let field of Object.keys(asset)) {
                assetHtml += "<b>" + fieldNames[field] + ":</b> " + asset[field] + " | ";
                console.log(field);
            }
            newHtml += assetHtml.slice(0, -3) + "</li>";
        }
        // add to html
        document.getElementById("assetTableInsert").innerHTML = newHtml;
    });
});