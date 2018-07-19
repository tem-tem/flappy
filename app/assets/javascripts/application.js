// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .


var fb = `bg_day 288 512 0 0
bg_night 288 512 292 0
bird0_0 48 48 0 970
bird0_1 48 48 56 970
bird0_2 48 48 112 970
bird1_0 48 48 168 970
bird1_1 48 48 224 646
bird1_2 48 48 224 698
bird2_0 48 48 224 750
bird2_1 48 48 224 802
bird2_2 48 48 224 854
black 32 32 584 412
blink_00 10 10 276 682
blink_01 10 10 276 734
blink_02 10 10 276 786
brand_copyright 126 14 884 182
button_menu 80 28 924 52
button_ok 80 28 924 84
button_pause 26 28 242 612
button_play 116 70 702 234
button_rate 74 48 924 0
button_resume 26 28 668 284
button_score 116 70 822 234
button_share 80 28 584 284
font_048 24 44 992 116
font_049 16 44 272 906
font_050 24 44 584 316
font_051 24 44 612 316
font_052 24 44 640 316
font_053 24 44 668 316
font_054 24 44 584 364
font_055 24 44 612 364
font_056 24 44 640 364
font_057 24 44 668 364
land 336 112 584 0
medals_0 44 44 242 516
medals_1 44 44 242 564
medals_2 44 44 224 906
medals_3 44 44 224 954
new 32 14 224 1002
number_context_00 12 14 276 646
number_context_01 12 14 276 664
number_context_02 12 14 276 698
number_context_03 12 14 276 716
number_context_04 12 14 276 750
number_context_05 12 14 276 768
number_context_06 12 14 276 802
number_context_07 12 14 276 820
number_context_08 12 14 276 854
number_context_09 12 14 276 872
number_context_10 12 14 992 164
number_score_00 16 20 272 612
number_score_01 16 20 272 954
number_score_02 16 20 272 978
number_score_03 16 20 260 1002
number_score_04 16 20 1002 0
number_score_05 16 20 1002 24
number_score_06 16 20 1008 52
number_score_07 16 20 1008 84
number_score_08 16 20 584 484
number_score_09 16 20 620 412
pipe2_down 52 320 0 646
pipe2_up 52 320 56 646
pipe_down 52 320 112 646
pipe_up 52 320 168 646
score_panel 238 126 0 516
text_game_over 204 54 784 116
text_ready 196 62 584 116
title 178 48 702 182
tutorial 114 98 584 182
white 32 32 584 448`;
function parseText(text)
{
  var data;
  var frames = [];
  var lines = text.split('\n');
  for (var i = 0; i < lines.length; i++)
  {
    line = lines[i].split(' ');
    var filename = line[0];
    var width = parseInt(line[1]);
    var height = parseInt(line[2]);
    var x = parseInt(line[3]);
    var y = parseInt(line[4]);

    data = {
      filename: filename,
      frame: {
        x: x,
        y: y,
        w: width,
        h: height
      },
      rotated: false,
      trimmed: false,
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: width,
        h: height
      },
      sourceSize: {
        w: width,
        h: height
      }
    }

    frames.push(data);
  }

  j = {frames: frames};
  document.getElementById('json').innerText = JSON.stringify(j);
  return JSON.stringify(j);

}