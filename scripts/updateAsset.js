document.getElementById('btnSaveChangesAsset').addEventListener('click', updateAsset);

function updateAsset(){
    let assetID = document.getElementById('input-assetInventoryNumber').value;
    let object = {}

    object.assetName = document.getElementById("input-assetName").value;
    object.type = document.getElementById("input-type").value;
    object.typePresence = document.getElementById("input-typePresence").value;
    object.operatingSystem = document.getElementById("input-operatingSystem").value;
    object.location = document.getElementById("input-location").value;
    object.locationCode = document.getElementById("input-locationCode").value;
    object.locationType = document.getElementById("input-locationType").value;
    object.resolerQueue = document.getElementById("input-resolerQueue").value;
    object.status = document.getElementById("input-status").value;
    object.subStatus = document.getElementById("input-subStatus").value;
    object.assignedTo = document.getElementById("input-assignedTo").value;
    object.billedTo = document.getElementById("input-billedTo").value;
    object.dateCreated = document.getElementById("input-dateCreated").value;
    object.dateActive = document.getElementById("input-dateActive").value;
    object.dateInstalled = document.getElementById("input-dateInstalled").value;
    object.dateDecomm = document.getElementById("input-dateDecomm").value;
    object.maintenanceWindow = document.getElementById("input-maintenanceWindow").value;

    console.log(object);

    api.request("PUT", "asset/edit/" + assetID,
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
