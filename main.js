var url = 'http://proxylist.hidemyass.com/search-1304922/';

var page = require('webpage').create();
page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0';

page.open(url, function(status) {
    var list = page.evaluate(function () {
        var _list = [];
        $('#listable tbody > tr').each(function(i, e) {
            var _ipNode = $(e).find('td:nth-child(2) > span')[0];

            var range = document.createRange();
            range.setStartBefore(_ipNode);
            range.setEndAfter(_ipNode);

            var selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);

            var ip = selection.toString().trim();
            var port = $(e).children().eq(2).text().trim();
            var protocol = $(e).children().eq(6).text().trim();
            if (ip !== "") {
                _list.push({
                   'ip': ip,
                   'port': port,
                   'protocol': protocol
                });
            }
        });
        return _list;
    });
    console.log(JSON.stringify(list.reverse()))
    phantom.exit();
});