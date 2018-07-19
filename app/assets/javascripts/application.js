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


var fb = '';
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
