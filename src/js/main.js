var vue = new Vue({
    el: "#app",
    data: {
        sourceState: [
            {
                id: 1,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/099-Main_Street_1-FWR-LOOP.mp4",
                muted: true,
                loop: true,
                build: false,
                backTurned: false
            },
            {
                id: 2,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/101-Main_Street_1-FWR.mp4",
                muted: true,
                loop: false,
                build: false,
                backTurned: false
            },
            {
                id: 3,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/102-Main_Street-2-FWR-LOOP.mp4",
                muted: true,
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
                            iframePosition: "727,224,1192,515",
                            iframeURL: "https://www.sunrise.ch/de/privatkunden/startseite/Angebote.html"
                        },
                        {
                            coords: "1670,158,1917,744",
                            href: "manor",
                            inside: "src/images/manor-insider.png",
                            position: "left",
                            iframePosition: "725,220,1192,522",
                            iframeURL: "https://www.manor.ch/de/u/sale"
                        },
                        {
                            coords: "1726,773,1918,373",
                            href: "store",
                            inside: "src/images/monkey_store-insider.png",
                            position: "right",
                            iframePosition: "1057,267,1825,758",
                            iframeURL: "https://monkey-munchy-store.myspreadshop.net/all"
                        },
                        {
                            coords: "802,142,1122,726",
                            href: "postFinance",
                            inside: "src/images/post-insider.png",
                            position: "right",
                            iframePosition: "725,217,1190,524",
                            iframeURL: "https://www.postfinance.ch/de/privat.html"
                        },
                        {
                            coords: "349,361,561,743",
                            href: "orellfussli",
                            inside: "src/images/orell-insider.png",
                            position: "right",
                            iframePosition: "723,219,1190,521",
                            iframeURL: "https://www.orellfuessli.ch/kampagnen/studentcard-aktion"
                        }
                    ]
                },
                backTurned: false

            },
            {
                id: 4,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/103-Main_Street_2-FWR.mp4",
                muted: true,
                loop: false,
                build: false,
                backTurned: false
            },
            {
                id: 5,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/104-Main_Street_Juction-FWR-LOOP.mp4",
                muted: true,
                loop: true,
                build: false,
                backTurned: false
            },
            {
                id: 6,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/200-Turn_Left.mp4",
                muted: true,
                loop: false,
                build: false,
                backTurned: false
            },
            {
                id: 7,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/300-Left_Street_1-FWR-LOOP.mp4",
                muted: true,
                loop: true,
                build: false,
                backTurned: false
            },
            {
                id: 8,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/301-Left_Street_1-FWR.mp4",
                muted: true,
                loop: false,
                build: false,
                backTurned: false
            },
            {
                id: 9,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/302-Left_Street_2-FWR-LOOP.mp4",
                muted: true,
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
                            position: "left"
                        },
                        {
                            coords: "791,318,328,768",
                            href: "mediamarkt",
                            inside: "src/images/mediamarkt-insider.png",
                            position: "left"
                        },
                        {
                            coords: "1304,203,1763,727",
                            href: "migros",
                            inside: "src/images/migros-insider.png",
                            position: "right"
                        }
                    ]
                },
                backTurned: false

            },
            {
                id: 10,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/303-Left_Street_2-FWR.mp4",
                muted: true,
                loop: false,
                build: false,
                backTurned: false
            },
            {
                id: 11,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/304-Left_Street-Turn_Back.mp4",
                muted: true,
                loop: false,
                build: false,
                backTurned: false
            },
            {
                id: 12,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/305-Left_Street_Turn_Back-LOOP.mp4",
                muted: true,
                loop: true,
                build: false,
                backTurned: true
            },
            {
                id: 13,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/306-Left_Street_2-BWR.mp4",
                muted: true,
                loop: false,
                build: false,
                backTurned: true
            },
            {
                id: 14,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/307-Left_Street_2-BWR-LOOP.mp4",
                muted: true,
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
                            position: "left"
                        },
                        {
                            coords: "791,318,328,768",
                            href: "mediamarkt",
                            inside: "src/images/mediamarkt-insider.png",
                            position: "left"
                        },
                        {
                            coords: "1304,203,1763,727",
                            href: "migros",
                            inside: "src/images/migros-insider.png",
                            position: "right"
                        }
                    ]
                },
                backTurned: true
            },
            {
                id: 15,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/308-Left_Street_1-BWR.mp4",
                muted: true,
                loop: false,
                build: false,
                backTurned: true
            },
            {
                id: 16,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/309-Left_Street_1-BWR-LOOP.mp4",
                muted: true,
                loop: true,
                build: false,
                backTurned: true
            },
            {
                id: 17,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/310-Left_Street_Turn_Juction.mp4",
                muted: true,
                loop: false,
                build: false,
                backTurned: true
            },
            {
                id: 18,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/400-Main_Street_Juction-BWR-LOOP.mp4",
                muted: true,
                loop: true,
                build: false,
                backTurned: true
            },
            {
                id: 19,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/500-Turn_Right.mp4",
                muted: true,
                loop: false,
                build: false,
                backTurned: false
            },
            {
                id: 20,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/600-Right_Street_1-FWR-LOOP.mp4",
                muted: true,
                loop: true,
                build: false,
                backTurned: false
            },

            {
                id: 21,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/601-Right_Street_1-FWR.mp4",
                muted: true,
                loop: false,
                build: false,
                backTurned: false
            },
            {
                id: 22,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/602-Right_Street_2-FWR-LOOP.mp4",
                muted: true,
                loop: true,
                build: true,
                buildOptions:
                {
                    rightImg: "src/images/right-3-perspective.png",
                    leftImg: "src/images/left-3-perspective.png"
                },
                backTurned: false
            },
            {
                id: 23,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/603-Right_Street_2-FWR.mp4",
                muted: true,
                loop: false,
                build: false,
                backTurned: false
            },
            {
                id: 24,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/604-Right_Street_Turn_Back.mp4",
                muted: true,
                loop: false,
                build: false,
                backTurned: false
            },
            {
                id: 25,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/605-Right_Street_Turn_Back-LOOP.mp4",
                muted: true,
                loop: true,
                build: false,
                backTurned: true
            },
            {
                id: 26,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/606-Right_Street_2-BWR.mp4",
                muted: true,
                loop: false,
                build: false,
                backTurned: true
            },
            {
                id: 27,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/607-Right_Street_2-BWR-LOOP.mp4",
                muted: true,
                loop: true,
                build: true,
                buildOptions:
                {
                    rightImg: "src/images/right-3-perspective.png",
                    leftImg: "src/images/left-3-perspective.png"
                },
                backTurned: true

            },
            {
                id: 28,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/608-Right_Street_1-BWR.mp4",
                muted: true,
                loop: false,
                build: false,
                backTurned: true
            },
            {
                id: 29,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/609-Right_Street_1-BWR-LOOP.mp4",
                muted: true,
                loop: true,
                build: false,
                backTurned: true
            },
            {
                id: 30,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/610-Right_Street_Turn_Juction.mp4",
                muted: true,
                loop: false,
                build: false,
                backTurned: true
            },
            {
                id: 31,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/400-Main_Street_Juction-BWR-LOOP.mp4",
                muted: true,
                loop: true,
                build: false,
                backTurned: true
            },
            {
                id: 32,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/701-Main_Street_2-BWR.mp4",
                muted: true,
                loop: false,
                build: false,
                backTurned: true
            },
            {
                id: 33,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/702-Main_Street-2-BWR-LOOP.mp4",
                muted: true,
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
                            iframePosition: "727,224,1192,515",
                            iframeURL: "https://www.sunrise.ch/de/privatkunden/startseite/Angebote.html"
                        },
                        {
                            coords: "1670,158,1917,744",
                            href: "manor",
                            inside: "src/images/manor-insider.png",
                            position: "left",
                            iframePosition: "725,220,1192,522",
                            iframeURL: "https://www.manor.ch/de/u/sale"
                        },
                        {
                            coords: "1726,773,1918,373",
                            href: "store",
                            inside: "src/images/monkey_store-insider.png",
                            position: "right",
                            iframePosition: "1057,267,1825,758",
                            iframeURL: "https://monkey-munchy-store.myspreadshop.net/"
                        },
                        {
                            coords: "802,142,1122,726",
                            href: "postFinance",
                            inside: "src/images/post-insider.png",
                            position: "right",
                            iframePosition: "725,217,1190,524",
                            iframeURL: "https://www.postfinance.ch"
                        },
                        {
                            coords: "349,361,561,743",
                            href: "orellfussli",
                            inside: "src/images/orell-insider.png",
                            position: "right",
                            iframePosition: "723,219,1190,521",
                            iframeURL: "https://www.orellfuessli.ch/kampagnen/studentcard-aktion"
                        }
                    ]
                },
                backTurned: true
            },
            {
                id: 34,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/703-Main_Street_1-BWR.mp4",
                muted: true,
                loop: false,
                build: false,
                backTurned: true
            },
            {
                id: 35,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/704-Main_Street_1-BWR-LOOP.mp4",
                muted: true,
                loop: true,
                build: false,
                backTurned: true
            }
        ],
        activeScene: 1,
        prevActiveScene: null,
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
        mouseWhellShow: true
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

            if ($this.duration !== "end") {
                setTimeout(() => {
                    $this.loopScreen === false ? getVideo.pause() : ""
                    $this.isWalk = false
                }, $this.duration);
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

                if ($this.duration !== "end") {
                    $this.isMobile() ? $this.duration = 600 : $this.duration = 250;
                }

            };

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
                    //this.activeScene = 6;
                    this.junction = false;
                    this.junctionBack = false;
                    this.duration !== "end" ? this.duration = 10000 : ""
                    this.goMonkey();
                    break;
                case "right":
                    this.activeScene = 19;
                    this.junction = false
                    this.junctionBack = false;
                    this.duration !== "end" ? this.duration = 10000 : ""
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

            buildImgW > buildW + 100 ? this.isHorizontalScroll = true : this.isHorizontalScroll = false
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
            $('img[usemap]').rwdImageMaps();
            $(".insiderItem").filter("[data-href=" + id + "]").addClass("active").scrollLeft(this.scrollLeftPosition("inside"))
            if (!$(".insiderItem.active area").length) return
            setTimeout(() => {
                var coord = $(".insiderItem.active area").attr("coords").split(",")
                $(".insiderItem.active .iframeCapsul").css({
                    'left': coord[0] + "px",
                    'top': coord[1] + "px",
                    'width': coord[2] - coord[0] + "px",
                    'height': coord[3] - coord[1] + "px"
                });
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

        //basa dondugunde videolarin currentTime'ını basa alir
        resetVideos() {
            this.end = false;
            this.activeScene = 1;
            var videoCapsul = $(".video-capsul");
            videoCapsul.each(function (i, el) {
                $(el).children("video").length > 0 ? $(el).children("video")[0].currentTime = 0 : ""
            })
            videoCapsul.first().children("video")[0].play()
        },

        isMobile() {
            var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            return isMobile ? true : false
        },

        isSafari() {
            var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
            return isSafari;
        }

    },

    computed: {
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

    //DOM hazir oldugunda
    mounted: function () {

        var $this = this;

        $this.$nextTick(function () {

            var active = $this.getActiveVideos();
            $(active).find("video")[0].pause();

            $this.isSafari() ? $this.duration = "end" : $this.duration = 600

            document.addEventListener("wheel", function (event) {
                if ($(".video-active .mouse-whell").hasClass("down") && event.deltaY > 0 && !$this.walkDelay && $this.pageLoad) {
                    $this.goMonkey()
                } else if (!$(".video-active .mouse-whell").hasClass("down") && event.deltaY < 0 && !$this.walkDelay && $this.pageLoad) {
                    $this.goMonkey()
                }
            });

            $(document).swipedown(function () {
                if ($(".video-active .mouse-whell").hasClass("down") && !$this.walkDelay && $this.pageLoad) {
                    $this.goMonkey()
                }
            })

            $(document).swipeup(function () {
                if (!$(".video-active .mouse-whell").hasClass("down") && !$this.walkDelay && $this.pageLoad) {
                    $this.goMonkey()
                }
            })

            $(window).on('load', function () {
                $this.pageLoad = true
                setTimeout(() => {
                    $(active).find("video")[0].play()
                }, 1200);
            })

            $(".buildings__build").on("click", function () {
                $(".handrightleft").hide()
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


        })//nextTick end

    },

    watch: {
        isWalk: function (newVal) {
            newVal === true ? this.mouseWhellShow = false : this.mouseWhellShow = true
        }
    },

    updated() {
        var $this = this;
        $this.$nextTick(function () {
            var videoActiveNext = $(".video-active + .video-capsul").find("video")
            if ($(".video-active").find(".build-capsul").length > 0 || $this.junctionBack) {
                $this.walkDelay = true
                setTimeout(() => {
                    $this.walkDelay = false
                }, 2500);
            }

            if (!videoActiveNext.attr("autoplay") && $this.isSafari()) {
                videoActiveNext[0].play()
                videoActiveNext[0].pause()
            }
        })
    }
})