var vue = new Vue({
    el: "#app",
    data: {
        sourceState: [
            {
                id: 1,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/099-Main_Street_1-FWR-LOOP.mp4",
                loop: true,
                build: false,
                backTurned: false,
                speechBalloon:
                {
                    scene: 1,
                    desktopText: "You can use the keyboard arrow keys to navigate",
                    mobilText: "You can use the arrow keys to navigate"
                }

            },
            {
                id: 2,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/101-Main_Street_1-FWR.mp4",
                loop: false,
                build: false,
                backTurned: false
            },
            {
                id: 3,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/102-Main_Street-2-FWR-LOOP.mp4",
                loop: true,
                build: true,
                buildOptions:
                {
                    rightImg: "src/images/right-1-perspective.png",
                    leftImg: "src/images/left-1-perspective.png",
                    usemaps: [
                        {
                            coords: "718,372,974,724",
                            href: "sunrise",
                            inside: "src/images/sunrise-insider.png",
                            position: "left",
                            iframePosition: "1045,262,1831,773",
                            iframeURL: "https://monkeymunchy.com/company/sunrise"
                        },
                        {
                            coords: "1670,158,1917,744",
                            href: "manor",
                            inside: "src/images/manor-insider.png",
                            position: "left",
                            iframePosition: "1055,237,1831,765",
                            iframeURL: "https://monkeymunchy.com/company/manor"
                        },
                        {
                            coords: "1726,773,1918,373",
                            href: "store",
                            inside: "src/images/monkey_store-insider.png",
                            position: "right",
                            iframePosition: "1047,267,1825,758",
                            iframeURL: "https://monkey-munchy-store.myspreadshop.net/all"
                        },
                        {
                            coords: "802,142,1122,726",
                            href: "postFinance",
                            inside: "src/images/post-insider.png",
                            position: "right",
                            iframePosition: "1050,255,1818,760",
                            iframeURL: "https://monkeymunchy.com/company/post-finance"
                        },
                        {
                            coords: "349,361,561,743",
                            href: "orellfussli",
                            inside: "src/images/orell-insider.png",
                            position: "right",
                            iframePosition: "1053,273,1823,766",
                            iframeURL: "https://monkeymunchy.com/company/orel-fuessli"
                        }
                    ]
                },
                backTurned: false

            },
            {
                id: 4,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/103-Main_Street_2-FWR.mp4",
                loop: false,
                build: false,
                backTurned: false
            },
            {
                id: 5,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/104-Main_Street_Juction-FWR-LOOP.mp4",
                loop: true,
                build: false,
                backTurned: false
            },
            {
                id: 6,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/200-Turn_Left.mp4",
                loop: false,
                build: false,
                backTurned: false
            },
            {
                id: 7,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/300-Left_Street_1-FWR-LOOP.mp4",
                loop: true,
                build: false,
                backTurned: false
            },
            {
                id: 8,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/301-Left_Street_1-FWR.mp4",
                loop: false,
                build: false,
                backTurned: false
            },
            {
                id: 9,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/302-Left_Street_2-FWR-LOOP.mp4",
                loop: true,
                build: true,
                buildOptions:
                {
                    rightImg: "src/images/right-2-perspective.png",
                    leftImg: "src/images/left-2-perspective.png",
                    usemaps: [
                        {
                            coords: "3,292,327,791",
                            href: "ochsner",
                            inside: "src/images/ochsner-insider.png",
                            position: "left",
                            iframePosition: "1070,285,1800,768",
                            iframeURL: "https://monkeymunchy.com/company/ochsner-sport"
                        },
                        {
                            coords: "791,318,328,768",
                            href: "mediamarkt",
                            inside: "src/images/mediamarkt-insider.png",
                            position: "left",
                            iframePosition: "1050,272,1825,767",
                            iframeURL: "https://monkeymunchy.com/company/media-markt"
                        },
                        {
                            coords: "1304,203,1763,727",
                            href: "migros",
                            inside: "src/images/migros-insider.png",
                            position: "right",
                            iframePosition: "1069,284,1798,761",
                            iframeURL: "https://monkeymunchy.com/company/migros"
                        },
                        {
                            coords: "255,731,1,358",
                            href: "mcdonalds",
                            inside: "src/images/mcdonalds-insider.png",
                            position: "right",
                            iframePosition: "1072,287,1795,763",
                            iframeURL: "https://monkeymunchy.com/company/mc-donalds"
                        }
                    ]
                },
                backTurned: false

            },
            {
                id: 10,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/303-Left_Street_2-FWR.mp4",
                loop: false,
                build: false,
                backTurned: false
            },
            {
                id: 11,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/304-Left_Street-Turn_Back.mp4",
                loop: false,
                build: false,
                backTurned: false
            },
            {
                id: 12,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/305-Left_Street_Turn_Back-LOOP.mp4",
                loop: true,
                build: false,
                backTurned: true
            },
            {
                id: 13,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/306-Left_Street_2-BWR.mp4",
                loop: false,
                build: false,
                backTurned: true
            },
            {
                id: 14,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/307-Left_Street_2-BWR-LOOP.mp4",
                loop: true,
                build: true,
                buildOptions:
                {
                    rightImg: "src/images/right-2-perspective.png",
                    leftImg: "src/images/left-2-perspective.png",
                    usemaps: [
                        {
                            coords: "3,292,327,791",
                            href: "ochsner",
                            inside: "src/images/ochsner-insider.png",
                            position: "left",
                            iframePosition: "1070,285,1800,768",
                            iframeURL: "https://monkeymunchy.com/company/ochsner-sport"
                        },
                        {
                            coords: "791,318,328,768",
                            href: "mediamarkt",
                            inside: "src/images/mediamarkt-insider.png",
                            position: "left",
                            iframePosition: "1050,272,1825,767",
                            iframeURL: "https://monkeymunchy.com/company/media-markt"
                        },
                        {
                            coords: "1304,203,1763,727",
                            href: "migros",
                            inside: "src/images/migros-insider.png",
                            position: "right",
                            iframePosition: "1069,284,1798,761",
                            iframeURL: "https://monkeymunchy.com/company/migros"
                        },
                        {
                            coords: "255,731,1,358",
                            href: "mcdonalds",
                            inside: "src/images/mcdonalds-insider.png",
                            position: "right",
                            iframePosition: "1072,287,1795,763",
                            iframeURL: "https://monkeymunchy.com/company/mc-donalds"
                        }
                    ]
                },
                backTurned: true
            },
            {
                id: 15,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/308-Left_Street_1-BWR.mp4",
                loop: false,
                build: false,
                backTurned: true
            },
            {
                id: 16,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/309-Left_Street_1-BWR-LOOP.mp4",
                loop: true,
                build: false,
                backTurned: true
            },
            {
                id: 17,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/310-Left_Street_Turn_Juction.mp4",
                loop: false,
                build: false,
                backTurned: true
            },
            {
                id: 18,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/400-Main_Street_Juction-BWR-LOOP.mp4",
                loop: true,
                build: false,
                backTurned: true
            },
            {
                id: 19,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/500-Turn_Right.mp4",
                loop: false,
                build: false,
                backTurned: false
            },
            {
                id: 20,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/600-Right_Street_1-FWR-LOOP.mp4",
                loop: true,
                build: false,
                backTurned: false
            },

            {
                id: 21,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/601-Right_Street_1-FWR.mp4",
                loop: false,
                build: false,
                backTurned: false
            },
            {
                id: 22,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/602-Right_Street_2-FWR-LOOP.mp4",
                loop: true,
                build: true,
                buildOptions:
                {
                    rightImg: "src/images/right-3-perspective.png",
                    leftImg: "src/images/left-3-perspective.png",
                    usemaps: [
                        {
                            coords: "306,747,598,369",
                            href: "jumbo",
                            inside: "src/images/jumbor-insider.png",
                            position: "right",
                            iframePosition: "1070,282,1797,763",
                            iframeURL: "https://monkeymunchy.com/company/jumbo"
                        },
                        {
                            coords: "1427,778,1652,268",
                            href: "tchibo",
                            inside: "src/images/tchibo-insider.png",
                            position: "right",
                            iframePosition: "1072,285,1795,760",
                            iframeURL: "https://monkeymunchy.com/company/tchibo"
                        },
                        {
                            coords: "601,721,937,263",
                            href: "conforama",
                            inside: "src/images/conforama-insider.png",
                            position: "left",
                            iframePosition: "1072,285,1795,760",
                            iframeURL: "https://monkeymunchy.com/company/conforama"
                        }
                    ]
                },
                backTurned: false
            },
            {
                id: 23,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/603-Right_Street_2-FWR.mp4",
                loop: false,
                build: false,
                backTurned: false
            },
            {
                id: 24,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/604-Right_Street_Turn_Back.mp4",
                loop: false,
                build: false,
                backTurned: false
            },
            {
                id: 25,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/605-Right_Street_Turn_Back-LOOP.mp4",
                loop: true,
                build: false,
                backTurned: true
            },
            {
                id: 26,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/606-Right_Street_2-BWR.mp4",
                loop: false,
                build: false,
                backTurned: true
            },
            {
                id: 27,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/607-Right_Street_2-BWR-LOOP.mp4",
                loop: true,
                build: true,
                buildOptions:
                {
                    rightImg: "src/images/right-3-perspective.png",
                    leftImg: "src/images/left-3-perspective.png",
                    usemaps: [
                        {
                            coords: "306,747,598,369",
                            href: "jumbo",
                            inside: "src/images/jumbor-insider.png",
                            position: "right",
                            iframePosition: "1070,282,1797,763",
                            iframeURL: "https://monkeymunchy.com/company/jumbo"
                        },
                        {
                            coords: "1427,778,1652,268",
                            href: "tchibo",
                            inside: "src/images/tchibo-insider.png",
                            position: "right",
                            iframePosition: "1072,285,1795,760",
                            iframeURL: "https://monkeymunchy.com/company/tchibo"
                        },
                        {
                            coords: "601,721,937,263",
                            href: "conforama",
                            inside: "src/images/conforama-insider.png",
                            position: "left",
                            iframePosition: "1072,285,1795,760",
                            iframeURL: "https://monkeymunchy.com/company/conforama"
                        }
                    ]
                },
                backTurned: true

            },
            {
                id: 28,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/608-Right_Street_1-BWR.mp4",
                loop: false,
                build: false,
                backTurned: true
            },
            {
                id: 29,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/609-Right_Street_1-BWR-LOOP.mp4",
                loop: true,
                build: false,
                backTurned: true
            },
            {
                id: 30,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/610-Right_Street_Turn_Juction.mp4",
                loop: false,
                build: false,
                backTurned: true
            },
            {
                id: 31,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/400-Main_Street_Juction-BWR-LOOP.mp4",
                loop: true,
                build: false,
                backTurned: true
            },
            {
                id: 32,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/701-Main_Street_2-BWR.mp4",
                loop: false,
                build: false,
                backTurned: true
            },
            {
                id: 33,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/702-Main_Street-2-BWR-LOOP.mp4",
                loop: true,
                build: true,
                buildOptions:
                {
                    rightImg: "src/images/right-1-perspective.png",
                    leftImg: "src/images/left-1-perspective.png",
                    usemaps: [
                        {
                            coords: "718,372,974,724",
                            href: "sunrise",
                            inside: "src/images/sunrise-insider.png",
                            position: "left",
                            iframePosition: "1045,262,1831,773",
                            iframeURL: "https://monkeymunchy.com/company/sunrise"
                        },
                        {
                            coords: "1670,158,1917,744",
                            href: "manor",
                            inside: "src/images/manor-insider.png",
                            position: "left",
                            iframePosition: "1055,237,1831,765",
                            iframeURL: "https://monkeymunchy.com/company/manor"
                        },
                        {
                            coords: "1726,773,1918,373",
                            href: "store",
                            inside: "src/images/monkey_store-insider.png",
                            position: "right",
                            iframePosition: "1047,267,1825,758",
                            iframeURL: "https://monkey-munchy-store.myspreadshop.net/all"
                        },
                        {
                            coords: "802,142,1122,726",
                            href: "postFinance",
                            inside: "src/images/post-insider.png",
                            position: "right",
                            iframePosition: "1050,255,1818,760",
                            iframeURL: "https://monkeymunchy.com/company/post-finance"
                        },
                        {
                            coords: "349,361,561,743",
                            href: "orellfussli",
                            inside: "src/images/orell-insider.png",
                            position: "right",
                            iframePosition: "1053,273,1823,766",
                            iframeURL: "https://monkeymunchy.com/company/orel-fuessli"
                        }
                    ]
                },
                backTurned: true
            },
            {
                id: 34,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/703-Main_Street_1-BWR.mp4",
                loop: false,
                build: false,
                backTurned: true
            },
            {
                id: 35,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/704-Main_Street_1-BWR-LOOP.mp4",
                loop: true,
                build: false,
                backTurned: true
            }
        ],
        activeScene: 1,
        duration: 250,
        junction: false,
        junctionBack: false,
        loopScreen: false,
        buildScreen: false,
        end: false,
        isWalk: false,
        walkDelay: false,
        isHorizontalScroll: false,
        pageLoad: false,
        mouseWhellShow: true,
        isInsideEnter: false,
        mobilDeviceOpened: false,
        isFaceDown: false,
        interval: null,
        btnSkip : false
    },
    methods: {

        // ileri sarma
        goMonkey() {

            var $this = this,
                active = $this.getActiveVideos(),
                getVideo = $(active).find("video")[0],
                isLoop = getVideo.loop;
            getVideo.playbackRate = 1;
            $this.loopScreen = isLoop;

            if ($this.junction || $this.buildScreen || $this.end || $this.isWalk) return

            if ($this.loopScreen === false) {
                $this.isWalk = true
                getVideo.play()
                setTimeout(() => {

                    if (!$this.mobilDeviceOpened) {
                        getVideo.pause()
                    }

                    $this.isWalk = false
                }, $this.duration);
            }

            else {
                if ($this.activeScene === 18 || $this.activeScene === 31) {
                    $this.activeScene = 32;
                    $this.junctionBack = false
                }
                else {
                    $this.activeScene++
                }
            }

            // video bittiğinde calisir
            getVideo.onended = function () {

                if ($this.activeScene === $this.sourceState.length - 1) {
                    $this.end = true;
                }

                $this.activeScene += 1;

                switch ($this.activeScene) {
                    case 5:
                        $this.junction = true
                        break;
                    case 18:
                        $this.junctionBack = true
                        break;
                    case 31:
                        $this.junctionBack = true
                        break;
                }
                $this.isWalk = false

                $this.duration = 250;

            };

        },

        backMonkey() {

            var $this = this,

                active = $this.getActiveVideos(),

                getVideo = $(active).find("video")[0],

                isLoop = getVideo.loop;

            $this.loopScreen = isLoop;

            if ($this.mobilDeviceOpened) {
                clearInterval($this.interval)
                $this.interval = setInterval(function () {
                    getVideo.currentTime -= 0.05
                }, 100);
            } else {
                TweenLite.to(getVideo, 0.3, {
                    currentTime: getVideo.currentTime - 0.22,
                    ease: Linear.easeNone
                });
            }

            if (getVideo.currentTime === 0 && !!$(active).prev().find("video").attr("loop")) {

                $this.activeScene--;
                document.querySelectorAll("video").forEach(function (element) {
                    !!element.getAttribute("autoplay") ? element.play() : ""
                })
            }

        },

        //aktif videoyu dondurur
        getActiveVideos() {

            var video = $(".video-capsul").filter("[data-id=" + this.activeScene + "]")
            return video

        },

        //kavsaklarda yon
        direction(direction) {
            switch (direction) {
                case "left":
                    this.activeScene = 6;
                    this.junction = false;
                    this.junctionBack = false;
                    this.duration = 10000
                    this.goMonkey();
                    break;
                case "right":
                    this.activeScene = 19;
                    this.junction = false
                    this.junctionBack = false;
                    this.duration = 10000
                    this.goMonkey();
                    break;
            }

        },

        //yapılara giris aninda
        buildEnter(getVideoID, direction) {
            $('img[usemap]').rwdImageMaps();
            $(".build-capsul").filter("[data-build=" + getVideoID + "]").addClass("active" + " " + direction).find(".buildings__build")
                .scrollLeft(this.scrollLeftPosition(direction))
            this.buildScreen = true;
            var build = $(".build-capsul.active .buildings__build").filter(":visible"),
                buildW = build.width(),
                buildImgW = build.find(".buildings__build--img").width();
            this.horizontalScrollControl(buildW, buildImgW);
        },

        horizontalScrollControl(buildW, buildImgW) {

            buildImgW > buildW ? this.isHorizontalScroll = true : this.isHorizontalScroll = false
        },

        checkOrientation() {

            var insiderItemActive = $(".insiderItem.active");

            if (insiderItemActive.length <= 0) return

            setTimeout(() => {
                var coord = insiderItemActive.find("area").attr("coords").split(",");
                insiderItemActive.find(".iframeCapsul").css({
                    'left': coord[0] + "px",
                    'top': coord[1] + "px",
                    'width': coord[2] - coord[0] + "px",
                    'height': coord[3] - coord[1] + "px"
                });
                insiderItemActive.scrollLeft(this.scrollLeftPosition("inside"))
            }, 500);

        },

        scrollLeftPosition(direction) {
            var build = $(".build-capsul.active .buildings__build"),
                inside = $(".insiderItem.active");
            switch (direction) {
                case "left":
                    return (build.filter(".left").children("img").width() - build.filter(".left").width()) / 2
                    break;
                case "right":
                    return (build.filter(".right").children("img").width() - build.filter(".right").width()) / 2
                    break;
                case "inside":
                    return (inside.children("img").width() - inside.width()) / 2
                    break;
            }
        },

        //yapılardan cikis aninda
        buildExit(getVideoID) {
            this.resetBuild(getVideoID);
        },

        //yapılari resetler. en bas ozelliklerine geri dondurur
        resetBuild(target) {
            var buildCapsul = $(".build-capsul"),
                insiderItem = buildCapsul.find(".insiderItem");
            if (insiderItem.hasClass("active")) {
                insiderItem.removeClass("active")
                this.isInsideEnter = false;
                $("body").addClass("zoom-out")
            } else {
                target
                    ?
                    buildCapsul.filter("[data-build=" + target + "]").removeClass("active left right")
                    :
                    buildCapsul.removeClass("active left right")
                this.buildScreen = false
            }
        },

        insideEnter(id) {
            var $this = this;
            $this.isInsideEnter = true;
            $('img[usemap]').rwdImageMaps();
            $(".insiderItem").filter("[data-href=" + id + "]").addClass("active").scrollLeft($this.scrollLeftPosition("inside"))
            $(".insiderItem.active .iframeCapsul, .insiderItem.active .btn-zoomIn").hide()

            if (!$(".insiderItem.active area").length) return
            setTimeout(() => {
                var coord = $(".insiderItem.active area").attr("coords").split(",")
                $(".insiderItem.active .iframeCapsul").css({
                    'left': coord[0] + "px",
                    'top': coord[1] + "px",
                    'width': coord[2] - coord[0] + "px",
                    'height': coord[3] - coord[1] + "px"
                }).show();
                $(".insiderItem.active .btn-zoomIn").css({
                    'left': 0,
                    'right': 0,
                    'margin': "0 auto",
                    'bottom': 'inherit',
                    'top': parseInt(coord[3]) + $(".btn-zoomIn").innerHeight() / 2 + "px"
                }).show()
            }, 500);



        },

        zoomIn(ths) {
            var body = $("body"),
                ths = $(".insiderItem").filter("[data-href=" + ths + "]");

            if (!body.hasClass("zoom-out")) return
            body.removeClass("zoom-out");
            ths.find("iframe").css("opacity", "0")
            this.insideEnter(ths.data("href"))
            setTimeout(() => {
                ths.find("iframe").css("opacity", "1")
            }, 500);
        },

        backCornerBttn(id) {
            switch (id) {
                case 3:
                    this.activeScene = 33;
                    break;
                case 33:
                    this.activeScene = 3;
                    break;
                case 9:
                    this.activeScene = 14;
                    break;
                case 14:
                    this.activeScene = 9;
                    break;
                case 22:
                    this.activeScene = 27;
                    break;
                case 27:
                    this.activeScene = 22;
                    break;
                case 31:
                    this.activeScene = 5;
                    this.junction = true
                    break;
                case 18:
                    this.activeScene = 5;
                    break;
                case 5:
                    this.activeScene = 31;
                    this.junction = false
                    break;
            }

        },

        isMouseWhellBackShow() {
            return this.isFaceDown
        },
        //basa dondugunde videolarin currentTime'ını basa alir
        resetVideos() {
            this.end = false;
            this.activeScene = 1;
            this.isFaceDown = false;
            var videoCapsul = $(".video-capsul");
            videoCapsul.each(function (i, el) {
                $(el).children("video").length > 0 ? $(el).children("video")[0].currentTime = 0 : ""
            })
            videoCapsul.first().children("video")[0].play()
        },

        showBuild() {
            return $(".video-active").find(".build-capsul").length > 0
        },

        checkKey(e) {
            var $this = this;
            e = e || window.event;
            switch (e.keyCode) {
                //ileri
                case 38:
                    if ($this.isMouseWhellBackShow())
                        $this.backCornerBttn($this.activeScene)
                    else if (!$this.walkDelay && $this.pageLoad && $this.activeScene !== 31 && this.activeScene !== 5)
                        $this.goMonkey()
                    break;
                //geri
                case 40:

                    if ($this.end) {
                        $this.resetVideos()
                        return
                    }

                    if ($this.buildScreen) {
                        $this.buildExit($this.activeScene)
                        return
                    }

                    if (!$this.isMouseWhellBackShow()) {
                        if ($this.showBuild() || $this.junction) {
                            $this.backCornerBttn($this.activeScene)
                        } else {
                            $this.backMonkey()
                        }
                    }
                    else if (!$this.walkDelay && $this.pageLoad) {
                        $this.goMonkey()
                    }


                    break;
                //sol
                case 37:
                    if ($this.showBuild())
                        $this.buildEnter($this.activeScene, "left")
                    else if ($this.junction || $this.junctionBack)
                        $this.direction("left")
                    break;

                //sag
                case 39:
                    if ($this.showBuild())
                        $this.buildEnter($this.activeScene, "right")
                    else if ($this.junction || $this.junctionBack)
                        $this.direction("right")
                    break;
            }
        },

        mouseWhellFunc() {
            var $this = this;
            if (!$this.isMouseWhellBackShow() && event.deltaY < 0 && !$this.walkDelay && $this.pageLoad) {
                $this.goMonkey()
            }
            if (!$this.isMouseWhellBackShow() && event.deltaY > 0 && !$this.walkDelay && $this.pageLoad) {
                $this.backMonkey()
            }
            if ($this.isMouseWhellBackShow() && event.deltaY > 0 && !$this.walkDelay && $this.pageLoad) {
                $this.goMonkey()
            }
        },

        joystickBtn(position) {
            var $this = this;
            switch (position) {
                case 'top':
                    if ($this.isMouseWhellBackShow())
                        $this.backCornerBttn($this.activeScene)
                    else if ($this.pageLoad && $this.activeScene !== 31 && this.activeScene !== 5)
                        $this.goMonkey()
                        $this.goMonkey()
                      var active = $this.getActiveVideos(),
                         getVideo = $(active).find("video")[0];                         
                         getVideo.playbackRate = 1.4;
                    break;
                case 'bottom':
                    if (!$this.walkDelay) {
                        if ($this.isFaceDown) {
                            $this.goMonkey()
                            $this.goMonkey()
                        }
                        else {
                            $this.backMonkey()
                            $this.backMonkey()
                        }

                    }
                    break;
                case 'right':
                    if ($this.showBuild())
                        $this.buildEnter($this.activeScene, "right")
                    else if ($this.junction || $this.junctionBack)
                        $this.direction("right")
                    break;
                case 'left':
                    if ($this.showBuild())
                        $this.buildEnter($this.activeScene, "left")
                    else if ($this.junction || $this.junctionBack)
                        $this.direction("left")
                    break;

            }
        },

        stopVideo() {
            var $this = this;
            var active = $this.getActiveVideos(),
                getVideo = $(active).find("video")[0];
            if (!getVideo.loop && $this.activeScene !== 19 && $this.activeScene !== 6) {
                setTimeout(() => {
                    getVideo.pause()
                }, $this.duration);
            }
            setTimeout(() => {
                clearInterval($this.interval)
            }, $this.duration);
        },

        isAutoPlayVideo() {
            $(".video-active video").attr("loop") ? this.mouseWhellShow = true : this.mouseWhellShow = false
        }
    },

    computed: {

        isSafari() {
            var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
            return isSafari;
        },

        isMobile() {
            var isMobile = $(window).width() <= 1024 ? true : false;
            return isMobile
        },

        backCorner: function () {
            switch (this.activeScene) {
                case 3:
                    return 33
                    break;
                case 33:
                    return 3
                    break;
                case 9:
                    return 14
                    break;
                case 14:
                    return 9
                    break;
                case 22:
                    return 27
                    break;
                case 27:
                    return 22
                    break;
                case 31:
                    return 5
                    break;
                case 18:
                    return 5
                    break;
                case 5:
                    return 31
                    break;
            }
        }
    },

    watch: {
        activeScene: function (newVal, oldVal) {
            var [getScene] = this.sourceState.filter(x => x.id === newVal)
            getScene.backTurned ? this.isFaceDown = true : this.isFaceDown = false
        },
        pageLoad : function(newVal, oldVal) {
            if(newVal) {
                var active = this.getActiveVideos();
                $(active).find("video")[0].play()
            }
        }
    },

    //DOM hazir oldugunda
    mounted: function () {

        var $this = this;

        $this.$nextTick(function () {

            var active = $this.getActiveVideos();
            $(active).find("video")[0].pause();

            document.addEventListener("wheel", $this.mouseWhellFunc);

            document.onkeydown = $this.checkKey;

            window.addEventListener("orientationchange", $this.checkOrientation, false);

            $(document).bind("swipeup swipedown", function () {
                if (!$this.walkDelay && $this.pageLoad) $this.goMonkey()
            }).bind("swipeleft swiperight", function () {
                $(".build-capsul>.speechBalloon").hide()
            }).on("click", ".buildings__build", function () {
                $(".build-capsul>.speechBalloon").hide()
            })

            $(window).on('load', function () {
                setTimeout(() => {
                    $this.pageLoad = true
                }, 31000);
                setTimeout(() => {
                    $this.btnSkip = true
                }, 5000);
            })

            var percent = $(".video-loader .percent"),
                textLoading = $(".text-loading"),
                time = parseInt(percent.text().split("%")[0]),
                myInterval = setInterval(timer, 60);

            function timer() {
                time >= 100 ? stopTime() : time++
                percent.text(`${time}%`)
            }
            function stopTime() {
                clearInterval(myInterval);
                textLoading.show()
                percent.hide()
            }

            $this.isMobile ? $this.mobilDeviceOpened = true : $this.mobilDeviceOpened = false


        })//nextTick end

    },

    updated() {
        var $this = this;
        $this.$nextTick(function () {
            var videoActiveNext = $(".video-active + .video-capsul").find("video")
            if ($this.showBuild() || $this.junctionBack) {
                $this.walkDelay = true
                setTimeout(() => {
                    $this.walkDelay = false
                }, 2500);
            }

            if (!videoActiveNext.attr("autoplay") && $this.isSafari) {
                videoActiveNext[0].play()
                videoActiveNext[0].pause()
            }

            $this.isAutoPlayVideo()

        })
    }
})