# 班級資料平台 4.0
一個服務於臺灣臺中市光華高工二年甲班的網站。<br>
你可以透過這個網址訪問<br>
<a href="https://johnlin10.github.io/classdata/mobile.html" target="_blank">https://johnlin10.github.io/classdata/mobile.html</a>
<!DOCTYPE html>
<html lang="zh-Hant-TW">
    <head>
        <meta charset="utf-8" />
        <title>班級資訊平台</title>
        <link rel="icon" type="image/png" href="school.png"/>
        <!-- Javascript -->
        <script src="js/scripts.js"></script>
        <!-- PWA設定 -->
        <link rel="manifest" href="manifest.json">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <script src="js/pwatips.js"></script>
        <!-- Font Awesome icons (free version)-->
        <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
        <!-- Google fonts-->
        <link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" rel="stylesheet" type="text/css" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="mobile_css/styles.css" rel="stylesheet" />
        <script src="https://apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js"></script>
        <!-- Bootstrap core JS-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <!-- 禁止網頁縮放 -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;" />
    </head>
    <!-- 主體 -->
    <body>
        <!-- 頂部標題欄 -->
        <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="mobile.html"><i class="fa-solid fa-school"></i> 班級資訊平台</a>
                <a href="ReportProblem.html">
                    <button class="navbar-toggler" type="button" >
                        問題回報
                    </button>
                </a>
            </div>
        </nav>
        <!-- 底部導航欄 -->
        <div class="footer-top-view">
            <div class="footer-view">
                <footer class="footer">
                    <a href="mobile.html"><div class="home icon-blue FooterAnimation"><i class="fa-solid fa-house icon-biger iconBigerAni"></i><span class="icon-text iconTextAni">首頁</span></div></a>
                    <a href="post_mobile.html"><div class="post"><i class="fa-solid fa-volume-off icon-biger"></i><span class="icon-text">公告</span></div></a>
                    <a href="資料庫_mobile.html"><div class="folder"><i class="fa-solid fa-folder icon-biger"></i><span class="icon-text">資料庫</span></div></a>
                    <a href="log_mobile.html"><div class="log"><i class="fa-solid fa-code icon-biger"></i><span class="icon-text">開發</span></div></a>
                </footer>
            </div>
        </div>
        <!-- 捷徑 -->
        <button id="button" class="FastGo"><i class="fa-solid fa-share"></i>　捷徑</button>
        <div id="cardafter"></div>
        <div id="card">
            <a href="https://w3.khvs.tc.edu.tw/home" target="_blank">
                <div id="GoTo-div">
                    <div class="gototitle">
                        <img class="icon" src="images/光華高工-校徽/光華高工-校徽.001.png">
                        <span>光華高工 官網</span>
                    </div>
                    <i class="fa-solid fa-share togolink"></i>
                </div>
            </a>
            <a href="http://203.72.10.6/" target="_blank">
                <div id="GoTo-div">
                    <div class="gototitle">
                        <img class="icon" src="images/班級e網-icon/班級e網-icon.001.png">
                        <span>班級 e 網</span>
                    </div>
                    <i class="fa-solid fa-share togolink"></i>
                </div>
            </a>
            <a href="https://classroom.google.com/" target="_blank">
                <div id="GoTo-div">
                    <div class="gototitle">
                        <img class="icon" src="images/GoogleClassroom-icon/GoogleClassroom-icon.001.png">
                        <span>Google Classroom</span>
                    </div>
                    <i class="fa-solid fa-share togolink"></i>
                </div>
            </a>
            <a href="https://www.coolenglish.edu.tw/" target="_blank">
                <div id="GoTo-div">
                    <div class="gototitle">
                        <img class="icon" src="images/CoolEnglish-icon/CoolEnglish-icon.001.png">
                        <span>Cool English</span>
                    </div>
                    <i class="fa-solid fa-share togolink"></i>
                </div>
            </a>
            <a href="https://www.voicetube.com/" target="_blank">
                <div id="GoTo-div">
                    <div class="gototitle">
                        <img class="icon" src="images/VoiceTube-icon/VoiceTube-icon.001.png">
                        <span>VoiceTube</span>
                    </div>
                    <i class="fa-solid fa-share togolink"></i>
                </div>
            </a>
            <a href="https://smartreading.net/v3/index.aspx" target="_blank">
                <div id="GoTo-div">
                    <div class="gototitle">
                        <img class="icon" src="images/SmartReading-icon/SmartReading-icon.001.png">
                        <span>Smart Reading</span>
                    </div>
                    <i class="fa-solid fa-share togolink"></i>
                </div>
            </a>
            <a href="http://203.72.10.215/ePortFolio/" target="_blank">
                <div id="GoTo-div">
                    <div class="gototitle">
                        <img class="icon" src="images/學習歷程-icon/學習歷程-icon.001.png">
                        <span>學習歷程檔案系統</span>
                    </div>
                    <i class="fa-solid fa-share togolink"></i>
                </div>
            </a>
            <a href="https://www.openedu.tw/" target="_blank">
                <div id="GoTo-div">
                    <div class="gototitle">
                        <img class="icon" src="images/OpenEDU-icon/OpenEDU-icon.001.png">
                        <span>OpenEDU</span>
                    </div>
                    <i class="fa-solid fa-share togolink"></i>
                </div>
            </a>
            <span>申請添加捷徑　<a href="ReportProblem.html">前往申請</a></span>
            <br>
        </div>
        <!-- 標題 -->
        <header class="masthead" style="background-image: url('images/主頁.jpg')">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="site-heading">
                            <h1>班級資訊平台</h1>
                            <span class="subheading">4.8</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- 內容區 -->
        <div class="MainPageFastDivView">
            <div class="MainPageFastDiv">
                <div class="post-preview FastDiv">
                    <div class="post-view post-view-Blue bg-blue">
                        <br>
                        <h2 class="post-title-blue post-title-view">橫向佈局區塊</h2>
                        <hr class="hr-Blue">
                        <p class="post-meta post-meta-view post-meta-blue"><i class="fa-solid fa-arrow-pointer"></i> 點擊區塊，即可前往目標網頁</p>
                        <br>
                    </div>
                </div>
                <div class="post-preview FastDiv" onclick="location.href='課程表_mobile.html';">
                    <div class="post-view post-view-Blue bg-Blue">
                        <br>
                        <h2 class="post-title-Blue post-title-view">課程表</h2>
                        <hr class="hr-Blue">
                        <p class="post-meta post-meta-view post-meta-Blue">二年甲班各科課程表</p>
                        <br>
                    </div>
                </div>
                <div class="post-preview FastDiv" onclick="location.href='Karnaugh Map Builder and Solver.html';">
                    <div class="post-view post-view-Blue bg-Blue">
                        <br>
                        <h2 class="post-title-Blue post-title-view">卡諾圖化簡</h2>
                        <hr class="hr-Blue">
                        <p class="post-meta post-meta-view post-meta-Blue">互動式的卡諾圖化簡器！</p>
                        <br>
                    </div>
                </div>
                <div class="post-preview FastDiv">
                    <div class="post-view post-view-Gray bg-Gray">
                        <br>
                        <h2 class="post-Title post-title-view">填充版面</h2>
                        <hr class="hr-Gray">
                        <p class="post-meta post-meta-view post-meta-Gray">為了更好的展現新的橫向佈局區塊！</p>
                        <br>
                    </div>
                </div>
            </div>
        </div>
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <!-- 內容顯示區 -->
                    <br>
                    <div class="post-preview">
                        <div class="post-view post-view-red bg-red">
                            <div class="post-tag post-tag-animation2-red post-redTag">
                                <span class="post-tag-text">NEW</span>
                            </div>
                            <br>
                            <h5 class="post-meta-red post-title-view">2022.12.22 THU</h5>
                            <h2 class="post-title-red post-title-view">深色模式已上線</h2>
                            <p class="post-meta post-meta-view post-meta-red">趕緊開啟系統的深色模式來看看網站有什麼變化吧！</p>
                            <br>
                        </div>
                    </div>
                    <br>
                    <div class="post-preview">
                        <div class="post-view post-view-red bg-red">
                            <br>
                            <h5 class="post-meta-red post-title-view">2022.12.10 SAT</h5>
                            <h2 class="post-title-red post-title-view">網站開發新方向</h2>
                            <p class="post-meta post-title-red post-title-view">PWA 獨立應用，可離線訪問。</p>
                            <br>
                            <div class="d-flex justify-content-end"><a class="btn-red btn-primary text-uppercase" href="Post/PWA.html">開發進度</a></div>
                        </div>
                    </div>
                    <br>
                    <div class="post-preview">
                        <div class="post-view post-view-red bg-red">
                            <br>
                            <h5 class="post-meta-red post-title-view">2022.12.9 FRI</h5>
                            <h2 class="post-title-red post-title-view">卡諾圖化簡器</h2>
                            <p class="post-meta post-title-red post-title-view">新功能上線！</p>
                            <p class="post-meta post-meta-view post-meta-red">互動式的卡諾圖化簡器，滑鼠、手指輕點，即可快速獲得化簡式！</p>
                            <p class="post-meta post-meta-view post-meta-red">（目前只提供 SOP 化簡）</p>
                            <br>
                            <div class="d-flex justify-content-end"><a class="btn-red btn-primary text-uppercase" href="Karnaugh Map Builder and Solver.html">前往化簡</a></div>
                        </div>
                    </div>
                    <br>
                    <div class="post-preview">
                        <div class="post-view post-view-red bg-red">
                            <br>
                            <h5 class="post-meta-red post-title-view">2022.12.3 SAT</h5>
                            <h2 class="post-title-red post-title-view">問題反饋與建議</h2>
                            <p class="post-meta post-title-red post-title-view">新功能上線！</p>
                            <p class="post-meta post-meta-view post-meta-red">本平台目標是提供即時可靠的資訊，即便再三確認，仍可能有閃失。</p>
                            <p class="post-meta post-meta-view post-meta-red">為了能夠達成目標，「問題反饋與建議」的上線，就是為了能夠讓任何人都能夠共同來維護資訊平台，使其能發揮最大效用！</p>
                            <br>
                            <div class="d-flex justify-content-end"><a class="btn-red btn-primary text-uppercase" href="ReportProblem.html">前往反饋</a></div>
                        </div>
                    </div>
                    <br>
                    <div class="post-preview">
                        <div class="post-view post-view-red bg-red">
                            <br>
                            <h5 class="post-meta-red post-title-view">2022.12.3</h5>
                            <h2 class="post-title-red post-title-view">問題反饋與建議</h2>
                            <p class="post-meta post-meta-view post-meta-red">新功能上線！！</p>
                            <p class="post-meta post-meta-view post-meta-red">本平台目標是提供即時可靠的資訊，即便再三確認，仍可能有閃失。</p>
                            <p class="post-meta post-meta-view post-meta-red">為了能夠達成目標，「問題反饋與建議」的上線，就是為了能夠讓任何人都能夠共同來維護資訊平台，使其能發揮最大效用！</p>
                            <br>
                            <div class="d-flex justify-content-end"><a class="btn-red btn-primary text-uppercase" href="ReportProblem.html">前往反饋</a></div>
                        </div>
                    </div>
                    <br>
                    <div class="post-preview">
                        <div class="post-view post-view-red bg-red">
                            <br>
                            <h5 class="post-meta-red post-title-view">2022.11.25</h5>
                            <h2 class="post-title-red post-title-view">班級資訊平台 4.0</h2>
                            <p class="post-meta post-meta-view post-meta-red">升級成可安裝於手機上的網頁應用。</p>
                            <br>
                            <div class="d-flex justify-content-end"><a class="btn-red btn-primary text-uppercase" href="安裝說明.html">安裝說明</a></div>
                        </div>
                    </div>
                    <br>
                    <div class="post-preview">
                        <div class="post-view post-view-red bg-red">
                            <br>
                            <h5 class="post-meta-red post-title-view">2022.11.25 FRI</h5>
                            <h2 class="post-title-red post-title-view">手機版網頁應用即將上線！</h2>
                            <p class="post-meta post-meta-view post-meta-red">更貼近於 App 的使用體驗，無需繁瑣的尋找連結，加入到主畫面，即可安裝「班級資料平台」網頁應用。</p>
                            <br>
                        </div>
                    </div>
                    <br>
                    <br>
                    <br>
                    <p class="bottom-text">別拉了，到底啦</p>
                </div>
            </div>
        </div>
        <script src="js/FastGo.js"></script>
    </body>
</html>