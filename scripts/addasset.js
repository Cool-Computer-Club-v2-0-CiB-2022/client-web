function addAssetFunc () {
    let object = {};

    object.assetName = document.getElementById("assetNameInput").value;
    object.type = document.getElementById("addSlct-Type").value;
    object.typePresence = document.getElementById("addSlct-typePresence").value;
    object.operatingSystem = document.getElementById("addSlct-OS").value;
    object.location = document.getElementById("addSlct-Location").value;
    object.locationCode = document.getElementById("addSlct-LocationCode").value;
    object.locationType = document.getElementById("addSlct-LocationType").value;
    object.resolverQueue = document.getElementById("addSlct-Resolver-Queue").value;
    object.status = document.getElementById("addSlct-Status").value;
    object.subStatus = document.getElementById("addSlct-Sub-Status").value;
    object.assignedTo = document.getElementById("addSlct-AssignedTo").value;
    object.billedTo = document.getElementById("addSlct-BilledTo").value;
    object.dateCreated = document.getElementById("dateCreated").value;
    object.dateActive = document.getElementById("dateActive").value;
    object.dateInstalled = document.getElementById("dateInstalled").value;
    object.dateDecomm = document.getElementById("dateDecomm").value;
    object.maintenanceWindow = document.getElementById("addSlct-MaintenanceWindow").value;
    
    api.request("POST", "asset/new",
    function (req) {
        if (req.status == 200) {
            alert("New asset succesfully added.");
            window.location.replace("assetHome.html");
        }
        else {
            alert("Could not create new asset.");
        }
    }, object)
}