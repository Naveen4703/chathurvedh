
document.getElementById('courseType').addEventListener('change', updateCourseOptions);
document.getElementById('selectedGraduation').addEventListener('change', updateDegreeOptions);
document.getElementById('selectedState').addEventListener('change', updateDistrictOptions);
function updateCourseOptions() {
    var courseTypeSelect = document.getElementById("courseType");
    var courseSelect = document.getElementById("courses");
    var selectedCourseType = courseTypeSelect.value;
    // Clear previous options
    courseSelect.innerHTML = "";

    if (selectedCourseType === "Workshops") {
        var courseOptions = [
            "Python - 699",
            "Android Application Development",
            "AWS Cloud Computing",
            "Basics in Java",
            "Machine Learning using Python",
            "C-language",
            "Dot NET",
            "Basics of Linux and Shell Scripting",
            "Web Development Using Django",
            "Web Designing using React JS",
            "Data Analysis using Python",
            "Internet of Things (IoT)",
            "PCB Designing",
            "Embedded Systems",
            "Net Working",
            "PLC Automation",
            "SCI Lab",
            "Fundamentals of Drone",
            "Architectural Modeling using Revit",
            "Structural Analysis using ETABS",
            "Building & Drafting using AutoCAD",
            "STAAD-Pro",
            "Advanced Surface & Product Design by CATIA",
            "Product Design & Drafting by CATIA",
            "Product Design & Drafting by Solid Edge",
            "Source Code Management using Git & Github",
            "Game Design using BuildBox"
        ];
        
    } else if (selectedCourseType === "Internships") {
        var courseOptions = [
            "Cloud Computing",
            "Android Application Development",
            "Full Stack Web Development",
            "Machine Learning using Python",
            "Data Science using Python",
            "Data Analysis using Python",
            "Java",
            "Web Development Using Django",
            "Internet of Things (IoT)",
            "Embedded Development",
            "Embedded Testing (AUTOSAR)",
            "VLSI (Analog Layout Design)",
            "VLSI (Analog Circuit Design)",
            "VLSI (Digital Layout Design)",
            "VLSI (Digital Circuit Design)",
            "VLSI (Memory Circuit Design)",
            "VLSI (RTL Logic Design & Verification)",
            "Protocols in Communication",
            "Networking",
            "Revit Architecture",
            "Mechanical Component Drafting by AutoCAD",
            "Advanced Surface & Product Design by CATIA",
            "Product Design & Drafting by Solid Edge",
            "Tally with GST",
            "C++",
            "Digital Marketing"
        ];
        
        
    } else if (selectedCourseType === "Full course training") {
        var courseOptions = [
            "Cyber Security",
            "Full Stack Development",
            "Cloud Computing",
            "Python Programming",
            "Manual Testing",
            "Embedded Development",
            "Embedded Testing (AUTOSAR)",
            "VLSI (Analog Layout Design)",
            "VLSI (Analog Circuit Design)",
            "VLSI (RTL Logic Design & Verification)",
            "Protocols in Communication",
            "Mechanical Component Drafting by AutoCAD",
            "Advanced Surface & Product Design by CATIA",
            "Advanced Surface & Product Design by Siemens Nx",
            "Product Design & Drafting by Solid Edge",
            "Tally with GST",
            "Digital Marketing",
            "C++",
            "Medical Coding",
            "Communication Skills"
        ];
        
        
    } else {
        // Show the default option if nothing is selected
        courseSelect.innerHTML = '<option hidden>Select a Course Type first</option>';
    }
      // Add each option to the second select element
  for (var i = 0; i < courseOptions.length; i++) {
    addOption(courseSelect, courseOptions[i], courseOptions[i]);
}
}

function updateDistrictOptions(){
    var selectState = document.getElementById("selectedState");
    var selectDistrict = document.getElementById("districtOptions");
    var selectedState = selectState.value;
    // Clear previous options
    selectDistrict.innerHTML = "";

    if ( selectedState === "AP") {
        var districtOptions = [
            'Alluri Sitaram Raju', 'Anakapalli', 'Anantapur', 'Annamayya', 'Bapatla', 'Chittoor', 'East Godavari', 'Eluru',
            'Guntur', 'Kakinada', 'Kona Seema', 'Krishna', 'Kurnool', 'Manyam', 'NTR District', 'Nandyal', 'Nellore', 'Palnadu',
            'Prakasam', 'Sri Balaji Dist', 'Sri Satyasai', 'Srikakulam', 'Visakhapatnam', 'Vizianagaram', 'West Godavari',
            'YSR Kadapa',"Others"
          ];
          
          
    } else if (selectedState === "Tamil Nadu") {
        var districtOptions = [
            "Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kanchipuram", "Kanyakumari",
            "Karur", "Krishnagiri", "Madurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai",
            "Ramanathapuram", "Salem", "Sivaganga", "Thanjavur", "Theni", "Thoothukudi (Tuticorin)", "Tiruchirappalli",
            "Tirunelveli", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar","Others"
          ];
            
    } else if (selectedState === "Telangana") {
        var districtOptions = [
            "Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar Bhoopalpally", "Jogulamba Gadwal",
            "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem Asifabad", "Mahabubabad", "Mahabubnagar", "Mancherial",
            "Medak", "Medchal", "Nagarkurnool", "Nalgonda", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla",
            "Rangareddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal (Rural)", "Warangal (Urban)",
            "Yadadri Bhuvanagiri","Others"
          ];
           
    } else if (selectedState === "Goa"){
        var districtOptions = [
            "North Goa",
            "South Goa",
            "Others"
        ];
    } else if (selectedState === "Delhi"){
        var districtOptions = [
            "Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara",
            "South Delhi", "South East Delhi", "South West Delhi", "West Delhi", "Others"
          ];
          
    }  else if (selectedState === "Karnataka"){
        var districtOptions = [
            "Bagalkot", "Ballari (Bellary)", "Belagavi (Belgaum)", "Bengaluru (Bangalore) Rural", "Bengaluru (Bangalore) Urban",
            "Bidar", "Chamarajanagar", "Chikballapur", "Chikkamagaluru (Chikmagalur)", "Chitradurga", "Dakshina Kannada",
            "Davangere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi (Gulbarga)", "Kodagu", "Kolar", "Koppal",
            "Mandya", "Mysuru (Mysore)", "Raichur", "Ramanagara", "Shivamogga (Shimoga)", "Tumakuru (Tumkur)", "Udupi",
            "Uttara Kannada (Karwar)", "Vijayapura (Bijapur)", "Yadgir","Others"
          ];
    } else if (selectedState === "Kerala"){
        var districtOptions = [
            "Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram",
            "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad","Others"
          ];
          
    }  else if (selectedState === "Madhya Pradesh"){
        var districtOptions = [
            "Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur",
            "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad",
            "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur",
            "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur",
            "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha","Others"
          ];
          
    } else if (selectedState === "Maharashtra"){
        var districtOptions = [
            "Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli",
            "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded",
            "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara",
            "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal","Others"
          ];
          
    }  else if (selectedState === "Uttar Pradesh"){
        var districtOptions = [
            "Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Amethi (Chatrapati Sahuji Mahraj Nagar)", "Amroha (J.P. Nagar)",
            "Auraiya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti",
            "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad",
            "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur",
            "Hamirpur", "Hapur (Panchsheel Nagar)", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat",
            "Kanpur Nagar", "Kanshiram Nagar (Kasganj)", "Kaushambi", "Kushinagar (Padrauna)", "Lakhimpur - Kheri", "Lalitpur",
            "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar",
            "Pilibhit", "Pratapgarh", "RaeBareli", "Rampur", "Saharanpur", "Sambhal (Bhim Nagar)", "Sant Kabir Nagar",
            "Shahjahanpur", "Shamali (Prabuddh Nagar)", "Shravasti", "Siddharth Nagar", "Sitapur", "Sonbhadra", "Sultanpur",
            "Unnao", "Varanasi","Others"
          ];
          
    } else if (selectedState === "Uttarakhand"){
        var districtOptions = [
            "Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital",
            "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi","Others"
          ];
          
    } else if(selectedState === "Others"){
        var districtOptions = [
          "Others"
        ];
    } else {
        // Show the default option if nothing is selected
        selectDistrict.innerHTML = '<option hidden>Others</option>';
    }

      // Add each option to the second select element
      for (var i = 0; i < districtOptions.length; i++) {
        addOption(selectDistrict, districtOptions[i], districtOptions[i]);
    }
}

function updateDegreeOptions(){
    var selectDegree = document.getElementById("selectedGraduation");
    var branchOptions = document.getElementById("branchOptions");
    var selectedDegree = selectDegree.value;
    // Clear previous options
    branchOptions.innerHTML = "";

    if ( selectedDegree === "btech") {
        var branchOption = [
            "AIM-M",
            "AME",
            "AEI",
            "AE",
            "CME",
            "CIVIL",
            "CSE-AI",
            "CSE-ML",
            "CSE-IOT",
            "CSE-DS",
            "CSE-CyberSecurity",
            "DAGE",
            "DCBDE",
            "DCCN",
            "IT",
            "ECE",
            "EEE",
            "EIE",
            "MECH",
            "WEB DESIGNING",
            "Others"
          ];
          
          
    } else if (selectedDegree === "degree") {
        var branchOption = [
            "BBA- Bachelor of Business Administration",
            "BMS- Bachelor of Management Science",
            "BFA- Bachelor of Fine Arts",
            "BEM- Bachelor of Event Management",
            "Integrated Law Course- BA + LL.B",
            "BJMC- Bachelor of Journalism and Mass Communication",
            "BFD- Bachelor of Fashion Designing",
            "BSW- Bachelor of Social Work",
            "BBS- Bachelor of Business Studies",
            "BTTM- Bachelor of Travel and Tourism Management",
            "B.Sc.- Hospitality and Hotel Administration",
            "Bachelor of Design (B. Design)",
            "Bachelor of Performing Arts",
            "BA in History",
            "Others"
          ];
            
    } else if(selectedDegree === "diploma") {
        var branchOption = [
            "Automobile Engineering",
            "Biomedical Biotechnology",
            "Business Administration",
            "Civil Engineering",
            "Chemical Engineering",
            "Computer Engineering",
            "Electrical Engineering",
            "Electronics & Communication Engineering",
            "Electrical & Telecommunication Engineering",
            "Information Technology",
            "Instrumentation Technology",
            "Production & Industrial Engineering",
            "Mechanical Engineering",
            "Mechatronics",
            "Hotel Management",
            "Web Designing",
            "Electrical and Electronics Engineering",
            "Computer Science and Engineering",
            "Others"
        ];
    }  else {
        // Show the default option if nothing is selected
        branchOptions.innerHTML = '<option hidden>Please select a degree type</option>';
    }
      // Add each option to the second select element
  for (var i = 0; i < branchOption.length; i++) {
    addOption(branchOptions, branchOption[i], branchOption[i]);
}

}

function addOption(selectElement, text, value) {
    var option = document.createElement("option");
    option.text = text;
    option.value = value;
    selectElement.appendChild(option);
}

function allowPageScroll() {
    // Enable scrolling on the page when the dropdown is open
    document.body.style.overflow = "auto";
}



