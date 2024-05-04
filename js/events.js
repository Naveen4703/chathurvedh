
window.onload = async () => {
    try{
        const result = await fetch('/api/getEvents', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            } 
        }).then((res) => res.json())
        console.log(result)
        const eventsLength = result.response.length;
        console.log(eventsLength);
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        result.response.forEach((data, index) => {

        var events = `<div class="col-lg-4 col-sm-6 mb-5 hovershadow">
        <div class="border-0 rounded-0 eventscard">
            <div class="card-img position-relative">
            <img class="card-img-top eventimg" src="${data.image.url}" alt="event thumb">
            <div class="card-date"><span>${data.eventDate.substr(8)}</span><br>${monthNames[data.eventDate.substr(5,2)-1] }</div>
            </div>
            <div class="card-body">

            <p><i class="ti-location-pin text-primary mr-2"></i>${data.eventMode}</p>
            <a href="#">
                <h4 class="card-title">${data.eventInfo}</h4>
            </a>
            </div>
        </div>
        </div>
        </div>`
            document.getElementById('events').innerHTML += events
        });
    } catch (err) {
        console.log("Error : ",err);
    }

}
