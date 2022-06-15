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
            title: '₿itcoin is for every.one',
            intro: 'How often have you heard that "bitcoin is for criminals"? It is an often repeated phrase by politicians, regulators, central bankers and journalists who have never used bitcoin themselves, and have never gone through the process of imagining why people would use it. The reality however is that people all over the world find value in bitcoin and only a tiny fraction of that can be considered criminal. According to a recent report the criminal fraction of all cryptocurrency transactions in 2020 was just 0.34% (Chainalysis, 2021). <strong>This site highlights the other 99.66%.</strong> Scroll down to start your bitcoin journey around the world...',
            url: '<p><br><a href="https://blog.chainalysis.com/reports/2021-crypto-crime-report-intro-ransomware-scams-darknet-marketsChainalysis 2021 Crypto Crime Report</a></p>',
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
            story: 'Many protestors\' were fired from their jobs, their bank accounts frozen and were left without income or savings. Bitcoin turned out to be the only option for protestors to receive financial support.',
            url: '<a href="https://fortune.com/2021/02/18/bitcoin-censorship-political-repression-deplatforming-china-belarus-russia-nigeria-crypto/" target="_blank">Read more on Fortune.com</a>',
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
            url: '<a href="https://twitter.com/feminist_co" class="fa fa-twitter target="_blank"></a></br><a href="https://feministcoalition2020.com/" target="_blank">Feminist Coalition</a>',
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
              bearing: 0.00
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
            story: 'One of the projects supported by the Bitcoin Beach initiative is "Casa Esperanza" or "Hope House", a community initiative in El Zonte with the aim to impact the teenagers and college age boys of the salvadoran surf community who don’t have either the opportunity or access to a good education, for example by providing English language and information technology classes.</p><p>The success of bitcoin in El Zonte served as inspiration for the El Salvadoran government to make bitcoin legal tender. The site Motherboard went to visit El Zonte in June and made the following short documentary:<br><iframe class="youtube" width="533" height="305" src="https://www.youtube.com/embed/aVVZXUFItZY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            url: '<a href="https://www.bitcoinbeach.com/" target="_blank">Bitcoin Beach</a>',
            location: {
              center: [-89.44143, 13.49726],
              zoom: 16.27,
              pitch: 75.00,
              bearing: -13.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
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
            story: 'In July 2021 "Minutas Mario" became trending on twitter with the hashtag <a href="https://twitter.com/hashtag/iceshaverchallange?src=hashtag_click" target="_blank">#iceshaverchallenge</a> and was donated bitcoin worth over $1000 spontaneously by twitter users via the Lightning Network simply by scanning the QR code from this photo. Mario invested the unexpected income in a fryer and a coolbox and now also sells fries and sodas on the beach of El Zonte.',
            url: '<a href="https://ln.bitcoinbeach.com/minutasmario" target="_blank">Try to send Mario some sats yourself!</a>',
            location: {
                center: [-89.43839, 13.49552],
                zoom: 15.67,
                pitch: 45.50,
                bearing: 24.93
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slv3',
            alignment: 'right',
            hidden: false,
            title: 'Volcano mining, El Salvador',
            intro: 'President Nayib Bukele, who made El Salvador the first country in the world to accept Bitcoin as legal tender, didn\'t stop at that and the country is now using renewable geothermal energy, one of the few resources El Salvador has plenty of, to mine Bitcoin and generate extra income.',
            story: '<blockquote class="twitter-tweet" data-dnt="true" data-theme="light"><p lang="en" dir="ltr">I’ve just instructed the president of <a href="https://twitter.com/LaGeoSV?ref_src=twsrc%5Etfw" target="_blank">@LaGeoSV</a> (our state-owned geothermal electric company), to put up a plan to offer facilities for <a href="https://twitter.com/hashtag/Bitcoin?src=hash&amp;ref_src=twsrc%5Etfw" target="_blank">#Bitcoin</a> mining with very cheap, 100% clean, 100% renewable, 0 emissions energy from our volcanos 🌋 <br><br>This is going to evolve fast! 🇸🇻 <img src="./images/Geothermal.jpg"></p>&mdash; Nayib Bukele 🇸🇻 (@nayibbukele) <a href="https://twitter.com/nayibbukele/status/1402680890057166858?ref_src=twsrc%5Etfw" target="_blank">June 9, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
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
            title: 'Bitcoin education and cross-border payments to Ethiopia',
            intro: 'Kal Kassa is an Ethiopian businessman, currently based in the US, who is spearheading the BitcoinBirr education initiative. He uses bitcoin to pay unbanked freelancers, graphic designers and translators in Addis Ababa.',
            image: './images/eth1.jpg',
            story: 'BitcoinBirr (Birr is Amharic for money) is an open source initative to educate and share bitcoin material with populations in all economies. 2021 priorities include translating copies of various books and relevant materials on bitcoin in local Ethiopian and Eritrean languages.',
            url: '<a href="https://twitter.com/kalkassa" class="fa fa-twitter" target="_blank"></a><br><a href="https://bitcoinbirr.org/" target="_blank">BitcoinBirr</a>',
            location: {
              center: [38.75689, 8.98997],
              zoom: 13.7,
              pitch: 76.00,
              bearing: -120.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'cod',
            alignment: 'full',
            hidden: false,
            title: 'Democratic Republic of the Congo',
            intro: '',
            image: '',
            story: '',
            location: {
              center: [21.69898, -4.08654],
              zoom: 5.14,
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
            id: 'cod1',
            alignment: 'right',
            hidden: false,
            title: 'Supporting nature conservation, Virunga National Park, DRC',
            intro: 'The last 800 wild mountain gorillas live in the forests around the volcanoes of Virunga national park, DRC. Only 3% of people in the region have access to electricity and as such most people depend on the forest for fuel, leading to deforestation. To address this issue a number of small hydropower plants have been built in development projects.',
            image: './images/cod1.png',
            caption: 'Matebe hydroelectric plant',
            story: '',
            url: '<a href="" target="_blank"></a>',
            location: {
              center: [29.24970, -1.52326],
              zoom: 14.5,
              pitch: 74.00,
              bearing: -8.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
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
            intro: 'A great way to see Victoria and the local marine wildlife from a unique vantage point is by renting a kayak at Victoria Kayak Tours & Rentals!',
            image: './images/victoria.png',
            caption: 'Photo by <a href="https://victoriakayak.com/" target="_blank">Victoria Kayak</a>',
            story: 'Victoria Kayak fell down the rabbit hole and is adopting a fixed bitcoin price for Tours & Rentals, representing a significant discount when compared to the CAD price. At Victoria Kayak they think bitcoin is the future and want to encourage people to learn about bitcoin and adopt it for use. This is their incentive and contribution to the Bitcoin network.',
            url: '<a href="https://victoriakayak.com/" target="_blank">Victoria Kayak</a>',
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
            title: 'Greening the grid in Midland, Texas',
            intro: '',
            image: './images/usa1.jpg',
            story: '',
            url: '<a href="#" target="_blank"></a>',
            location: {
              center: [-102.06006, 31.98836],
              zoom: 13,
              pitch: 75.00,
              bearing: 160.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'afg',
            alignment: 'full',
            hidden: false,
            title: 'Afghanistan',
            intro: '',
            image: '',
            story: '',
            location: {
              center: [66.01292, 33.93490],
              zoom: 5.00,
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
            id: 'afg1',
            alignment: 'right',
            hidden: false,
            title: 'A lifeline for refugees',
            intro: '',
            image: './images/afg1.jpg',
            story: '',
            url: '<a href="#" target="_blank"></a>',
            location: {
              center: [62.21654, 34.35070],
              zoom: 15.28,
              pitch: 77.00,
              bearing: -32.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
