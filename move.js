//-------------------------------------------MOVE-------------------------
var moveLeft = false;
var moveUp = false;
var moveRight = false;
var moveDown = false;

// 启动移动
function startMoving() {
    $(".char").clearQueue().animate({
        left: moveLeft ? "-=2" : (moveRight ? "+=2" : $(".char").css("left")),
        top: moveUp ? "-=2" : (moveDown ? "+=2" : $(".char").css("top"))
    },5, "linear", function() {
            startMoving();
    });
}

// 停止移动
function stopMoving() {
    $(".char").stop();
}

$(document).keydown(function(event) {
    var char = $(".char");
    switch(event.which) {
        case 37: // 左箭头
            char.css('background-image', 'url("charLeft.png")');
            moveLeft = true;
            break;
        case 38: // 上箭头
            moveUp = true;
            char.css('background-image', 'url("charBack.png")');
            break;
        case 39: // 右箭头
            moveRight = true;
            char.css('background-image', 'url("charRight.png")');
            break;
        case 40: // 下箭头
            moveDown = true;
            char.css('background-image', 'url("charRight.png")');
            break;
    }
    
    if (!(moveLeft || moveUp || moveRight || moveDown)) return;
    
    if (!$(".char").is(":animated")) {
        startMoving(); // 启动移动
    }
});

$(document).keyup(function(event) {
    var char = $(".char");
    switch(event.which) {
        case 37: // 左箭头
            moveLeft = false;
            break;
        case 38: // 上箭头
            moveUp = false;
            break;
        case 39: // 右箭头
            moveRight = false;
            break;
        case 40: // 下箭头
            moveDown = false;
            break;
    }
    
    if (!(moveLeft || moveUp || moveRight || moveDown)) {
        stopMoving(); // 停止移动
    }
});


//---------------------------------------detect----------------------
$(".teleport").hide();
function detect(elem1, elem2) {
    var collisionDetected = false;
    elem1.each(function() {
        var elem1Rect = $(this).offset();
        elem1Rect.right = elem1Rect.left + $(this).outerWidth();
        elem1Rect.bottom = elem1Rect.top + $(this).outerHeight();
        
        var elem2Rect = elem2.offset();
        elem2Rect.right = elem2Rect.left + elem2.outerWidth();
        elem2Rect.bottom = elem2Rect.top + elem2.outerHeight();

        if (!(elem1Rect.right < elem2Rect.left || 
            elem1Rect.left > elem2Rect.right || 
            elem1Rect.bottom < elem2Rect.top || 
            elem1Rect.top > elem2Rect.bottom)) {
            collisionDetected = true;
            return false; // 结束循环
        }
    });
    return collisionDetected;
}
function CheckCollision(){
    var char = $(".char");
    if(detect($("#heart1"), char)){
        $("#tp1").show();
        $("#heart1").hide();
    }
    if(detect($("#tp1"), char)){
        char.css({top: 380,left: 940});
    }
    if(detect($("#heart2"), char)){
        $("#tp2").show();
        $("#heart2").hide();
    }
    if(detect($("#tp2"), char)){
        char.css({top: 60,left: 1450});
    }
    if(detect($("#heart3"), char)){
        $("#tp3").show();
        $("#heart3").hide();
    }
    if(detect($("#tp3"), char)){
        char.css({top: 500,left: 250});
    }
    if(detect($("#heart4"), char)){
        $("#heart4").hide();
    }
    if(detect($("#heart5"), char)){
        $("#heart5").hide();
    }
    if($("#heart4").is(":hidden") && $("#heart5").is(":hidden")){
        $("#tp4").show();
    }
    if(detect($("#tp4"), char)){
        char.css({top: 500,left:870});
    }
    if(detect($("#heart6"), char)){
        $("#tp5").show();
        $("#heart6").hide();
    }
    if(detect($("#tp5"), char)){
        char.css({top: 500,left: 1440});
    }
    if(detect($("#heart7"), char)){
        $("#tp6").show();
        $("#heart7").hide();
    }
    if(detect($("#tp6"), char)){
        window.location.href = "gameReverse.html";
    }
    
    if(detect($(".block"), char)){
        
        var currentHealth = parseInt($("#healthValue").text()); // 获取当前健康值并转换为整数
        $("#healthValue").text(currentHealth - 2); // 减少健康值
    }
    if(currentHealth <= 0){
        $("#healthValue").text(100);
        $(".char").css({
            top: "200px", 
            left: "345px" 
        });
    }
}
setInterval(CheckCollision, 100);

