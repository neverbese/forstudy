(function () {
    //error check Strictモード
    'use strict';

    var passedTime = 0;
    var intervalId = null;
    var num = 0;
    var timer = document.getElementById('timer');
    var count = document.getElementById('count');
    var counts = [];
    var memoryElem = document.getElementById('memory');

    function start() {
        memoryElem.disabled = false;
        if (intervalId) {
            return;
        }

        intervalId = setInterval(function () {
            passedTime++;
            render();
        }, 1000);
    }

    function stop() {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    function reset() {
        stop();
        passedTime = 0;
        render();
        num = 0;
        count.textContent = null;
        counts = [];
        memoryElem.disabled = true;
    }

    function render() {
        // if (intervalId == null) {
        //     memoryElem.disabled = true;
        // }
        var minutes = Math.floor(passedTime / 60);
        var seconds = passedTime % 60;
        timer.textContent = zeroFill(minutes) + ":" + zeroFill(seconds);
    }

    function memory() {
        num++;
        counts.push(num + "番の成績は:" + timer.textContent + "\r\n");
        count.innerHTML = counts.toString().replace(/,/g, '');
    }
    render();

    // setInterval(function () {
    //     var date = new Date();
    //     var hours = date.getHours();
    //     var minutes = date.getMinutes();
    //     var seconds = date.getSeconds();

    //     timer.textContent = zeroFill(hours) + ":" + zeroFill(minutes) + ":" + zeroFill(seconds);
    // }, 1000);

    //zero 埋め
    function zeroFill(num) {
        return ('0' + num).slice(-2);
    }

    document.getElementById('start').addEventListener('click', start);
    document.getElementById('stop').addEventListener('click', stop);
    document.getElementById('reset').addEventListener('click', reset);
    document.getElementById('memory').addEventListener('click', memory);

}());