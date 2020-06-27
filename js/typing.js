$('input:visible').eq(0).focus();

let lyrics = [
    "きょうはどんなことがあったの？",
    "あすもぶじにおわるように",
    "なにがおきてもおこらなくても",
    "あのそらはすすみつづける",
    "きみにであえたそのときから",
    "いちびょうずつがとてもだいじなんだ",
    "いつまでもとぎれぬおもい",
    "どうにもふあんでしかたないひも",
    "だれにもよわねをはけないんだろ",
    "いくつものいともつれあうなか",
    "ぼくたちはつながっている",
    "きみのぬくもりおぼえてるよ",
    "そのまっすぐなこえもひびいてるよ",
    "いつまでもとぎれぬおもい",
    "きみにであえたそのときから",
    "もうひとりじゃないとおもえたんだ",
    "きみがどこかでみてるんだと",
    "おもいながらずっといきていけるよ",
    "いつまでもとぎれぬおもい",
    "どこまでもたえないおもい",
]

let s=-1; //秒数を蓄積
// タイマー機能
let timer;

function startTimer(){
    timer=setInterval(function(){
        s++;
        console.log(s);
        if(s>=0 && s<18){$("#lyrics").html("ここに歌詞が表示されるよ");}
        if(s>=18 && s<25){$("#lyrics").html(lyrics[0]);}
        if(s>=25 && s<31){$("#lyrics").html(lyrics[1]);}
        if(s>=31 && s<37){$("#lyrics").html(lyrics[2]);}
        if(s>=37 && s<50){$("#lyrics").html(lyrics[3]);}
        if(s>=50 && s<57){$("#lyrics").html(lyrics[4]);}
        if(s>=57 && s<63){$("#lyrics").html(lyrics[5]);}
        if(s>=63 && s<71){$("#lyrics").html(lyrics[6]);}
        if(s>=71 && s<76){$("#lyrics").html("");}
        if(s>=76 && s<82){$("#lyrics").html(lyrics[7]);}
        if(s>=82 && s<88){$("#lyrics").html(lyrics[8]);}
        if(s>=88 && s<94){$("#lyrics").html(lyrics[9]);}
        if(s>=94 && s<107){$("#lyrics").html(lyrics[10]);}
        if(s>=107 && s<114){$("#lyrics").html(lyrics[11]);}
        if(s>=114 && s<120){$("#lyrics").html(lyrics[12]);}
        if(s>=120 && s<129){$("#lyrics").html(lyrics[13]);}
        if(s>=129 && s<156){$("#lyrics").html("");}
        if(s>=156 && s<163){$("#lyrics").html(lyrics[14]);}
        if(s>=163 && s<170){$("#lyrics").html(lyrics[15]);}
        if(s>=170 && s<176){$("#lyrics").html(lyrics[16]);}
        if(s>=176 && s<183){$("#lyrics").html(lyrics[17]);}
        if(s>=183 && s<189){$("#lyrics").html(lyrics[18]);}
        if(s>=189 && s<200){$("#lyrics").html(lyrics[19]);}
    } , 1000);
}

let score=0;
// 入力した答えと歌詞の整合性をちぇっーく
$("#text").on("keydown", function (e) {
    console.log(e, "event");
    if (e.keyCode === 13) {
        if(s>=0 && s<18){
            if($("#text").val()==="ここに歌詞が表示されるよ"){score++;}
        }
        if(s>=18 && s<25){
            if($("#text").val()===lyrics[0]){score+=10;}
        }
        if(s>=25 && s<31){
            if($("#text").val()===lyrics[1]){score+=10;}
        }
        if(s>=31 && s<37){
            if($("#text").val()===lyrics[2]){score+=10;}
        }
        if(s>=37 && s<50){
            if($("#text").val()===lyrics[3]){score+=10;}
        }
        if(s>=50 && s<57){
            if($("#text").val()===lyrics[4]){score+=10;}
        }
        if(s>=57 && s<63){
            if($("#text").val()===lyrics[5]){score+=10;}
        }
        if(s>=63 && s<71){
            if($("#text").val()===lyrics[6]){score+=10;}
        }
        if(s>=76 && s<82){
            if($("#text").val()===lyrics[7]){score+=10;}
        }
        if(s>=82 && s<88){
            if($("#text").val()===lyrics[8]){score+=10;}
        }
        if(s>=88 && s<94){
            if($("#text").val()===lyrics[9]){score+=10;}
        }
        if(s>=94 && s<107){
            if($("#text").val()===lyrics[10]){score+=10;}
        }
        if(s>=107 && s<114){
            if($("#text").val()===lyrics[11]){score+=10;}
        }
        if(s>=114 && s<120){
            if($("#text").val()===lyrics[12]){score+=10;}
        }
        if(s>=120 && s<129){
            if($("#text").val()===lyrics[13]){score+=10;}
        }
        if(s>=156 && s<163){
            if($("#text").val()===lyrics[14]){score+=10;}
        }
        if(s>=163 && s<170){
            if($("#text").val()===lyrics[15]){score+=10;}
        }
        if(s>=170 && s<176){
            if($("#text").val()===lyrics[16]){score+=10;}
        }
        if(s>=176 && s<183){
            if($("#text").val()===lyrics[17]){score+=10;}
        }
        if(s>=183 && s<189){
            if($("#text").val()===lyrics[18]){score+=10;}
        }
        if(s>=189 && s<200){
            if($("#text").val()===lyrics[19]){score+=10;}
        }
        if(s>=200){
            $("#lyrics").html("Enterキーを押して終了");
            $("text").one("click",function(){
                location.reload();
            });
        }
    }
    $("#score").html(score);
    $("#text").val("");
  });

$(function(){
    $("#text").one("keydown", function(){
　　    videoControl("playVideo");
        startTimer();
    });

    function videoControl(action){ 
        var $playerWindow = $('#youtube-player')[0].contentWindow;
        $playerWindow.postMessage('{"event":"command","func":"'+action+'","args":""}', '*');
    }
});