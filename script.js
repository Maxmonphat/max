const project = {
    projectName: "We Park Project",
    location: "Bangkok",
    size: "100 Rai",
    budget: "50,000,000 THB"
};

function updateProjectInfo() {
    document.getElementById("project-name").textContent += project.projectName;
    document.getElementById("location").textContent += project.location;
    document.getElementById("size").textContent += project.size;
    document.getElementById("budget").textContent += project.budget;
}

function initMap() {
    var options = {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 12
    };

    var map = new google.maps.Map(document.getElementById("map"), options);

    var marker = new google.maps.Marker({
        position: { lat: 37.7749, lng: -122.4194 },
        map: map,
        title: "Landscape and Public Park Project"
    });

    updateProjectInfo();
}
