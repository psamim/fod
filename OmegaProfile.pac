var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+auto switch", {
    "+auto switch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)android\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)teamtreehouse\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)upwork\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)bluemix\.net$/.test(host)) return "+fod";
        if (/(?:^|\.)swift\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)arcgis\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)jhipster\.tech$/.test(host)) return "+fod";
        if (/(?:^|\.)classroom\.google\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)c9\.io$/.test(host)) return "+fod";
        if (/(?:^|\.)edx\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)php\.net$/.test(host)) return "+fod";
        if (/(?:^|\.)githubusercontent\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)slack\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)play\.google\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)photodune\.net$/.test(host)) return "+fod";
        if (/(?:^|\.)videohive\.net$/.test(host)) return "+fod";
        if (/(?:^|\.)laravel\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)salesforce\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)expo\.io$/.test(host)) return "+fod";
        if (/(?:^|\.)clients\.google\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)telerik\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)audiojungle\.net$/.test(host)) return "+fod";
        if (/(?:^|\.)3docean\.net$/.test(host)) return "+fod";
        if (/(?:^|\.)sparkjava\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)graphicriver\.net$/.test(host)) return "+fod";
        if (/(?:^|\.)mit\.edu$/.test(host)) return "+fod";
        if (/(?:^|\.)tinyjpg\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)goanimate\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)tinyjpg\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)gitlab\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)atlassian\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)spiceworks\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)bugsnag\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)sentry\.io$/.test(host)) return "+fod";
        if (/(?:^|\.)clients6\.google\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)incredibuild\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)epicgames\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)packagist\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)jenkov\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)bintray\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)edgesuite\.net$/.test(host)) return "+fod";
        if (/(?:^|\.)marketingplatform\.google\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)gopkg\.in$/.test(host)) return "+fod";
        if (/(?:^|\.)labix\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)withgoogle\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)coinbase\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)schema\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)invisionapp\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)bitbucket\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)developers\.google\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)nativescript\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)kaggle\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)domains\.google\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)tensorflow\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)apple\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)aws\.amazon\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)dl\.google\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)rapid7\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)pscdn\.co$/.test(host)) return "+fod";
        if (/(?:^|\.)appengine\.google\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)baeldung\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)envato-static\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)newrelic\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)google\.ai$/.test(host)) return "+fod";
        if (/(?:^|\.)dartlang\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)flutter\.io$/.test(host)) return "+fod";
        if (/(?:^|\.)telerik\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)ai\.google$/.test(host)) return "+fod";
        if (/(?:^|\.)doubleclickbygoogle\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)doubleclick\.net$/.test(host)) return "+fod";
        if (/(?:^|\.)gstatic\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)jwplayer\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)googleadservices\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)googletagmanager\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)socket\.io$/.test(host)) return "+fod";
        if (/(?:^|\.)google-analytics\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)googleusercontent\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)en25\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)tinypng\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)demandbase\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)appspot\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)element14\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)unity3d\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)sourceforge\.net$/.test(host)) return "+fod";
        if (/(?:^|\.)unity\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)google-analytics\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)expo\.io$/.test(host)) return "+fod";
        if (/(?:^|\.)myfonts\.net$/.test(host)) return "+fod";
        if (/(?:^|\.)jaspersoft\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)design\.google\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)stripe\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)python\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)gravatar\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)cloud\.google\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)analytics\.google\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)optimize\.google\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)fiber\.google\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)dl-ssl\.google\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)dns\.google\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)firebase\.google\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)firebase\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)googleapis\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)jetbrains\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)seleniumhq\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)invis\.io$/.test(host)) return "+fod";
        if (/(?:^|\.)java\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)vuforia\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)gradle\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)fabric\.io$/.test(host)) return "+fod";
        if (/(?:^|\.)godoc\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)count\.ly$/.test(host)) return "+fod";
        if (/(?:^|\.)khanacademy\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)oracle\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)crashlytics\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)traviscistatus\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)golang\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)storage\.googleapis\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)spring\.io$/.test(host)) return "+fod";
        if (/(?:^|\.)themeforest\.net$/.test(host)) return "+fod";
        if (/(?:^|\.)flurry\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)softlayer\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)mailgun\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)bootstrapcdn\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)download\.virtualbox\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)sun\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)books\.google\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)mysql\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)unrealengine\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)mongodb\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)mongodb\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)envato\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)adobe\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)unrealengine\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)apps\.admob\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)grafana\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)cp\.maxcdn\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)codecanyon\.net$/.test(host)) return "+fod";
        if (/(?:^|\.)amd\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)payments\.google\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)ibm\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)jenkins-ci\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)mbed\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)netbeans\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)vmware\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)toggl\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)docker\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)docker\.io$/.test(host)) return "+fod";
        if (/(?:^|\.)gcr\.io$/.test(host)) return "+fod";
        if (/(?:^|\.)datacamp\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)bugsnag\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)googlesource\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)polymer-project\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)udemy\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)material\.io$/.test(host)) return "+fod";
        if (/(?:^|\.)teamviewer\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)intel\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)developer\.chrome\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)github\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)jfrog\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)sonatype\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)maven\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)jitpack\.io$/.test(host)) return "+fod";
        if (/(?:^|\.)maven\.google\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)cloudfront\.net$/.test(host)) return "+fod";
        if (/(?:^|\.)nvidia\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)rstudio\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)sendgrid\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)tensorflow\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)kubernetes\.io$/.test(host)) return "+fod";
        if (/(?:^|\.)kaggle\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)issuetracker\.google\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)virtualbox\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)atlassian\.net$/.test(host)) return "+fod";
        if (/(?:^|\.)archive\.ubuntu\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)b4x\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)elastic\.co$/.test(host)) return "+fod";
        if (/(?:^|\.)launchpad\.net$/.test(host)) return "+fod";
        if (/(?:^|\.)medium\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)code\.google\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)realm\.io$/.test(host)) return "+fod";
        if (/(?:^|\.)maas\.io$/.test(host)) return "+fod";
        if (/(?:^|\.)docs\.datastax\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)splunk\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)gitlab-static\.net$/.test(host)) return "+fod";
        if (/(?:^|\.)releases\.hashicorp\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)tinyjpg\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)livefyre\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)slack-edge\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)cloudera\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)apache\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)vagrantup\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)metasploit\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)rapid7\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)coursera\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)npmjs\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)dell\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)gallery\.io$/.test(host)) return "+fod";
        if (/(?:^|\.)mathworks\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)lenovo\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)jitsi\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)anydesk\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)ant\.design$/.test(host)) return "+fod";
        if (/(?:^|\.)centos\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)quay\.io$/.test(host)) return "+fod";
        if (/(?:^|\.)bitvise\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)ni\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)altera\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)microchip\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)codesandbox\.io$/.test(host)) return "+fod";
        if (/(?:^|\.)spotify\.com$/.test(host)) return "+fod";
        if (/(?:^|\.)scdn\.co$/.test(host)) return "+fod";
        if (/(?:^|\.)godbolt\.org$/.test(host)) return "+fod";
        if (/(?:^|\.)zoom\.us$/.test(host)) return "+fod";
        return "DIRECT";
    },
    "+fod": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "PROXY fodev.org:8118";
    }
});
