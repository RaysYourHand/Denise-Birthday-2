const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

function resizeCanvas() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

// 初始執行一次以填滿整個視窗
resizeCanvas()

// 畫布的清除部分移到外面
ctx.lineWidth = 5
ctx.lineCap = 'round'
ctx.lineJoin = 'round'
ctx.strokeStyle = 'white'

// 繪製線條的函式
function drawLine(x1, y1, x2, y2, duration, callback) {
  // 計算距離
  const distanceX = x2 - x1
  const distanceY = y2 - y1

  // 起始時間
  const startTime = Date.now()

  function draw() {
    // 獲取當前時間
    const currentTime = Date.now()
    // 計算進度（0到1之間的值）
    const progress = Math.min(1, (currentTime - startTime) / duration)

    // 根據進度計算當前位置
    const currentX = x1 + distanceX * progress
    const currentY = y1 + distanceY * progress

    // 畫線
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(currentX, currentY)
    ctx.stroke()

    // 如果動畫還沒結束，繼續執行動畫
    if (progress < 1) {
      requestAnimationFrame(draw)
    } else {
      // 動畫結束後，呼叫回調函式
      if (typeof callback === 'function') {
        callback()
      }
    }
  }

  // 啟動動畫
  draw()
}

// 範例：依序繪製兩條線條
drawLine(1600, 520, 1660, 580, 1000, function() {
  // 第一條線條繪製完畢後，繪製第二條線條
  drawLine(1660, 580, 1660, 700, 1000, function() {
    drawLine(1660, 700, 1600, 780, 1000, function() {
        drawLine(1600, 780, 1470, 825, 1000, function() {
            drawLine(1470, 825, 1470, 520, 1000, function() {
                drawLine(1030, 520, 1080, 540, 1000, function() {
                    drawLine(1080, 540, 1080, 620, 1000, function() {
                        drawLine(1080, 620, 1030, 660, 1000, function() {
                            drawLine(1030, 660, 1090, 700, 1000, function() {
                                drawLine(1090, 700, 1090, 820, 1000, function() {
                                    drawLine(1090, 820, 900, 820, 1000, function() {
                                        drawLine(900, 820, 900, 520, 1000, function() {
                                            drawLine(460, 830, 460, 580, 1000, function() {
                                                drawLine(460, 680, 280, 680, 1000, function() {
                                                    drawLine(280, 680, 280, 780, 1000, function() {
                                                        drawLine(280, 780, 280, 520, 1000, function() {
                                                            drawLine(1660, 80, 1660, 400, 1000, function() {
                                                                drawLine(1660, 400, 1470, 400, 1000, function() {
                                                                    drawLine(1470, 400, 1470, 80, 1000, function() {
                                                                        drawLine(965, 400, 1110, 250, 1000, function() {
                                                                            drawLine(1110, 250, 1110, 200, 1000, function() {
                                                                                drawLine(1110, 200, 1030, 120, 1000, function() {
                                                                                    drawLine(1030, 120, 965, 180, 1000, function() {
                                                                                        drawLine(965, 180, 885, 120, 1000, function() {
                                                                                            drawLine(885, 120, 815, 200, 1000, function() {
                                                                                                drawLine(815, 200, 815, 250, 1000, function() {
                                                                                                    drawLine(815, 250, 965, 400, 1000, function() {
                                                                                                        drawLine(375, 380, 375, 100, 1000, function() {
                                                                                                            window.location.href = "final.html"
                                                                                                        })
    
                                                                                                    })
    
                                                                                                })
    
                                                                                            })
    
                                                                                        })
    
                                                                                    })
                                                                                })
    
                                                                            })
    
                                                                        })
    
                                                                    })
    
                                                                })
    
                                                            })
    
                                                        })
    
                                                    })
    
                                                })
    
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
  })
})


