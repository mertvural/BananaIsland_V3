/*********************************************
*
*  codes cannot be used without permission. copyright 2022                    
*
*********************************************/
var vue = new Vue({
    el: "#app",
    data: {
        sourceState: [
            {
                id: 1,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/100-Main_Street_1-FWR-LOOP.mp4",
                autoplay: true,
                muted: true,
                loop: true,
                build: false
            },
            {
                id: 2,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/101-Main_Street_1-FWR.mp4",
                autoplay: false,
                muted: true,
                loop: false,
                build: false
            },
            {
                id: 3,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/102-Main_Street-2-FWR-LOOP.mp4",
                autoplay: true,
                muted: true,
                loop: true,
                build: true,
                buildOptions:
                {
                    rightImg: "src/images/right-1-perspective.png",
                    leftImg: "src/images/left-1-perspective.png",
                    usemaps: [
                        {
                            coords: "710,376,976,700",
                            href: "sunrise",
                            inside: "src/images/sunrise-inside-design.png",
                            position: "left"
                        },
                        {
                            coords: "1734,751,1919,405",
                            href: "store",
                            inside: "src/images/monkey_store.png",
                            position: "right"
                        },
                        {
                            coords: "812,190,1115,710",
                            href: "postFinance",
                            inside: "src/images/postinside.png",
                            position: "right"
                        }
                    ]
                }

            },
            {
                id: 4,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/103-Main_Street_2-FWR.mp4",
                autoplay: false,
                muted: true,
                loop: false,
                build: false
            },
            {
                id: 5,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/104-Main_Street_Juction-FWR-LOOP.mp4",
                autoplay: true,
                muted: true,
                loop: true,
                build: false
            },
            {
                id: 6,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/200-Turn_Left.mp4",
                autoplay: false,
                muted: true,
                loop: false,
                build: false
            },
            {
                id: 7,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/300-Left_Street_1-FWR-LOOP.mp4",
                autoplay: true,
                muted: true,
                loop: true,
                build: false
            },
            {
                id: 8,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/301-Left_Street_1-FWR.mp4",
                autoplay: false,
                muted: true,
                loop: false,
                build: false
            },
            {
                id: 9,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/302-Left_Street_2-FWR-LOOP.mp4",
                autoplay: true,
                muted: true,
                loop: true,
                build: true,
                buildOptions:
                {
                    rightImg: "src/images/right-2-perspective.png",
                    leftImg: "src/images/left-2-perspective.png"
                }

            },
            {
                id: 10,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/303-Left_Street_2-FWR.mp4",
                autoplay: false,
                muted: true,
                loop: false,
                build: false
            },
            {
                id: 11,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/304-Left_Street-Turn_Back.mp4",
                autoplay: false,
                muted: true,
                loop: false,
                build: false
            },
            {
                id: 12,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/305-Left_Street_Turn_Back-LOOP.mp4",
                autoplay: true,
                muted: true,
                loop: true,
                build: false
            },
            {
                id: 13,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/306-Left_Street_2-BWR.mp4",
                autoplay: false,
                muted: true,
                loop: false,
                build: false
            },
            {
                id: 14,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/307-Left_Street_2-BWR-LOOP.mp4",
                autoplay: true,
                muted: true,
                loop: true,
                build: true,
                buildOptions:
                {
                    rightImg: "src/images/right-2-perspective.png",
                    leftImg: "src/images/left-2-perspective.png"
                }

            },
            {
                id: 15,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/308-Left_Street_1-BWR.mp4",
                autoplay: false,
                muted: true,
                loop: false,
                build: false
            },
            {
                id: 16,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/309-Left_Street_1-BWR-LOOP.mp4",
                autoplay: true,
                muted: true,
                loop: true,
                build: false
            },
            {
                id: 17,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/310-Left_Street_Turn_Juction.mp4",
                autoplay: false,
                muted: true,
                loop: false,
                build: false
            },
            {
                id: 18,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/400-Main_Street_Juction-BWR-LOOP.mp4",
                autoplay: true,
                muted: true,
                loop: true,
                build: false
            },
            {
                id: 19,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/500-Turn_Right.mp4",
                autoplay: false,
                muted: true,
                loop: false,
                build: false
            },
            {
                id: 20,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/600-Right_Street_1-FWR-LOOP.mp4",
                autoplay: true,
                muted: true,
                loop: true,
                build: false
            },

            {
                id: 21,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/601-Right_Street_1-FWR.mp4",
                autoplay: false,
                muted: true,
                loop: false,
                build: false
            },
            {
                id: 22,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/602-Right_Street_2-FWR-LOOP.mp4",
                autoplay: true,
                muted: true,
                loop: true,
                build: true,
                buildOptions:
                {
                    rightImg: "src/images/right-3-perspective.png",
                    leftImg: "src/images/left-3-perspective.png"
                }

            },
            {
                id: 23,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/603-Right_Street_2-FWR.mp4",
                autoplay: false,
                muted: true,
                loop: false,
                build: false
            },
            {
                id: 24,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/604-Right_Street_Turn_Back.mp4",
                autoplay: false,
                muted: true,
                loop: false,
                build: false
            },
            {
                id: 25,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/605-Right_Street_Turn_Back-LOOP.mp4",
                autoplay: true,
                muted: true,
                loop: true,
                build: false
            },
            {
                id: 26,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/606-Right_Street_2-BWR.mp4",
                autoplay: false,
                muted: true,
                loop: false,
                build: false
            },
            {
                id: 27,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/607-Right_Street_2-BWR-LOOP.mp4",
                autoplay: true,
                muted: true,
                loop: true,
                build: true,
                buildOptions:
                {
                    rightImg: "src/images/right-3-perspective.png",
                    leftImg: "src/images/left-3-perspective.png"
                }

            },
            {
                id: 28,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/608-Right_Street_1-BWR.mp4",
                autoplay: false,
                muted: true,
                loop: false,
                build: false
            },
            {
                id: 29,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/609-Right_Street_1-BWR-LOOP.mp4",
                autoplay: true,
                muted: true,
                loop: true,
                build: false
            },
            {
                id: 30,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/610-Right_Street_Turn_Juction.mp4",
                autoplay: false,
                muted: true,
                loop: false,
                build: false
            },
            {
                id: 31,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/400-Main_Street_Juction-BWR-LOOP.mp4",
                autoplay: true,
                muted: true,
                loop: true,
                build: false
            },
            {
                id: 32,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/701-Main_Street_2-BWR.mp4",
                autoplay: false,
                muted: true,
                loop: false,
                build: false
            },
            {
                id: 33,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/702-Main_Street-2-BWR-LOOP.mp4",
                autoplay: true,
                muted: true,
                loop: true,
                build: true,
                buildOptions:
                {
                    rightImg: "src/images/right-1-perspective.png",
                    leftImg: "src/images/left-1-perspective.png",
                    usemaps: [
                        {
                            coords: "710,376,976,700",
                            href: "sunrise",
                            inside: "src/images/sunrise-inside-design.png",
                            position: "left"
                        },
                        {
                            coords: "1734,751,1919,405",
                            href: "store",
                            inside: "src/images/monkey_store.png",
                            position: "right"
                        },
                        {
                            coords: "812,190,1115,710",
                            href: "postFinance",
                            inside: "src/images/postinside.png",
                            position: "right"
                        }
                    ]
                }

            },
            {
                id: 34,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/703-Main_Street_1-BWR.mp4",
                autoplay: false,
                muted: true,
                loop: false,
                build: false
            },
            {
                id: 35,
                src: "https://alpiocdnjs.blob.core.windows.net/monkeymunchy/704-Main_Street_1-BWR-LOOP.mp4",
                autoplay: true,
                muted: true,
                loop: true,
                build: false
            }
        ],
        activeScene: 1,
        duration: 200,
        junction: false,
        junctionBack: false,
        loopScreen: false,
        buildScreen: false,
        end: false
    },
    methods: {

        // ileri sarma
        goMonkey() {

            var $this = this,
                active = $this.getActiveVideos(),
                getVideo = $(active).find("video")[0],
                isLoop = getVideo.loop;

            $this.loopScreen = isLoop;

            if ($this.junction || $this.buildScreen || $this.end) return

            if ($this.loopScreen !== true) {
                getVideo.play()
                getVideo.playbackRate = 2.1
            } else {
                if ($this.activeScene === 18 || $this.activeScene === 31) {
                    $this.activeScene = 32;
                    $this.junctionBack = false
                }
                else {
                    $this.activeScene++
                }
            }

            setTimeout(() => {
                $this.loopScreen === false ? getVideo.pause() : ""
            }, $this.duration);

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

                $this.duration = 300;

            };

        },

        // geri sarma
        backMonkey() {

            // var $this = this,

            //     active = $this.getActiveVideos(),

            //     getVideo = $(active).find("video")[0];

            // $this.junction = false

            // getVideo.currentTime = getVideo.currentTime - 0.5

            // getVideo.currentTime === 0 && $this.activeScene !== 1 ? $this.activeScene-- : ""

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
                    this.duration = 10000;
                    this.goMonkey();
                    break;
                case "right":
                    this.activeScene = 19;
                    this.junction = false
                    this.junctionBack = false;
                    this.duration = 10000;
                    this.goMonkey();
                    break;
            }

        },

        //yapılara giris aninda
        buildEnter(getVideoID, direction) {
            $(".build-capsul").filter("[data-build=" + getVideoID + "]").addClass("active-" + direction + "").find(".buildings__build")
                .scrollLeft(this.getScrollWidth(direction))
            this.buildScreen = true;
        },

        getScrollWidth(direction) {
            if (direction === "left") {
                return parseInt(parseInt($(".build-capsul.active-left .buildings__build.left area").attr("coords")?.split(",")[0]))
            } else {
                return parseInt(parseInt($(".build-capsul.active-right .buildings__build.right area").attr("coords")?.split(",")[0]))
            }
        },

        //yapılardan cikis aninda
        buildExit(getVideoID) {
            this.resetBuild(getVideoID);
        },

        //yapılari resetler. en bas ozelliklerine geri dondurur
        resetBuild(target) {
            var buildCapsul = $(".build-capsul");
            if (buildCapsul.find(".insiderItem").hasClass("active")) {
                buildCapsul.find(".insiderItem").removeClass("active")
            } else {
                target
                    ?
                    buildCapsul.filter("[data-build=" + target + "]").removeClass("active-right active-left")
                    :
                    buildCapsul.removeClass("active-right active-left")
                this.buildScreen = false
            }
        },

        insideEnter(id) {
            $(".insiderItem").filter("[data-href=" + id + "]").addClass("active")
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
        }

    },

    //DOM hazir oldugunda
    mounted: function () {

        var $this = this;

        $this.$nextTick(function () {

            document.addEventListener("wheel", function (event) {
                event.deltaY < 0 ? $this.goMonkey() : $this.backMonkey()
            });

            $(document).on('touchmove', function () {
                $this.goMonkey()
            });

            $(window).on('load', function () {
                $('.video-loader').remove();
            });

        })

    }
})