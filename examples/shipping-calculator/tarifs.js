var tarifs = [{
        name: "Москва",
        color: '#00ff00',
        cost: 20,
        test: function (step) {
            return this.geometry.contains(step.start_location) &&
                this.geometry.contains(step.end_location) &&
                step.street.search(/МКАД/ig) === -1;
        },
        coordinates: [[[55.779702,37.842305],[55.776945,37.84282],[55.773461999999995,37.843077],[55.769687999999995,37.843249],[55.766833,37.843249],[55.762575,37.84282],[55.758074,37.842648000000004],[55.753815,37.842391000000006],[55.749265,37.842305],[55.744617,37.841962],[55.739388,37.841361],[55.735707999999995,37.841018],[55.73226999999999,37.840761],[55.72747499999999,37.840074],[55.72263099999999,37.839559],[55.71546099999999,37.838529],[55.71216599999999,37.837242],[55.70848299999999,37.835354],[55.70029199999999,37.831062],[55.69714099999999,37.829860000000004],[55.69287499999999,37.829173000000004],[55.688704999999985,37.830031000000005],[55.682977999999984,37.832095],[55.67822499999998,37.834069],[55.673034999999985,37.835871],[55.66726199999999,37.837931],[55.663186999999986,37.839304],[55.66046999999999,37.839732999999995],[55.65721899999999,37.839304],[55.65343399999999,37.837502],[55.64959999999999,37.833725],[55.64610499999999,37.828661000000004],[55.63780399999999,37.815786],[55.63377399999999,37.809606],[55.62867599999999,37.801881],[55.62508199999999,37.796302000000004],[55.620079999999994,37.786689],[55.61532,37.778449],[55.611255,37.770512000000004],[55.605765,37.760556],[55.602121,37.754033],[55.598817,37.746566],[55.596047,37.739528],[55.59177,37.7294],[55.587394999999994,37.719443999999996],[55.583555,37.70897299999999],[55.580735,37.701505999999995],[55.577476999999995,37.692322],[55.574462,37.684168],[55.5731,37.679104],[55.572126999999995,37.674469],[55.57178699999999,37.668203000000005],[55.574752999999994,37.617906000000005],[55.575481999999994,37.604431000000005],[55.576145,37.595966000000004],[55.576729,37.591331000000004],[55.579598,37.578542000000006],[55.584264999999995,37.559144],[55.58839699999999,37.54163500000001],[55.59131399999999,37.529790000000006],[55.59422999999999,37.51751600000001],[55.59617399999999,37.511680000000005],[55.59889599999999,37.506530000000005],[55.60608799999999,37.49786100000001],[55.615123999999994,37.48747500000001],[55.622457999999995,37.47889200000001],[55.629743,37.47022300000001],[55.638531,37.46018100000001],[55.646735,37.450482000000015],[55.653772,37.441899000000014],[55.660402,37.434373000000015],[55.663798,37.430940000000014],[55.682472,37.41720700000001],[55.684557,37.415920000000014],[55.689115,37.414203000000015],[55.692509,37.41137100000002],[55.696193,37.406908000000016],[55.704288,37.39566400000002],[55.709328,37.38905500000002],[55.712478,37.38656600000002],[55.718438,37.383304000000024],[55.72924,37.377982000000024],[55.740911,37.371802000000024],[55.746043,37.369570000000024],[55.750884,37.36879800000003],[55.768209999999996,37.369485000000026],[55.782287999999994,37.36957100000003],[55.786061,37.370515000000026],[55.791042,37.37403400000002],[55.799068999999996,37.381930000000025],[55.80322699999999,37.385535000000026],[55.80661099999999,37.38750900000002],[55.81342599999999,37.38982600000002],[55.826134999999994,37.39368800000002],[55.831835999999996,37.395147000000016],[55.836425,37.39626300000002],[55.840482,37.39497600000002],[55.844925,37.39205800000002],[55.848209000000004,37.39188600000002],[55.852893,37.39428900000002],[55.85999,37.39823700000002],[55.864720000000005,37.40227100000002],[55.868581000000006,37.40759300000002],[55.87210400000001,37.41437400000002],[55.87485500000001,37.422528000000014],[55.87794300000001,37.43308500000001],[55.88069300000001,37.44158200000001],[55.88238200000001,37.44990800000001],[55.882720000000006,37.45711800000001],[55.88286500000001,37.463384000000005],[55.88387800000001,37.469993],[55.88711000000001,37.482353],[55.88918400000001,37.489906000000005],[55.893139000000005,37.49883200000001],[55.904520000000005,37.52483900000001],[55.90591800000001,37.52956000000001],[55.90693000000001,37.53488200000001],[55.90934100000001,37.55797000000001],[55.91083500000001,37.572733000000014],[55.911076000000016,37.579428000000014],[55.910401000000014,37.586123000000015],[55.90842400000002,37.594191000000016],[55.903120000000015,37.61290200000002],[55.90070900000001,37.62363100000002],[55.898539000000014,37.63599100000002],[55.896658000000016,37.64955200000002],[55.895597000000016,37.663113000000024],[55.89511500000002,37.674271000000026],[55.894826000000016,37.68834700000003],[55.89458500000001,37.69529900000003],[55.89352400000001,37.70130700000003],[55.892077000000015,37.706199000000026],[55.88947200000001,37.71220700000003],[55.88686700000001,37.717099000000026],[55.88228400000001,37.72585400000003],[55.878231000000014,37.734351000000025],[55.872419000000015,37.74564000000002],[55.867207000000015,37.755596000000025],[55.86006300000002,37.769586000000025],[55.82983500000002,37.828200000000024],[55.82592200000002,37.833865000000024],[55.82191200000002,37.836955000000025],[55.81616200000002,37.83841400000002],[55.80485200000002,37.83987300000002],[55.79131400000002,37.84141800000002],[55.779702,37.842305]]]
    }, {
        name: "Московская область",
        cost: 40,
        color: '#ff0000',
        test: function (step) {
            return this.geometry.contains(step.start_location) &&
                this.geometry.contains(step.end_location) ||
                step.street.search(/МКАД/ig) > -1;
        },
        coordinates: [[[55.726841,36.861485],[55.728778,36.86715],[55.732943,36.871442],[55.742047,36.880368000000004],[55.755117999999996,36.892213000000005],[55.784439,36.91727600000001],[55.789179,36.92122400000001],[55.792466999999995,36.92173900000001],[55.818087,36.91727600000001],[55.823789,36.91830600000001],[55.847533,36.925154000000006],[55.851396,36.92772900000001],[55.862210000000005,36.93905900000001],[55.868678,36.94111900000001],[55.876302,36.94300700000001],[55.889521,36.94420900000001],[55.903644,36.94499300000001],[55.922924,36.94613600000001],[55.926683000000004,36.94819600000001],[55.97724100000001,37.00094900000001],[55.991291000000004,37.020862000000015],[55.994658,37.022922000000015],[56.015703,37.02923900000002],[56.018107,37.03095600000002],[56.020415,37.03507600000002],[56.054853,37.134973000000016],[56.061288000000005,37.14321300000002],[56.073099000000006,37.130338000000016],[56.09843800000001,37.17582800000002],[56.10304300000001,37.18372400000002],[56.107744000000004,37.18921700000002],[56.110238,37.19831500000002],[56.112348000000004,37.209301000000025],[56.114554000000005,37.216339000000026],[56.115801000000005,37.22389200000003],[56.119829,37.26800900000003],[56.119925,37.27384500000003],[56.125103,37.33833700000003],[56.134211,37.37541600000003],[56.13469,37.38554400000003],[56.136798999999996,37.45403700000003],[56.137758,37.46468000000003],[56.138428999999995,37.49540700000003],[56.152128999999995,37.48721500000003],[56.157782,37.48738700000003],[56.160464,37.49253700000003],[56.161708999999995,37.49854500000003],[56.16898799999999,37.50558300000003],[56.17214799999999,37.50712800000003],[56.179137999999995,37.51450900000003],[56.188137,37.52068900000003],[56.193784,37.52395100000003],[56.201153,37.52429400000003],[56.206416,37.523092000000034],[56.205842,37.53922800000004],[56.205076999999996,37.54472100000004],[56.195890999999996,37.565835000000035],[56.194551,37.57235800000004],[56.190244,37.58866600000004],[56.186032,37.60119700000004],[56.185840999999996,37.60548900000004],[56.183065,37.61973700000004],[56.162476,37.70453800000004],[56.158069999999995,37.722219000000045],[56.142163999999994,37.84461400000004],[56.138138999999995,37.862982000000045],[56.13229199999999,37.876887000000046],[56.12078699999999,37.93336400000005],[56.11953999999999,37.93731200000005],[56.09824499999999,37.975078000000046],[56.08759299999999,37.99430400000005],[56.083465999999994,38.00288700000005],[56.08145,38.01129800000005],[56.078281999999994,38.027263000000055],[56.071369,38.07927600000006],[56.067719999999994,38.09094900000006],[56.04352299999999,38.16488000000006],[56.042562,38.17037300000006],[56.04016,38.192174000000065],[56.038046,38.20007000000007],[56.03103,38.21328800000007],[56.027762,38.21963900000007],[56.000907000000005,38.29916600000007],[56.00119600000001,38.30946600000007],[55.999272000000005,38.31547400000007],[55.987342000000005,38.333670000000076],[55.982819000000006,38.34345500000008],[55.95846300000001,38.36731600000007],[55.95181800000001,38.38688500000007],[55.94806200000001,38.39272100000007],[55.94286000000001,38.399072000000075],[55.936715000000014,38.40090300000008],[55.93286100000002,38.40210500000008],[55.93064500000002,38.402277000000076],[55.92958500000002,38.40365000000008],[55.928429000000015,38.402277000000076],[55.926501000000016,38.403479000000075],[55.92389900000001,38.405024000000076],[55.917344000000014,38.403651000000075],[55.914645000000014,38.404338000000074],[55.912042000000014,38.406398000000074],[55.908957000000015,38.40554000000007],[55.906450000000014,38.40657000000007],[55.90403900000001,38.40811500000007],[55.90182100000001,38.41189200000007],[55.90143500000001,38.417385000000074],[55.89912000000001,38.421333000000075],[55.89584100000001,38.424080000000075],[55.892851000000014,38.426140000000075],[55.88986100000002,38.425453000000076],[55.88658100000002,38.424251000000076],[55.874712000000024,38.43283400000008],[55.86648700000002,38.44123200000008],[55.85799200000002,38.43985900000008],[55.85463200000002,38.43917200000008],[55.85173500000002,38.44260500000008],[55.84825900000002,38.43230500000008],[55.84478200000002,38.42921500000008],[55.823528000000024,38.424752000000076],[55.76376200000002,38.43573800000008],[55.75388900000002,38.44329100000008],[55.74769300000002,38.45393400000008],[55.73839700000002,38.45771100000008],[55.734329000000024,38.43264800000008],[55.73064800000002,38.42749800000008],[55.72541700000002,38.42269100000008],[55.721929000000024,38.41857100000008],[55.70177100000002,38.43436400000008],[55.69750500000002,38.43539400000008],[55.67869200000002,38.40724200000008],[55.66976700000002,38.39419600000008],[55.63152300000002,38.36055000000008],[55.627833000000024,38.36364000000008],[55.61656500000002,38.37119300000008],[55.540519000000025,38.40483900000008],[55.536236000000024,38.40415200000008],[55.496497000000026,38.374626000000085],[55.49318400000003,38.37325300000008],[55.485972000000025,38.35196700000008],[55.483633000000026,38.34784700000008],[55.47895400000002,38.34647400000008],[55.446963000000025,38.32209800000008],[55.44423100000002,38.31969500000008],[55.435838000000025,38.31729200000008],[55.43271500000002,38.31488900000008],[55.42744400000002,38.297723000000076],[55.425296000000024,38.294633000000076],[55.421195000000026,38.292230000000075],[55.41787500000002,38.28879700000007],[55.41592200000002,38.28261700000007],[55.41436000000002,38.27437700000007],[55.41514100000003,38.25652400000007],[55.415727000000025,38.24691100000007],[55.41455500000003,38.24244800000007],[55.41143000000003,38.23626800000007],[55.407914000000034,38.230775000000065],[55.40049000000003,38.226998000000066],[55.39697300000003,38.222878000000065],[55.39306500000003,38.20811500000006],[55.38974300000003,38.19918900000006],[55.38700700000003,38.19335300000006],[55.38153400000003,38.18511300000006],[55.37684200000003,38.174127000000055],[55.36198200000003,38.001779000000056],[55.362944000000034,37.99507200000006],[55.36783300000003,37.977906000000054],[55.368615000000034,37.97069600000005],[55.34377400000003,37.86426600000005],[55.34279600000003,37.85259300000005],[55.34377400000003,37.845727000000046],[55.33536000000003,37.77534600000005],[55.33418600000003,37.76676300000005],[55.332229000000034,37.71938400000005],[55.33125000000003,37.659646000000045],[55.33125000000003,37.59956500000005],[55.331837000000036,37.592699000000046],[55.33320700000004,37.51442100000005],[55.33379400000004,37.47871500000005],[55.33809900000004,37.46669900000005],[55.362943000000044,37.43030700000005],[55.37076500000004,37.42000700000005],[55.37291600000004,37.413141000000046],[55.376044000000036,37.398378000000044],[55.390313000000035,37.34619300000004],[55.39461200000004,37.25280900000004],[55.406413000000036,37.203437000000044],[55.41930400000004,37.18764400000004],[55.44487800000004,37.13820600000004],[55.47784500000004,37.06027200000004],[55.48388900000004,37.04859900000004],[55.52383600000004,36.981994000000036],[55.52773100000004,36.978561000000035],[55.53279400000004,36.982681000000035],[55.53688300000004,36.98851700000004],[55.54019300000004,36.99023400000004],[55.54817400000004,36.984741000000035],[55.55089900000004,36.984741000000035],[55.56432600000004,36.995041000000036],[55.584944000000036,37.00259400000004],[55.592337000000036,37.00382400000004],[55.594670000000036,37.00828700000004],[55.60749900000004,37.00210700000004],[55.62401500000004,37.020646000000035],[55.630037000000044,37.022019000000036],[55.629843000000044,36.98425300000004],[55.63702900000004,36.98425300000004],[55.65003800000004,36.971550000000036],[55.66556600000004,36.963310000000035],[55.67041700000004,36.952667000000034],[55.683027000000045,36.90357200000003],[55.70906400000005,36.87351500000003],[55.71255300000005,36.87248500000003],[55.714879000000046,36.86664900000003],[55.717398000000045,36.86664900000003],[55.726841,36.861485]],
[[55.779702,37.842305],[55.776945,37.84282],[55.773461999999995,37.843077],[55.769687999999995,37.843249],[55.766833,37.843249],[55.762575,37.84282],[55.758074,37.842648000000004],[55.753815,37.842391000000006],[55.749265,37.842305],[55.744617,37.841962],[55.739388,37.841361],[55.735707999999995,37.841018],[55.73226999999999,37.840761],[55.72747499999999,37.840074],[55.72263099999999,37.839559],[55.71546099999999,37.838529],[55.71216599999999,37.837242],[55.70848299999999,37.835354],[55.70029199999999,37.831062],[55.69714099999999,37.829860000000004],[55.69287499999999,37.829173000000004],[55.688704999999985,37.830031000000005],[55.682977999999984,37.832095],[55.67822499999998,37.834069],[55.673034999999985,37.835871],[55.66726199999999,37.837931],[55.663186999999986,37.839304],[55.66046999999999,37.839732999999995],[55.65721899999999,37.839304],[55.65343399999999,37.837502],[55.64959999999999,37.833725],[55.64610499999999,37.828661000000004],[55.63780399999999,37.815786],[55.63377399999999,37.809606],[55.62867599999999,37.801881],[55.62508199999999,37.796302000000004],[55.620079999999994,37.786689],[55.61532,37.778449],[55.611255,37.770512000000004],[55.605765,37.760556],[55.602121,37.754033],[55.598817,37.746566],[55.596047,37.739528],[55.59177,37.7294],[55.587394999999994,37.719443999999996],[55.583555,37.70897299999999],[55.580735,37.701505999999995],[55.577476999999995,37.692322],[55.574462,37.684168],[55.5731,37.679104],[55.572126999999995,37.674469],[55.57178699999999,37.668203000000005],[55.574752999999994,37.617906000000005],[55.575481999999994,37.604431000000005],[55.576145,37.595966000000004],[55.576729,37.591331000000004],[55.579598,37.578542000000006],[55.584264999999995,37.559144],[55.58839699999999,37.54163500000001],[55.59131399999999,37.529790000000006],[55.59422999999999,37.51751600000001],[55.59617399999999,37.511680000000005],[55.59889599999999,37.506530000000005],[55.60608799999999,37.49786100000001],[55.615123999999994,37.48747500000001],[55.622457999999995,37.47889200000001],[55.629743,37.47022300000001],[55.638531,37.46018100000001],[55.646735,37.450482000000015],[55.653772,37.441899000000014],[55.660402,37.434373000000015],[55.663798,37.430940000000014],[55.682472,37.41720700000001],[55.684557,37.415920000000014],[55.689115,37.414203000000015],[55.692509,37.41137100000002],[55.696193,37.406908000000016],[55.704288,37.39566400000002],[55.709328,37.38905500000002],[55.712478,37.38656600000002],[55.718438,37.383304000000024],[55.72924,37.377982000000024],[55.740911,37.371802000000024],[55.746043,37.369570000000024],[55.750884,37.36879800000003],[55.768209999999996,37.369485000000026],[55.782287999999994,37.36957100000003],[55.786061,37.370515000000026],[55.791042,37.37403400000002],[55.799068999999996,37.381930000000025],[55.80322699999999,37.385535000000026],[55.80661099999999,37.38750900000002],[55.81342599999999,37.38982600000002],[55.826134999999994,37.39368800000002],[55.831835999999996,37.395147000000016],[55.836425,37.39626300000002],[55.840482,37.39497600000002],[55.844925,37.39205800000002],[55.848209000000004,37.39188600000002],[55.852893,37.39428900000002],[55.85999,37.39823700000002],[55.864720000000005,37.40227100000002],[55.868581000000006,37.40759300000002],[55.87210400000001,37.41437400000002],[55.87485500000001,37.422528000000014],[55.87794300000001,37.43308500000001],[55.88069300000001,37.44158200000001],[55.88238200000001,37.44990800000001],[55.882720000000006,37.45711800000001],[55.88286500000001,37.463384000000005],[55.88387800000001,37.469993],[55.88711000000001,37.482353],[55.88918400000001,37.489906000000005],[55.893139000000005,37.49883200000001],[55.904520000000005,37.52483900000001],[55.90591800000001,37.52956000000001],[55.90693000000001,37.53488200000001],[55.90934100000001,37.55797000000001],[55.91083500000001,37.572733000000014],[55.911076000000016,37.579428000000014],[55.910401000000014,37.586123000000015],[55.90842400000002,37.594191000000016],[55.903120000000015,37.61290200000002],[55.90070900000001,37.62363100000002],[55.898539000000014,37.63599100000002],[55.896658000000016,37.64955200000002],[55.895597000000016,37.663113000000024],[55.89511500000002,37.674271000000026],[55.894826000000016,37.68834700000003],[55.89458500000001,37.69529900000003],[55.89352400000001,37.70130700000003],[55.892077000000015,37.706199000000026],[55.88947200000001,37.71220700000003],[55.88686700000001,37.717099000000026],[55.88228400000001,37.72585400000003],[55.878231000000014,37.734351000000025],[55.872419000000015,37.74564000000002],[55.867207000000015,37.755596000000025],[55.86006300000002,37.769586000000025],[55.82983500000002,37.828200000000024],[55.82592200000002,37.833865000000024],[55.82191200000002,37.836955000000025],[55.81616200000002,37.83841400000002],[55.80485200000002,37.83987300000002],[55.79131400000002,37.84141800000002],[55.779702,37.842305]]]
    }];
