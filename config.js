var config = {
    style: 'mapbox://styles/lost-dogz/ckrja488z83x517qyat7ytlz6',
    accessToken: 'pk.eyJ1IjoibG9zdC1kb2d6IiwiYSI6ImNrZnNxajJqazBjdHUycG1qcHA4czRqcnIifQ.hm5BBcKV0yGeaTnhnCbK_g',
    showMarkers: false,
    markerColor: '#F7931A',
    theme: 'light',
    use3dTerrain: true,
    // title: '₿itcoin Around The World',
    // subtitle: 'Actual people using actual bitcoin',
    // byline: '',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'gbr',
            alignment: 'full',
            hidden: false,
            title: 'Bitcoin is for every.one',
            intro: 'How often have you heard that "Bitcoin is for criminals"? It is an often repeated phrase by politicians, regulators, central bankers and journalists who have never used bitcoin themselves, and have never gone through the process of imagining why people would use it. The reality however is that people all over the world find value in bitcoin and only a tiny fraction of that can be considered criminal. According to a recent report the criminal fraction of all cryptocurrency transactions in 2020 was just 0.34% (Chainalysis, 2021). <strong>This site highlights the other 99.66%.</strong> Scroll down to start your bitcoin journey around the world...',
            url: '<p><br><a href="https://blog.chainalysis.com/reports/2021-crypto-crime-report-intro-ransomware-scams-darknet-markets" target="_blank">Chainalysis 2021 Crypto Crime Report</a></p>',
            location: {
                center: [-0.12782, 51.50167],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'gbr1',
            alignment: 'left',
            hidden: false,
            title: 'Her Majesty\'s Treasury, United Kingdom',
            intro: 'We need to start our travel around the world somewhere, so let\s start with a bit of history at <i>Her Majesty\'s Treasury</i> where then Chancellor Alistair Darling\'s decision to bail out the banks during the "Great Financial Crisis" in 2008/2009 would become eternalised in the first block in Bitcoin\'s blockchain. This so called "Genesis block" makes a reference to an article on the frontpage of The Times: <blockquote>The Times 03/Jan/2009 Chancellor on brink of second bailout for banks</blockquote>',
            image: 'images/Times.jpg',
            caption: 'Frontpage of the Times - January 3, 2009',
            story: 'In his introduction of Bitcoin on the P2P Foundation forums Satoshi underlined the problem he addresses with this famous quote:<br><br><q>The root problem with conventional currency is all the trust that\'s required to make it work. The central bank must be trusted not to debase the currency, but the history of fiat currencies is full of breaches of that trust.</q> - Satoshi Nakamoto',
            url: '<a href="https://p2pfoundation.ning.com/forum/topics/bitcoin-open-source" target="_blank">P2P Foundation Forums</a>',
            location: {
                center: [-0.12782, 51.50167],
                zoom: 17.19,
                pitch: 32.00,
                bearing: 73.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'blr',
            alignment: 'full',
            hidden: false,
            title: 'Belarus',
            location: {
              center: [27.47828, 53.93791],
              zoom: 6.18,
              pitch: 0.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'blr1',
            alignment: 'right',
            hidden: false,
            title: 'Dissidents in Minsk, Belarus',
            intro: 'Bitcoin became a tool for dissidents in Belarus to get around political repression. After a controversial election in August 2020, country-wide and months long protests broke out against Alexander Lukashenko, the sitting president since 1994.',
            image: './images/belarus.jpg',
            caption: 'Photo by Maxim Shikunets',
            story: 'Many protestors\' were fired from their jobs, their bank accounts frozen and were left without income or savings. Bitcoin turned out to be the only option for protestors to financially support each other.',
            location: {
              center: [27.53893, 53.91570],
              zoom: 14.26,
              pitch: 55.00,
              bearing: -141.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'nga',
            alignment: 'full',
            hidden: false,
            title: 'Nigeria',
            location: {
              center: [3.40010, 6.44970],
              zoom: 13.55,
              pitch: 53.50,
              bearing: 175.42
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'nga1',
            alignment: 'left',
            hidden: false,
            title: 'Feminist Coalition, Lagos, Nigeria',
            intro: 'The <i>Feminist Coalition</i> from Lagos (Nigeria) champions equality for women in Nigerian society with a core focus on education, financial freedom and representation in public office.',
            image: './images/feministcoalition.jpg',
            story: 'During the #EndSARS peaceful protests in Nigeria in October 2020 their bank account was shut off and they were forced to switch to bitcoin to continue operating. They were able to continue paying for medical aid, legal aid and relief for victims of repression because of donations received this way.',
            url: '<a href="https://feministcoalition2020.com/" target="_blank">Feminist Coalition</a>',
            location: {
              center: [3.40010, 6.44970],
              zoom: 13.55,
              pitch: 53.50,
              bearing: 175.42
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slv',
            alignment: 'full',
            hidden: false,
            title: 'El Salvador',
            location: {
              center: [-89.18540, 13.70270],
              zoom: 7.87,
              pitch: 0.00,
              bearing: 0.00,
              speed: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slv1',
            alignment: 'right',
            hidden: false,
            title: 'Bitcoin Beach, El Zonte, El Salvador',
            intro: 'The project Bitcoin Beach is creating a sustainable Bitcoin Economic ecosystem on the coast of El Salvador, where the majority of people do not have access to bank accounts and the local businesses could never qualify for merchant accounts needed to accept credit cards.',
            image: './images/bitcoinbeach.jpeg',
            caption: 'Photo by <a href="https://bitcoinbeach.com" target="_blank">Bitcoin Beach</a>',
            story: 'One of the projects supported by the Bitcoin Beach initiative is "Casa Esperanza" or "Hope House", a community initiative in El Zonte with the aim to impact the teenagers and college age boys of the salvadoran surf community who don’t have either the opportunity or access to a good education, for example by providing English language and information technology classes.</p><p>The success of bitcoin in El Zonte served as inspiration for the El Salvadoran government to make bitcoin legal tender.',
            location: {
              center: [-89.44143, 13.49726],
              zoom: 16.27,
              pitch: 65.00,
              bearing: -13.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slv2',
            alignment: 'left',
            hidden: false,
            title: 'Minutas Mario, El Zonte, El Salvador',
            intro: 'Mario sells shaved ice on the beach of El Zonte, El Salvador. Like many shops in El Zonte, he accepts bitcoin as payment for his ice.',
            image: './images/elzonte-aaronvanw.jpg',
            caption: 'Photo by <a href="https://twitter.com/AaronvanW" target="_blank">Aaron van Wirdum</a>',
            story: 'In July 2021 "Minutas Mario" became trending on twitter with the hashtag <a href="https://twitter.com/hashtag/iceshaverchallange" target="_blank">#iceshaverchallenge</a> and was donated bitcoin worth over $1000 spontaneously by twitter users via the Lightning Network simply by scanning the QR code from this photo. Mario invested the unexpected income in a fryer and a coolbox and now also sells fries and sodas on the beach of El Zonte.',
            location: {
                center: [-89.43839, 13.49552],
                zoom: 15.67,
                pitch: 45.50,
                bearing: 24.93
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slv3',
            alignment: 'right',
            hidden: false,
            title: 'Volcano mining, El Salvador',
            intro: 'President Nayib Bukele, who made El Salvador the first country in the world to accept Bitcoin as legal tender doesn\'t plan to stop at that and is also seriously working on using renewable geothermal energy, one of the few resources El Salvador has plenty of, to mine Bitcoin and generate extra income for the country.',
            // image: './images/Geothermal.jpg',
            story: '<blockquote class="twitter-tweet" data-dnt="true" data-theme="light"><p lang="en" dir="ltr">I’ve just instructed the president of <a href="https://twitter.com/LaGeoSV?ref_src=twsrc%5Etfw">@LaGeoSV</a> (our state-owned geothermal electric company), to put up a plan to offer facilities for <a href="https://twitter.com/hashtag/Bitcoin?src=hash&amp;ref_src=twsrc%5Etfw">#Bitcoin</a> mining with very cheap, 100% clean, 100% renewable, 0 emissions energy from our volcanos 🌋 <br><br>This is going to evolve fast! 🇸🇻 <img src="./images/Geothermal.jpg"></p>&mdash; Nayib Bukele 🇸🇻 (@nayibbukele) <a href="https://twitter.com/nayibbukele/status/1402680890057166858?ref_src=twsrc%5Etfw">June 9, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
            location: {
                center: [-88.50872, 13.52462],
                zoom: 13.5,
                pitch: 70.00,
                bearing: 152.70
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eth',
            alignment: 'full',
            hidden: false,
            title: 'Ethiopia',
            intro: '',
            image: '',
            story: '',
            location: {
              center: [40.49373, 9.16690],
              zoom: 5.85,
              pitch: 0.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eth1',
            alignment: 'left',
            hidden: false,
            title: 'Ethiopia',
            intro: 'Kal Kassa - cross border, inflation, pay freelancers',
            image: '',
            story: '',
            location: {
              center: [38.60601, 8.96020],
              zoom: 12.91,
              pitch: 50.50,
              bearing: 39.33
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'can',
            alignment: 'full',
            hidden: false,
            title: 'Canada',
            intro: '',
            image: '',
            story: '',
            location: {
              center: [-105.99977, 55.78890],
              zoom: 2.52,
              pitch: 0.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'can1',
            alignment: 'right',
            hidden: false,
            title: 'Victoria Kayak, Victoria, Canada',
            intro: 'Victoria Kayak Tours & Rentals',
            image: './images/victoria.png',
            caption: 'Photo by <a href="https://victoriakayak.com/" target="_blank">Victoria Kayak</a>',
            story: '',
            url: '<a href="https://victoriakayak.com/">Victoria Kayak</a>',
            location: {
              center: [-123.37050, 48.42454],
              zoom: 15,
              pitch: 60.00,
              bearing: -73.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'can2',
            alignment: 'left',
            hidden: false,
            title: 'Upstream Data, Calgary, Canada',
            intro: 'Stop burning, start earning',
            image: './images/upstream.png',
            story: '',
            location: {
              center: [-114.06318, 51.05279],
              zoom: 12.63,
              pitch: 80.00,
              bearing: -144.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'can3',
            alignment: 'right',
            hidden: false,
            title: 'Ifunanyachi Achara',
            intro: 'Ifunanyachi Achara is a professional soccer player for Toronto FC and chose to receive a portion of his salary in bitcoin',
            image: './images/can3.jpg',
            story: 'Ifunanyachi uses the bitcoin he makes playing soccer to support his family in Nigeria who suffer from the double digit annual inflation of the Nigerian Naira. Sending remittances via bitcoin is much faster and cheaper than using traditional wire-transfer services.',
            url: '<a href="https://twitter.com/AcharaIfy10" target="_blank">Ifunanyachi\'s Twitter</a>',
            location: {
              center: [-79.41871, 43.63310],
              zoom: 15.8,
              pitch: 65.00,
              bearing: 105.42
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'usa',
            alignment: 'full',
            hidden: false,
            title: 'United States',
            intro: '',
            image: '',
            story: '',
            location: {
              center: [-119.37789, 48],
              zoom: 2.99,
              pitch: 0.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'usa1',
            alignment: 'left',
            hidden: false,
            title: '',
            intro: '',
            image: './images/usa1.jpg',
            story: '',
            url: '<a href="#" target="_blank"></a>',
            location: {
              center: [-79.41871, 43.63310],
              zoom: 15.8,
              pitch: 65.00,
              bearing: 105.42
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
