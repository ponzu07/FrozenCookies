FrozenCookies.preferenceValues = {

    // clicking options
    'clickingOptions':{
        'hint':'自動クリックオプション:'
    },
    'autoClick': {
        'hint': '大きなクッキーをクリック',
        'display': ['OFF', 'ON'],
        'default': 0,
        'extras': '<a class="option" id="cookieClickSpeed" onclick="updateSpeed(\'cookieClickSpeed\');">${cookieClickSpeed} クリック/秒</a>'
    },
    'autoFrenzy': {
        'hint': 'クリックフレンジー中に大きなクッキーをクリックする',
        'display': ['OFF', 'ON'],
        'default': 0,
        'extras': '<a class="option" id="frenzyClickSpeed" onclick="updateSpeed(\'frenzyClickSpeed\');">${frenzyClickSpeed} クリック/秒</a>'
    },
    'autoGC': {
        'hint': 'ゴールデンクッキーが表示されたら自動でクリック',
        'display': ["OFF", "ON"],
        'default': 0
    },
    'autoReindeer': {
        'hint': 'トナカイを自動でクリック',
        'display': ['OFF', 'ON'],
        'default': 0
    },
    'autoFortune': {
        'hint': 'フォーチュンニュースが表示されると自動的にニュースティッカーをクリックする',
        'display': ["OFF", "ON"],
        'default': 0
    },

    // autobuy options
    'buyingOptions':{
        'hint':'自動購入オプション:'
    },
    'autoBuy': {
        'hint': 'コストを満たしたときに、最も効率的な建物を自動的に購入します。',
        'display': ["OFF", "ON"],
        'default': 0
    },
    'autoBulk': {
        'hint': '転生後に一括購入する建物を自動的に設定する',
        'display': ['OFF', 'x10', 'x100'],
        'default': 0
    },
    'autoBlacklistOff': {
        'hint': 'ブラックリストの目標が達成されると、自動的にブラックリストをオフにします。',
        'display': ['OFF', 'ON'],
        'default': 0
    },
    'blacklist': {
        'hint': '効率計算からブラックリスト購入',
        'display': ['OFF', 'SPEEDRUN', 'HARDCORE', 'GRANDMAPOCALYPSE', 'NO BUILDINGS'],
        'default': 0
    },
    'cursorLimit': {
        'hint': 'ゴザモクの有用性を維持するためにカーソルの最大数を制限する',
        'display': ['OFF', 'ON'],
        'default': 0,
        'extras': '<a class="option" id="cursorMax" onclick="updateCursorMax(\'cursorMax\');">${cursorMax} カーソル</a>'
    },
    'farmLimit': {
        'hint': 'ゴザモクの有用性を維持するために農場の最大数を制限する',
        'display': ['OFF', 'ON'],
        'default': 0,
        'extras': '<a class="option" id="farmMax" onclick="updateFarmMax(\'farmMax\');">${farmMax} 農場</a>'
    },
    'towerLimit': {
        'hint': '魔法使いの塔の自動購入を停止します。',
        'display': ['OFF', 'ON'],
        'default': 0,
        'extras': '<a class="option" id="manaMax" onclick="updateManaMax(\'manaMax\');">${manaMax} 最大マナ</a>'
    },
    'pastemode': {
        'hint': '常に効率の悪いものを自動購入する。これはアホらしいので絶対にオンにしてはいけません。',
        'display': ['OFF', 'ON'],
        'default': 0
    },

    // other auto options
    'autoOtherOptions':{
        'hint':'その他の自動動作:'
    },
    'autoAscend': {
        'hint': '天国のチップ数が一定数に達すると自動的に上昇します。(注：これでアップグレード画面はスキップされます)',
        'display': ["OFF", "ON"],
        'default': 0,
        'extras': '<a class="option" id="chipsToAscend" onclick="updateAscendAmount(\'HCAscendAmount\');">${HCAscendAmount} ヘブンリーチップス</a>'
    },
    'autoWrinkler': {
        'hint': 'Wrinkler(Grandmapocalypseの虫)の自動撃退をする/しない',
        'display': ['OFF', 'クッキー取得量最大になるよう撃退', '出現したら即撃退'],
        'default': 0
    },
    'autoSL': {
        'hint': '砂糖が完熟したら自動収穫する/しない。',
        'display': ["OFF", "ON", "ON + AUTO RIGIDEL"],
        'default': 0
    },
    'autoGS': {
        'hint': 'Automatically turn on the Golden Switch during Dragonflight and Click Frenzy (and turn back off at the end)',
        'display': ['Auto-GS-Switch OFF', 'Auto-GS-Switch ON'],
        'default': 0
    },
    'autoGodzamok': {
        'hint': 'Automatically sell all cursors and farms (except one) during Dragonflight and Click Frenzy if you worship Godzamok ("Sane" prevents rapid buy/sell spam)',
        'display': ['Auto-Godzamok OFF', 'Auto-Godzamok ON', 'Auto-Godzamok ON (Sane)', 'Auto-Godzamok ON (REALLY INSANE)'],
        'default': 0
    },
    'autoSpell': {
        'hint': 'Automatically cast selected spell when your mana is full',
        'display': ["Auto Cast OFF","Auto Cast CONJURE BAKED GOODS", "Auto Cast FORCE THE HAND OF FATE","Auto Cast SPONTANEOUS EDIFICE","Auto Cast HAGGLER'S CHARM (cheapest)"],
        'default': 0,
        'extras': '<a class="option" id="minCpSMult" onclick="updateCpSMultMin(\'minCpSMult\');">x${minCpSMult} minimum Frenzy</a>'
    },

    //Display options
    'displayOptions':{
        'hint':'Display options:'
    },
    'numberDisplay': {
        'hint': 'Change how numbers are shortened',
        'display': ["Number Display RAW", "Number Display FULL (million, billion)", "Number Display INITIALS (M, B)","Number Display SI UNITS (M, G, T)", "Number Display SCIENTIFIC (6.3e12)"],
        'default': 1
    },
    'fancyui': {
        'hint': 'Infobox type (can be slow)',
        'display': ['Infobox OFF', 'Infobox TEXT ONLY', 'Infobox WHEEL ONLY', 'Infobox WHEEL & TEXT'],
        'default': 0
    },

    //Other options
    'otherOptions':{
        'hint':'Other options:'
    },
    /*Not working yet
    'shinyPop':{
        'hint':'Protect the endangered Shiny Wrinkler from being auomatically popped',
        'display':['Save Shiny Wrinklers ON', 'Save Shiny Wrinklers OFF'],
        'default':0
    },
    */
    'holdSEBank': {
        'hint': 'Maintain a bank for Spontaneous Edifice (already enabled if Auto Casting SE)',
        'display': ["SE Bank OFF", "SE Bank ON"],
        'default': 0
    },
    'setHarvestBankPlant': {
        'hint': 'Maintain a bank for a specific plant you are going to harvest/let explode',
        'display': ['Harvesting Bank OFF', 'Harvesting Bank BAKEBERRY', 'Harvesting Bank CHOCOROOT', 'Harvesting Bank WHITE CHOCOROOT', 'Harvesting Bank QUEEENBEET', 'Harvesting Bank DUKETATER', 'Harvesting Bank CRUMBSPORE', 'Harvesting Bank DOUGHSHROOM'],
        'default': 0
    },
    'setHarvestBankType': {
        'hint': 'Calculate the needed harvesting bank based on whether a CPS multiplier is in effect when you intend to harvest (no effect if no plant was selected above).',
        'display': ['Harvesting during NO CPS MULTIPLER', 'Harvesting during FRENZY', 'Harvesting during BUILDING SPECIAL', 'Harvesting during FRENZY + BUILDING SPECIAL'],
        'default': 0,
        'extras': '<a class="option" id="maxSpecials" onclick="updateMaxSpecials(\'maxSpecials\');">${maxSpecials} Building specials</a>'
    },
    /*
    'timeTravelMethod':{
        'hint':'Time travel is unstable. This determines how time travel works. If you\'re unsure, don\'t touch this.',
        'display':['Time Travel DISABLED'],//,'Purchases by Estimated Effective CPS','Purchases by Simulated Real Time','Heavenly Chips by Estimated Effective CPS','Heavenly Chips by Simulated Real Time'],
        'default':0,
        'extras':'<a class="option" id="timeTravelPurchases" onclick="updateTimeTravelAmount();">Set Time Travel Amount</a>'
    },
    */
    'simulatedGCPercent': {
        'hint': 'Assume a percentage of Golden Cookies as "clicked" for GC efficiency calculations (100% recommended)',
        'display': ["0%", "100%"],
        'default': 1
    },
    'fpsModifier': {
        'hint': 'Run the game at the selected frame rate (browser default is 30). 60 is twice as fast, 15 is half as fast, etc. If you\'re not sure, keep this at 30',
        'display': ['Frame Rate 15 fps', 'Frame Rate 24 fps', 'Frame Rate 30 fps', 'Frame Rate 48 fps', 'Frame Rate 60 fps', 'Frame Rate 72 fps', 'Frame Rate 88 fps', 'Frame Rate 100 fps', 'Frame Rate 120 fps', 'Frame Rate 144 fps', 'Frame Rate 200 fps', 'Frame Rate 240 fps', 'Frame Rate 300 fps', 'Frame Rate 5 fps', 'Frame Rate 10 fps'],
        'default': 2
    },
    'logging': {
        'hint': 'Display detailed logs in the javascript console',
        'display': ['Logging OFF', 'Logging ON'],
        'default': 1
    },
    'trackStats': {
        'hint': 'Track your CpS / HC earned over time during a single session to enable graphing. This may end up being *extremely* memory-intensive',
        'display': ['Tracking OFF', 'Tracking EVERY 60s', 'Tracking EVERY 30m', 'Tracking EVERY 1h', 'Tracking EVERY 24h', 'Tracking ON UPGRADES', 'Tracking SMART TIMING'],
        'default': 0,
        'extras': '<a class="option" id="viewStats" onclick="viewStatGraphs();">View Stat Graphs</a>'
    },
    /*Doesnt work
    'showAchievements':{
        'hint':'Show achievement popups (Kind of broken early game)',
        'display':['Achievement Popups OFF','Achievement Popups ON'],
        'default':0
    },
    */
    'defaultSeason': {
        'hint': 'Autobuy a selected season when no others have needed upgrades',
        'display': ['Default Season OFF', 'Default Season BUSINESS DAY', 'Default Season CHRISTMAS', 'Default Season EASTER', 'Default Season HALLOWEEN', "Default Season VALENTINE'S DAY"],
        'default': 0
    }
};
