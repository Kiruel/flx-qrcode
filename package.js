Package.describe({
    name: 'kiruel:flx-qrcode',
    version: '0.0.4',
    summary: "QRCode code in meteor.",
    git: 'https://github.com/Kiruel/flx-qrcode',
    documentation: 'README.md'
});

Package.onUse(function(api){
    api.versionsFrom('1.1.0.2');
    api.use([
        'meteor-platform',
        'steeve:jquery-qrcode@0.2.2'
    ]);
    api.imply('templating');
    api.addFiles([
        'client/QrCode.html',
        'client/QrCode.js'
    ], 'client');
});
