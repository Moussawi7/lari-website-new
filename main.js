/* =========================================================
   LARI WEBSITE - MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   1. LANGUAGE SWITCHER & TRANSLATIONS
========================================================= */

const translations = {

    en: {

        pageTitle:
            "LARI | Lebanese Agricultural Research Institute",

        profileTitle:
            "LARI",

        profileSubtitle:
            "Lebanese Agricultural Research Institute",

        drTitle:
            "Dr. Jad Chaaya",

        drSubtitle:
            "Board of Directors and General Manager of LARI",

        navHome:
            "Home",

        navAbout:
            "About Us",

        navWhoWeAre:
            "Who We Are",

        navHistory:
            "History",

        navMission:
            "Mission & Vision",

        navLeadership:
            "Leadership",

        navCenters:
            "Research Centers",

        navResearch:
            "Research",

        navResearchAreas:
            "Research Areas",

        navProjects:
            "Research Projects",

        navLaboratories:
            "Laboratories",

        navResearchers:
            "Researchers",

        navServices:
            "Services",

        navFarmerServices:
            "Farmer Services",

        navLabServices:
            "Laboratory Services",

        navWeatherServices:
            "Weather Services",

        navTraining:
            "Training",

        navStations:
            "Stations",

        navResources:
            "Resources",

        navPublications:
            "Publications",

        navReports:
            "Reports",

        navGuides:
            "Agricultural Guides",

        navDownloads:
            "Downloads",

        navNews:
            "News & Media",

        navContact:
            "Contact",

        heroLabel:
            "Lebanese Agricultural Research Institute",

        heroTitle:
            "Advancing Agriculture",

        heroSubTitle:
            "Through Research & Innovation",

        heroDesc:
            "Supporting sustainable agriculture in Lebanon through scientific research, innovation, technology and agricultural services.",

        btnExploreResearch:
            "Explore Our Research",

        btnFarmerServices:
            "Farmer Services",

        quickWeather:
            "Weather",

        quickWeatherDesc:
            "Agricultural weather information",

        quickFarmers:
            "For Farmers",

        quickFarmersDesc:
            "Agricultural services and advice",

        quickLabs:
            "Laboratories",

        quickLabsDesc:
            "Explore our laboratory services",

        quickPubs:
            "Publications",

        quickPubsDesc:
            "Research and technical resources",

        aboutLabel:
            "About Us",

        aboutTitle:
            "Science Supporting",

        aboutTitleSpan:
            "Lebanon's Agriculture",

        aboutP1:
            "The Lebanese Agricultural Research Institute is dedicated to agricultural research, innovation and scientific development to support Lebanon's agricultural sector.",

        aboutP2:
            "Through its research centers, laboratories and scientific teams, LARI provides knowledge and services that contribute to sustainable agricultural development.",

        discoverLari:
            "Discover LARI"

    },


    ar: {

        pageTitle:
            "مؤسسة الأبحاث العلمية الزراعية | LARI",

        profileTitle:
            "لاري",

        profileSubtitle:
            "مؤسسة الأبحاث العلمية الزراعية",

        drTitle:
            "د. جاد شعيا",

        drSubtitle:
            "رئيس مجلس الإدارة والمدير العام لمؤسسة الأبحاث العلمية الزراعية",

        navHome:
            "الرئيسية",

        navAbout:
            "عن المؤسسة",

        navWhoWeAre:
            "من نحن",

        navHistory:
            "تاريخنا",

        navMission:
            "الرؤية والرسالة",

        navLeadership:
            "الإدارة",

        navCenters:
            "مراكز الأبحاث",

        navResearch:
            "الأبحاث",

        navResearchAreas:
            "مجالات البحث",

        navProjects:
            "المشاريع البحثية",

        navLaboratories:
            "المختبرات",

        navResearchers:
            "الباحثون",

        navServices:
            "الخدمات",

        navFarmerServices:
            "خدمات المزارعين",

        navLabServices:
            "الخدمات المخبرية",

        navWeatherServices:
            "الخدمات الجوية",

        navTraining:
            "التدريب",

        navStations:
            "المحطات",

        navResources:
            "الموارد",

        navPublications:
            "المنشورات",

        navReports:
            "التقارير",

        navGuides:
            "الإرشادات الزراعية",

        navDownloads:
            "التحميلات",

        navNews:
            "الأخبار والإعلام",

        navContact:
            "اتصل بنا",

        heroLabel:
            "مؤسسة الأبحاث العلمية الزراعية",

        heroTitle:
            "النهوض بالزراعة",

        heroSubTitle:
            "من خلال البحث والابتكار",

        heroDesc:
            "دعم الزراعة المستدامة في لبنان من خلال البحث العلمي، الابتكار، التكنولوجيا والخدمات الزراعية.",

        btnExploreResearch:
            "استكشف أبحاثنا",

        btnFarmerServices:
            "خدمات المزارعين",

        quickWeather:
            "الطقس",

        quickWeatherDesc:
            "معلومات الطقس الزراعي",

        quickFarmers:
            "للمزارعين",

        quickFarmersDesc:
            "الخدمات والاستشارات الزراعية",

        quickLabs:
            "المختبرات",

        quickLabsDesc:
            "استكشف خدمات مختبراتنا",

        quickPubs:
            "المنشورات",

        quickPubsDesc:
            "الموارد البحثية والتقنية",

        aboutLabel:
            "عن المؤسسة",

        aboutTitle:
            "العلم في خدمة",

        aboutTitleSpan:
            "الزراعة اللبنانية",

        aboutP1:
            "تكرس مصلحة الأبحاث العلمية الزراعية جهودها للبحث العلمي والابتكار والتطوير لدعم القطاع الزراعي في لبنان.",

        aboutP2:
            "من خلال مراكزها البحثية ومختبراتها وفرقها العلمية، تقدم المصلحة المعرفة والخدمات التي تساهم في التنمية الزراعية المستدامة.",

        discoverLari:
            "اكتشف المؤسسة"

    }

};


/* =========================================================
   APPLY LANGUAGE
========================================================= */

function changeLanguage(lang) {

    if (!translations[lang]) {
        return;
    }


    /* Change HTML language and direction */

    document.documentElement.lang = lang;

    document.documentElement.dir =
        lang === "ar" ? "rtl" : "ltr";


    /* Language buttons */

    const englishBtn =
        document.getElementById("englishBtn");

    const arabicBtn =
        document.getElementById("arabicBtn");


    if (englishBtn && arabicBtn) {

        if (lang === "ar") {

            arabicBtn.classList.add("mobile-open");

            englishBtn.classList.remove("mobile-open");

        } else {

            englishBtn.classList.add("mobile-open");

            arabicBtn.classList.remove("mobile-open");

        }

    }


    /* Translate elements */

    const elements =
        document.querySelectorAll("[data-i18n]");


    elements.forEach(function (element) {

        const key =
            element.getAttribute("data-i18n");


        if (translations[lang][key]) {

            element.textContent =
                translations[lang][key];

        }

    });


    /* Save language */

    localStorage.setItem(
        "selectedLanguage",
        lang
    );

}


/* =========================================================
   LOAD SAVED LANGUAGE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const savedLanguage =
            localStorage.getItem(
                "selectedLanguage"
            ) || "en";

        changeLanguage(
            savedLanguage
        );

    }
);



/* =========================================================
   2. MOBILE MENU
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const mobileMenuButton =
            document.querySelector(
                ".mobile-menu-btn"
            );

        const navbar =
            document.querySelector(
                ".navbar"
            );

        const dropdowns =
            document.querySelectorAll(
                ".dropdown"
            );


        /* If mobile menu is not on the page */
        if (!mobileMenuButton || !navbar) {
            return;
        }


        /* =================================================
           OPEN / CLOSE HAMBURGER MENU
        ================================================= */

        mobileMenuButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                navbar.classList.toggle(
                    "mobile-open"
                );


                const menuIsOpen =
                    navbar.classList.contains(
                        "mobile-open"
                    );


                /* Change hamburger to X */

                mobileMenuButton.innerHTML =
                    menuIsOpen
                        ? '<i class="fa-solid fa-xmark"></i>'
                        : '<i class="fa-solid fa-bars"></i>';


                /* Accessibility */

                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    menuIsOpen
                );


                mobileMenuButton.setAttribute(
                    "aria-label",
                    menuIsOpen
                        ? "Close menu"
                        : "Open menu"
                );


                /* Close dropdowns when menu closes */

                if (!menuIsOpen) {

                    dropdowns.forEach(
                        function (dropdown) {

                            dropdown.classList.remove(
                                "open"
                            );

                        }
                    );

                }

            }
        );


        /* =================================================
           MOBILE DROPDOWN MENUS
        ================================================= */

        dropdowns.forEach(
            function (dropdown) {

                const dropdownButton =
                    dropdown.querySelector(
                        ":scope > a"
                    );


                if (!dropdownButton) {
                    return;
                }


                dropdownButton.addEventListener(
                    "click",
                    function (event) {

                        /*
                         Only use click behavior
                         on mobile/tablet.
                        */

                        if (
                            window.innerWidth <= 850
                        ) {

                            event.preventDefault();

                            event.stopPropagation();


                            const isAlreadyOpen =
                                dropdown.classList.contains(
                                    "open"
                                );


                            /*
                             Close all other dropdowns
                            */

                            dropdowns.forEach(
                                function (item) {

                                    if (
                                        item !== dropdown
                                    ) {

                                        item.classList.remove(
                                            "open"
                                        );

                                    }

                                }
                            );


                            /*
                             Open / close clicked dropdown
                            */

                            if (isAlreadyOpen) {

                                dropdown.classList.remove(
                                    "open"
                                );

                            } else {

                                dropdown.classList.add(
                                    "open"
                                );

                            }

                        }

                    }
                );

            }
        );


        /* =================================================
           CLOSE MENU WHEN CLICKING NORMAL LINK
        ================================================= */

        const navigationLinks =
            navbar.querySelectorAll(
                "a"
            );


        navigationLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        /*
                         Do NOT close menu when user
                         clicks main dropdown title.
                        */

                        if (
                            window.innerWidth <= 850 &&
                            link.parentElement.classList.contains(
                                "dropdown"
                            )
                        ) {

                            return;

                        }


                        if (
                            window.innerWidth <= 850
                        ) {

                            navbar.classList.remove(
                                "active"
                            );


                            dropdowns.forEach(
                                function (dropdown) {

                                    dropdown.classList.remove(
                                        "open"
                                    );

                                }
                            );


                            mobileMenuButton.innerHTML =
                                '<i class="fa-solid fa-bars"></i>';


                            mobileMenuButton.setAttribute(
                                "aria-expanded",
                                "false"
                            );


                            mobileMenuButton.setAttribute(
                                "aria-label",
                                "Open menu"
                            );

                        }

                    }
                );

            }
        );


        /* =================================================
           CLICK OUTSIDE MENU
        ================================================= */

        document.addEventListener(
            "click",
            function (event) {

                if (
                    window.innerWidth <= 850 &&
                    navbar.classList.contains(
                        "mobile-open"
                    )
                ) {

                    const clickedInsideNavbar =
                        navbar.contains(
                            event.target
                        );

                    const clickedMenuButton =
                        mobileMenuButton.contains(
                            event.target
                        );


                    if (
                        !clickedInsideNavbar &&
                        !clickedMenuButton
                    ) {

                        navbar.classList.remove(
                            "mobile-open"
                        );


                        dropdowns.forEach(
                            function (dropdown) {

                                dropdown.classList.remove(
                                    "open"
                                );

                            }
                        );


                        mobileMenuButton.innerHTML =
                            '<i class="fa-solid fa-bars"></i>';


                        mobileMenuButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                }

            }
        );


        /* =================================================
           RESET NAVIGATION WHEN SCREEN BECOMES DESKTOP
        ================================================= */

        window.addEventListener(
            "resize",
            function () {

                if (
                    window.innerWidth > 850
                ) {

                    navbar.classList.remove(
                        "mobile-open"
                    );


                    dropdowns.forEach(
                        function (dropdown) {

                            dropdown.classList.remove(
                                "open"
                            );

                        }
                    );


                    mobileMenuButton.innerHTML =
                        '<i class="fa-solid fa-bars"></i>';


                    mobileMenuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );

    }
);



/* =========================================================
   3. WEATHER FUNCTIONALITY
========================================================= */

async function toggleWeather() {

    const weatherCard =
        document.getElementById(
            "weather-card"
        );


    if (weatherCard) {

        weatherCard.classList.toggle(
            "show"
        );


        if (
            weatherCard.classList.contains(
                "show"
            )
        ) {

            getWeather();

        }

    }

}



async function getWeather() {

    const loading =
        document.getElementById(
            "weather-loading"
        );


    try {

        if (loading) {

            loading.classList.remove(
                "loaded"
            );

            loading.textContent =
                "Loading weather...";

        }


        const response =
            await fetch(

                "https://api.open-meteo.com/v1/forecast" +

                "?latitude=33.8938" +

                "&longitude=35.5018" +

                "&current=temperature_2m,relative_humidity_2m,wind_speed_10m" +

                "&timezone=auto"

            );


        if (!response.ok) {

            throw new Error(
                "Weather request failed"
            );

        }


        const data =
            await response.json();


        const current =
            data.current;


        const tempElement =
            document.getElementById(
                "temperature"
            );


        const humidityElement =
            document.getElementById(
                "humidity"
            );


        const windElement =
            document.getElementById(
                "wind"
            );


        if (tempElement) {

            tempElement.textContent =
                Math.round(
                    current.temperature_2m
                );

        }


        if (humidityElement) {

            humidityElement.textContent =
                current.relative_humidity_2m
                + "%";

        }


        if (windElement) {

            windElement.textContent =
                Math.round(
                    current.wind_speed_10m
                )
                + " km/h";

        }


        if (loading) {

            loading.classList.add(
                "loaded"
            );

        }


    } catch (error) {

        console.error(
            "Weather error:",
            error
        );


        if (loading) {

            loading.textContent =
                "Error loading weather data";

        }

    }

}



/* =========================================================
   4. LARI STATIONS MAP
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const mapContainer =
            document.getElementById(
                "hero-map-3d"
            );


        /*
         Stop here if this page does not
         contain the map.
        */

        if (!mapContainer) {
            return;
        }


        /*
         Make sure MapLibre loaded correctly.
        */

        if (
            typeof maplibregl ===
            "undefined"
        ) {

            console.error(
                "MapLibre GL JS is not loaded."
            );

            return;

        }


        const lariStations = [

            {
                id: "tel-amara",
                name: "Tel Amara (Main HQ)",
                coords: [
                    35.993443,
                    33.862604
                ]
            },

            {
                id: "fanar",
                name: "Fanar Station",
                coords: [
                    35.565012,
                    33.882531
                ]
            },

            {
                id: "lebaa",
                name: "Lebaa Station",
                coords: [
                    35.438910,
                    33.543025
                ]
            },

            {
                id: "tyre",
                name: "Tyre Station",
                coords: [
                    35.203814,
                    33.270511
                ]
            },

            {
                id: "abdeh",
                name: "Abdeh Station",
                coords: [
                    35.975003,
                    34.526019
                ]
            },

            {
                id: "kfarshakhna",
                name:
                    "Kfarshakhna Station",
                coords: [
                    35.811540,
                    34.341012
                ]
            },

            {
                id: "terbol",
                name: "Terbol Station",
                coords: [
                    35.988015,
                    33.811044
                ]
            },

            {
                id: "hermel",
                name: "Hermel Station",
                coords: [
                    36.380022,
                    34.398015
                ]
            },

            {
                id: "hasbaya",
                name: "Hasbaya Station",
                coords: [
                    35.683310,
                    33.398050
                ]
            },

            {
                id: "keserwan",
                name: "Keserwan Station",
                coords: [
                    35.698012,
                    33.985033
                ]
            },

            {
                id: "baakline",
                name: "Baakline Station",
                coords: [
                    35.535010,
                    33.682045
                ]
            },

            {
                id: "kfarden",
                name: "Kfarden Station",
                coords: [
                    36.002011,
                    34.115022
                ]
            }

        ];


        /* =================================================
           CREATE MAP
        ================================================= */

        const map =
            new maplibregl.Map({

                container:
                    "hero-map-3d",

                style: {

                    version: 8,

                    sources: {

                        "satellite-tiles": {

                            type:
                                "raster",

                            tiles: [

                                "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"

                            ],

                            tileSize:
                                256

                        }

                    },


                    layers: [

                        {

                            id:
                                "satellite",

                            type:
                                "raster",

                            source:
                                "satellite-tiles"

                        }

                    ]

                },


                /*
                 Center of Lebanon
                */

                center: [
                    35.8497,
                    33.8800
                ],


                zoom:
                    7.8,


                pitch:
                    55,


                bearing:
                    -12

            });



        /* =================================================
           MAP CONTROLS
        ================================================= */

        map.addControl(

            new maplibregl.NavigationControl({

                visualizePitch:
                    true

            }),

            "top-right"

        );



        /* =================================================
           ADD STATION MARKERS
        ================================================= */

        lariStations.forEach(
            function (station) {

                const markerElement =
                    document.createElement(
                        "div"
                    );


                markerElement.className =
                    "station-pin";


                markerElement.innerHTML =
                    '<i class="fa-solid fa-location-dot"></i>';



                /* =================================================
                   POPUP CONTENT
                ================================================= */

                const popupHTML = `

                    <div style="
                        text-align:center;
                        padding:4px;
                    ">

                        <b style="
                            color:#1b4332;
                        ">

                            ${station.name}

                        </b>

                        <br>

                        <a
                            href="https://www.google.com/maps/search/?api=1&query=${station.coords[1]},${station.coords[0]}"

                            target="_blank"

                            rel="noopener noreferrer"

                            style="
                                display:inline-block;
                                margin-top:6px;
                                padding:4px 10px;
                                background:#2d6a4f;
                                color:#ffffff;
                                border-radius:4px;
                                text-decoration:none;
                                font-size:11px;
                            "
                        >

                            Open in Google Maps

                        </a>

                    </div>

                `;



                const popup =
                    new maplibregl.Popup({

                        offset: [
                            0,
                            -25
                        ],

                        anchor:
                            "bottom",

                        closeButton:
                            false,

                        closeOnClick:
                            false

                    }).setHTML(
                        popupHTML
                    );



                /* =================================================
                   CREATE MARKER
                ================================================= */

                new maplibregl.Marker({

                    element:
                        markerElement

                })

                    .setLngLat(
                        station.coords
                    )

                    .addTo(
                        map
                    );



                let hoverTimer;



                /* =================================================
                   DESKTOP HOVER
                ================================================= */

                markerElement.addEventListener(
                    "mouseenter",
                    function () {

                        clearTimeout(
                            hoverTimer
                        );


                        popup
                            .setLngLat(
                                station.coords
                            )
                            .addTo(
                                map
                            );


                        const popupElement =
                            popup.getElement();


                        if (popupElement) {

                            popupElement.addEventListener(
                                "mouseenter",
                                function () {

                                    clearTimeout(
                                        hoverTimer
                                    );

                                }
                            );


                            popupElement.addEventListener(
                                "mouseleave",
                                function () {

                                    popup.remove();

                                }
                            );

                        }

                    }
                );



                markerElement.addEventListener(
                    "mouseleave",
                    function () {

                        hoverTimer =
                            setTimeout(

                                function () {

                                    popup.remove();

                                },

                                200

                            );

                    }
                );



                /* =================================================
                   CLICK / MOBILE TAP
                ================================================= */

                markerElement.addEventListener(
                    "click",
                    function () {

                        /*
                         Show popup when tapped.
                         This also helps mobile users.
                        */

                        popup
                            .setLngLat(
                                station.coords
                            )
                            .addTo(
                                map
                            );


                        /*
                         Zoom to station.
                        */

                        map.flyTo({

                            center:
                                station.coords,

                            zoom:
                                12.5,

                            pitch:
                                60,

                            speed:
                                1.2

                        });

                    }
                );

            }
        );


        /*
         Resize map after page loads.
         Useful for responsive layouts.
        */

        window.addEventListener(
            "resize",
            function () {

                map.resize();

            }
        );

    }
);