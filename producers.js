const { update } = require("lodash");
const { updateDistributors } = require("./distributors");
const { updateProducts } = require("./products");

const updateProducers = [
  {
    Picture: String, //0
    Name: "Suminter India Organics Pvt Ltd- Surendranagar Farmers Producer Company Ltd.",
    Location: "Mumbai, India",
    Items: [], //cotton
    Info: `Suminter India Organics produces high-quality natural, organic ingredients and materials in socially responsible, environmentally sustainable conditions. We work closely with over 20,000 farmers to grow, harvest and process organic goods with the fairest and most ethical practices. We strive for excellence in everything we do, from sourcing to delivering the purest non-GMO products worldwide.`,
    Distributors: [] //2,6,9
  },
  {
    Picture: String, //1
    Name: "US-GPC Dabo",
    Location: "Kolda, Senegal",
    Items: [], //cotton
    Info: `Die L’Union Sectorielle des Groupements Producteurs de Coton de Dabo“ kurz: US-GPC de Dabo ist ein übergeordneter Zusammenschluss aus Baumwollkooperativen der Region Kolda im Süden Senegals ca. 670 km südöstlich von Dakar.`,
    Distributors: [] //16,19
  },
  {
    Picture: String, //2
    Name: "CONACADO Agroindustrial",
    Location: "Los Prados, Dominican Republic",
    Items: [], //cocoa
    Info: `CONACADO arises from the successful alliance between small and medium cocoa producers; with the support of the Ministry's Cocoa Department and the German Cooperation Agency GTZ. The objective of this alliance was to improve the quality of Dominican cocoa through the EDUCATION AND ORGANIZE pillars of producers and improve the collection and processing infrastructure in order to seek and guarantee its placement in the most demanding international markets.`,
    Distributors: [] //7,10
  },
  {
    Picture: String, //3
    Name: "Pratima Agro & Paper PVT.LTD. Pratima Organic Grower Group",
    Location: "Orissa, India",
    Items: [], //cotton
    Info: `As an organisation, we are devoted towards the empowerment of under-priviledged farmers. Based in South Western Odisha, We work with repressed farming communities to improve their livelihoods by increasing efficiencies, lowering costs and raising incomes through certification that ensures standard quality products. We believe in unshackling farmers through ownership and training. Since the inception, 3679 farmers transitioned into sustainable agriculture certified for organic and fairtrade standards covering 4579 hectares. We fortify economic sustainability through production of organic cotton and rotational crops and social sustainability through improved business performance, increased employment and better health.`,
    Distributors: [] //17,11
  },
  {
    Picture: String, //4
    Name: "SCANFI-SCOOPS ",
    Location: "Abengourou, Ivory Coast",
    Items: [], //cocoa
    Info: `We work with repressed farming communities to improve their livelihoods by increasing efficiencies, lowering costs and raising incomes through certification that ensures standard quality products. We believe in unshackling farmers through ownership and training. Since the inception, 3679 farmers transitioned into sustainable agriculture certified for organic and fairtrade standards covering 4579 hectares. We fortify economic sustainability through production of organic cotton and rotational crops and social sustainability through improved business performance, increased employment and better health.`,
    Distributors: [] //12,13
  },
  {
    Picture: String, //5
    Name: "Rwenzori Farmers Marketing Co-operative Society Ltd",
    Location: "Kyarumba, Uganda",
    Items: [], //cotton
    Info: `Rwenzori Farmers Marketing Cooperative Society Ltd is located in Western Uganda, near the foothills of the Rwenzori mountains (meaning ‘Mountains of the moon’). It was certified in 2014 and is the first Fairtrade certified cotton producer organisation in East Africa.`,
    Distributors: [] //8,11
  },
  {
    Picture: String, //6
    Name: "Non Commersial Cooperative Biokishovarz",
    Location: "Sughd, Tajikistan",
    Items: [], //cotton
    Info: `In 2012, under the initiation of farmers and with financial support from Helvetas Swiss Intercooperation and later from GIZ, the non-commercial cooperative Bio-Kishovarz was established. Both donors invested in the capacity building of the cooperative, which now manages the organic business independently and sustainably. More than 1,000 tons of organic and fairtrade certified cotton fiber is now produced each year. The co-operative is investing the Fairtrade Premium received from cotton sales in communities, schools, and kindergartens, etc.`    ,
    Distributors: [] //15.16
  },
  {
    Picture: String, //7
    Name: "HIGHRANGE ORGANIC WOMEN FAIRTRADE FARMERS ASSOCIATION ",
    Location: "Indukki, India",
    Items: [], //cocoa
    Info: `HOWFFA is one of the organic farmer cooperatives that associates with Plantrich in supplying spices, cocoa, coffee beans, nutmeg and such raw organic produce which are latet blended to create various, premium quality organic products exported by Plantrich.  Highrange Organic Women Fairtrade Farmers Association - HOWFFA is an active and dynamic coming together women farmers of the highranges of Kerala.  A women led cooperative, HOWFFA is a landmark in the history of agriculture with its all-women army, actively contributing to the development of organic farming, in Kerala.`,
    Distributors: [] //12,20
  },

  {
    Picture: String, //8
    Name: "Farmers Development Association (FDA)",
    Location: "Cairo, Egypt",
    Items: [], //cotton
    Info: `SEKEM was founded with the idea of sustainable development and giving back to the community. The vision that brought Dr. Ibrahim Abouleish to dig the first well in the vast desert land still resounds in SEKEMs approach of conducting business. Like a compass, our vision, mission and values guide us in the everyday work in all SEKEM companies.Sustainable development towards a future where every human being can unfold his or her individual potential; where mankind is living together in social forms reflecting human dignity; and where all economic activity is conducted in accordance with ecological and ethical principles.`,
    Distributors: [] //8
  },
  {
    Picture: String, //9
    Name: "Indian Organic Farmers Producer Company Ltd. (IOFPCL)",
    Location: "Kerala, India",
    Items: [], //cocoa, coffee
    Info: `The Indian Organic Farmers Producer Company Limited (IOFPCL) is one of the largest organic producer company in India, owned and managed by the farmers themselves. IOFPCL was founded in the year 2004, and incorporated under the Companies Act of 1956, to take on the challenges faced by member farmers in the production and marketing of Organic and Fairtrade certified products in the domestic and international markets.`,
    Distributors: [] //12,20,7,4,5
  },
  {
    Picture: String, //10
    Name: "Bio Farmer Agricultural Commodity and Service Cooperative (Bio Farmer ACSC)",
    Location: "Jalalabat, Kyrgyzstan",
    Items: [], //cotton
    Info: `ACSC “Bio Farmer” was founded in 2007 as a Public Union, with further re-registration as an Agricultural Commodity and Service Cooperative “Bio Farmer” in 2009. The cooperative was established in 2007 and is most known for its Fairtrade seed cotton, but the farmers also cultivate Fairtrade walnuts, potatoes, pulses and b0rlotti beans.`,
    Distributors: [] //8
  },
  {
    Picture: String, //11
    Name: "Pratibha-Vasudha Jaivik Krishi Kalyan Samiti (Vasudha Organic Farmers Welfare Society)",
    Location: "Madhya Pradesh, 452018, India",
    Items: [], //cotton
    Info: `Pratibha Vasudha is promoted by Pratibha Syntex Ltd. one of the largest textiles manufacturers in the world. Vasudha translates to ‘Mother Earth’ – this represents Pratibha’s commitment to helping people and the environment.`,
    Distributors: [] //15,14,18
  },

  {
    Picture: String, //12
    Name: "South Asian Sourcing Pvt. Ltd. ",
    Location: "Muzaffar Garh, Pakistan",
    Items: [], //cotton
    Info: `South Asian Sourcing (Pvt.) Limited Was Incorporated In 2007 As Enabler And Chain Of Custody Resource For The Ethical Products For Conscious Consumers World Over. Its Specialty Is To Establish A Chain Of Custody Of Organic And Fairtrade Certified Materials In Pakistan.`,
    Distributors: [] //16.19
  },
  {
    Picture: String, //13
    Name: "Neknasi Coffee Growers Cooperative society",
    Location: "Morobe, Papua New Guinea",
    Items: [], //coffee
    Info: `The organisation is made up of farmers from eight villages (Bandong, Bosagen, Kasin, Munengan, Sadau, Sikilan, Sokam, and Wasin) and 43 tribes. Neknasi served as the pilot project for Papua New Guinea’s Coffee Industry Corporation, and is now a model to be replicated with the support of CIC extension officers by other coffee producer organisations throughout Papua New Guinea. Neknasi achieved Fairtrade certification in early 2011.`,
    Distributors: [] //13,4,5
  },
  {
    Picture: String, //14
    Name: "Asociacion de Produccion Agricola Fruta Latina (ASOFRUTA)",
    Location: "Parroquia El Carmen, Ecuador",
    Items: [], //banana
    Info: `Esta sección incluye la explotación de recursos naturales vegetales y animales, comprendiendo las actividades de cultivo, cría y reproducción de animales, la explotación de madera y la recolección de otras plantas, de animales o de productos animales en explotaciones agropecuarias o en sus hábitats naturales.`,
    Distributors: [] //0
  },
  {
    Picture: String, //15
    Name: "National Fair Trade Organization (St. Lucia) Inc. (NFTO St Lucia)",
    Location: "Dennery, Saint Lucia",
    Items: [], //banana
    Info: `National Fairtrade Organization (St. Lucia) Inc. is seeking a proactive and well-rounded agricultural technician to fill the post of PRODUCT & QUALITY ASSURANCE CONTROLLER.`,
    Distributors: [] //0
  },
  {
    Picture: String, //16
    Name: "Kibinge Coffee Farmers' Co-operative Society Ltd (KCFCS)",
    Location: " Masaka, Uganda",
    Items: [], //coffee
    Info: `Kibinge Coffee Farmers’ Co-operative Society (KCFCS) is a member owned organization located in Kibinge
    sub-county, Bukomansimbi district, in the central region of Uganda, about 150 kilometers from the capital Kampala just off Masaka-Mbarara highway at Kyabakuza. The area is best known for its high-quality Robusta coffee grown at an altitude between 1200-1300 metres above sea level. The climatic conditions are mainly warm temperatures and bi-annual rainfall which makes it ideally conducive for coffee growing. In 2013 KCFCS established a savings and credit unit together with a farm supply shop to serve its members.`,
    Distributors: [] //13
  },
  {
    Picture: String, //17
    Name: "Imenti Tea Factory Company Ltd (KTDA)",
    Location: "Meru, Kenya",
    Items: [], //tea
    Info: `KTDA is a private company owned by about 600,000 smallholder tea farmers spread across 16 tea growing counties in Kenya. The farmers are shareholders to 54 tea companies that own KTDA (H) and its 8 subsidiary companies.

    Some of the 54 tea factory companies have expanded by setting up satellite factories in their neighborhoods to accommodate the extra leaf. The satellite factories are 15, adding up to 69 the total number of tea factories owned by smallholder tea farmers.
    
    The eight subsidiary companies owned by KTDA (H) add value to the tea value chain. These companies include Chai Trading Company Limited, KTDA (Management Services), Majani Insurance Brokers, Kenya Tea Packers Limited, Greenland Fedha Limited, KTDA Foundation, Tea Machinery and Engineering Company Ltd, KTDA Power Company Limited and KTDA (MS).`,
    Distributors: [] //3,13
  },
  {
    Picture: String, //18
    Name: "E D & F Man Ingredients s.r.o.",
    Location: "Czech Republic",
    Items: [], //sugar
    Info: `E D & F Man Ingredients s.r.o. is located in Zvoleněves, Czech Republic and is part of the Sugar Manufacturing Industry. E D & F Man Ingredients s.r.o. has 145 employees at this location and generates $49.77 million in sales (USD). There are 140 companies in the E D & F Man Ingredients s.r.o. corporate family.`,
    Distributors: [] //1
  },
  {
    Picture: String, //19
    Name: "Horana Plantations PLC ((Stockholm&Alton Estates))",
    Location: "Colombo, Sri Lanka",
    Items: [], //tea
    Info: `KTDA is a private company owned by about 600,000 smallholder tea farmers spread across 16 tea growing counties in Kenya. The farmers are shareholders to 54 tea companies that own KTDA (H) and its 8 subsidiary companies.

    Some of the 54 tea factory companies have expanded by setting up satellite factories in their neighborhoods to accommodate the extra leaf. The satellite factories are 15, adding up to 69 the total number of tea factories owned by smallholder tea farmers.
    
    The eight subsidiary companies owned by KTDA (H) add value to the tea value chain. These companies include Chai Trading Company Limited, KTDA (Management Services), Majani Insurance Brokers, Kenya Tea Packers Limited, Greenland Fedha Limited, KTDA Foundation, Tea Machinery and Engineering Company Ltd, KTDA Power Company Limited and KTDA (MS).`,
    Distributors: [] //3
  },
  {
    Picture: String, //20
    Name: "IGrupo Banamiel S.A.S",
    Location: "Hatillo de Palma, Dominican Republic",
    Items: [], //banana
    Info: `Grupo Banamiel is a company dedicated to the export of bananas and other tropical fruits. It was founded in 2005 by a group of Dominican agribusinesses in order to ensure access to international markets.`,
    Distributors: [] //9
  },
]


module.exports.updateProducers = updateProducers;


//20