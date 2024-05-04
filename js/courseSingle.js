const encodedParams = atob(window.location.href.split('?')[1]);
console.log(encodedParams);
const urlParams = new URLSearchParams(encodedParams);
var courseType = urlParams.get('type');
var course = urlParams.get('course');
var imgSrc = urlParams.get('imgSrc');
var title = urlParams.get('title')
console.log(courseType,course,imgSrc)
window.onload=async()=>{

    if(courseType && course && imgSrc){
        console.log(imgSrc);
        document.getElementById("courseImg").src = imgSrc;
        document.getElementById("course-title").innerHTML = title;
        document.getElementById("top-course").innerHTML = `${courseType.charAt(0).toUpperCase() + courseType.slice(1)}`;
        document.getElementById("top-title").innerHTML = `${title}`;
        if(course == "cpp"){
            document.getElementById("course-title").innerHTML = "C++ Programming";
            document.getElementById("top-title").innerHTML = `C++ Programming`;
        }
        // Get course data - About , fee structure
        var getCourse = await fetch(`/api/getCourse?type=${courseType}&course=${course}&role=student`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            } 
        }).then((res) => res.json())
        console.log(getCourse);
        if(getCourse.data){

            document.getElementById("totalDays").innerHTML = getCourse.data.days;
            document.getElementById("duration").innerHTML = getCourse.data.duration;
            document.getElementById("fee").innerHTML = getCourse.data.fee;
            document.getElementById("aboutcourse").innerHTML = getCourse.data.about;
            
        }
    }

}