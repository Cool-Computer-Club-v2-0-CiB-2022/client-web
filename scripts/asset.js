document.getElementById("btnSearchAssets").addEventListener('click', searchAsset);

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
    maintenanceWindow: "Maintenance Window",
    operatingSystem: "Operating System"
};

document.addEventListener("DOMContentLoaded", getList);

function searchAsset() {
    // get search query
    query = document.getElementsByClassName("searchBox")[0].value;
    getList(query);
}

function getList(query) {
    api.request('GET', 'report.json',
    function (resp) {
        // load object
        let assets = JSON.parse(resp.responseText);
        let newHtml = "";
        if (!(typeof query === "string" || query instanceof String)) {
            query = "";
        }
        // go through each asset and generate its html
        for (let asset of Object.values(assets.data)) {
            let assetHtml = "<a href='selectedAsset.html?id=" + asset["assetInventoryNumber"] + "'><li>";
            // go through each field of the asset
            for (let field of Object.keys(fieldNames)) {
                assetHtml += "<b>" + fieldNames[field] + ":</b> " + asset[field] + " | ";
            }
            if (assetHtml.toLowerCase().includes(query)) {
                newHtml += assetHtml.slice(0, -3) + "</li></a>";
            }
        }
        if (newHtml == "") {
            newHtml = "<h2>No assets found</h2>"
        }
        // add to html
        document.getElementById("assetTableInsert").innerHTML = newHtml;
    });
}